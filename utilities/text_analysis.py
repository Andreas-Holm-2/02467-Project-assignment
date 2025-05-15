import math
import re
from collections import Counter, defaultdict

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

from wordcloud import WordCloud
from community import community_louvain

from langdetect import detect
from nltk.stem import SnowballStemmer
from nltk.corpus import stopwords
from nltk.collocations import BigramCollocationFinder, BigramAssocMeasures
from nltk.tokenize import MWETokenizer
from scipy.stats import chi2

def clean_lyrics_and_apply_representative_text(artist_df):
    artist_df_copy = artist_df.copy()
    def run(lyrics):
        cleaned = []
    
        for raw_lyrics in lyrics:
            # intro before "Read More\xa0\n"
            parts = raw_lyrics.split("Read More\xa0\n")
            lyrics = parts[-1] if parts else raw_lyrics

            # Remove first line often title/commentary
            lyrics_parts = lyrics.split('\n', 1)
            lyrics = lyrics_parts[1] if len(lyrics_parts) > 1 else lyrics_parts[0]

            # Remove [Verse], [Chorus], etc.
            lyrics = re.sub(r'\[.*?\]', '', lyrics)

            # Remove commentary
            lyrics = re.sub(r'^“.*?”\s*', '', lyrics)
            
            lyrics = re.sub(r'[^a-zA-Z\s]', '', lyrics)  # Only letters and spaces

            #Clean escaped characters and whitespace
            lyrics = re.sub(r'\\n|\\r|\r|\n', ' ', lyrics)
            lyrics = re.sub(r'\s+', ' ', lyrics).strip()
            
            lyrics = lyrics.lower()

            cleaned.append(lyrics)

        
        return " ".join(cleaned)
    
    artist_df_copy["representative_text"] = artist_df_copy["lyrics"].apply(run)
    
    return artist_df_copy

def filter_for_english_language(artist_df):
    artist_df_copy = artist_df.copy()
    def is_english(text):
        try:
            return detect(text) == "en"
        except:
            return False

    artist_df_copy["is_english"] = artist_df_copy["representative_text"].apply(is_english)

    artist_df_copy = artist_df_copy[artist_df_copy["is_english"]].reset_index(drop=True)

    return artist_df_copy

def tokenize(artist_df):
        artist_df_copy = artist_df.copy()
        stemmer = SnowballStemmer("english")
        stop_words = set(stopwords.words("english"))

        domain_stopwords = {"song", "lyrics", "chorus", "verse", "repeat"}

        stop_words = stop_words.union(domain_stopwords)
        
        def initial_tokenize(text):
            text = text.lower()
            words = re.findall(r'[a-zA-Z]+', text)
            return [stemmer.stem(word) for word in words if word not in stop_words]

        artist_df_copy["tokens"] = artist_df_copy["representative_text"].apply(initial_tokenize)

        all_tokens = [token for tokens in artist_df_copy["tokens"] for token in tokens]

        finder = BigramCollocationFinder.from_words(all_tokens)
        finder.apply_freq_filter(51)

        bigram_measures = BigramAssocMeasures()
        scored = finder.score_ngrams(bigram_measures.chi_sq)

        collocations = []
        for bigram, score in scored:
            p_value = chi2.sf(score, df=1)
            if p_value < 0.001:
                collocations.append(bigram)

        mwe_tokenizer = MWETokenizer(collocations, separator="_")

        def retokenize(tokens):
            return mwe_tokenizer.tokenize(tokens)

        artist_df_copy["tokens"] = artist_df_copy["tokens"].apply(retokenize)

        return artist_df_copy
    
def prepare_community_texts(artists_df, communities):
    df = artists_df.copy()
    df["community"] = df["name"].map(communities)

    grouped = df.groupby("community")

    community_texts = grouped["tokens"].apply(lambda series: sum(series, [])).reset_index()
    community_texts["tokens_length"] = community_texts["tokens"].apply(len)

    return community_texts

def get_top_n_largest_community_ids(communities, n):
    community_counts = Counter(communities.values()) # get the counts of each artist and commmunity pair
    
    sorted_by_counts = sorted(community_counts.items(), key=lambda x: x[1], reverse=True) # sort in descending by count.
    top_n_community_ids = np.array([id_and_count[0] for id_and_count in sorted_by_counts[:n]])

    return top_n_community_ids

