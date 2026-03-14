"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-inter font-semibold tracking-wide rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-[#C41E3A] text-white hover:bg-[#a01830] focus-visible:ring-[#C41E3A] shadow-lg hover:shadow-[#C41E3A]/30",
      secondary:
        "bg-[#D4AF37] text-[#080C18] hover:bg-[#b8962e] focus-visible:ring-[#D4AF37] shadow-lg hover:shadow-[#D4AF37]/30",
      outline:
        "border border-[#C41E3A] text-[#C41E3A] hover:bg-[#C41E3A] hover:text-white focus-visible:ring-[#C41E3A]",
      ghost:
        "text-white hover:bg-white/10 focus-visible:ring-white",
    };

    const sizes = {
      sm: "px-5 py-2 text-sm",
      md: "px-7 py-3 text-base",
      lg: "px-9 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
