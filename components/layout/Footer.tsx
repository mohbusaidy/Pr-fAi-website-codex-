import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerNavigation } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className="flex flex-col gap-4 py-8 text-sm text-[var(--color-text-muted)] md:flex-row md:items-center md:justify-between">
        <p>PrüfAI website foundation</p>
        <nav className="flex flex-wrap gap-4">
          {footerNavigation.map((item) => (
            <Link className="hover:text-[var(--color-primary)]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
