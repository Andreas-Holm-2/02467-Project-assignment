import community as community_louvain
import os 
import sys 
import pickle

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from Netwulf_plot_functions import *

with open("G_pop.pkl", "rb") as f: 
    G = pickle.load(f)

communities = community_louvain.best_partition(G)

colors = ['#e57468', '#68e574', '#7468e5', '#e5d068', '#68d0e5']

netwulf_plot_communities(G, communities, port=9900, color_palette=colors, path="Rap_network.pdf")