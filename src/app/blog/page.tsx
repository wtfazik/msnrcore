import type { Metadata } from "next";
import { BlogLibrary } from "@/components/blog-library";
import { BlogCard } from "@/components/blog-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { articles } from "@/data/articles";

export const metadata: Metadata = { title: "Blog", description: "MSNRCore educational articles about SMC, ICT, liquidity, FVGs, order blocks, and trading styles." };

export default function BlogPage() {
  return <Container className="py-16 sm:py-20"><SectionHeading eyebrow="Blog" title="Research-style trading education" description="Minimal, readable articles for market structure learners." /><BlogCard article={articles[0]} featured /><div className="mt-10"><BlogLibrary /></div></Container>;
}
