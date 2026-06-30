"use client";

import { useI18n } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export function SustainabilitySection() {
  const { t } = useI18n();

  return (
    <section className="section-border section-spacing bg-[var(--color-background)]" id="sustainability">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Badge variant="accent">{t.sustainability.eyebrow}</Badge>
            <div className="mt-5">
              <SectionHeading title={t.sustainability.title} />
            </div>
          </div>
          <div className="space-y-5 text-base text-[var(--color-text-muted)] sm:text-lg">
            {t.sustainability.body.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.sustainability.cards.map(([title, description], index) => (
            <Card className="min-h-64" key={title} variant="feature">
              <div className="mb-5 flex size-11 items-center justify-center rounded-[var(--radius-md)] bg-[color-mix(in_srgb,var(--color-secondary)_14%,white)] text-sm font-bold text-[var(--color-primary)]">
                0{index + 1}
              </div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm text-[var(--color-text-muted)]">{description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
