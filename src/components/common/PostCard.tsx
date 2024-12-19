import { Link } from "react-router-dom";
import type { Post } from "../../data/postsData";

interface PostCardProps {
  post: Post;
  showActions?: boolean;
}

const PostCard = ({ post, showActions = false }: PostCardProps) => {
  return (
    <article className="bg-dark-700/50 rounded-lg border border-dark-600 hover:border-primary-500 transition-all duration-300 group overflow-hidden">
      <Link to={`/post/${post.id}`} className="block">
        <div className="aspect-[2/1] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm">
              {post.category}
            </span>
            {showActions && (
              <div className="flex items-center space-x-2">
                <button className="text-dark-300 hover:text-primary-400">
                  Edit
                </button>
                <button className="text-dark-300 hover:text-red-400">
                  Delete
                </button>
              </div>
            )}
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
            {showActions && (
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
            )}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
