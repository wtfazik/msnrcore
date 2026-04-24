import type { Metadata } from "next";
import { StrategyFrameworks } from "@/components/strategy-frameworks";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = { title: "Strategies", description: "Educational trading strategy frameworks for study, not signals." };

export default function StrategiesPage() {
  return <Container className="py-16 sm:py-20"><SectionHeading eyebrow="Strategy Frameworks" title="Educational models, not trading signals" description="Each card combines concepts into a study framework with expandable steps and working concept links." /><StrategyFrameworks /></Container>;
}
