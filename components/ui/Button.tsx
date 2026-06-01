import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const buttonVariants = {
  primary:
    "bg-[var(--color-primary)] text-white shadow-sm hover:bg-[var(--color-primary-strong)] focus-visible:outline-[var(--color-primary)]",
  secondary:
    "bg-[var(--color-secondary)] text-white shadow-sm hover:brightness-95 focus-visible:outline-[var(--color-secondary)]",
  outline:
    "border border-[var(--color-border-strong)] bg-transparent text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] focus-visible:outline-[var(--color-primary)]",
  ghost:
    "bg-transparent text-[var(--color-text-muted)] hover:bg-[var(--color-background-soft)] hover:text-[var(--color-text)] focus-visible:outline-[var(--color-primary)]",
};

const buttonSizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

export function buttonClassNames({
  className,
  size = "md",
  variant = "primary",
}: {
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
}) {
  return cn(
    "inline-flex items-center justify-center rounded-[var(--radius-md)] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
    buttonVariants[variant],
    buttonSizes[size],
    className,
  );
}

export function Button({ children, className, size = "md", type = "button", variant = "primary", ...props }: ButtonProps) {
  return (
    <button className={buttonClassNames({ className, size, variant })} type={type} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({ children, className, size = "md", variant = "primary", ...props }: ButtonLinkProps) {
  return (
    <a className={buttonClassNames({ className, size, variant })} {...props}>
      {children}
    </a>
  );
}
