import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  variant?: "neutral" | "primary" | "accent";
};

const badgeVariants = {
  neutral: "bg-[var(--color-background-soft)] text-[var(--color-text-muted)]",
  primary: "bg-[color-mix(in_srgb,var(--color-primary)_12%,white)] text-[var(--color-primary-strong)]",
  accent: "bg-[color-mix(in_srgb,var(--color-accent)_24%,white)] text-[#755012]",
};

export function Badge({ children, className, variant = "neutral" }: BadgeProps) {
  return (
    <span className={cn("inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase", badgeVariants[variant], className)}>
      {children}
    </span>
  );
}
