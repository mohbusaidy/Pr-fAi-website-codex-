import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerNavigation } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container className="flex flex-col gap-4 py-8 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
        <p>PrüfAI website foundation</p>
        <nav className="flex gap-4">
          {footerNavigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
