import { PostProps } from "../types";

export const posts: PostProps[] = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt:
      "Learn the fundamentals of React and build your first application with this comprehensive guide for beginners.",
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
    tags: ["React", "JavaScript", "Frontend", "Web Development"],
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
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    excerpt:
      "Master TypeScript with these essential best practices and patterns for writing clean, maintainable code.",
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
    tags: ["TypeScript", "JavaScript", "Programming", "Best Practices"],
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
  },
  {
    id: 3,
    title: "Node.js API Development",
    excerpt:
      "Learn how to build scalable and secure RESTful APIs with Node.js, Express, and MongoDB.",
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
    tags: ["Node.js", "Backend", "API", "Express"],
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
  },
];
