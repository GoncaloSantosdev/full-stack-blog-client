const Posts = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-dark-100 mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 gap-6">
        <article className="bg-dark-700/50 p-6 rounded-lg border border-dark-600 hover:border-primary-500 transition-all duration-300 group">
          <h2 className="text-2xl font-semibold text-dark-100 mb-2 group-hover:text-primary-400 transition-colors">
            Getting Started with React
          </h2>
          <p className="text-dark-300 mb-4">
            Learn the basics of React and how to build your first application...
          </p>
          <div className="text-primary-400 font-medium group-hover:text-primary-300 transition-colors">
            Read more →
          </div>
        </article>
      </div>
    </>
  );
};

export default Posts;
