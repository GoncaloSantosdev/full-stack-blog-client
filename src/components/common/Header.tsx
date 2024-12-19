import { useState } from "react";
// Router
import { Link } from "react-router-dom";
// Components
import { Button } from "../";
// Utils
import { cn } from "../../utils/cn";
// Types
import { HeaderProps } from "../../types";

const Header = ({ className }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Posts", path: "/posts" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "bg-dark-800 border-b border-dark-700 sticky top-0 z-50 backdrop-blur-sm bg-opacity-80",
        className
      )}
    >
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary-400">DevBlog</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-dark-200 hover:text-primary-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button variant="outline" size="sm">
            Login
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-dark-200 hover:text-primary-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-dark-200 hover:text-primary-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="outline" size="sm" fullWidth>
              Login
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
