import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { MarketStructureDiagram } from "@/components/charts/visuals";

export default function NotFound() {
  return (
    <Container className="py-16 sm:py-24">
      <Card className="overflow-hidden p-6 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1fr] lg:items-center">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-cyan-200">404</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">Page Not Found</h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
              The page you requested does not exist or may have moved. Use the links below to continue studying MSNRCore concepts and articles.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/">Back to Home</ButtonLink>
              <ButtonLink href="/concepts" variant="secondary">Open Concepts</ButtonLink>
              <ButtonLink href="/blog" variant="secondary">Read Blog</ButtonLink>
            </div>
          </div>
          <MarketStructureDiagram />
        </div>
      </Card>
    </Container>
  );
}
