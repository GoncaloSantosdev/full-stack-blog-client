import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, PageHeader, ImageUpload } from "../components";

const CATEGORIES = [
  { value: "react", label: "React" },
  { value: "typescript", label: "TypeScript" },
  { value: "nodejs", label: "Node.js" },
  { value: "nextjs", label: "Next.js" },
];

const CreatePost = () => {
  const [coverImage, setCoverImage] = useState<string>();
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleImageChange = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setCoverImage(imageUrl);
  };

  // Quill modules configuration
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ color: [] }, { background: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Create New Post"
        description="Share your knowledge with the developer community"
      />

      <form className="space-y-6">
        {/* Cover Image */}
        <div>
          <label className="block text-dark-200 font-medium mb-2">
            Cover Image
          </label>
          <ImageUpload
            onChange={handleImageChange}
            value={coverImage}
            className="mb-1"
          />
          <p className="text-dark-400 text-sm">
            Recommended size: 1600x800px (2:1 ratio)
          </p>
        </div>

        {/* Title */}
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

        {/* Excerpt */}
        <div>
          <label
            htmlFor="excerpt"
            className="block text-dark-200 font-medium mb-2"
          >
            Excerpt
          </label>
          <textarea
            id="excerpt"
            rows={3}
            className="w-full px-4 py-2 rounded-lg bg-dark-700 border border-dark-600 
            text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary-500 
            focus:border-transparent placeholder-dark-400"
            placeholder="Write a brief summary of your post..."
          />
          <p className="mt-1 text-dark-400 text-sm">
            A short description that appears in post previews (max. 160
            characters)
          </p>
        </div>

        {/* Custom Select */}
        <div>
          <label className="block text-dark-200 font-medium mb-2">
            Category
          </label>
          <div className="relative">
            <button
              type="button"
              className="relative w-full px-4 py-2 rounded-lg bg-dark-700 border border-dark-600 
              text-left text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary-500 
              focus:border-transparent hover:bg-dark-600/50 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className={!selectedCategory ? "text-dark-400" : ""}>
                {selectedCategory
                  ? CATEGORIES.find((cat) => cat.value === selectedCategory)
                      ?.label
                  : "Select a category"}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isOpen ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>

            {isOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsOpen(false)}
                />
                <ul
                  className="absolute z-20 w-full mt-1 bg-dark-700 border border-dark-600 
                  rounded-lg shadow-lg max-h-60 overflow-auto"
                >
                  {CATEGORIES.map((category) => (
                    <li
                      key={category.value}
                      className={`px-4 py-2 cursor-pointer hover:bg-dark-600 
                      ${
                        selectedCategory === category.value
                          ? "text-primary-400"
                          : "text-dark-100"
                      }`}
                      onClick={() => {
                        setSelectedCategory(category.value);
                        setIsOpen(false);
                      }}
                    >
                      {category.label}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        {/* Content */}
        <div>
          <label
            htmlFor="content"
            className="block text-dark-200 font-medium mb-2"
          >
            Content
          </label>
          <div className="prose-editor">
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              className="bg-dark-700 rounded-lg text-dark-100 border-dark-600"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Button variant="outline" size="lg" type="button">
            Save Draft
          </Button>
          <Button variant="primary" size="lg" type="submit">
            Publish
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
