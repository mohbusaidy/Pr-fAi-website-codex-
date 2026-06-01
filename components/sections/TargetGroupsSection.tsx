import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

const targetGroups = [
  {
    title: "Sprachlernende",
    description: "Für Menschen, die sich gezielt auf Sprachprüfungen vorbereiten und klare Rückmeldung brauchen.",
  },
  {
    title: "Integrationskurse",
    description: "Für Teilnehmende, die Prüfungsvorbereitung, Orientierung und wiederholbares Üben verbinden möchten.",
  },
  {
    title: "Bildungsträger",
    description: "Für Teams, die Lernstände schneller erkennen und Betreuung strukturierter planen wollen.",
  },
  {
    title: "Prüfungszentren",
    description: "Für Organisationen, die Vorbereitung, Feedback und Qualitätssicherung besser nachvollziehen möchten.",
  },
  {
    title: "Unternehmen",
    description: "Für Arbeitgeber und Organisationen, die Qualifizierung und Zertifizierung unterstützen.",
  },
];

export function TargetGroupsSection() {
  return (
    <section className="section-border section-spacing bg-[var(--color-background)]" id="zielgruppen">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Zielgruppen"
          title="Für Lernende und Organisationen, die Prüfungserfolg planbarer machen wollen."
          description="PrüfAI ist als unterstützende Plattform gedacht: individuell genug für Lernende, strukturiert genug für professionelle Bildungsteams."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {targetGroups.map((group) => (
            <Card className="flex min-h-60 flex-col justify-between" key={group.title} variant="feature">
              <div>
                <div className="mb-5 flex size-12 items-center justify-center rounded-[var(--radius-md)] bg-[color-mix(in_srgb,var(--color-secondary)_14%,white)] text-lg font-bold text-[var(--color-primary)]">
                  {group.title.slice(0, 1)}
                </div>
                <h3 className="text-lg font-bold">{group.title}</h3>
              </div>
              <p className="mt-5 text-sm text-[var(--color-text-muted)]">{group.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
