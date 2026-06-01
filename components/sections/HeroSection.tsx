import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section className="section-border overflow-hidden bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--color-secondary)_18%,transparent),transparent_34%),linear-gradient(135deg,var(--color-background-soft),var(--color-background))] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <Badge variant="primary">KI-gestützte Prüfungsanalyse</Badge>
            <h1 className="mt-5 text-4xl font-bold tracking-normal sm:text-5xl lg:text-6xl">
              Prüfungen schneller auswerten. Lernlücken klarer erkennen.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--color-text-muted)] sm:text-xl">
              PrüfAI unterstützt Schulen, Bildungsträger und Prüfungsteams dabei, Antworten strukturiert zu prüfen,
              Ergebnisse verständlich aufzubereiten und gezielte nächste Schritte abzuleiten.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/kontakt" size="lg">
                Demo anfragen
              </ButtonLink>
              <ButtonLink href="#ablauf" size="lg" variant="outline">
                Ablauf ansehen
              </ButtonLink>
            </div>
            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-[var(--color-border)] pt-6">
              <div>
                <dt className="text-2xl font-bold text-[var(--color-primary)]">KI</dt>
                <dd className="mt-1 text-sm text-[var(--color-text-muted)]">Analyse</dd>
              </div>
              <div>
                <dt className="text-2xl font-bold text-[var(--color-primary)]">klar</dt>
                <dd className="mt-1 text-sm text-[var(--color-text-muted)]">Feedback</dd>
              </div>
              <div>
                <dt className="text-2xl font-bold text-[var(--color-primary)]">sicher</dt>
                <dd className="mt-1 text-sm text-[var(--color-text-muted)]">Prozesse</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[color-mix(in_srgb,var(--color-accent)_28%,transparent)] blur-3xl" />
            <Card className="relative p-3 sm:p-4" variant="highlight">
              <Image
                alt="PrüfAI dashboard preview"
                className="h-auto w-full rounded-[var(--radius-md)]"
                height={820}
                priority
                src="/images/figma/pruefai-hero-interface.svg"
                unoptimized
                width={1120}
              />
            </Card>
            <Card className="relative -mt-10 ml-auto max-w-xs p-5" variant="default">
              <p className="text-sm font-semibold text-[var(--color-primary)]">Produktidee</p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Prüfungsergebnisse werden zu verständlichen Empfehlungen für Lernende und Teams.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
