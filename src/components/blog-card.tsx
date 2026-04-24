import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Article } from "@/data/articles";

export function BlogCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <Card className={featured ? "grid gap-6 p-6 lg:grid-cols-[1fr_.9fr]" : "flex h-full flex-col p-5"}>
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge>{article.category}</Badge>
          <span className="text-xs text-slate-500">{article.readingTime}</span>
          <span className="text-xs text-slate-500">{article.date}</span>
        </div>
        <h3 className={featured ? "mt-5 text-3xl font-semibold text-white" : "mt-5 text-xl font-semibold text-white"}>{article.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-400">{article.excerpt}</p>
        <ButtonLink href={`/blog/${article.slug}`} variant="secondary" className="mt-6">
          Read Article <ArrowUpRight className="h-4 w-4" />
        </ButtonLink>
      </div>
      {featured ? (
        <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
          <svg viewBox="0 0 360 220" className="h-full min-h-52 w-full" aria-hidden="true">
            <path d="M24 170 C74 96 118 140 158 92 S236 34 318 68" fill="none" stroke="#67e8f9" strokeWidth="5" strokeLinecap="round" />
            <rect x="96" y="112" width="88" height="34" fill="#67e8f9" opacity=".12" stroke="#67e8f9" />
            <rect x="218" y="54" width="80" height="38" fill="#a78bfa" opacity=".13" stroke="#a78bfa" />
          </svg>
        </div>
      ) : null}
    </Card>
  );
}
