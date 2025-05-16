
import matplotlib.pyplot as plt

labels = ['North American', 'Portuguese', 'German/Turkish', 'Polish', 'Italian']
colors = ['#e57468', '#68e574', '#7468e5', '#e5d068', '#68d0e5']


# Save the legend image as a high-resolution PNG
output_path = "5 largest Communities rap.png"
fig, ax = plt.subplots(figsize=(4, 2.5))
for color, label in zip(colors, labels):
    ax.scatter([], [], c=color, label=label, s=100)

legend = ax.legend(loc='center', frameon=True, title='5 largest Communities')
ax.axis('off')

plt.tight_layout()
plt.savefig(output_path, dpi=300, bbox_inches='tight', transparent=True)
output_path



# pop 
import matplotlib.pyplot as plt

labels = ['North American', 'Spanish/South American', 'Scandinavian', 'Asian', 'Dutch']
colors = ['#e57468', '#68e574', '#7468e5', '#e5d068', '#68d0e5']


# Save the legend image as a high-resolution PNG
output_path = "5 largest Communities pop.png"
fig, ax = plt.subplots(figsize=(4, 2.5))
for color, label in zip(colors, labels):
    ax.scatter([], [], c=color, label=label, s=100)

legend = ax.legend(loc='center', frameon=True, title='5 largest Communities')
ax.axis('off')

plt.tight_layout()
plt.savefig(output_path, dpi=300, bbox_inches='tight', transparent=True)
output_path
