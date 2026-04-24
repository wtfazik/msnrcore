import type { Metadata } from "next";
import { ConceptLibrary } from "@/components/concept-library";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = { title: "Concepts", description: "Search and filter the MSNRCore trading education concept library." };

export default function ConceptsPage() {
  return <Container className="py-16 sm:py-20"><SectionHeading eyebrow="Concept Library" title="Search market structure concepts" description="Filter SNR, MSNR, SMC, ICT, liquidity, order blocks, FVGs, and advanced models by category or difficulty." /><ConceptLibrary /></Container>;
}
