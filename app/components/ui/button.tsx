import React from "react";
import { cn } from "../../lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "danger" | "primary";
};

const Button: React.FC<ButtonProps> = ({ children, variant = "default", className, ...props }) => {
  const variants = {
    default: "bg-blue-500 hover:bg-blue-600 text-white",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-100",
      danger: "bg-red-500 hover:bg-red-600 text-white",
      primary: "bg-green-500 hover:bg-green-600 text-white",
  };

  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg font-medium transition-all",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
