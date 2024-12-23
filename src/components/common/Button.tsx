import { ButtonHTMLAttributes, ReactNode } from "react";
// React Router
import { Link } from "react-router-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  href?: string;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  href,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "rounded-md font-medium transition-colors duration-200 flex items-center";

  const variants = {
    primary: "bg-code-blue hover:bg-code-blue-light text-code-text-light",
    secondary: "bg-code-purple hover:opacity-90 text-code-text-light",
    outline: "border border-code-blue text-code-light blue hover:bg-code-blue",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `.trim();

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
