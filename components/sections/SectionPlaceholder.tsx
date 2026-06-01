import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type SectionPlaceholderProps = {
  id?: string;
  name: string;
  tone?: "default" | "soft" | "highlight";
};

export function SectionPlaceholder({ id, name, tone = "default" }: SectionPlaceholderProps) {
  const isSoft = tone === "soft";
  const isHighlight = tone === "highlight";

  return (
    <section
      className={cn(
        "section-border section-spacing",
        isSoft && "bg-[var(--color-background-soft)]",
        isHighlight && "bg-[linear-gradient(135deg,var(--color-background-soft),var(--color-card-highlight))]",
      )}
      id={id}
    >
      <Container>
        <Card variant={isHighlight ? "highlight" : "feature"}>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <SectionHeading
              eyebrow="Section placeholder"
              title={name}
              description="Reusable spacing, typography, card, and color tokens are applied here."
            />
            <Badge variant={isHighlight ? "accent" : "primary"}>Design system</Badge>
          </div>
        </Card>
      </Container>
    </section>
  );
}
