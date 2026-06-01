import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

const demoInsights = [
  { label: "Lernziel", value: "B1 Sprachprüfung" },
  { label: "Fokus", value: "Schreiben & Wortschatz" },
  { label: "Nächster Schritt", value: "Gezielte Übungsrunde" },
];

export function DemoSection() {
  return (
    <section
      className="section-border section-spacing bg-[linear-gradient(135deg,var(--color-background-soft),var(--color-card-highlight))]"
      id="demo"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Badge variant="accent">Produktdemo</Badge>
            <SectionHeading
              title="Ein ruhiger Arbeitsbereich für Übung, Feedback und nächste Schritte."
              description="Die Demo zeigt bewusst ein UI-Mockup aus Komponenten, keine vorgetäuschte Live-Funktion. Der echte Produktfluss kann später mit realen Screenshots oder Figma-Assets ersetzt werden."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/kontakt">Demo anfragen</ButtonLink>
              <ButtonLink href="#preise" variant="outline">
                Preise ansehen
              </ButtonLink>
            </div>
          </div>
          <Card className="p-3 sm:p-4" variant="highlight">
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]">
              <div className="flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-background-soft)] px-5 py-4">
                <div>
                  <p className="text-sm font-bold text-[var(--color-text)]">PrüfAI Übungsübersicht</p>
                  <p className="text-xs text-[var(--color-text-muted)]">Mockup der späteren Produkterfahrung</p>
                </div>
                <span className="rounded-full bg-[color-mix(in_srgb,var(--color-secondary)_18%,white)] px-3 py-1 text-xs font-bold text-[var(--color-primary)]">
                  Vorschau
                </span>
              </div>
              <div className="grid gap-4 p-5 md:grid-cols-[0.85fr_1.15fr]">
                <div className="space-y-3">
                  {demoInsights.map((item) => (
                    <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-4" key={item.label}>
                      <p className="text-xs font-bold uppercase text-[var(--color-text-subtle)]">{item.label}</p>
                      <p className="mt-1 font-semibold text-[var(--color-text)]">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-[var(--radius-md)] bg-[var(--color-background)] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold">Feedback-Zusammenfassung</p>
                      <p className="mt-1 text-xs text-[var(--color-text-muted)]">Beispielhafte Darstellung</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[var(--color-primary)]">72%</p>
                      <p className="text-xs text-[var(--color-text-muted)]">Fortschritt</p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div>
                      <div className="mb-2 flex justify-between text-xs font-semibold text-[var(--color-text-muted)]">
                        <span>Grammatik</span>
                        <span>gut</span>
                      </div>
                      <div className="h-2 rounded-full bg-[var(--color-border)]">
                        <div className="h-2 w-4/5 rounded-full bg-[var(--color-secondary)]" />
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex justify-between text-xs font-semibold text-[var(--color-text-muted)]">
                        <span>Wortschatz</span>
                        <span>ausbauen</span>
                      </div>
                      <div className="h-2 rounded-full bg-[var(--color-border)]">
                        <div className="h-2 w-3/5 rounded-full bg-[var(--color-accent)]" />
                      </div>
                    </div>
                    <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-4">
                      <p className="text-sm font-semibold">Empfehlung</p>
                      <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                        Wiederhole Schreibaufgaben mit Fokus auf Satzbau und prüfungsnahe Formulierungen.
                      </p>
                    </div>
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
