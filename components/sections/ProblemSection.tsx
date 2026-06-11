"use client";

import { useI18n } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export function ProblemSection() {
  const { t } = useI18n();

  return (
    <section className="section-border section-spacing bg-[var(--color-background)]" id="problem">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Badge variant="primary">{t.problem.badge}</Badge>
            <SectionHeading description={t.problem.description} title={t.problem.title} />
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {t.problem.cards.map(([title, description], index) => (
              <Card className="relative overflow-hidden" key={title} variant="feature">
                <div className="mb-5 flex size-10 items-center justify-center rounded-[var(--radius-md)] bg-[color-mix(in_srgb,var(--color-primary)_10%,white)] text-sm font-bold text-[var(--color-primary)]">{index + 1}</div>
                <div className="relative">
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm text-[var(--color-text-muted)] sm:text-base">{description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
