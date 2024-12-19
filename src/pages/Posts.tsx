import { Link } from "react-router-dom";
import { posts } from "../data/postsData";

const Posts = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-4">
        <h1 className="text-4xl font-bold text-dark-100">Blog Posts</h1>
        <p className="text-dark-300">
          Explore our collection of articles about web development and
          programming.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-6">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full px-4 py-2 pl-10 rounded-lg bg-dark-700 border border-dark-600 
            text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary-500 
            focus:border-transparent placeholder-dark-400"
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-dark-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Categories */}
          <select className="px-4 py-2 rounded-lg bg-dark-700 border border-dark-600 text-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">All Categories</option>
            <option value="react">React</option>
            <option value="typescript">TypeScript</option>
            <option value="nodejs">Node.js</option>
            <option value="nextjs">Next.js</option>
          </select>

          {/* Sort */}
          <select className="px-4 py-2 rounded-lg bg-dark-700 border border-dark-600 text-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="popular">Most Popular</option>
          </select>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Frontend", "Backend", "DevOps", "Database"].map((tag) => (
              <button
                key={tag}
                className="px-3 py-1 text-sm bg-dark-700 text-dark-200 rounded-full hover:bg-dark-600 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-dark-700/50 rounded-lg border border-dark-600 hover:border-primary-500 transition-all duration-300 group overflow-hidden"
          >
            <Link to={`/post/${post.id}`} className="block">
              <div className="aspect-[2/1] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm">
                    {post.category}
                  </span>
                  <span className="text-dark-400">{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-semibold text-dark-100 group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-dark-300">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-dark-200">{post.author.name}</span>
                    </div>
                    <span className="text-dark-400">{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1 text-dark-400">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <span>{post.likes}</span>
                    </span>
                    <span className="flex items-center space-x-1 text-dark-400">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                      <span>{post.comments}</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-2">
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`px-4 py-2 rounded-lg transition-colors ${
              page === 1
                ? "bg-primary-500 text-white"
                : "bg-dark-700 text-dark-200 hover:bg-dark-600"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Posts;