def get_TF_dataframe(community_texts):
    communities_df_expanded = community_texts.copy() # Copy top 5 communities to not make a mess
    exploded = communities_df_expanded.explode("tokens") # Explode into tokens

    token_counts  = exploded.groupby(["community", "tokens"]).size().reset_index(name="count")
    # group inside each community and get the token count store it in column "count"

    total_tokens = exploded.groupby("community").size().reset_index(name="total")
    # Group only by community such we can get the total counts

    tf_df = token_counts.merge(total_tokens, on="community") # Merge total_tokens onto token_counts so we can divide after and get the TF

    tf_df["TF"] = tf_df["count"] / tf_df["total"]
    
    return tf_df

def get_IDF_dataframe(community_texts, log_power = 1):
    community_texts_expanded = community_texts.copy() # Copy the community text to not make a mess
    exploded = community_texts_expanded.explode("tokens") # Explode into tokens

    community_token_pairs = exploded[["community", "tokens"]].drop_duplicates() 
    # Removing all duplicates as we just need to know if community i has token j.

    token_to_community_count = community_token_pairs.groupby("tokens").size().reset_index(name="tokenInCommunityCount") 
    # Count how many communities the token exists in.

    N = len(community_texts)

    IDF_df = token_to_community_count
    IDF_df["idf"] = np.log(N / IDF_df["tokenInCommunityCount"]) ** log_power

    return IDF_df
    
def get_TF_IDF_dataframe(tf_df, IDF_df):
    tf_idf_df = tf_df.copy().merge(IDF_df[["tokens", "idf"]], on="tokens", how="left") # Merge the idf_values onto each token in tf_df. 
    # To prepare for calculating the tf-idf value.

    tf_idf_df["tf-idf"] = tf_idf_df["TF"] * tf_idf_df["idf"]

    return tf_idf_df

def print_top_5_TF_per_community(tf_df):
    sorted_descending_by_tf = tf_df.sort_values(["TF"], ascending=[False]) # Sort it decending order by TF such term with highest TF is up.
    top_5_per_community = sorted_descending_by_tf.groupby("community").head(5).reset_index()
    # Grouping by community to then get the 5 largest by .head(5) as they are sorted descendingly. Finnaly reshaping back using reset_index.

    top_5_per_community_sorted = top_5_per_community.sort_values(["community"]) # sort such we get the terms 
    # for each community next to each other. Easier when printing

    print(f"{len(top_5_per_community_sorted)} terms")

    for i in range(0,len(top_5_per_community_sorted),5):
        print(f"Community: {top_5_per_community_sorted.iloc[i]["community"]}, 5 Terms: {top_5_per_community_sorted[i: i+5]["tokens"].to_list()}")

def print_top_10_tf_idf_tokens(tf_idf_df):
    sorted_descending_by_tf_idf = tf_idf_df.sort_values(["tf-idf"], ascending=[False]) # Sort it decending order by 'tf-idf' such term with 
    # highest tf-idf is furthest up.
    top_10_per_community = sorted_descending_by_tf_idf.groupby("community").head(10).reset_index()
    # Grouping by community to then get the 10 largest using .head(10) as they are sorted descendingly. Finnaly reshaping back using reset_index.

    top_10_per_community_sorted = top_10_per_community.sort_values(["community"]) # sort such we get the terms 
    # for each community next to each other. Easier when printing

    print(f"{len(top_10_per_community_sorted)} terms")

    for i in range(0, len(top_10_per_community_sorted), 10):
        print(f"Community: {top_10_per_community_sorted.iloc[i]["community"]}, 10 Terms: {top_10_per_community_sorted[i: i+10]["tokens"].to_list()}")
        
def get_community_to_top_n_artists_by_followers(community_ids, artist_to_community, artist_df, n=3):
    community_to_top_n = defaultdict(list)

    for community_id in community_ids:
        # Find all artist names in this community
        community_artists = [
            artist for artist, comm_id in artist_to_community.items()
            if comm_id == community_id
        ]

        # Filter artist_df to include only those artists
        community_artist_df = artist_df[artist_df["name"].isin(community_artists)]

        # Sort by followers
        sorted_df = community_artist_df.sort_values(by="followers", ascending=False)

        # Get top 3 artists
        top_artists = sorted_df["name"].head(n).tolist()
        community_to_top_n[community_id] = top_artists

    return community_to_top_n

