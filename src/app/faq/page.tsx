import type { Metadata } from "next";
import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { DisclaimerCallout } from "@/components/ui/disclaimer-callout";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = { title: "FAQ", description: "Frequently asked questions about MSNRCore and trading education concepts." };

export default function FAQPage() {
  return <Container className="py-16 sm:py-20"><SectionHeading eyebrow="FAQ" title="Frequently asked questions" description="Clear answers about MSNRCore, SMC, ICT, SNR, MSNR, and educational use." /><div className="mx-auto max-w-3xl"><Accordion items={faqItems} /><div className="mt-8"><DisclaimerCallout /></div></div></Container>;
}
