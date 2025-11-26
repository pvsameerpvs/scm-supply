import * as React from "react";
import { cn } from "../utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const base =
    "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] md:text-xs font-medium";
  const variants: Record<string, string> = {
    default: "border-transparent bg-slate-900 text-slate-50",
    outline: "border-slate-300 text-slate-700",
  };

  return (
    <span className={cn(base, variants[variant], className)} {...props} />
  );
}
