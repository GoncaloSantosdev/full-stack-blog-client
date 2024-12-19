// React Router
import { Link } from "react-router-dom";
// Types
import { PostCardProps } from "../../types";

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
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 2 && (
              <span className="px-3 py-1 bg-dark-600 text-dark-300 rounded-full text-sm">
                +{post.tags.length - 2}
              </span>
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
            {showActions ? (
              <div className="flex items-center space-x-4">
                <button className="text-dark-300 hover:text-primary-400">
                  Edit
                </button>
                <button className="text-dark-300 hover:text-red-400">
                  Delete
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1 text-dark-400">
                  <span>{post.readTime}</span>
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
