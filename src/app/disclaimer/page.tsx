import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = { title: "Disclaimer", description: "MSNRCore educational and financial advice disclaimer." };

const points = ["This website is for educational purposes only and does not constitute financial advice.", "MSNRCore does not provide investment advice, trading signals, brokerage services, or managed trading services.", "Trading and investing involve risk, including the possible loss of capital.", "Users are responsible for their own decisions, research, risk controls, and compliance with local laws.", "Past chart examples, educational models, or historical explanations do not guarantee future results."];

export default function DisclaimerPage() {
  return <Container className="py-16 sm:py-20"><SectionHeading eyebrow="Legal" title="Disclaimer" description="MSNRCore is an education platform only. Read this page before using any content." /><Card className="mx-auto max-w-4xl p-6"><div className="space-y-4">{points.map((point) => <p key={point} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 leading-8 text-slate-300">{point}</p>)}</div></Card></Container>;
}
