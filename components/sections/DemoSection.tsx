import { SectionHeading } from "@/components/shared/SectionHeading";
import { Container } from "@/components/ui/Container";

export function DemoSection() {
  return (
    <section className="border-b border-gray-200 py-16">
      <Container>
        <SectionHeading title="DemoSection" />
      </Container>
    </section>
  );
}
