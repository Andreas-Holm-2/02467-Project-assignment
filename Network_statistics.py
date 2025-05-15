def print_network_statistics(G, ):
    import networkx as nx
    import pandas as pd

    N = G.number_of_nodes()
    L = G.number_of_edges()
    density = nx.density(G)

    degrees = [d for _, d in G.degree()]

    is_connected = nx.is_connected(G) if nx.is_connected(G) else False
    components = list(nx.connected_components(G))
    largest_component = max(components, key=len)
    G_largest = G.subgraph(largest_component)

    avg_shortest_path_length = nx.average_shortest_path_length(G_largest)

    avg_clustering = nx.average_clustering(G)
    transitivity = nx.transitivity(G)

    print("Number of nodes:", N)
    print("Number of edges:", L)
    print("Density:", density)
    print("Number of isolated nodes:", len(list(nx.isolates(G))))
    print("Is connected:", is_connected)
    print("Number of connected components:", len(components))
    print("Size of largest component:", len(largest_component))
    print("Average shortest path length (largest component):", avg_shortest_path_length)
    print("Average clustering coefficient:", avg_clustering)
    print("Transitivity (global clustering coefficient):", transitivity)

    print("\nDegree analysis")
    degrees = dict(G.degree())
    print(f"Average Degree: {sum(degrees.values()) / len(degrees):.2f}")
    print(f"Median Degree: {pd.Series(degrees).median()}")
    print(f"Mode Degree: {pd.Series(degrees).mode()[0]}")
    print(f"Minimum Degree: {min(degrees.values())}")
    print(f"Maximum Degree: {max(degrees.values())}")




def plot_degree_distribution(G):
    import numpy as np
    import matplotlib.pyplot as plt

    degrees = [d for n, d in G.degree()]
    hist, bins = np.histogram(degrees, bins=range(max(degrees) + 2), density=True)
    
    plt.figure(figsize=(10, 6), dpi=400)
    plt.bar(bins[:-1], hist, width=0.9, alpha=0.7)
    
    N = G.number_of_nodes()
    L = G.number_of_edges()
    p = (2 * L) / (N * (N - 1)) 
    
    
    plt.xlabel("Degree k")
    plt.ylabel("P(k)")
    plt.title("Degree distribution of pop network")
    plt.show()





def plot_degree_distribution_log_log_scale(G):
    import numpy as np
    import matplotlib.pyplot as plt

    # Suppress numpy divide by zero warnings
    np.seterr(divide='ignore', invalid='ignore')

    degrees = [d for _, d in G.degree()]
    unique_degrees, counts = np.unique(degrees, return_counts=True)
    prob = counts / counts.sum()

    # Filter degrees > 1 to avoid log(0) or log(1)
    mask = unique_degrees > 1
    x = unique_degrees[mask]
    y = prob[mask]

    # Fit to power-law
    gamma, log_C = np.polyfit(np.log(x), np.log(y), 1)
    C = np.exp(log_C)
    
    print(f"Power-law exponent: {-gamma:.3f}")  # Keep only this output

    # Plot
    plt.figure(figsize=(10, 6), dpi=400)
    plt.scatter(unique_degrees, prob, color='b', label='Observed', alpha=0.7)
    plt.plot(x, C * x ** gamma, 'k-', label=r'Power law $P(k) \sim k^{-\gamma}$')

    plt.xscale("log")
    plt.yscale("log")
    plt.xlabel("degree, k")
    plt.ylabel("P(k)")
    plt.legend()
    plt.title("Degree distribution of input network")
    plt.show()

