import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { DisclaimerCallout } from "@/components/ui/disclaimer-callout";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = { title: "About", description: "About MSNRCore, a structured trading education platform." };

export default function AboutPage() {
  return <Container className="py-16 sm:py-20"><SectionHeading eyebrow="About" title="Built for structured self-education" description="MSNRCore helps learners understand market behavior through clarity, market structure, liquidity, and chart analysis." /><div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2"><Card className="p-6"><h2 className="text-xl font-semibold text-white">What We Focus On</h2><p className="mt-3 leading-8 text-slate-400">The platform organizes concepts like SNR, MSNR, SMC, ICT, liquidity, order blocks, FVGs, Wyckoff, and AMD into clear educational pages and study frameworks.</p></Card><Card className="p-6"><h2 className="text-xl font-semibold text-white">What We Avoid</h2><p className="mt-3 leading-8 text-slate-400">MSNRCore does not provide signals, brokerage services, profit promises, fake earnings, or aggressive sales copy. It is built for learners who want to understand price behavior.</p></Card></div><div className="mx-auto mt-8 max-w-4xl"><DisclaimerCallout /></div></Container>;
}
