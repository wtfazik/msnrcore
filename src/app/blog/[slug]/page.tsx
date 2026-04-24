import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { DisclaimerCallout } from "@/components/ui/disclaimer-callout";
import { articleRoutes, getArticle, getRelatedArticles } from "@/data/articles";

export function generateStaticParams() {
  return articleRoutes.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  return article ? { title: article.title, description: article.excerpt } : { title: "Article Not Found" };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const related = getRelatedArticles(article.relatedArticles);

  return (
    <Container className="py-12 sm:py-16">
      <ButtonLink href="/blog" variant="ghost" className="mb-8"><ArrowLeft className="h-4 w-4" /> Back to Blog</ButtonLink>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
        <article className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <Badge>{article.category}</Badge>
            <span className="text-xs text-slate-500">{article.date}</span>
            <span className="text-xs text-slate-500">{article.readingTime}</span>
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">{article.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">{article.subtitle}</p>

          <Card className="market-surface mt-8 overflow-hidden p-5">
            <svg viewBox="0 0 820 220" className="h-auto w-full" aria-hidden="true">
              <defs>
                <linearGradient id="article-line" x1="0" x2="1"><stop stopColor="#67e8f9" /><stop offset="1" stopColor="#a78bfa" /></linearGradient>
              </defs>
              <path d="M24 166 C96 94 138 136 202 88 S320 56 388 112 486 154 566 82 690 62 790 96" fill="none" stroke="url(#article-line)" strokeWidth="5" strokeLinecap="round" />
              <rect x="188" y="96" width="116" height="42" rx="10" fill="#67e8f9" opacity=".12" stroke="#67e8f9" strokeOpacity=".45" />
              <rect x="540" y="76" width="132" height="52" rx="10" fill="#a78bfa" opacity=".12" stroke="#a78bfa" strokeOpacity=".45" />
              <text x="204" y="122" fill="#a5f3fc" fontSize="18" fontFamily="monospace">context</text>
              <text x="560" y="107" fill="#ddd6fe" fontSize="18" fontFamily="monospace">reaction</text>
            </svg>
          </Card>

          <div className="mt-10 space-y-10 rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            {article.contentSections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-2xl font-semibold tracking-tight text-white">{section.heading}</h2>
                {section.body.map((paragraph) => <p key={paragraph} className="mt-4 text-base leading-8 text-slate-400">{paragraph}</p>)}
              </section>
            ))}
          </div>

          <div className="mt-8"><DisclaimerCallout /></div>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-24">
          <Card className="p-5">
            <h2 className="font-semibold text-white">Table of Contents</h2>
            <div className="mt-4 grid gap-2">
              {article.contentSections.map((section) => <Link key={section.id} href={`#${section.id}`} className="rounded-xl px-3 py-2 text-sm text-slate-400 transition hover:bg-white/[0.05] hover:text-cyan-100">{section.heading}</Link>)}
            </div>
          </Card>
          <Card className="p-5">
            <h2 className="font-semibold text-white">Editorial Note</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">MSNRCore articles are written as educational market-structure notes. They are not trade recommendations, signals, or investment advice.</p>
          </Card>
        </aside>
      </div>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-semibold text-white">Related Articles</h2>
        <div className="grid gap-5 md:grid-cols-3">{related.map((item) => <BlogCard key={item.slug} article={item} />)}</div>
      </section>
    </Container>
  );
}
