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
import { articles, getArticle, getRelatedArticles } from "@/data/articles";

export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const article = getArticle(params.slug); return article ? { title: article.title, description: article.excerpt } : { title: "Article Not Found" }; }

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();
  const related = getRelatedArticles(article.relatedArticles);
  return <Container className="py-12 sm:py-16"><ButtonLink href="/blog" variant="ghost" className="mb-8"><ArrowLeft className="h-4 w-4" /> Back to Blog</ButtonLink><article className="mx-auto max-w-4xl"><div className="flex flex-wrap items-center gap-3"><Badge>{article.category}</Badge><span className="text-xs text-slate-500">{article.date}</span><span className="text-xs text-slate-500">{article.readingTime}</span></div><h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">{article.title}</h1><p className="mt-5 text-lg leading-8 text-slate-400">{article.subtitle}</p><Card className="mt-8 p-5"><h2 className="font-semibold text-white">Table of Contents</h2><div className="mt-4 grid gap-2">{article.contentSections.map((section) => <Link key={section.id} href={`#${section.id}`} className="text-sm text-slate-400 hover:text-cyan-100">{section.heading}</Link>)}</div></Card><div className="mt-8 space-y-8">{article.contentSections.map((section) => <section key={section.id} id={section.id} className="scroll-mt-24"><h2 className="text-2xl font-semibold text-white">{section.heading}</h2>{section.body.map((paragraph) => <p key={paragraph} className="mt-4 leading-8 text-slate-400">{paragraph}</p>)}</section>)}</div><div className="mt-10"><DisclaimerCallout /></div></article><section className="mt-16"><h2 className="mb-6 text-2xl font-semibold text-white">Related Articles</h2><div className="grid gap-5 md:grid-cols-3">{related.map((item) => <BlogCard key={item.slug} article={item} />)}</div></section></Container>;
}
