import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "feature" | "highlight";
};

const cardVariants = {
  default: "border-[var(--color-border)] bg-[var(--color-card)] shadow-[var(--shadow-card)]",
  feature:
    "border-[var(--color-border)] bg-[var(--color-card)] shadow-sm transition-shadow hover:shadow-[var(--shadow-card)]",
  highlight:
    "border-[color-mix(in_srgb,var(--color-primary)_24%,var(--color-border))] bg-[var(--color-card-highlight)] shadow-[var(--shadow-soft)]",
};

export function Card({ children, className, variant = "default" }: CardProps) {
  return (
    <div className={cn("rounded-[var(--radius-lg)] border p-6 sm:p-8", cardVariants[variant], className)}>
      {children}
    </div>
  );
}
