export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
}

export interface HeaderProps {
  className?: string;
}

export interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export interface PostProps {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  image: string;
  likes: number;
  comments: number;
}

export interface PostCardProps {
  post: PostProps;
  showActions?: boolean;
}
