from collections import Counter, defaultdict
import networkx as nx

def print_top_community_country_distribution(G, artists_us_df, top_n=5):

    name_to_country = artists_us_df["Country"].to_dict()
    community_assignments = nx.get_node_attributes(G, "community")

    community_country_counts = defaultdict(list)
    for artist, community_id in community_assignments.items():
        country = name_to_country.get(artist, "Unknown")
        community_country_counts[community_id].append(country)

    sorted_communities = sorted(community_country_counts.items(), key=lambda x: len(x[1]), reverse=True)

    for community_id, countries in sorted_communities[:top_n]:
        total = len(countries)
        country_counts = Counter(countries)
        sorted_country_stats = sorted(country_counts.items(), key=lambda x: x[1], reverse=True)

        country_strings = [
            f"{country} ({round(100 * count / total)}%)"
            for country, count in sorted_country_stats
        ]

        summary = f"Community {community_id} ({total} artists): " + ", ".join(country_strings)
        print(summary)
