import Link from "next/link";
import { mainNavigation } from "@/lib/navigation";

export function MobileNav() {
  return (
    <nav className="flex gap-3 text-sm md:hidden" aria-label="Mobile navigation placeholder">
      {mainNavigation.slice(0, 2).map((item) => (
        <Link href={item.href} key={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
