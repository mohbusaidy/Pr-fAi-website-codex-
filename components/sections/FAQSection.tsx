"use client";

import { useI18n } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { demoFormHref } from "@/lib/i18n";

export function FAQSection() {
  const { t } = useI18n();

  return (
    <section className="section-spacing bg-[var(--color-background-soft)]" id="faq">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Badge variant="primary">FAQ</Badge>
            <SectionHeading title={t.faq.title} description={t.faq.description} />
            <div className="mt-8"><ButtonLink href={demoFormHref} variant="outline">{t.faq.contact}</ButtonLink></div>
          </div>
          <div className="grid gap-4">
            {t.faq.items.map(([question, answer]) => (
              <Card className="p-0" key={question} variant="feature">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-6 marker:hidden sm:p-7"><span className="text-lg font-bold text-[var(--color-text)]">{question}</span><span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-background-soft)] text-[var(--color-primary)] transition-transform group-open:rotate-45">+</span></summary>
                  <p className="px-6 pb-6 text-sm text-[var(--color-text-muted)] sm:px-7 sm:pb-7 sm:text-base">{answer}</p>
                </details>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
