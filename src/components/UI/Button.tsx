import React from "react";
import "./Button.css";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger" | "success";
  size?: "small" | "medium" | "large";
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = "button",
  variant = "primary",
  size = "medium",
  className = "",
  disabled = false,
  fullWidth = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant} btn-${size} ${
        fullWidth ? "btn-full" : ""
      } ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
