import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Concept } from "@/data/concepts";

export function ConceptCard({ concept }: { concept: Concept }) {
  return (
    <Card className="group flex h-full flex-col p-5 transition hover:border-cyan-300/30 hover:bg-white/[0.065]">
      <div className="mb-5 flex items-center justify-between gap-3">
        <Badge>{concept.category}</Badge>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">{concept.difficulty}</span>
      </div>
      <div className="mb-5 h-24 rounded-2xl border border-white/10 bg-slate-950/50 p-3">
        <svg viewBox="0 0 220 70" className="h-full w-full" aria-hidden="true">
          <path d="M8 52 C36 18 54 42 82 26 S124 16 150 38 188 46 212 18" fill="none" stroke="#67e8f9" strokeWidth="3" strokeLinecap="round" />
          <path d="M18 48h70M126 32h76" stroke="#a78bfa" strokeDasharray="4 4" opacity=".55" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-white">{concept.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{concept.shortDescription}</p>
      <ButtonLink href={`/concepts/${concept.slug}`} variant="secondary" className="mt-6 w-full justify-between">
        Open Concept <ArrowUpRight className="h-4 w-4" />
      </ButtonLink>
    </Card>
  );
}
