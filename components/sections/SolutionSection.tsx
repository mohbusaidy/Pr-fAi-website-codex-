import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

const solutionSteps = [
  "Antworten und Ergebnisse strukturiert erfassen",
  "Muster, Stärken und Risiken KI-gestützt sichtbar machen",
  "Konkrete nächste Lernschritte verständlich ausgeben",
];

export function SolutionSection() {
  return (
    <section className="section-border section-spacing bg-[var(--color-background-soft)]" id="loesung">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Card className="order-2 lg:order-1" variant="highlight">
            <Badge variant="primary">PrüfAI Lösung</Badge>
            <div className="mt-8 space-y-5">
              {solutionSteps.map((step, index) => (
                <div className="flex gap-4" key={step}>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 font-semibold text-[var(--color-text)]">{step}</p>
                </div>
              ))}
            </div>
          </Card>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Lösung"
              title="PrüfAI macht aus Prüfungsergebnissen konkrete Orientierung."
              description="Die Plattform verbindet strukturierte Auswertung, nachvollziehbares Feedback und klare Handlungsempfehlungen. So wird aus einer einzelnen Prüfung ein besserer Lernprozess."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#funktionen">Funktionen ansehen</ButtonLink>
              <ButtonLink href="/kontakt" variant="outline">
                Demo anfragen
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
