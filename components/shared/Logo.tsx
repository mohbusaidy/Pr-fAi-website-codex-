import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
  size?: "header" | "footer";
};

const logoSizes = {
  header: "h-9 w-[8.25rem] sm:w-[9rem]",
  footer: "h-11 w-[10rem]",
};

export function Logo({ className, priority = false, size = "header" }: LogoProps) {
  return (
    <span className={cn("relative block overflow-hidden", logoSizes[size], className)}>
      <Image
        alt="PrüfAI logo"
        className="object-cover"
        fill
        priority={priority}
        sizes={size === "footer" ? "160px" : "(min-width: 640px) 144px, 132px"}
        src="/logos/pruefai-logo-transparent.png"
      />
    </span>
  );
}
