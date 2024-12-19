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
