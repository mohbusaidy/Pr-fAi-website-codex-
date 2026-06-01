import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export function CTASection() {
  return (
    <section className="section-border section-spacing bg-[var(--color-background-soft)]" id="kontakt">
      <Container>
        <Card
          className="overflow-hidden bg-[linear-gradient(135deg,var(--color-primary),var(--color-primary-strong))] text-white"
          variant="default"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Badge className="bg-white/15 text-white" variant="neutral">
                Nächster Schritt
              </Badge>
              <div className="mt-5 [&_h2]:text-white [&_p]:text-white/80">
                <SectionHeading
                  title="PrüfAI für Ihre Vorbereitung oder Organisation kennenlernen."
                  description="Fordern Sie eine Demo an oder sprechen Sie mit uns über Einsatzmöglichkeiten für Lernende, Kurse und Prüfungsteams."
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink className="bg-white text-[var(--color-primary)] hover:bg-[var(--color-background-soft)]" href="/kontakt" size="lg">
                Demo anfragen
              </ButtonLink>
              <ButtonLink
                className="border-white/40 text-white hover:border-white hover:text-white"
                href="#faq"
                size="lg"
                variant="outline"
              >
                Fragen ansehen
              </ButtonLink>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
