import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

const problemPoints = [
  {
    title: "Unklare Lernlücken",
    description:
      "Lernende sehen oft nur ein Ergebnis, aber nicht, welche Kompetenzen wirklich fehlen oder wo sie ansetzen sollen.",
  },
  {
    title: "Hoher Korrekturaufwand",
    description:
      "Prüfungsteams verlieren viel Zeit mit wiederkehrender Auswertung, manueller Dokumentation und uneinheitlichem Feedback.",
  },
  {
    title: "Schwer vergleichbare Ergebnisse",
    description:
      "Ohne strukturierte Analyse bleiben Fortschritt, Risiko und Förderbedarf schwer erkennbar.",
  },
];

export function ProblemSection() {
  return (
    <section className="section-border section-spacing bg-[var(--color-background)]" id="vorteile">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Badge variant="accent">Ausgangslage</Badge>
            <SectionHeading
              description="Vorbereitung auf Prüfungen und Zertifizierungen ist selten nur eine Frage von mehr Übung. Entscheidend ist, schnell zu verstehen, wo Unsicherheit entsteht und welches Feedback wirklich hilft."
              title="Prüfungsvorbereitung scheitert oft an fehlender Klarheit."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {problemPoints.map((point, index) => (
              <Card className="relative overflow-hidden" key={point.title} variant="feature">
                <div className="absolute right-5 top-5 text-5xl font-bold text-[color-mix(in_srgb,var(--color-primary)_10%,transparent)]">
                  0{index + 1}
                </div>
                <div className="relative">
                  <h3 className="text-xl font-bold">{point.title}</h3>
                  <p className="mt-3 text-sm text-[var(--color-text-muted)] sm:text-base">{point.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
