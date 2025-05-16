def netwulf_plot_communities(G, communities, color_palette=None, path="Network.pdf", zoom=1, figsize=30):
    """
    Visualize a network with nodes colored by community.
    
    Parameters:
    -----------
    G : networkx.Graph
        The network to visualize
    communities : dict or list
        Dictionary mapping node -> community_id or list of lists for communities
    color_palette : list, optional
        List of hex colors to use for the 5 largest communities (all others will be black)
    path : str, optional
        Path to save the figure
    figsize : int, optional
        Size of the figure
    """
    import netwulf as nw
    import matplotlib.colors as mcolors
    import matplotlib.pyplot as plt
    from collections import Counter

    # Convert communities to dict if it's in list format
    if isinstance(communities, list):
        # If it's in the format of apply_louvain output (list of tuples with (community_id, [nodes]))
        if isinstance(communities[0], tuple):
            # Create a mapping from node to community ID
            comm_dict = {}
            for comm_id, nodes in communities:
                for node in nodes:
                    comm_dict[node] = comm_id
            communities = comm_dict
        else:
            # If it's just a list of lists of nodes
            communities = {node: i for i, comm in enumerate(communities) for node in comm}
    
    # Count community sizes to identify the 5 largest
    comm_sizes = Counter()
    for node, comm_id in communities.items():
        comm_sizes[comm_id] += 1
    
    # Get the 5 largest communities by size
    top_5_communities = [comm_id for comm_id, _ in comm_sizes.most_common(5)]
    
    G_copy = G.copy()
    
    # Set up color palette
    if color_palette is None:
        default_colors = list(mcolors.TABLEAU_COLORS.values())
        color_palette = default_colors[:5]  # Just use first 5 colors
    
    # Create color map: unique colors for top 5, black for the rest
    color_map = {}
    for i, comm_id in enumerate(top_5_communities):
        color_map[comm_id] = color_palette[i % len(color_palette)]
    
    # Set node attributes for color and community
    for node, comm_id in communities.items():
        G_copy.nodes[node]['community'] = comm_id
        # Use color from palette for top 5 communities, black for others
        if comm_id in top_5_communities:
            G_copy.nodes[node]['color'] = color_map[comm_id]
        else:
            G_copy.nodes[node]['color'] = '#000000'  # Black for all other communities

    config = {
        'zoom': zoom,
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

    # Update colors in the network visualization
    for node_data in network['nodes']:
        node_id = node_data['id']
        if node_id in communities:
            comm_id = communities[node_id]
            if comm_id in top_5_communities:
                node_data['color'] = color_map[comm_id]
            else:
                node_data['color'] = '#000000'  # Black

    fig, _ = nw.draw_netwulf(network, figsize=figsize)
    plt.savefig(path)
    plt.show()