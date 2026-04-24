import type { Metadata } from "next";
import { AlertTriangle, Bug, CheckCircle2, ShieldCheck, XCircle } from "lucide-react";
import { BugBountyForm } from "@/components/bug-bounty-form";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { DisclaimerCallout } from "@/components/ui/disclaimer-callout";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Bug Bounty",
  description: "Responsible disclosure and security report page for MSNRCore.",
};

const scope = ["Website vulnerabilities", "Authentication bugs if added in future", "XSS", "Broken access control", "Sensitive data exposure", "Dependency vulnerabilities", "Misconfiguration"];
const outOfScope = ["Spam", "Social engineering", "DDoS", "Physical attacks", "Automated noisy scans", "Fake reports without proof"];
const rules = ["Do not harm users or disrupt availability.", "Do not access, modify, delete, or exfiltrate data.", "Provide clear reproduction steps and affected URLs.", "Report privately and allow reasonable time for review."];

export default function BugBountyPage() {
  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading eyebrow="Security" title="Responsible Disclosure & Bug Bounty" description="MSNRCore welcomes responsible security reports that help protect learners and improve the platform." />
      <div className="grid gap-6 lg:grid-cols-[.8fr_1fr] lg:items-start">
        <div className="space-y-6">
          <Card className="p-6">
            <ShieldCheck className="h-7 w-7 text-cyan-200" />
            <h2 className="mt-4 text-2xl font-semibold text-white">Responsible disclosure</h2>
            <p className="mt-3 leading-8 text-slate-400">If you find a legitimate vulnerability, document it carefully and submit a private report using the form. Reports should be safe, reproducible, and focused on protecting users.</p>
          </Card>
          <SecurityList title="In Scope" items={scope} icon="check" />
          <SecurityList title="Out of Scope" items={outOfScope} icon="x" />
          <SecurityList title="Rules" items={rules} icon="alert" />
          <DisclaimerCallout text="MSNRCore is currently an educational website. This page is for responsible disclosure only and does not guarantee monetary rewards." />
        </div>
        <BugBountyForm />
      </div>
    </Container>
  );
}

function SecurityList({ title, items, icon }: { title: string; items: string[]; icon: "check" | "x" | "alert" }) {
  const Icon = icon === "check" ? CheckCircle2 : icon === "x" ? XCircle : AlertTriangle;
  const color = icon === "check" ? "text-emerald-200" : icon === "x" ? "text-red-200" : "text-amber-200";
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3">
        <Icon className={`h-5 w-5 ${color}`} />
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => <li key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/35 p-3 text-sm text-slate-300"><Bug className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />{item}</li>)}
      </ul>
    </Card>
  );
}
