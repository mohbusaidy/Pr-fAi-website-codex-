import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span className={cn("inline-flex rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700", className)}>
      {children}
    </span>
  );
}
