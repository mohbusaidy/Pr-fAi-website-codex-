import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    title: "Prüfung oder Lernziel auswählen",
    description:
      "Lernende starten mit einem klaren Ziel: Sprachprüfung, Einbürgerungstest oder eine andere Zertifizierung.",
  },
  {
    title: "Mit KI-gestützten Aufgaben üben",
    description:
      "PrüfAI führt durch strukturierte Aufgabenformate und passt Übungsschwerpunkte an den aktuellen Stand an.",
  },
  {
    title: "Feedback erhalten und Fortschritt verbessern",
    description:
      "Die Auswertung zeigt verständlich, was bereits sitzt und welche nächsten Schritte am meisten helfen.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-border section-spacing bg-[var(--color-background-soft)]" id="ablauf">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Badge variant="primary">Ablauf</Badge>
            <SectionHeading
              title="In drei klaren Schritten zur besseren Vorbereitung."
              description="PrüfAI soll den Lernprozess nicht komplizierter machen, sondern Orientierung geben: Ziel festlegen, gezielt üben, aus Feedback besser werden."
            />
            <div className="mt-8">
              <ButtonLink href="#demo" variant="outline">
                Demo ansehen
              </ButtonLink>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-8 hidden h-[calc(100%-4rem)] w-px bg-[var(--color-border-strong)] sm:block" />
            <div className="space-y-4">
              {steps.map((step, index) => (
                <Card className="relative sm:ml-14" key={step.title} variant={index === 1 ? "highlight" : "feature"}>
                  <span className="mb-5 flex size-11 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white sm:absolute sm:-left-[4.15rem] sm:top-7">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm text-[var(--color-text-muted)] sm:text-base">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
