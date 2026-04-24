"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { articleCategories, articles } from "@/data/articles";
import { BlogCard } from "./blog-card";
import { FilterChips } from "@/components/ui/filter-chips";
import { Input } from "@/components/ui/input";

export function BlogLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const deferredQuery = useDeferredValue(query);
  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesQuery = !q || `${article.title} ${article.subtitle} ${article.excerpt}`.toLowerCase().includes(q);
      const matchesCategory = category === "All" || article.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [category, deferredQuery]);
  return (
    <div>
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 sm:p-6">
        <label className="relative block">
          <span className="sr-only">Search articles</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <Input className="pl-11" placeholder="Search articles by topic..." value={query} onChange={(event) => setQuery(event.target.value)} />
        </label>
        <div className="mt-6"><FilterChips label="Category" options={articleCategories} value={category} onChange={setCategory} /></div>
      </div>
      {filtered.length ? <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filtered.map((article) => <BlogCard key={article.slug} article={article} />)}</div> : <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center text-slate-400">No articles match your search.</div>}
    </div>
  );
}
