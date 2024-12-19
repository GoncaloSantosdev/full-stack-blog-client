const Posts = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-dark-100 mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 gap-6">
        <article className="bg-dark-700 p-6 rounded-lg border border-dark-600 hover:border-primary-600 transition-colors">
          <h2 className="text-2xl font-semibold text-dark-100 mb-2">
            Getting Started with React
          </h2>
          <p className="text-dark-300 mb-4">
            Learn the basics of React and how to build your first application...
          </p>
          <div className="text-primary-400 font-medium hover:text-primary-300">
            Read more →
          </div>
        </article>
      </div>
    </div>
  );
};

export default Posts;
