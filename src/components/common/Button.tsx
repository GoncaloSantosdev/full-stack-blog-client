// Types
import { ButtonProps } from "../../types";
// Utils
import { cn } from "../../utils/cn";

const Button = ({
  variant = "primary",
  size = "md",
  children,
  className,
  fullWidth,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700",
    secondary:
      "bg-dark-700 text-dark-100 hover:bg-dark-600 border border-dark-600",
    outline:
      "border border-primary-600 text-primary-400 hover:bg-primary-600/10",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
