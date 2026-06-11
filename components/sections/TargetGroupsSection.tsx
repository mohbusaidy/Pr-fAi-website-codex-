"use client";

import { useI18n } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export function TargetGroupsSection() {
  const { t } = useI18n();

  return (
    <section className="section-border section-spacing bg-[var(--color-background)]" id="institutions">
      <Container>
        <SectionHeading align="center" eyebrow={t.institutions.eyebrow} title={t.institutions.title} description={t.institutions.description} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {t.institutions.cards.map(([title, description]) => (
            <Card className="flex min-h-60 flex-col justify-between" key={title} variant="feature">
              <div>
                <div className="mb-5 flex size-12 items-center justify-center rounded-[var(--radius-md)] bg-[color-mix(in_srgb,var(--color-secondary)_14%,white)] text-lg font-bold text-[var(--color-primary)]">{title.slice(0, 1)}</div>
                <h3 className="text-lg font-bold">{title}</h3>
              </div>
              <p className="mt-5 text-sm text-[var(--color-text-muted)]">{description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
