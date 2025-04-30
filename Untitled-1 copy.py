# %%
import pickle

with open("pop_df.pkl", "rb") as f:
    pop_df = pickle.load(f)

with open("rap_df.pkl", "rb") as f:
    rap_df = pickle.load(f)

# %%
pop_names = pop_df["name"].tolist()
rap_names = rap_df["name"]

# %%
print(len(pop_names))
print(len(rap_names))

# %%
andreas = pop_names[0:2199]
hector = pop_names[2199:]
teis = rap_names

# %%
import lyricsgenius
import concurrent.futures
import pandas as pd
import pickle

token = "SQ5PQucPjwa_LEDaobBQyxewdh80ZB-KhaBau73yASMRNIvnijWprQSi6ZDnUb7N"
genius = lyricsgenius.Genius(token, verbose=False)

# %%
def search_artists_songs(artist_name):
    try:
        dic = {"name": artist_name, "lyrics": []}
        result = genius.search_artist(artist_name, max_songs=3, sort="popularity")
        for song in result.songs:
            dic["lyrics"].append(song.lyrics)
        print("#")
        return dic

    except Exception as e:
        print(f"Error fetching artist {artist_name}: {e}")
        return {"name": artist_name, "lyrics": []}  # Return an empty dictionary

# %% [markdown]
# # Edit her nede

# %%
chosen_list = andreas
results = []

# %%
#batching
for i in range(0, len(chosen_list), 5):
    print(f"Batch {i//5 + 1} / {len(chosen_list)//5}")
    #saving on the go
    if (i%100) == 0:
        print("saved")
        df = pd.DataFrame([r for r in results if r["lyrics"]])  # Filter out empty dictionaries

        with open("tmp_df.pkl", "wb") as f:
            pickle.dump(df, f)


    if i != 0:
        print(f"{(i/5)} / {len(chosen_list)/5 -1}")
    names = chosen_list[i:i+5]

    with concurrent.futures.ThreadPoolExecutor() as executor:
        tmp = list(executor.map(search_artists_songs, names))
    results += tmp

df = pd.DataFrame([r for r in results if r["lyrics"]])  # Filter out empty dictionaries

with open("Pop1.pkl", "wb") as f:
    pickle.dump(df, f)

# Load the DataFrame from the .pkl file
with open("Pop1.pkl", "rb") as f:
    df = pickle.load(f)

# Save the DataFrame to a .csv file
df.to_csv("Pop1.csv", index=False)