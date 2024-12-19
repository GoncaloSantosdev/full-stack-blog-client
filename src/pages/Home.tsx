const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-5xl font-bold mb-6">
          <span className="text-primary-400">Welcome to</span>{" "}
          <span className="text-dark-100">DevBlog</span>
        </h1>
        <p className="text-lg text-dark-300 max-w-2xl">
          A place where developers share their knowledge and experiences through{" "}
          <span className="text-primary-400">well-crafted</span> articles.
        </p>
      </section>

      {/* Featured Post */}
      <section>
        <h2 className="text-2xl font-semibold text-dark-100 mb-6">
          Featured Post
        </h2>
        <article className="bg-dark-700/50 p-8 rounded-lg border border-dark-600 hover:border-primary-500 transition-all duration-300 group">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm">
                TypeScript
              </span>
              <span className="text-dark-400">5 min read</span>
            </div>
            <h3 className="text-3xl font-bold text-dark-100 group-hover:text-primary-400 transition-colors">
              Understanding TypeScript Generics
            </h3>
            <p className="text-dark-300 line-clamp-3">
              A comprehensive guide to TypeScript generics and how they can make
              your code more reusable and type-safe...
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-dark-600" />
                <span className="text-dark-200">John Doe</span>
              </div>
              <span className="text-dark-400">March 15, 2024</span>
            </div>
          </div>
        </article>
      </section>

      {/* Latest Posts */}
      <section>
        <h2 className="text-2xl font-semibold text-dark-100 mb-6">
          Latest Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <article
              key={i}
              className="bg-dark-700/50 p-6 rounded-lg border border-dark-600 hover:border-primary-500 transition-all duration-300 group"
            >
              <div className="flex flex-col space-y-3">
                <span className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm w-fit">
                  React
                </span>
                <h3 className="text-xl font-semibold text-dark-100 group-hover:text-primary-400 transition-colors">
                  Building Custom React Hooks
                </h3>
                <p className="text-dark-300 line-clamp-2">
                  Learn how to create reusable custom hooks to share logic
                  between components...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-dark-400">3 min read</span>
                  <span className="text-primary-400 group-hover:text-primary-300">
                    Read more →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Topics */}
      <section>
        <h2 className="text-2xl font-semibold text-dark-100 mb-6">
          Popular Topics
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "TypeScript",
            "Node.js",
            "Next.js",
            "TailwindCSS",
            "JavaScript",
          ].map((topic) => (
            <button
              key={topic}
              className="px-4 py-2 bg-dark-700 text-dark-200 rounded-lg hover:bg-dark-600 transition-colors"
            >
              {topic}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
