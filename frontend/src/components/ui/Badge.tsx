import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
        variant === "default" &&
          "border-border bg-surface-2 text-text-muted",
        variant === "accent" &&
          "border-violet/30 bg-violet/10 text-violet-soft"
      )}
    >
      {children}
    </span>
  );
}
