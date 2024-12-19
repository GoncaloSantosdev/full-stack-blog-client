import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-700 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <Link to="/" className="text-2xl font-bold text-primary-400">
            DevBlog
          </Link>
          <p className="text-dark-300">
            A community of developers sharing knowledge and experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-dark-100 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-dark-300 hover:text-primary-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/posts"
                className="text-dark-300 hover:text-primary-400 transition-colors"
              >
                Blog Posts
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-dark-300 hover:text-primary-400 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-dark-300 hover:text-primary-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-dark-100 mb-4">Categories</h3>
          <ul className="space-y-2">
            {["React", "TypeScript", "Node.js", "Next.js"].map((category) => (
              <li key={category}>
                <Link
                  to={`/posts?category=${category.toLowerCase()}`}
                  className="text-dark-300 hover:text-primary-400 transition-colors"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-dark-100 mb-4">Connect</h3>
          <div className="flex space-x-4">
            {[
              { name: "GitHub", href: "#" },
              { name: "Twitter", href: "#" },
              { name: "LinkedIn", href: "#" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-dark-300 hover:text-primary-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-dark-700 mt-12 pt-8 text-center text-dark-400">
        <p>© {currentYear} DevBlog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
