import { posts } from "../data/postsData";

const Profile = () => {
  return (
    <div className="space-y-12">
      {/* Profile Header */}
      <div className="flex items-center space-x-6">
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-2 border-primary-500"
        />
        <div>
          <h1 className="text-3xl font-bold text-dark-100">John Doe</h1>
          <p className="text-dark-300">Frontend Developer</p>
          <div className="flex items-center space-x-4 mt-2">
            <span className="text-dark-300">
              <span className="text-primary-400 font-semibold">42</span> posts
            </span>
            <span className="text-dark-300">
              <span className="text-primary-400 font-semibold">1.2k</span> likes
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-dark-700">
        <nav className="flex space-x-8">
          <button className="px-4 py-2 text-primary-400 border-b-2 border-primary-400">
            My Posts
          </button>
          <button className="px-4 py-2 text-dark-300 hover:text-primary-400">
            Liked Posts
          </button>
          <button className="px-4 py-2 text-dark-300 hover:text-primary-400">
            Drafts
          </button>
        </nav>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-dark-700/50 rounded-lg border border-dark-600 overflow-hidden group"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm">
                  {post.category}
                </span>
                <div className="flex items-center space-x-2">
                  <button className="text-dark-300 hover:text-primary-400">
                    Edit
                  </button>
                  <button className="text-dark-300 hover:text-red-400">
                    Delete
                  </button>
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-dark-100 group-hover:text-primary-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-dark-300">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <span className="text-dark-400">{post.date}</span>
                  <span className="text-dark-400">{post.readTime}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-dark-400">{post.likes} likes</span>
                  <span className="text-dark-400">
                    {post.comments} comments
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Profile;
