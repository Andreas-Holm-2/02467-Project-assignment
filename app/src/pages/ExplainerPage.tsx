const ExplainerPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Notebook Explainer</h1>
      <iframe
        src="/explainer.html"
        width="100%"
        height="1000px"
        title="Jupyter Notebook"
      />
    </div>
  );
};

export default ExplainerPage;