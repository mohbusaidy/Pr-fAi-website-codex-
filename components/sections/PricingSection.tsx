import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

const plans = [
  {
    name: "Lernende",
    label: "Einzelpersonen",
    description: "Für Menschen, die sich strukturiert auf Sprach-, Einbürgerungs- oder Zertifizierungsprüfungen vorbereiten.",
    features: ["KI-gestützte Übung", "Verständliches Feedback", "Persönliche Lernschwerpunkte"],
    cta: "Warteliste beitreten",
  },
  {
    name: "Bildungsträger",
    label: "Teams",
    description: "Für Kursträger, Lehrkräfte und Betreuungsteams, die Lernstände schneller erfassen und gezielter fördern möchten.",
    features: ["Gruppenübersichten", "Strukturierte Auswertung", "Betreuung und Feedbackprozesse"],
    cta: "Demo anfragen",
    highlighted: true,
  },
  {
    name: "Organisationen",
    label: "Partner",
    description: "Für Unternehmen, Prüfungszentren und Organisationen, die Vorbereitung und Zertifizierung skalierbar unterstützen.",
    features: ["Individuelle Anforderungen", "Partner-Setup", "Beratung zur Einführung"],
    cta: "Kontakt aufnehmen",
  },
];

export function PricingSection() {
  return (
    <section className="section-border section-spacing bg-[var(--color-background)]" id="preise">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Preise"
            title="Flexible Modelle statt künstlicher Preisversprechen."
            description="Die öffentlichen Preise sind noch nicht final definiert. Deshalb zeigen wir sinnvolle Einstiegsoptionen und führen Interessierte über Demo oder Kontakt weiter."
          />
          <Badge className="w-fit" variant="accent">
            Preise folgen
          </Badge>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card className="flex h-full flex-col" key={plan.name} variant={plan.highlighted ? "highlight" : "feature"}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Badge variant={plan.highlighted ? "primary" : "neutral"}>{plan.label}</Badge>
                  <h3 className="mt-5 text-2xl font-bold">{plan.name}</h3>
                </div>
                {plan.highlighted ? (
                  <span className="rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-bold text-white">Empfohlen</span>
                ) : null}
              </div>
              <p className="mt-4 text-sm text-[var(--color-text-muted)] sm:text-base">{plan.description}</p>
              <p className="mt-7 text-3xl font-bold text-[var(--color-text)]">Auf Anfrage</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-[var(--color-text-muted)]">
                {plan.features.map((feature) => (
                  <li className="flex gap-3" key={feature}>
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-[var(--color-secondary)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink className="mt-8 w-full" href="/kontakt" variant={plan.highlighted ? "primary" : "outline"}>
                {plan.cta}
              </ButtonLink>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
