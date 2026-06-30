"use client";

import { useI18n } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { demoFormHref } from "@/lib/i18n";

export function CTASection() {
  const { t } = useI18n();

  return (
    <section className="section-border section-spacing bg-[var(--color-background-soft)]" id="contact">
      <Container>
        <Card className="overflow-hidden bg-[linear-gradient(135deg,var(--color-primary),var(--color-primary-strong))] text-white" variant="default">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Badge className="bg-white/15 text-white" variant="neutral">{t.cta.badge}</Badge>
              <div className="mt-5 [&_h2]:text-white [&_p]:text-white/80"><SectionHeading title={t.cta.title} description={t.cta.description} /></div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink className="bg-white text-[var(--color-primary)] hover:bg-[var(--color-background-soft)]" href={demoFormHref} size="lg">{t.cta.primary}</ButtonLink>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
