import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { ChartVisual } from "@/components/charts/visuals";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { DisclaimerCallout } from "@/components/ui/disclaimer-callout";
import { conceptEnhancements } from "@/data/concept-enhancements";
import { concepts, getConcept, getRelatedConcepts } from "@/data/concepts";

export function generateStaticParams() {
  return concepts.map((concept) => ({ slug: concept.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const concept = getConcept(slug);
  return concept ? { title: concept.title, description: concept.shortDescription } : { title: "Concept Not Found" };
}

export default async function ConceptPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const concept = getConcept(slug);
  if (!concept) notFound();

  const enhancement = conceptEnhancements[concept.slug];
  const index = concepts.findIndex((item) => item.slug === concept.slug);
  const next = concepts[(index + 1) % concepts.length];
  const related = getRelatedConcepts(concept.relatedConcepts);

  return (
    <Container className="py-12 sm:py-16">
      <ButtonLink href="/concepts" variant="ghost" className="mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Concepts
      </ButtonLink>

      <div className="grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-start">
        <div>
          <div className="flex flex-wrap gap-3">
            <Badge>{concept.category}</Badge>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">{concept.difficulty}</span>
          </div>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white">{concept.title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-400">{concept.shortDescription}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Metric label="Category" value={concept.category} />
            <Metric label="Difficulty" value={concept.difficulty} />
            <Metric label="Visual" value={concept.visualType.replaceAll("-", " ")} />
          </div>
        </div>
        <ChartVisual type={concept.visualType} />
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_.36fr]">
        <article className="space-y-6">
          <ContentCard title="Overview" body={concept.overview} />
          <ContentCard title="Plain-English Explanation" body={`${concept.title} is a structured observation tool, not a prediction shortcut. Use it to describe where price is, what participants may be reacting to, and what evidence would invalidate the read.`} />
          <ContentCard title="Why It Matters" body={concept.whyItMatters} />
          <ContentCard title="Market Psychology" body={concept.psychology} />
          <ContentCard title="Bullish Interpretation" body={concept.bullishCase} />
          <ContentCard title="Bearish Interpretation" body={concept.bearishCase} />

          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-white">How to Identify It</h2>
            <ol className="mt-4 space-y-3">
              {concept.identificationSteps.map((step, i) => (
                <li key={step} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-slate-300">
                  <span className="mr-3 font-mono text-cyan-200">0{i + 1}</span>{step}
                </li>
              ))}
            </ol>
          </Card>

          {enhancement ? <EnhancementBlock enhancement={enhancement} /> : null}

          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-white">Checklist Before Using This Concept</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {concept.checklist.map((item) => <li key={item} className="rounded-2xl border border-cyan-300/15 bg-cyan-300/7 p-4 text-sm text-cyan-50">{item}</li>)}
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-white">Common Mistakes</h2>
            <ul className="mt-4 space-y-3">
              {concept.commonMistakes.map((item) => <li key={item} className="rounded-2xl border border-red-300/15 bg-red-300/7 p-4 text-sm text-red-50">{item}</li>)}
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-white">Mini FAQ</h2>
            <div className="mt-4"><Accordion items={concept.faqs} /></div>
          </Card>

          <DisclaimerCallout />
        </article>

        <aside className="space-y-6 lg:sticky lg:top-24">
          <Card className="p-5">
            <h2 className="text-lg font-semibold text-white">Related Concepts</h2>
            <div className="mt-4 grid gap-2">
              {related.map((item) => <Link key={item.slug} href={`/concepts/${item.slug}`} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-100">{item.title}</Link>)}
            </div>
          </Card>
          <Card className="p-5">
            <h2 className="text-lg font-semibold text-white">Next Concept</h2>
            <p className="mt-2 text-sm text-slate-400">Continue through the library in sequence.</p>
            <ButtonLink href={`/concepts/${next.slug}`} className="mt-5 w-full justify-between">{next.title}<ArrowRight className="h-4 w-4" /></ButtonLink>
          </Card>
        </aside>
      </div>
    </Container>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p><p className="mt-2 text-sm font-medium capitalize text-white">{value}</p></div>;
}

function ContentCard({ title, body }: { title: string; body: string }) {
  return <Card className="p-6"><h2 className="text-2xl font-semibold text-white">{title}</h2><p className="mt-3 leading-8 text-slate-400">{body}</p></Card>;
}

function EnhancementBlock({ enhancement }: { enhancement: NonNullable<(typeof conceptEnhancements)[string]> }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-white"><CheckCircle2 className="h-5 w-5 text-emerald-200" /> Pros</h2>
          <ul className="mt-4 space-y-3">{enhancement.pros.map((item) => <li key={item} className="text-sm leading-7 text-slate-300">{item}</li>)}</ul>
        </Card>
        <Card className="p-6">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-white"><XCircle className="h-5 w-5 text-red-200" /> Cons</h2>
          <ul className="mt-4 space-y-3">{enhancement.cons.map((item) => <li key={item} className="text-sm leading-7 text-slate-300">{item}</li>)}</ul>
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <ContentCard title="When to Use" body={enhancement.whenToUse} />
        <ContentCard title="When to Avoid" body={enhancement.whenToAvoid} />
      </div>
      <ContentCard title="Practical Educational Example" body={enhancement.practicalExample} />
      <Card className="p-6"><h2 className="text-2xl font-semibold text-white">Common Misconceptions</h2><ul className="mt-4 grid gap-3 sm:grid-cols-2">{enhancement.misconceptions.map((item) => <li key={item} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-300">{item}</li>)}</ul></Card>
      {enhancement.comparison ? <ComparisonBlock comparison={enhancement.comparison} /> : null}
    </div>
  );
}

function ComparisonBlock({ comparison }: { comparison: NonNullable<NonNullable<(typeof conceptEnhancements)[string]>["comparison"]> }) {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold text-white">{comparison.title}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <ComparisonColumn label={comparison.leftLabel} points={comparison.leftPoints} />
        <ComparisonColumn label={comparison.rightLabel} points={comparison.rightPoints} />
      </div>
    </Card>
  );
}

function ComparisonColumn({ label, points }: { label: string; points: string[] }) {
  return <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"><h3 className="font-semibold text-cyan-100">{label}</h3><ul className="mt-3 space-y-2">{points.map((point) => <li key={point} className="text-sm leading-7 text-slate-300">{point}</li>)}</ul></div>;
}
