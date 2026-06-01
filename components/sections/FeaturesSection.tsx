import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

const features = [
  {
    title: "Automatisierte Analyse",
    description:
      "Antworten, Muster und Fehlertypen werden strukturiert ausgewertet, damit Teams schneller zu belastbaren Einschätzungen kommen.",
  },
  {
    title: "Verständliches Feedback",
    description:
      "Lernende erhalten nachvollziehbare Hinweise, statt nur Punktzahlen oder allgemeine Kommentare zu sehen.",
  },
  {
    title: "Kompetenzübersicht",
    description:
      "Stärken, Schwächen und Entwicklung über Zeit werden sichtbar und können gezielt besprochen werden.",
  },
  {
    title: "Teamfähige Auswertung",
    description:
      "Prüfungsteams arbeiten mit konsistenteren Kriterien und sparen Zeit bei Dokumentation und Vorbereitung.",
  },
  {
    title: "Nächste Schritte",
    description:
      "Aus Ergebnissen entstehen priorisierte Empfehlungen für Wiederholung, Training oder individuelle Förderung.",
  },
  {
    title: "Klare Entscheidungsgrundlage",
    description:
      "Bildungseinrichtungen bekommen bessere Orientierung für Betreuung, Qualitätssicherung und Prüfungsvorbereitung.",
  },
];

export function FeaturesSection() {
  return (
    <section className="section-border section-spacing bg-[var(--color-background)]" id="funktionen">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Funktionen"
            title="Die Kernfunktionen für bessere Prüfungsvorbereitung."
            description="Diese Funktionsbereiche bilden die Grundlage. Details und finale UI-Muster können später aus den Figma-Frames ergänzt werden."
          />
          <Badge className="w-fit" variant="primary">
            Produktbasis
          </Badge>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card className="min-h-52" key={feature.title} variant="feature">
              <div className="mb-5 flex size-11 items-center justify-center rounded-[var(--radius-md)] bg-[color-mix(in_srgb,var(--color-primary)_12%,white)] text-lg font-bold text-[var(--color-primary)]">
                {feature.title.slice(0, 1)}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-3 text-sm text-[var(--color-text-muted)] sm:text-base">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
