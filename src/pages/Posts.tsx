import { posts } from "../data/postsData";
// Components
import { PostCard } from "../components";

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
          <PostCard key={post.id} post={post} />
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
