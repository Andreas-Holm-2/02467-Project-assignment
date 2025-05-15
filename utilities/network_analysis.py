import numpy as np
from multiprocessing import get_context
import random as rnd
import matplotlib.pyplot as plt
import networkx as nx
import numpy as np

def double_egde_swap(original_G): 
    G2 = original_G.copy()
    edges = set(G2.edges())

    for i in range(len(edges)*10): 
        swap_successful = False
        while not swap_successful: 
            e1,e2 = rnd.sample(list(edges), 2)
            if e1[0] != e2[1] and e1[1] != e2[0] and e1[0] != e2[0] and e1[1] != e2[1]: 
                old_e1 = e1
                if rnd.random() >0.5: 
                    e1 = (e1[1], e1[0])
                
                e11 = (e1[0], e2[1])
                e22 = (e2[0], e1[1])
                if (e11 not in G2.edges()) and (e22 not in G2.edges()) and ( e11[0] != e11[1] or e22[0] != e22[1]): 
                    #update egdes set
                    edges.remove(old_e1)
                    edges.remove(e2)
                    edges.add(e11)
                    edges.add(e22)

                    #Remove old egdes and Add new egdes
                    G2.remove_edges_from([old_e1,e2])
                    G2.add_edges_from([e11,e22])
        
                    swap_successful = True

    return G2

def run_parallel(G):
    p = get_context("fork").Pool(8)
    results = p.map(double_egde_swap, [G for _ in range(8)])
    p.close()
    return results

def degree_assortativity(G):
    edges = list(G.edges())
    deg = dict(G.degree())

    deg_u = []
    deg_v = []

    for u, v in edges:
        deg_u.append(deg[u])
        deg_v.append(deg[v])

    return np.corrcoef(deg_u, deg_v)[0, 1]

def modularity(G, partition_dict):
    communities = {}
    for node, community in partition_dict.items():
        communities.setdefault(community, set()).add(node)

    L = G.number_of_edges()
    M = 0

    for community_nodes in communities.values():
        Lc = sum(1 for u, v in G.edges() if u in community_nodes and v in community_nodes)
        kc = sum(dict(G.degree(n for n in community_nodes)).values())
        M += (Lc / L) - (kc / (2 * L)) ** 2

    return M

def plot_significance(rnd_values:list, test_value:int, metric_type:str, genre:str, xrange:tuple, color:str):
    num_bins = 1000

    plt.figure(figsize=(25,9))
    plt.hist(rnd_values, bins=num_bins, range=xrange,edgecolor='black', alpha=0.7, label=f"{metric_type} histogram of 1000 random graphs")
    plt.xlabel('Value',  fontname="monospace", fontsize=18)
    plt.xticks(fontsize=18)
    plt.yticks(fontsize=18)
    #plt.axvline(np.mean(mods), color="black", linestyle='--', label=r'$\mu$ modularity of 1000 random graphs', linewidth=2.5)
    plt.axvline(test_value, color=color, linestyle="--", label=f"{metric_type} of {genre}", linewidth=2.5)
    plt.ylabel('Frequency',  fontname="monospace", fontsize=18)
    plt.title(f"{metric_type} of {genre}", fontsize=24, fontname="monospace", fontweight='bold') #plt.title("Accuracy of Entropy and Random", fontsize=16, fontname="monospace", fontweight='bold')
    plt.grid(True, linestyle='--', alpha=0.4)
    plt.legend(fontsize=20)
    plt.show()

def stats_checker(G, genre:str): 
    num_nodes = G.number_of_nodes()
    avg_degree = sum(dict(G.degree()).values()) / G.number_of_nodes()
    print(f"{genre}-graph number of nodes: {num_nodes}   and average node degree of {avg_degree}")

def assortative(G, attribute): 
    attr_values = {G.nodes[n][attribute] for n in G.nodes}
    attr_indices = {attr: i for i, attr in enumerate(attr_values)}
    n_att = len(attr_values)

    #initialize e matrix: 
    e = np.zeros([n_att, n_att])

    for u, v in G.edges:
        attr_u = G.nodes[u][attribute]
        attr_v = G.nodes[v][attribute]
        i, j = attr_indices[attr_u], attr_indices[attr_v]
        e[i, j] += 1

    #normalize e 
    e = e/G.number_of_edges()

    #Calculating assorsativity coefficient
    a = e.sum(axis=0)
    b = e.sum(axis=1)
    eii = np.trace(e)
    sum_ab = np.sum(a*b)
    r = (eii - sum_ab)/(1-sum_ab) 
    return r