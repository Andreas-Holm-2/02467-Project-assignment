const ExplainerPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Notebook Explainer</h1>
      <iframe
        src="https://nbviewer.org/github/Andreas-Holm-2/02467-Project-assignment/raw/main/explainer.ipynb?v=2"
        width="100%"
        height="1000px"
        frameBorder="0"
        title="Jupyter Notebook"
      />
    </div>
  );
};

export default ExplainerPage;