def plot_wordcloud(tf_idf_df, top_communities, community_to_top_3_authors, n=100):

    # Sort by tf-idf score descending
    sorted_descending_by_tf_idf = tf_idf_df.sort_values("tf-idf", ascending=False)

    # Get top-n per community
    top_n_per_community = (
        sorted_descending_by_tf_idf.groupby("community").head(n).reset_index(drop=True)
    )

    # Sort by community number
    top_n_per_community_sorted = top_n_per_community.sort_values("community")

    num_communities = len(top_communities)
    cols = 3  # You can change this default
    rows = math.ceil(num_communities / cols)

    fig, axes = plt.subplots(rows, cols, figsize=(6 * cols, 5.5 * rows))  # Slightly taller plots
    axes = axes.flatten()

    for idx, community in enumerate(top_communities["community"]):
        top_words_df = top_n_per_community_sorted[
            top_n_per_community_sorted["community"] == community
        ]
        word_freq = dict(zip(top_words_df["tokens"], top_words_df["tf-idf"]))

        authors = community_to_top_3_authors.get(community, [])
        author_str = "\n".join(authors)

        wc = WordCloud(width=800, height=600, background_color="white").generate_from_frequencies(word_freq)

        axes[idx].imshow(wc, interpolation="bilinear")
        axes[idx].set_title(f"Community {community}\n\n{author_str}", fontsize=14, pad=20)
        axes[idx].axis("off")

    # Turn off any extra axes (if grid > number of communities)
    for j in range(num_communities, len(axes)):
        axes[j].axis("off")

    plt.tight_layout()
    plt.subplots_adjust(hspace=0.6)  # Try 0.7 or 0.8 if needed
    plt.show()

def run_tf_idf_wordcloud_analysis(artists_df, G, verbose=True, log_power = 1):
    artists_df_prepared = artists_df.copy()
    artists_df_prepared = artists_df_prepared.dropna()
    artists_df_prepared = clean_lyrics_and_apply_representative_text(artists_df_prepared)
    artists_df_prepared  = tokenize(artists_df_prepared)
    artists_df_prepared = filter_for_english_language(artists_df_prepared)
        
    G_copy = G.copy() 
    communities = community_louvain.best_partition(G_copy)
    
    if verbose:
        print(f"\n Applying word cloud analysis on dataframe containing {len(artists_df)} artists")

        community_counts = Counter(communities.values())
        print("Top 10 communities by size:")
        for i, (community_id, count) in enumerate(community_counts.most_common(10), 1):
            print(f"{i}. Community {community_id}: {count} nodes")
        
        amounts_of_artists_with_lyrics = 0
    
        names = set(artists_df_prepared["name"])
        
        for node in G_copy.nodes():
            if node in names:
                amounts_of_artists_with_lyrics += 1
                
        print(f"There exists {amounts_of_artists_with_lyrics}/{len(G_copy.nodes())} artists in the graf containing lyrics")


        print(f"\n {len(set(communities.values()))} unique communities were found")
        
        
        
    community_texts_df = prepare_community_texts(artists_df_prepared, communities)
    
    top_5_community_ids = get_top_n_largest_community_ids(communities, 5)
    top_5_community_texts_df = community_texts_df[community_texts_df["community"].isin(top_5_community_ids)]
    top_5_community_texts_df = top_5_community_texts_df.sort_values(
        by="community",
        key=lambda col: col.map({cid: i for i, cid in enumerate(top_5_community_texts_df)})
    )

    tf_df = get_TF_dataframe(top_5_community_texts_df)
    idf_df = get_IDF_dataframe(community_texts_df, log_power=log_power)
    TF_IDF_df = get_TF_IDF_dataframe(tf_df, idf_df)
    
    if verbose:
        print("\n ---- top 5 TF terms per community ---- \n")
        print_top_5_TF_per_community(tf_df)
        print("\n ---- Top 10 TF-IDf terms per community ---- \n")
        print_top_10_tf_idf_tokens(TF_IDF_df)

    communitiy_to_top_artists = get_community_to_top_n_artists_by_followers(top_5_community_ids, communities, artists_df, 10)
    
    print("Top 10 artists by followers in each of the top 5 communities:\n")

    for community_id, artists in communitiy_to_top_artists.items():
        print(f"Community {community_id}:")
        for rank, artist_name in enumerate(artists, start=1):
            print(f"  {rank}. {artist_name}")
        print()  # empty line between communities
    
    communitiy_to_top_3_artists = get_community_to_top_n_artists_by_followers(top_5_community_ids, communities, artists_df, 3)
    
    plot_wordcloud(TF_IDF_df, top_5_community_texts_df, communitiy_to_top_3_artists)