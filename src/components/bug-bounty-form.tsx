"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";

const severityOptions = ["Low", "Medium", "High", "Critical"];

export function BugBountyForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const vulnerabilityType = String(form.get("vulnerabilityType") || "").trim();
    const affectedUrl = String(form.get("affectedUrl") || "").trim();
    const steps = String(form.get("steps") || "").trim();
    const expected = String(form.get("expected") || "").trim();
    const actual = String(form.get("actual") || "").trim();
    const nextErrors: Record<string, string> = {};

    if (name.length < 2) nextErrors.name = "Enter your name or researcher handle.";
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (vulnerabilityType.length < 3) nextErrors.vulnerabilityType = "Describe the vulnerability type.";
    if (!/^https?:\/\//i.test(affectedUrl)) nextErrors.affectedUrl = "Enter a full affected URL starting with http or https.";
    if (steps.length < 40) nextErrors.steps = "Provide clear reproduction steps with at least 40 characters.";
    if (expected.length < 10) nextErrors.expected = "Describe the expected secure behavior.";
    if (actual.length < 10) nextErrors.actual = "Describe what actually happened.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("error");
      return;
    }

    // Backend integration can be added here when a private disclosure inbox or API is available.
    event.currentTarget.reset();
    setStatus("success");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 sm:p-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name}><Input name="name" autoComplete="name" /></Field>
        <Field label="Email" error={errors.email}><Input name="email" type="email" autoComplete="email" /></Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Vulnerability Type" error={errors.vulnerabilityType}><Input name="vulnerabilityType" placeholder="XSS, dependency issue, misconfiguration..." /></Field>
        <div>
          <label className="mb-2 block text-sm text-slate-300" htmlFor="severity">Severity</label>
          <select id="severity" name="severity" className="min-h-12 w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 text-sm text-white focus:border-cyan-300/50 focus:outline-none">
            {severityOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </div>
      </div>
      <Field label="Affected URL" error={errors.affectedUrl}><Input name="affectedUrl" placeholder="https://msnrcore.vercel.app/..." /></Field>
      <Field label="Steps to Reproduce" error={errors.steps}><Textarea name="steps" /></Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Expected Behavior" error={errors.expected}><Textarea name="expected" /></Field>
        <Field label="Actual Behavior" error={errors.actual}><Textarea name="actual" /></Field>
      </div>
      <Field label="Optional Proof-of-Concept"><Textarea name="poc" placeholder="Add safe, non-destructive proof details only." /></Field>
      {status === "success" ? <p className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-3 text-sm text-emerald-100">Report validated successfully. A private backend can be connected here for secure submission handling.</p> : null}
      {status === "error" ? <p className="rounded-2xl border border-red-300/20 bg-red-300/10 p-3 text-sm text-red-100">Please fix the highlighted fields before submitting.</p> : null}
      <Button type="submit" className="w-full">Submit Responsible Disclosure</Button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-slate-300">{label}</label>
      {children}
      {error ? <p className="mt-2 text-sm text-red-300">{error}</p> : null}
    </div>
  );
}
