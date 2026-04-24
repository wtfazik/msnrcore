"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { strategies } from "@/data/strategies";
import { getConcept } from "@/data/concepts";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button";
import { DisclaimerCallout } from "@/components/ui/disclaimer-callout";
import { ChartVisual } from "@/components/charts/visuals";
import { cn } from "@/lib/utils";

export function StrategyFrameworks() {
  const [open, setOpen] = useState(0);
  return (
    <div id="frameworks" className="grid gap-6">
      {strategies.map((strategy, index) => {
        const active = open === index;
        const primaryConcept = getConcept(strategy.concepts[0]);
        return (
          <Card key={strategy.title} className="overflow-hidden p-5">
            <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
              <ChartVisual type={primaryConcept?.visualType ?? "market-structure"} />
              <div>
                <Badge>Study Framework</Badge>
                <h2 className="mt-4 text-2xl font-semibold text-white">{strategy.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">{strategy.explanation}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {strategy.concepts.map((slug) => {
                    const concept = getConcept(slug);
                    return concept ? <Link key={slug} href={`/concepts/${slug}`} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300 hover:text-cyan-100">{concept.title}</Link> : null;
                  })}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button type="button" variant="secondary" onClick={() => setOpen(active ? -1 : index)}>
                    {active ? "Hide Details" : "Expand Details"} <ChevronDown className={cn("h-4 w-4 transition", active && "rotate-180")} />
                  </Button>
                  <ButtonLink href={`/concepts/${strategy.concepts[0]}`} variant="ghost">Open Related Concepts</ButtonLink>
                  <a href="#frameworks" className="inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/[0.06] hover:text-white">Scroll to Frameworks</a>
                </div>
              </div>
            </div>
            {active ? (
              <div className="mt-6 grid gap-4 border-t border-white/10 pt-6 lg:grid-cols-[1fr_.8fr]">
                <ol className="space-y-3">
                  {strategy.steps.map((step, stepIndex) => <li key={step} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-300"><span className="mr-3 font-mono text-cyan-200">0{stepIndex + 1}</span>{step}</li>)}
                </ol>
                <DisclaimerCallout />
              </div>
            ) : null}
          </Card>
        );
      })}
    </div>
  );
}
