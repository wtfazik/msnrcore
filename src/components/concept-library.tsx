"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ConceptCard } from "./concept-card";
import { FilterChips } from "@/components/ui/filter-chips";
import { Input } from "@/components/ui/input";
import { concepts, conceptCategories, conceptDifficulties } from "@/data/concepts";

export function ConceptLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return concepts.filter((concept) => {
      const matchesQuery = !q || `${concept.title} ${concept.shortDescription} ${concept.category}`.toLowerCase().includes(q);
      const matchesCategory = category === "All" || concept.category === category;
      const matchesDifficulty = difficulty === "All" || concept.difficulty === difficulty;
      return matchesQuery && matchesCategory && matchesDifficulty;
    });
  }, [category, deferredQuery, difficulty]);

  return (
    <div>
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 sm:p-6">
        <label className="relative block">
          <span className="sr-only">Search concepts</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <Input className="pl-11" placeholder="Search SMC, liquidity, FVG, Wyckoff..." value={query} onChange={(event) => setQuery(event.target.value)} />
        </label>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <FilterChips label="Category" options={conceptCategories} value={category} onChange={setCategory} />
          <FilterChips label="Difficulty" options={conceptDifficulties} value={difficulty} onChange={setDifficulty} />
        </div>
      </div>
      {filtered.length ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((concept) => <ConceptCard key={concept.slug} concept={concept} />)}
        </div>
      ) : (
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center text-slate-400">
          No concepts match your filters. Adjust the search, category, or difficulty.
        </div>
      )}
    </div>
  );
}
