import { PageHeader } from "../components";

const CreatePost = () => {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Create New Post"
        description="Share your knowledge with the developer community"
      />

      <form className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-dark-200 font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full px-4 py-2 rounded-lg bg-dark-700 border border-dark-600 
            text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary-500 
            focus:border-transparent placeholder-dark-400"
            placeholder="Enter post title"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-dark-200 font-medium mb-2"
          >
            Category
          </label>
          <select
            id="category"
            className="w-full px-4 py-2 rounded-lg bg-dark-700 border border-dark-600 
            text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary-500 
            focus:border-transparent"
          >
            <option value="">Select a category</option>
            <option value="react">React</option>
            <option value="typescript">TypeScript</option>
            <option value="nodejs">Node.js</option>
            <option value="nextjs">Next.js</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-dark-200 font-medium mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            rows={12}
            className="w-full px-4 py-2 rounded-lg bg-dark-700 border border-dark-600 
            text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary-500 
            focus:border-transparent placeholder-dark-400 font-mono"
            placeholder="Write your post content here..."
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 rounded-lg border border-dark-600 text-dark-200 
            hover:bg-dark-700 transition-colors"
          >
            Save Draft
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-primary-600 text-white rounded-lg 
            hover:bg-primary-700 transition-colors"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
