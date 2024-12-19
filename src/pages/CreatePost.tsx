import { useState } from "react";
// React Quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// Components
import { Button, PageHeader, ImageUpload, Select } from "../components";

const TAGS_OPTIONS = [
  { value: "react", label: "React" },
  { value: "typescript", label: "TypeScript" },
  { value: "javascript", label: "JavaScript" },
  { value: "nodejs", label: "Node.js" },
  { value: "nextjs", label: "Next.js" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "api", label: "API" },
  { value: "database", label: "Database" },
  { value: "web-development", label: "Web Development" },
];

const CreatePost = () => {
  const [coverImage, setCoverImage] = useState<string>();
  const [content, setContent] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleImageChange = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setCoverImage(imageUrl);
  };

  const handleTagChange = (value: string) => {
    if (!selectedTags.includes(value)) {
      setSelectedTags([...selectedTags, value]);
    }
  };

  const removeTag = (tagToRemove: string) => {
    setSelectedTags(selectedTags.filter((tag) => tag !== tagToRemove));
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

        {/* Tags */}
        <div>
          <label className="block text-dark-200 font-medium mb-2">Tags</label>
          <div className="space-y-3">
            <Select
              options={TAGS_OPTIONS}
              value=""
              onChange={handleTagChange}
              placeholder="Select tags"
              className="w-full"
            />
            {selectedTags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {selectedTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm 
                    flex items-center space-x-1"
                  >
                    <span>
                      {
                        TAGS_OPTIONS.find((option) => option.value === tag)
                          ?.label
                      }
                    </span>
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="hover:text-red-400 ml-2"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
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
