"use client";

import Image from "next/image";
import { useI18n } from "@/components/providers/LanguageProvider";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { demoFormHref } from "@/lib/i18n";

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="section-border overflow-hidden bg-[var(--color-background)] py-14 sm:py-18 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="max-w-3xl">
            <Badge variant="primary">{t.hero.badge}</Badge>
            <h1 className="mt-5 text-4xl font-bold tracking-normal sm:text-5xl lg:text-6xl">{t.hero.title}</h1>
            <p className="mt-6 max-w-2xl text-base text-[var(--color-text-muted)] sm:text-lg">{t.hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={demoFormHref} size="lg">{t.hero.primary}</ButtonLink>
              <ButtonLink href="#platform" size="lg" variant="outline">{t.hero.secondary}</ButtonLink>
            </div>
            <dl className="mt-10 grid max-w-2xl gap-4 border-t border-[var(--color-border)] pt-6 sm:grid-cols-3">
              {t.hero.points.map((point) => (
                <div key={point}>
                  <dt className="text-sm font-bold text-[var(--color-primary)]">{point}</dt>
                  <dd className="mt-1 text-sm text-[var(--color-text-muted)]">PrüfAI</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_14%,transparent)] blur-3xl" />
            <Card className="relative overflow-hidden p-3 sm:p-4" variant="default">
              <Image alt="PrüfAI exam administration interface preview" className="h-auto w-full rounded-[var(--radius-md)]" height={820} priority src="/images/figma/pruefai-hero-interface.svg" unoptimized width={1120} />
            </Card>
            <Card className="relative -mt-10 ml-auto max-w-xs border-[var(--color-border-strong)] p-5" variant="default">
              <p className="text-sm font-semibold text-[var(--color-primary)]">{t.hero.cardTitle}</p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{t.hero.cardText}</p>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
