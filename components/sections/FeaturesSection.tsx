"use client";

import { useI18n } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export function FeaturesSection() {
  const { t } = useI18n();

  return (
    <section className="section-border section-spacing bg-[var(--color-background)]" id="features">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={t.features.eyebrow} title={t.features.title} description={t.features.description} />
          <Badge className="w-fit" variant="primary">{t.features.badge}</Badge>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.cards.map(([title, description]) => (
            <Card className="min-h-52" key={title} variant="feature">
              <div className="mb-5 flex size-11 items-center justify-center rounded-[var(--radius-md)] bg-[color-mix(in_srgb,var(--color-primary)_10%,white)] text-lg font-bold text-[var(--color-primary)]">{title.slice(0, 1)}</div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm text-[var(--color-text-muted)] sm:text-base">{description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
