import { posts } from "../data/postsData";
// Components
import { PostCard } from "../components";

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
          <PostCard key={post.id} post={post} showActions />
        ))}
      </div>
    </div>
  );
};

export default Profile;
