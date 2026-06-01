import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { Container } from "@/components/ui/Container";
import { mainNavigation } from "@/lib/navigation";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="border-b border-gray-200">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" aria-label="PrufAI home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {mainNavigation.map((item) => (
            <Link className="text-sm text-gray-700" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <MobileNav />
      </Container>
    </header>
  );
}
