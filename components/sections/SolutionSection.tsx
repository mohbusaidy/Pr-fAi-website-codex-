"use client";

import { useI18n } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { demoFormHref } from "@/lib/i18n";

export function SolutionSection() {
  const { t } = useI18n();

  return (
    <section className="section-border section-spacing bg-[var(--color-background-soft)]" id="platform">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Card className="order-2 lg:order-1" variant="default">
            <div className="flex items-center justify-between gap-4">
              <div><p className="text-sm font-bold text-[var(--color-primary)]">{t.platform.dashboard}</p><p className="mt-1 text-xs text-[var(--color-text-muted)]">{t.platform.overview}</p></div>
              <Badge variant="primary">{t.platform.badge}</Badge>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.platform.points.map((point, index) => (
                <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-background)] p-4" key={point}>
                  <span className="text-xs font-bold uppercase text-[var(--color-primary)]">0{index + 1}</span>
                  <p className="mt-2 text-sm font-semibold text-[var(--color-text)]">{point}</p>
                </div>
              ))}
            </div>
          </Card>
          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow={t.platform.eyebrow} title={t.platform.title} description={t.platform.description} />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#features">{t.platform.explore}</ButtonLink>
              <ButtonLink href={demoFormHref} variant="outline">{t.platform.request}</ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
