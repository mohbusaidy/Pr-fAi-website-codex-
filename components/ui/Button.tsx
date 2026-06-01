import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function Button({ children, className, type = "button", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white",
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
