"use client";

import { useI18n } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export function HowItWorksSection() {
  const { t } = useI18n();

  return (
    <section className="section-border section-spacing bg-[var(--color-background-soft)]" id="process">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Badge variant="primary">{t.process.badge}</Badge>
            <SectionHeading title={t.process.title} description={t.process.description} />
            <div className="mt-8"><ButtonLink href="#demo" variant="outline">{t.process.preview}</ButtonLink></div>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-8 hidden h-[calc(100%-4rem)] w-px bg-[var(--color-border-strong)] sm:block" />
            <div className="space-y-4">
              {t.process.steps.map(([title, description], index) => (
                <Card className="relative sm:ml-14" key={title} variant={index === 1 ? "highlight" : "feature"}>
                  <span className="mb-5 flex size-11 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white sm:absolute sm:-left-[4.15rem] sm:top-7">{index + 1}</span>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm text-[var(--color-text-muted)] sm:text-base">{description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
