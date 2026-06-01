import Link from "next/link";
import { buttonClassNames } from "@/components/ui/Button";
import { mainNavigation } from "@/lib/navigation";

export function MobileNav() {
  return (
    <details className="group relative lg:hidden">
      <summary className="list-none rounded-[var(--radius-md)] border border-[var(--color-border)] px-3 py-2 text-sm font-semibold text-[var(--color-text)] marker:hidden">
        Menü
      </summary>
      <nav
        className="absolute right-0 mt-3 flex w-64 flex-col gap-1 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-[var(--shadow-card)]"
        aria-label="Mobile navigation"
      >
        {mainNavigation.map((item) => (
          <Link
            className="rounded-[var(--radius-md)] px-3 py-2 text-sm font-semibold text-[var(--color-text-muted)] hover:bg-[var(--color-background-soft)] hover:text-[var(--color-primary)]"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
        <Link className={buttonClassNames({ className: "mt-2 w-full", size: "sm" })} href="/kontakt">
          Demo anfragen
        </Link>
      </nav>
    </details>
  );
}
