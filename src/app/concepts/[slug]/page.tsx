import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ChartVisual } from "@/components/charts/visuals";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { DisclaimerCallout } from "@/components/ui/disclaimer-callout";
import { concepts, getConcept, getRelatedConcepts } from "@/data/concepts";

export function generateStaticParams() { return concepts.map((concept) => ({ slug: concept.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const concept = getConcept(params.slug); return concept ? { title: concept.title, description: concept.shortDescription } : { title: "Concept Not Found" }; }

export default function ConceptPage({ params }: { params: { slug: string } }) {
  const concept = getConcept(params.slug);
  if (!concept) notFound();
  const index = concepts.findIndex((item) => item.slug === concept.slug);
  const next = concepts[(index + 1) % concepts.length];
  const related = getRelatedConcepts(concept.relatedConcepts);
  return <Container className="py-12 sm:py-16"><ButtonLink href="/concepts" variant="ghost" className="mb-8"><ArrowLeft className="h-4 w-4" /> Back to Concepts</ButtonLink><div className="grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-start"><div><div className="flex flex-wrap gap-3"><Badge>{concept.category}</Badge><span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">{concept.difficulty}</span></div><h1 className="mt-5 text-5xl font-semibold tracking-tight text-white">{concept.title}</h1><p className="mt-5 text-lg leading-8 text-slate-400">{concept.shortDescription}</p></div><ChartVisual type={concept.visualType} /></div><div className="mt-10 grid gap-6 lg:grid-cols-[1fr_.36fr]"><article className="space-y-6">{[{ title: "Overview", body: concept.overview }, { title: "Plain-English Explanation", body: `${concept.title} is a way to describe repeatable price behavior in context. The value is not the name itself; the value is learning where the concept appears, why it appears, and when the evidence is too weak to use.` }, { title: "Why It Matters", body: concept.whyItMatters }, { title: "Market Psychology", body: concept.psychology }, { title: "Bullish Interpretation", body: concept.bullishCase }, { title: "Bearish Interpretation", body: concept.bearishCase }].map((section) => <Card key={section.title} className="p-6"><h2 className="text-2xl font-semibold text-white">{section.title}</h2><p className="mt-3 leading-8 text-slate-400">{section.body}</p></Card>)}<Card className="p-6"><h2 className="text-2xl font-semibold text-white">How to Identify It</h2><ol className="mt-4 space-y-3">{concept.identificationSteps.map((step, i) => <li key={step} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-slate-300"><span className="mr-3 font-mono text-cyan-200">0{i + 1}</span>{step}</li>)}</ol></Card><Card className="p-6"><h2 className="text-2xl font-semibold text-white">Step-by-Step Checklist</h2><ul className="mt-4 grid gap-3 sm:grid-cols-2">{concept.checklist.map((item) => <li key={item} className="rounded-2xl border border-cyan-300/15 bg-cyan-300/7 p-4 text-sm text-cyan-50">{item}</li>)}</ul></Card><Card className="p-6"><h2 className="text-2xl font-semibold text-white">Common Mistakes</h2><ul className="mt-4 space-y-3">{concept.commonMistakes.map((item) => <li key={item} className="rounded-2xl border border-red-300/15 bg-red-300/7 p-4 text-sm text-red-50">{item}</li>)}</ul></Card><Card className="p-6"><h2 className="text-2xl font-semibold text-white">Mini FAQ</h2><div className="mt-4"><Accordion items={concept.faqs} /></div></Card><DisclaimerCallout /></article><aside className="space-y-6 lg:sticky lg:top-24"><Card className="p-5"><h2 className="text-lg font-semibold text-white">Related Concepts</h2><div className="mt-4 grid gap-2">{related.map((item) => <Link key={item.slug} href={`/concepts/${item.slug}`} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300 hover:text-cyan-100">{item.title}</Link>)}</div></Card><Card className="p-5"><h2 className="text-lg font-semibold text-white">Next Concept</h2><p className="mt-2 text-sm text-slate-400">Continue through the library in sequence.</p><ButtonLink href={`/concepts/${next.slug}`} className="mt-5 w-full justify-between">{next.title}<ArrowRight className="h-4 w-4" /></ButtonLink></Card></aside></div></Container>;
}
