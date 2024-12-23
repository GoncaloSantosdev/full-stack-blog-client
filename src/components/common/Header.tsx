import { useState } from "react";
// React Router
import { Link, useLocation } from "react-router-dom";
// Data
import { navLinks } from "../../data/navLinks";
// Icons
import { FiMenu, FiX } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
// Components
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-code-darker border-b border-code-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-2">
            <FaCode className="h-8 w-8 text-code-blue" />
            <span className="text-code-text font-bold text-xl">DevBlog</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-code-blue"
                    : "text-code-text hover:text-code-blue-light"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button href="/register" size="md">
              Register
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-code-text hover:text-code-blue-light"
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-64 opacity-100 py-2"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-code-blue"
                    : "text-code-text hover:text-code-blue-light"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              href="/register"
              size="sm"
              fullWidth
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
