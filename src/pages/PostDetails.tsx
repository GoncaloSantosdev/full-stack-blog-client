// React Router
import { useParams } from "react-router-dom";
// Data
import { posts } from "../data/postsData";
// Components
import { Button } from "../components";

const PostDetails = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) return null;

  return (
    <article className="space-y-8">
      {/* Post Header */}
      <div className="space-y-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title & Excerpt */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-dark-100">{post.title}</h1>
          <p className="text-xl text-dark-300">{post.excerpt}</p>
        </div>

        {/* Author Info & Meta */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-dark-700 pb-6 space-y-4 sm:space-y-0">
          {/* Author and Date */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="text-dark-100 font-medium">
                  {post.author.name}
                </span>
                <span className="text-dark-400 text-sm">{post.date}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-dark-400 hidden sm:inline">·</span>
              <span className="text-dark-400">{post.readTime} read</span>
            </div>
          </div>

          {/* Social Actions */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-dark-300 hover:text-primary-400">
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
              <span className="text-sm">{post.likes}</span>
            </button>
            <button className="flex items-center space-x-2 text-dark-300 hover:text-primary-400">
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
              <span className="text-sm">{post.comments}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="aspect-[2/1] overflow-hidden rounded-lg">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="prose prose-invert max-w-none">
        <div className="whitespace-pre-wrap text-dark-200">{post.content}</div>
      </div>

      {/* Comments Section */}
      <section className="space-y-6 border-t border-dark-700 pt-8">
        <h2 className="text-2xl font-semibold text-dark-100">
          Comments ({post.comments})
        </h2>

        {/* Comment Form */}
        <form className="space-y-4">
          <textarea
            rows={3}
            className="w-full px-4 py-2 rounded-lg bg-dark-700 border border-dark-600 
            text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary-500 
            focus:border-transparent placeholder-dark-400"
            placeholder="Write a comment..."
          />
          <div className="flex justify-end">
            <Button variant="primary" type="submit">
              Post Comment
            </Button>
          </div>
        </form>

        {/* Comments List */}
        <div className="space-y-6">
          {[1, 2, 3].map((comment) => (
            <div key={comment} className="flex space-x-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=faces"
                alt="Commenter"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-dark-100">
                      Jane Smith
                    </span>
                    <span className="text-dark-400 text-sm">2 days ago</span>
                  </div>
                  <button className="text-dark-400 hover:text-primary-400">
                    Reply
                  </button>
                </div>
                <p className="text-dark-300">
                  Great article! Really helped me understand the concepts
                  better.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default PostDetails;
