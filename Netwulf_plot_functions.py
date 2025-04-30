def netwulf_plot_communities(G, communities, color_palette=None, path="Network.pdf", figsize=20):
    """
    Visualize a network with nodes colored by community.
    
    Parameters:
    -----------
    G : networkx.Graph
        The network to visualize
    communities : dict or list
        Dictionary mapping node -> community_id or list of lists for communities
    color_palette : list, optional
        List of hex colors to use for communities
    path : str, optional
        Path to save the figure
    figsize : int, optional
        Size of the figure
    """
    import netwulf as nw
    import matplotlib.colors as mcolors
    import matplotlib.pyplot as plt

    if isinstance(communities, list):
        communities = {node: i for i, comm in enumerate(communities) for node in comm}
    
    G_copy = G.copy()
    unique_communities = sorted(set(communities.values()))
    num_communities = len(unique_communities)

    if color_palette is None:
        default_colors = list(mcolors.TABLEAU_COLORS.values()) + list(mcolors.CSS4_COLORS.values())
        color_palette = [default_colors[i % len(default_colors)] for i in range(num_communities)]
    
    color_map = {comm_id: color_palette[i % len(color_palette)] for i, comm_id in enumerate(unique_communities)}

    for node, comm_id in communities.items():
        G_copy.nodes[node]['community'] = comm_id
        G_copy.nodes[node]['color'] = color_map[comm_id]

    config = {
        'zoom': 1,
        'node_charge': -87,
        'node_gravity': 0.85,
        'link_distance': 15,
        'link_distance_variation': 0,
        'node_collision': True,
        'wiggle_nodes': False,
        'freeze_nodes': False,
        'node_stroke_color': '#555555',
        'node_label_color': '#000000',
        'display_node_labels': False,
        'scale_node_size_by_strength': True,
        'node_size': 13.8,
        'node_stroke_width': 1,
        'node_size_variation': 0.5,
        'link_color': '#2e2e2e',
        'link_width': 0.3,
        'link_alpha': 0.79,
        'link_width_variation': 0.5,
        'display_singleton_nodes': True,
        'min_link_weight_percentile': 0,
        'max_link_weight_percentile': 1
    }

    # Visualize without printing
    network, _ = nw.visualize(G_copy, plot_in_cell_below=False, config=config)

    for node_data in network['nodes']:
        node_id = node_data['id']
        if node_id in communities:
            node_data['color'] = color_map[communities[node_id]]

    fig, _ = nw.draw_netwulf(network, figsize=figsize)
    plt.savefig(path)
    plt.show()
