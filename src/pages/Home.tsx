import { Link } from "react-router-dom";
// Components
import { Button, PostCard } from "../components";
// Data
import { posts } from "../data/postsData";

const Home = () => {
  // Get the first 3 posts for featured section
  const featuredPosts = posts.slice(0, 2);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-5xl font-bold mb-6">
          <span className="text-primary-400">Welcome to</span>{" "}
          <span className="text-dark-100">DevBlog</span>
        </h1>
        <p className="text-lg text-dark-300 max-w-2xl">
          A community-driven platform for developers to share knowledge and stay
          up-to-date with the latest in web development.
        </p>
        <div className="flex items-center space-x-4">
          <Button variant="primary" size="md">
            Start Reading
          </Button>
          <Button variant="outline" size="md">
            Create Account
          </Button>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-dark-100">
            Featured Posts
          </h2>
          <Link
            to="/posts"
            className="text-primary-400 hover:text-primary-300 transition-colors"
          >
            View All →
          </Link>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Featured Post */}
          <PostCard post={featuredPosts[0]} showActions={false} />
          <PostCard post={featuredPosts[1]} showActions={false} />
        </div>
      </section>

      {/* Categories */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-dark-100">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "React",
            "TypeScript",
            "Node.js",
            "Next.js",
            "GraphQL",
            "TailwindCSS",
            "MongoDB",
            "PostgreSQL",
          ].map((category) => (
            <Link
              key={category}
              to={`/posts?category=${category.toLowerCase()}`}
              className="bg-dark-700/50 p-4 rounded-lg border border-dark-600 
              hover:border-primary-500 transition-all duration-300 text-center"
            >
              <span className="text-dark-100 font-medium">{category}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
