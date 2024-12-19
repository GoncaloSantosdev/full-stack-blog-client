import { Link } from "react-router-dom";

const FloatingActionButton = () => {
  return (
    <Link
      to="/create-post"
      className="fixed bottom-8 right-8 bg-primary-600 text-white w-14 h-14 rounded-full 
      flex items-center justify-center shadow-lg hover:bg-primary-700 
      transition-all duration-300 hover:scale-110 focus:outline-none 
      focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-800
      group"
      aria-label="Create new post"
    >
      <span className="sr-only">Create new post</span>
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v16m8-8H4"
        />
      </svg>
      <span
        className="absolute right-16 bg-dark-700 text-dark-100 px-3 py-1.5 
        rounded-lg text-sm whitespace-nowrap opacity-0 invisible group-hover:opacity-100 
        group-hover:visible transition-all duration-300"
      >
        Create Post
      </span>
    </Link>
  );
};

export default FloatingActionButton;
