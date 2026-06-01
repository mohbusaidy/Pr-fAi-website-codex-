import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
};

const containerSizes = {
  default: "max-w-[var(--container-width)]",
  narrow: "max-w-3xl",
  wide: "max-w-7xl",
};

export function Container({ children, className, size = "default" }: ContainerProps) {
  return <div className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", containerSizes[size], className)}>{children}</div>;
}
