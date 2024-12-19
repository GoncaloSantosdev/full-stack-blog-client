export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  image: string;
  likes: number;
  comments: number;
  tags: string[];
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt:
      "Learn the basics of React and how to build your first application...",
    content: `
      React is a powerful library for building user interfaces. In this comprehensive guide,
      we'll explore the core concepts and build your first React application from scratch.
      
      ## Getting Started
      First, let's understand what React is and why it's so popular among developers...
      
      ## Core Concepts
      1. Components
      2. Props
      3. State
      4. Lifecycle Methods
      
      ## Building Your First App
      Let's create a simple todo application to understand these concepts in practice...
    `,
    category: "React",
    readTime: "5 min",
    author: {
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop&crop=faces",
    },
    date: "March 10, 2024",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    likes: 124,
    comments: 18,
    tags: ["React", "JavaScript", "Web Development"],
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    excerpt:
      "Discover the best practices for writing clean and maintainable TypeScript code...",
    category: "TypeScript",
    readTime: "7 min",
    author: {
      name: "Jane Smith",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=faces",
    },
    date: "March 8, 2024",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
    likes: 100,
    comments: 15,
    tags: ["TypeScript", "JavaScript", "Programming"],
  },
  {
    id: 3,
    title: "Node.js API Development",
    excerpt: "Build robust and scalable APIs with Node.js and Express...",
    category: "Node.js",
    readTime: "6 min",
    author: {
      name: "Mike Johnson",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=faces",
    },
    date: "March 5, 2024",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop",
    likes: 90,
    comments: 12,
    tags: ["Node.js", "JavaScript", "API Development"],
  },
];
