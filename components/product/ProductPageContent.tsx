"use client";

import { useI18n } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { demoFormHref } from "@/lib/i18n";

export function ProductPageContent() {
  const { t } = useI18n();

  return (
    <>
      <section className="section-border bg-[var(--color-background)] py-14 sm:py-18 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="primary">{t.productPage.badge}</Badge>
            <h1 className="mt-5 text-4xl font-bold tracking-normal sm:text-5xl lg:text-6xl">{t.productPage.headline}</h1>
            <p className="mt-6 text-base text-[var(--color-text-muted)] sm:text-lg">{t.productPage.subtitle}</p>
          </div>
          <Card className="mt-10 border-[var(--color-border-strong)]" variant="highlight">
            <p className="max-w-4xl text-lg font-semibold leading-8 text-[var(--color-text)]">{t.productPage.introduction}</p>
          </Card>
        </Container>
      </section>

      <section className="section-border section-spacing bg-[var(--color-background-soft)]">
        <Container>
          <SectionHeading title={t.productPage.headline} description={t.productPage.subtitle} />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {t.productPage.cards.map(([title, description], index) => (
              <Card className="h-full" key={title} variant="feature">
                <span className="text-xs font-bold uppercase text-[var(--color-primary)]">0{index + 1}</span>
                <h2 className="mt-3 text-xl font-bold tracking-normal">{title}</h2>
                <p className="mt-4 text-sm text-[var(--color-text-muted)] sm:text-base">{description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-spacing bg-[var(--color-background)]">
        <Container>
          <Card className="overflow-hidden bg-[linear-gradient(135deg,var(--color-primary),var(--color-primary-strong))] text-white" variant="default">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <Badge className="bg-white/15 text-white" variant="neutral">{t.productPage.badge}</Badge>
                <div className="mt-5 [&_h2]:text-white [&_p]:text-white/80">
                  <SectionHeading title={t.productPage.cta.title} description={t.productPage.cta.text} />
                </div>
              </div>
              <ButtonLink className="bg-white text-[var(--color-primary)] hover:bg-[var(--color-background-soft)]" href={demoFormHref} size="lg">
                {t.productPage.cta.button}
              </ButtonLink>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
