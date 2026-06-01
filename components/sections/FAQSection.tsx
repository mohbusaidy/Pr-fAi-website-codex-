import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

const faqs = [
  {
    question: "Für welche Prüfungen ist PrüfAI geeignet?",
    answer:
      "PrüfAI ist für Sprach-, Einbürgerungs- und Zertifizierungsprüfungen gedacht. Die konkreten Prüfungsformate können je nach Einführung priorisiert werden.",
  },
  {
    question: "Ersetzt PrüfAI echten Unterricht?",
    answer:
      "Nein. PrüfAI soll Unterricht, Coaching und Vorbereitung ergänzen, indem Übung, Feedback und Lernfortschritt klarer strukturiert werden.",
  },
  {
    question: "Gibt es Feedback zu Antworten?",
    answer:
      "Ja. Der Produktfokus liegt auf verständlichem Feedback, das Lernende nicht nur bewertet, sondern nächste sinnvolle Übungsschritte zeigt.",
  },
  {
    question: "Ist PrüfAI für Bildungsträger geeignet?",
    answer:
      "Ja. Bildungsträger können PrüfAI nutzen, um Lernstände besser zu erkennen, Betreuung zu priorisieren und Vorbereitung konsistenter zu gestalten.",
  },
  {
    question: "Wann ist PrüfAI verfügbar?",
    answer:
      "Die öffentliche Verfügbarkeit und genaue Pakete werden noch finalisiert. Interessierte können über die Kontaktseite eine Demo oder weitere Informationen anfragen.",
  },
  {
    question: "Wie kann ich eine Demo anfragen?",
    answer:
      "Über die Kontaktseite. Dort kann der passende Einsatzkontext beschrieben werden, damit die Demo sinnvoll vorbereitet werden kann.",
  },
];

export function FAQSection() {
  return (
    <section className="section-spacing bg-[var(--color-background-soft)]" id="faq">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Badge variant="primary">FAQ</Badge>
            <SectionHeading
              title="Häufige Fragen vor dem ersten Gespräch."
              description="Kurze Antworten auf die wichtigsten Punkte zu Einsatz, Verfügbarkeit und Rolle von PrüfAI."
            />
            <div className="mt-8">
              <ButtonLink href="/kontakt" variant="outline">
                Weitere Fragen stellen
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <Card className="p-0" key={faq.question} variant="feature">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-6 marker:hidden sm:p-7">
                    <span className="text-lg font-bold text-[var(--color-text)]">{faq.question}</span>
                    <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-background-soft)] text-[var(--color-primary)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-sm text-[var(--color-text-muted)] sm:px-7 sm:pb-7 sm:text-base">{faq.answer}</p>
                </details>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
