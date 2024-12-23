// React Router
import { Link } from "react-router-dom";
// Icons
import { FaCode } from "react-icons/fa";
// Data
import { navLinks } from "../../data/navLinks";
import { socialLinks } from "../../data/socialLinks";

const Footer = () => {
  return (
    <footer className="bg-code-darker border-t border-code-dark py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <Link to="/home" className="flex items-center space-x-2">
              <FaCode className="h-8 w-8 text-code-blue" />
              <span className="text-code-text font-bold text-xl">DevBlog</span>
            </Link>
            <p className="text-code-text-muted text-sm">
              A platform for developers to share their knowledge and experiences
              through engaging blog posts.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-code-text-light font-semibold">Navigation</h3>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-code-text-muted hover:text-code-blue transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-code-text-light font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-code-text-muted hover:text-code-blue transition-colors duration-200"
                  aria-label={link.name}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-code-dark">
          <p className="text-center text-code-text-muted text-sm">
            © {new Date().getFullYear()} DevBlog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
