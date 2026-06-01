import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { Container } from "@/components/ui/Container";
import { buttonClassNames } from "@/components/ui/Button";
import { mainNavigation } from "@/lib/navigation";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-background)_90%,white)] backdrop-blur">
      <Container className="flex h-18 items-center justify-between gap-5">
        <Link href="/" aria-label="PrüfAI home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {mainNavigation.map((item) => (
            <Link
              className="text-sm font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className={buttonClassNames({ className: "hidden lg:inline-flex", size: "sm" })} href="/kontakt">
          Demo anfragen
        </Link>
        <MobileNav />
      </Container>
    </header>
  );
}
