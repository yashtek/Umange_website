import Link from "next/link";
import BrandLogo from "./brandLogo";
import { legalContent, type LegalType } from "./landing-content";

type LegalPageProps = { type: LegalType };

export default function LegalPage({ type }: LegalPageProps) {
  const content = legalContent[type];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background/90">
        <div className="page-container flex h-20 items-center justify-between">
          <BrandLogo />
          <Link href="/" className="text-sm font-bold text-muted-foreground transition-colors hover:text-primary">Back to home</Link>
        </div>
      </header>
      <main className="page-container max-w-4xl py-16 sm:py-24">
        <p className="section-kicker">Umanage legal</p>
        <h1 className="section-title mt-4">{content.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: September 2026</p>
        <div className="mt-10 rounded-lg border border-info-border bg-accent p-5 leading-7 text-accent-foreground">{content.intro}</div>
        <div className="mt-12 space-y-10">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-xl font-bold text-foreground">{section.title}</h2>
              <p className="mt-3 max-w-3xl leading-8 text-muted-foreground">{section.body}</p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
