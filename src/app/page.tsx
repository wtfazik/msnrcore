import Link from "next/link";
import { ArrowRight, BookOpen, Layers, LineChart, ShieldCheck } from "lucide-react";
import { CandlestickMockChart } from "@/components/charts/candlestick-mock-chart";
import { FVGZoneVisual, LiquiditySweepVisual, MarketStructureDiagram } from "@/components/charts/visuals";
import { BlogCard } from "@/components/blog-card";
import { ConceptCard } from "@/components/concept-card";
import { Accordion } from "@/components/ui/accordion";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { DisclaimerCallout } from "@/components/ui/disclaimer-callout";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { articles } from "@/data/articles";
import { concepts } from "@/data/concepts";
import { faqItems } from "@/data/faq";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-cyan-100">Educational platform</div>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">Decode Market Structure With Precision.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">MSNRCore helps traders study SNR, MSNR, SMC, ICT, liquidity, order blocks, FVGs, and price action through clear explanations and chart-focused analysis.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><ButtonLink href="/concepts">Explore Concepts</ButtonLink><ButtonLink href="/blog" variant="secondary">Read Blog</ButtonLink></div>
            <div className="mt-8"><DisclaimerCallout /></div>
          </div>
          <CandlestickMockChart />
        </Container>
      </section>
      <MotionSection><Container><SectionHeading eyebrow="What is MSNRCore" title="A clean learning hub for serious chart analysis" description="MSNRCore teaches market structure, support and resistance, liquidity, and smart money concepts without signals, hype, or profit promises." /><div className="grid gap-5 md:grid-cols-3">{[{ icon: Layers, title: "Structured Concepts", text: "Each topic is explained through context, psychology, identification, and mistakes." }, { icon: LineChart, title: "Chart-First Visuals", text: "Custom SVG diagrams keep the platform analytical and focused on price behavior." }, { icon: ShieldCheck, title: "Education Only", text: "No brokerage services, no fake earnings, and no financial advice." }].map((item) => <Card key={item.title} className="p-6"><item.icon className="h-6 w-6 text-cyan-200" /><h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p></Card>)}</div></Container></MotionSection>
      <MotionSection><Container><SectionHeading eyebrow="Core Concepts" title="Start with the language of structure" description="Preview foundational and advanced concepts, then open the full library for filtering and search." /><div className="grid gap-5 md:grid-cols-3">{concepts.slice(0, 6).map((concept) => <ConceptCard key={concept.slug} concept={concept} />)}</div><div className="mt-8 text-center"><ButtonLink href="/concepts" variant="secondary">Open Full Library</ButtonLink></div></Container></MotionSection>
      <MotionSection><Container><div className="grid gap-8 lg:grid-cols-2 lg:items-center"><SectionHeading eyebrow="Structure Visual" title="Study swings, breaks, and reactions" description="Market structure turns raw candles into a sequence of highs, lows, shifts, and decision points." /><MarketStructureDiagram /></div></Container></MotionSection>
      <MotionSection><Container><SectionHeading eyebrow="Liquidity & SNR" title="Map levels with liquidity context" description="The strongest educational reads connect zones, sweeps, displacement, and imbalance instead of isolated lines." /><div className="grid gap-6 lg:grid-cols-2"><LiquiditySweepVisual /><FVGZoneVisual /></div></Container></MotionSection>
      <MotionSection><Container><SectionHeading eyebrow="Learning Paths" title="Follow a structured progression" description="Begin with clean foundations, then move into intermediate structure and advanced liquidity models." /><div className="grid gap-5 md:grid-cols-3">{["Beginner Path", "Intermediate Path", "Advanced Path"].map((path, index) => <Card key={path} className="p-6"><span className="font-mono text-sm text-cyan-200">0{index + 1}</span><h3 className="mt-4 text-xl font-semibold text-white">{path}</h3><p className="mt-3 text-sm leading-7 text-slate-400">A guided module sequence with working links to each concept page.</p><ButtonLink href="/learning-paths" variant="secondary" className="mt-6">Start Learning</ButtonLink></Card>)}</div></Container></MotionSection>
      <MotionSection><Container><SectionHeading eyebrow="Strategies" title="Educational frameworks, not signals" description="Study how concepts can be combined into repeatable analysis processes." /><Card className="p-6"><div className="grid gap-6 lg:grid-cols-[1fr_.8fr] lg:items-center"><div><h3 className="text-2xl font-semibold text-white">MSNRCore Structure Model</h3><p className="mt-3 text-sm leading-7 text-slate-400">Combine MSNR zones, liquidity, market structure shift, and rejection blocks into a documented study plan.</p><ButtonLink href="/strategies" className="mt-6">Open Strategy Frameworks</ButtonLink></div><MarketStructureDiagram /></div></Card></Container></MotionSection>
      <MotionSection><Container><SectionHeading eyebrow="Research Notes" title="Latest educational articles" description="Readable guides for learners who want professional market structure education." /><BlogCard article={articles[0]} featured /><div className="mt-5 grid gap-5 md:grid-cols-3">{articles.slice(1, 4).map((article) => <BlogCard key={article.slug} article={article} />)}</div><div className="mt-8 text-center"><ButtonLink href="/blog" variant="secondary">Read All Articles</ButtonLink></div></Container></MotionSection>
      <MotionSection><Container><SectionHeading eyebrow="FAQ" title="Common learner questions" /><div className="mx-auto max-w-3xl"><Accordion items={faqItems.slice(0, 5)} /><div className="mt-8 text-center"><ButtonLink href="/faq" variant="secondary">Open Full FAQ</ButtonLink></div></div></Container></MotionSection>
      <MotionSection><Container><Card className="p-8 text-center sm:p-12"><BookOpen className="mx-auto h-9 w-9 text-cyan-200" /><h2 className="mt-5 text-3xl font-semibold text-white">Build a cleaner chart-reading process.</h2><p className="mx-auto mt-4 max-w-2xl text-slate-400">Explore concepts, follow learning paths, and read structured research notes without hype or signal-selling.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><ButtonLink href="/learning-paths">Start Learning</ButtonLink><Link href="/disclaimer" className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-slate-300 hover:text-white">Read Disclaimer <ArrowRight className="h-4 w-4" /></Link></div></Card></Container></MotionSection>
    </>
  );
}
