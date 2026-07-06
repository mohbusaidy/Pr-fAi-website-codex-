"use client";

import Link from "next/link";
import { mainNavigation } from "@/lib/navigation";
import { demoFormHref } from "@/lib/i18n";
import { useI18n } from "@/components/providers/LanguageProvider";
import { LanguageSwitch } from "@/components/shared/LanguageSwitch";
import { Logo } from "@/components/shared/Logo";
import { buttonClassNames } from "@/components/ui/Button";

export function MobileNav() {
  const { t } = useI18n();

  return (
    <details className="relative lg:hidden">
      <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white text-[var(--color-text)] marker:hidden">
        <span className="sr-only">{t.nav.openNavigation}</span>
        <span className="flex flex-col gap-1.5">
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
        </span>
      </summary>
      <div className="absolute right-0 top-12 z-30 w-64 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-card)]">
        <div className="mb-3 flex items-center justify-between gap-3">
          <Link href="/" aria-label="PrüfAI home">
            <Logo className="h-8 w-28" />
          </Link>
          <LanguageSwitch />
        </div>
        <nav className="grid gap-2">
          {mainNavigation.map((item) => (
            <Link className="rounded-[var(--radius-sm)] px-3 py-2 text-sm font-semibold hover:bg-[var(--color-background-soft)]" href={item.href} key={item.href}>
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>
        <Link className={buttonClassNames({ className: "mt-2 w-full", size: "sm" })} href={demoFormHref}>
          {t.nav.requestDemo}
        </Link>
      </div>
    </details>
  );
}
