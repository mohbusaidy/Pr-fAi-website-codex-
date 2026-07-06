"use client";

import Link from "next/link";
import { mainNavigation } from "@/lib/navigation";
import { demoFormHref } from "@/lib/i18n";
import { useI18n } from "@/components/providers/LanguageProvider";
import { LanguageSwitch } from "@/components/shared/LanguageSwitch";
import { Logo } from "@/components/shared/Logo";
import { buttonClassNames } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "./MobileNav";

export function Header() {
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-border)] bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-5">
        <Link className="shrink-0" href="/" aria-label="PrüfAI home">
          <Logo priority />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {mainNavigation.map((item) => (
            <Link
              className="text-xs font-semibold text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
              href={item.href}
              key={item.href}
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitch />
          <Link className={buttonClassNames({ className: "rounded-sm", size: "sm" })} href={demoFormHref}>
            {t.nav.requestDemo}
          </Link>
        </div>
        <MobileNav />
      </Container>
    </header>
  );
}
