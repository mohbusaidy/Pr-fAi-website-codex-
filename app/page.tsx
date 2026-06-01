import { CTASection } from "@/components/sections/CTASection";
import { DemoSection } from "@/components/sections/DemoSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { TargetGroupsSection } from "@/components/sections/TargetGroupsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TargetGroupsSection />
      <DemoSection />
      <PricingSection />
      <CTASection />
      <FAQSection />
    </>
  );
}
