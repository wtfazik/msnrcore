import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = { title: "Contact", description: "Contact MSNRCore with educational platform questions." };

export default function ContactPage() {
  return <Container className="py-16 sm:py-20"><SectionHeading eyebrow="Contact" title="Send a learning question" description="The frontend form validates inputs and shows success or error state. Backend integration can be added later." /><div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[.8fr_1fr]"><Card className="p-6"><h2 className="text-xl font-semibold text-white">Before you write</h2><p className="mt-3 leading-8 text-slate-400">MSNRCore cannot provide financial advice, trade signals, or individualized investment recommendations. Use this page for education, content, or platform questions.</p></Card><ContactForm /></div></Container>;
}
