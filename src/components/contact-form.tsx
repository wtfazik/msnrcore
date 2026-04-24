"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    const nextErrors: Record<string, string> = {};
    if (name.length < 2) nextErrors.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (message.length < 20) nextErrors.message = "Message must be at least 20 characters.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("error");
      return;
    }
    // Backend integration can be added here with fetch('/api/contact', { method: 'POST', body: JSON.stringify(...) }).
    event.currentTarget.reset();
    setStatus("success");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <div><label className="mb-2 block text-sm text-slate-300" htmlFor="name">Name</label><Input id="name" name="name" autoComplete="name" />{errors.name ? <p className="mt-2 text-sm text-red-300">{errors.name}</p> : null}</div>
      <div><label className="mb-2 block text-sm text-slate-300" htmlFor="email">Email</label><Input id="email" name="email" type="email" autoComplete="email" />{errors.email ? <p className="mt-2 text-sm text-red-300">{errors.email}</p> : null}</div>
      <div><label className="mb-2 block text-sm text-slate-300" htmlFor="message">Message</label><Textarea id="message" name="message" />{errors.message ? <p className="mt-2 text-sm text-red-300">{errors.message}</p> : null}</div>
      {status === "success" ? <p className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-3 text-sm text-emerald-100">Message validated successfully. This frontend form is ready for backend integration.</p> : null}
      {status === "error" ? <p className="rounded-2xl border border-red-300/20 bg-red-300/10 p-3 text-sm text-red-100">Please fix the highlighted fields.</p> : null}
      <Button type="submit" className="w-full">Validate Message</Button>
    </form>
  );
}
