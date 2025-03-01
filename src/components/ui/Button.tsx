
import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "large";
  className?: string;
  children: React.ReactNode;
}

// Adding buttonVariants to match the import in alert-dialog.tsx
export const buttonVariants = {
  default: "bg-white text-[#031317] font-medium rounded-xl text-center px-[49px] py-3.5 text-xl",
  secondary: "bg-[#CAF0F8] text-[#031317] font-medium rounded-xl text-center px-[49px] py-3.5 text-xl",
  large: "px-[49px] py-3.5 text-2xl"
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        "font-medium rounded-xl text-center",
        variant === "primary"
          ? "bg-white text-[#031317]"
          : "bg-[#CAF0F8] text-[#031317]",
        size === "default"
          ? "px-[49px] py-3.5 text-xl"
          : "px-[49px] py-3.5 text-2xl",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
