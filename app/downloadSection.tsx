"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2, Mail, UserRound } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PLAY_STORE_URL } from "./landing-content";

const downloadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
});

type Errors = Partial<Record<"name" | "email", string>>;

export function DownloadSection() {
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = downloadSchema.safeParse({ name: form.get("name"), email: form.get("email") });
    if (!parsed.success) {
      const nextErrors: Errors = {};
      parsed.error.issues.forEach((issue) => { const key = issue.path[0]; if (key === "name" || key === "email") nextErrors[key] = issue.message; });
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const response = await fetch("/api/public/download", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(parsed.data) });
      if (!response.ok) throw new Error("Request failed");
      setComplete(true);
      toast.success("You’re on the Umanage list", { description: "Opening Google Play for you now." });
      window.open(PLAY_STORE_URL, "_blank", "noopener,noreferrer");
    } catch {
      toast.error("We couldn’t submit your details", { description: "Please try again in a moment." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="download" className="section-space download-surface overflow-hidden">
      <div className="page-container relative z-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,.76fr)] lg:gap-20">
        <div className="reveal-section text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-4 py-2 text-xs font-bold uppercase tracking-widest"><CheckCircle2 className="size-4" /> Built for simpler days</span>
          <h2 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Ready to manage smarter?</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-primary-foreground/75">Join Umanage and simplify the way you manage your properties and services.</p>
          <div className="mt-10 grid max-w-xl grid-cols-2 gap-5 border-t border-primary-foreground/20 pt-6 sm:grid-cols-3">
            {['One clear view','Less daily admin','Built to scale'].map((item) => <p key={item} className="flex items-center gap-2 text-sm font-semibold"><CheckCircle2 className="size-4 shrink-0 text-download-accent" />{item}</p>)}
          </div>
        </div>
        <div className="download-form reveal-section">
          {complete ? (
            <div className="py-8 text-center"><span className="mx-auto grid size-14 place-items-center rounded-full bg-success-soft text-success"><CheckCircle2 className="size-7" /></span><h3 className="mt-5 font-display text-2xl font-bold text-foreground">You’re all set</h3><p className="mt-2 text-muted-foreground">Thanks for your interest in Umanage. Google Play has opened in a new tab.</p><Button asChild variant="outline" className="mt-6"><a href={PLAY_STORE_URL} target="_blank" rel="noreferrer">Open Google Play<ArrowRight /></a></Button></div>
          ) : (
            <><div><p className="text-sm font-bold uppercase tracking-widest text-primary">Get Umanage</p><h3 className="mt-2 font-display text-2xl font-bold text-foreground">Start managing with clarity</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Share your details and continue to Google Play.</p></div>
            <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">
              <div><label htmlFor="download-name" className="mb-2 block text-sm font-semibold text-foreground">Name</label><div className="relative"><UserRound className="input-icon" /><Input id="download-name" name="name" autoComplete="name" maxLength={100} placeholder="Enter your name" className="h-12 pl-11" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} /></div>{errors.name && <p id="name-error" className="mt-1.5 text-sm text-destructive">{errors.name}</p>}</div>
              <div><label htmlFor="download-email" className="mb-2 block text-sm font-semibold text-foreground">Email</label><div className="relative"><Mail className="input-icon" /><Input id="download-email" name="email" type="email" autoComplete="email" maxLength={255} placeholder="Enter your email" className="h-12 pl-11" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} /></div>{errors.email && <p id="email-error" className="mt-1.5 text-sm text-destructive">{errors.email}</p>}</div>
              <Button type="submit" variant="premium" size="xl" className="w-full" disabled={loading}>{loading ? <><Loader2 className="animate-spin" />Submitting…</> : <>Get Umanage<ArrowRight /></>}</Button>
              <p className="text-center text-xs leading-5 text-muted-foreground">By continuing, you agree to receive product updates from Umanage.</p>
            </form></>
          )}
        </div>
      </div>
    </section>
  );
}

export default DownloadSection;