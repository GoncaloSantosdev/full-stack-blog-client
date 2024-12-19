import { ChangeEvent, DragEvent, useState } from "react";

interface ImageUploadProps {
  onChange: (file: File) => void;
  value?: string;
  className?: string;
}

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB in bytes

const ImageUpload = ({ onChange, value, className = "" }: ImageUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const validateAndProcessFile = (file: File) => {
    if (file.size > MAX_FILE_SIZE) {
      alert("File size exceeds 2MB limit");
      return;
    }
    if (file.type.startsWith("image/")) {
      onChange(file);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      validateAndProcessFile(file);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      validateAndProcessFile(file);
    }
  };

  return (
    <div
      className={`relative ${className}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="cover-image"
      />
      <label
        htmlFor="cover-image"
        className={`flex flex-col items-center justify-center w-full aspect-[2/1] rounded-lg border-2 border-dashed 
        ${
          isDragging
            ? "border-primary-400 bg-primary-400/10"
            : "border-dark-600 bg-dark-700/50"
        } 
        hover:border-primary-400 hover:bg-primary-400/10 transition-all cursor-pointer`}
      >
        {value ? (
          <img
            src={value}
            alt="Cover"
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="text-center p-6">
            <svg
              className="mx-auto h-12 w-12 text-dark-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="mt-4 text-dark-300">
              <span className="text-primary-400">Click to upload</span> or drag
              and drop
            </p>
            <p className="mt-1 text-dark-400 text-sm">
              SVG, PNG, JPG or GIF (Max. 2MB)
            </p>
          </div>
        )}
      </label>
    </div>
  );
};

export default ImageUpload;
