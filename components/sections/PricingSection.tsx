"use client";

import { useI18n } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { demoFormHref } from "@/lib/i18n";

export function PricingSection() {
  const { t } = useI18n();

  return (
    <section className="section-border section-spacing bg-[var(--color-background)]" id="pricing">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={t.pricing.eyebrow} title={t.pricing.title} description={t.pricing.description} />
          <Badge className="w-fit" variant="accent">{t.pricing.badge}</Badge>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {t.pricing.plans.map(([name, label, description, cta], index) => (
            <Card className="flex h-full flex-col" key={name} variant={index === 1 ? "highlight" : "feature"}>
              <div className="flex items-start justify-between gap-4">
                <div><Badge variant={index === 1 ? "primary" : "neutral"}>{label}</Badge><h3 className="mt-5 text-2xl font-bold">{name}</h3></div>
                {index === 1 ? <span className="rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-bold text-white">{t.pricing.core}</span> : null}
              </div>
              <p className="mt-4 flex-1 text-sm text-[var(--color-text-muted)] sm:text-base">{description}</p>
              <p className="mt-7 text-3xl font-bold text-[var(--color-text)]">{t.pricing.custom}</p>
              <ButtonLink className="mt-8 w-full" href={demoFormHref} variant={index === 1 ? "primary" : "outline"}>{cta}</ButtonLink>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
