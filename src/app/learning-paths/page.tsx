import type { Metadata } from "next";
import Link from "next/link";
import { getConcept } from "@/data/concepts";
import { learningPaths } from "@/data/strategies";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = { title: "Learning Paths", description: "Structured beginner, intermediate, and advanced MSNRCore learning paths." };

export default function LearningPathsPage() {
  return <Container className="py-16 sm:py-20"><SectionHeading eyebrow="Learning Paths" title="Study in the right sequence" description="No login or saved progress. Use these paths as a clean self-education roadmap." /><div className="grid gap-6">{learningPaths.map((path, pathIndex) => <Card key={path.title} className="p-6"><div className="grid gap-6 lg:grid-cols-[.35fr_1fr]"><div><span className="font-mono text-sm text-cyan-200">0{pathIndex + 1}</span><h2 className="mt-4 text-3xl font-semibold text-white">{path.title}</h2><p className="mt-3 text-sm leading-7 text-slate-400">{path.description}</p><p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-500">Difficulty: {path.difficulty}</p></div><ol className="grid gap-3 md:grid-cols-2">{path.modules.map((slug, index) => { const concept = getConcept(slug); return concept ? <li key={slug} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"><div className="flex items-center justify-between gap-4"><div><span className="font-mono text-xs text-cyan-200">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-2 font-semibold text-white">{concept.title}</h3><p className="mt-1 text-sm text-slate-400">{concept.shortDescription}</p></div><ButtonLink href={`/concepts/${slug}`} variant="secondary" className="shrink-0">Open</ButtonLink></div></li> : null; })}</ol></div></Card>)}</div><div className="mt-8 text-center"><Link href="/concepts" className="text-sm font-medium text-cyan-100 hover:text-white">Browse all concepts</Link></div></Container>;
}
