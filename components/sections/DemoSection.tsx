"use client";

import { useI18n } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { demoFormHref } from "@/lib/i18n";

export function DemoSection() {
  const { t } = useI18n();

  return (
    <section className="section-border section-spacing bg-[linear-gradient(135deg,var(--color-background-soft),var(--color-card-highlight))]" id="demo">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Badge variant="accent">{t.demo.badge}</Badge>
            <SectionHeading title={t.demo.title} description={t.demo.description} />
            <div className="mt-8 flex flex-wrap gap-3"><ButtonLink href={demoFormHref}>{t.demo.cta}</ButtonLink></div>
          </div>
          <Card className="p-3 sm:p-4" variant="highlight">
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]">
              <div className="flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-background-soft)] px-5 py-4">
                <div><p className="text-sm font-bold text-[var(--color-text)]">{t.demo.dashboard}</p><p className="text-xs text-[var(--color-text-muted)]">{t.demo.dashboardSub}</p></div>
                <span className="rounded-full bg-[color-mix(in_srgb,var(--color-secondary)_18%,white)] px-3 py-1 text-xs font-bold text-[var(--color-primary)]">{t.demo.queue}</span>
              </div>
              <div className="grid gap-4 p-5 md:grid-cols-[0.85fr_1.15fr]">
                <div className="space-y-3">
                  {t.demo.insights.map(([label, value]) => (
                    <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-4" key={label}>
                      <p className="text-xs font-bold uppercase text-[var(--color-text-subtle)]">{label}</p>
                      <p className="mt-1 font-semibold text-[var(--color-text)]">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-[var(--radius-md)] bg-[var(--color-background)] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div><p className="text-sm font-bold">{t.demo.queue}</p><p className="mt-1 text-xs text-[var(--color-text-muted)]">{t.demo.structured}</p></div>
                    <div className="text-right"><p className="text-2xl font-bold text-[var(--color-primary)]">18</p><p className="text-xs text-[var(--color-text-muted)]">{t.demo.items}</p></div>
                  </div>
                  <div className="mt-6 space-y-3">
                    {t.demo.queueItems.map((item, index) => (
                      <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-4" key={item}>
                        <div className="mb-2 flex justify-between text-xs font-semibold text-[var(--color-text-muted)]"><span>{item}</span><span>{index === 0 ? t.demo.open : t.demo.ready}</span></div>
                        <div className="h-2 rounded-full bg-[var(--color-border)]"><div className={index === 1 ? "h-2 w-4/5 rounded-full bg-[var(--color-secondary)]" : "h-2 w-3/5 rounded-full bg-[var(--color-primary)]"} /></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
