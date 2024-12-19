import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-dark-800">
      <nav className="bg-dark-700 border-b border-dark-600">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary-400">
              DevBlog
            </Link>
            <div className="space-x-6">
              <Link
                to="/"
                className="text-dark-200 hover:text-primary-400 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/posts"
                className="text-dark-200 hover:text-primary-400 transition-colors"
              >
                Posts
              </Link>
              <Link
                to="/about"
                className="text-dark-200 hover:text-primary-400 transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-dark-200 hover:text-primary-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="text-dark-200">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
