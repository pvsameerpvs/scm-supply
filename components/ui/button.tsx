import * as React from "react";
import { cn } from "../utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center whitespace-nowrap rounded-full text-xs md:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

    const variants: Record<string, string> = {
      // ⭐ PRIMARY BUTTON (your yellow main button)
      default: "bg-primary text-primary-foreground hover:bg-primary/80",

      // ⭐ OUTLINE BUTTON (thin yellow border + soft yellow hover)
      outline:
        "border border-primary text-primary bg-transparent hover:bg-primary/10",

      // ⭐ GHOST BUTTON (text-only with faint yellow hover)
      ghost: "text-primary hover:bg-primary/10",
    };

    const sizes: Record<string, string> = {
      sm: "h-8 px-3",
      md: "h-9 px-4",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
