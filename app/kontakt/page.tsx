import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Kontakt | PrüfAI",
  description: "Demo oder Gespräch zur KI-gestützten Prüfungsvorbereitung mit PrüfAI anfragen.",
};

const requestTypes = [
  {
    title: "Demo für Bildungsteams",
    description:
      "Für Bildungsträger, Kurse und Prüfungsteams, die Lernstände strukturierter erfassen und Feedbackprozesse verbessern möchten.",
  },
  {
    title: "Vorbereitung für Lernende",
    description:
      "Für Menschen, die sich auf Sprach-, Einbürgerungs- oder Zertifizierungsprüfungen vorbereiten und Orientierung brauchen.",
  },
  {
    title: "Partnergespräch",
    description:
      "Für Organisationen, Prüfungszentren oder Unternehmen, die PrüfAI in eigene Vorbereitungsangebote einbinden möchten.",
  },
];

const checklistItems = [
  "Welche Prüfung oder Zertifizierung ist relevant?",
  "Geht es um einzelne Lernende, Gruppen oder eine Organisation?",
  "Welche Art von Feedback oder Auswertung wäre besonders hilfreich?",
];

export default function KontaktPage() {
  return (
    <section className="section-spacing bg-[var(--color-background-soft)]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <Badge variant="primary">Kontakt</Badge>
            <SectionHeading
              title="Demo oder Gespräch zu PrüfAI anfragen."
              description="Diese Seite ist der zentrale Kontaktpunkt für Interessierte. Ein öffentliches Formular ist noch nicht aktiv; bis zum Launch werden die finalen Kontaktwege ergänzt."
            />
            <Card className="mt-8" variant="highlight">
              <h2 className="text-xl font-bold">Vor einer Anfrage hilfreich</h2>
              <ul className="mt-5 space-y-3 text-sm text-[var(--color-text-muted)] sm:text-base">
                {checklistItems.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-[var(--color-secondary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <div className="grid gap-4">
            {requestTypes.map((type) => (
              <Card key={type.title} variant="feature">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-xl font-bold">{type.title}</h2>
                    <p className="mt-3 text-sm text-[var(--color-text-muted)] sm:text-base">{type.description}</p>
                  </div>
                  <Badge className="w-fit shrink-0" variant="neutral">
                    Anfrage
                  </Badge>
                </div>
              </Card>
            ))}
            <Card variant="default">
              <p className="text-sm font-semibold text-[var(--color-primary)]">Launch-Hinweis</p>
              <p className="mt-3 text-sm text-[var(--color-text-muted)] sm:text-base">
                Die finalen Kontaktinformationen werden vor der öffentlichen Veröffentlichung ergänzt. Bis dahin
                bleibt diese Seite bewusst transparent und erzeugt keine scheinbar aktive Formularfunktion.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
