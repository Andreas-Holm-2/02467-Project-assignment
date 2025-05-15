def netwulf_plot_communities(G, communities, path="Network.pdf", zoom=1, figsize=30):
    """
    Visualize a network with nodes colored by the five largest communities.
    
    Parameters:
    -----------
    G : networkx.Graph
        The network to visualize
    communities : dict or list
        Dictionary mapping node -> community_id or list of lists for communities
    path : str, optional
        Path to save the figure
    figsize : int, optional
        Size of the figure
    """
    import netwulf as nw
    import matplotlib.pyplot as plt
    from collections import Counter

    if isinstance(communities, list):
        communities = {node: i for i, comm in enumerate(communities) for node in comm}

    G_copy = G.copy()

    # Count community sizes and get the 5 largest
    community_counts = Counter(communities.values())
    top_5_communities = [comm for comm, _ in community_counts.most_common(5)]

    # Define 5 distinct colors
    colors = ['#F67280',  # soft coral pink
            '#6C5B7B',  # muted purple
            '#355C7D',  # deep blue-grey
            '#C06C84',  # mauve rose
            '#F8B195']  # peachy beige
    color_map = {comm_id: colors[i] for i, comm_id in enumerate(top_5_communities)}

    for node, comm_id in communities.items():
        G_copy.nodes[node]['community'] = comm_id
        if comm_id in top_5_communities:
            G_copy.nodes[node]['color'] = color_map[comm_id]
        else:
            G_copy.nodes[node]['color'] = '#000000'  # black for others

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

    # Update colors in final network view
    for node_data in network['nodes']:
        node_id = node_data['id']
        comm_id = communities.get(node_id)
        node_data['color'] = color_map.get(comm_id, '#000000')  # default to black

    fig, _ = nw.draw_netwulf(network, figsize=figsize)
    plt.savefig(path)
    plt.show()
