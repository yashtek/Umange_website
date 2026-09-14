import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { legalContent } from "./landing-content";

export type LegalType = keyof typeof legalContent;

export function LegalModal({ type, open, onOpenChange }: { type: LegalType; open: boolean; onOpenChange: (open: boolean) => void }) {
  const content = legalContent[type];
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[88vh] w-[calc(100%-2rem)] max-w-3xl overflow-hidden rounded-lg border-border bg-background p-0 shadow-modal">
        <DialogHeader className="border-b border-border px-6 py-6 pr-14 text-left sm:px-8">
          <DialogTitle className="font-display text-2xl font-bold sm:text-3xl">{content.title}</DialogTitle>
          <DialogDescription className="mt-2 leading-6">Last updated: September 2026</DialogDescription>
        </DialogHeader>
        <div className="max-h-[calc(88vh-8rem)] overflow-y-auto px-6 py-7 sm:px-8">
          <p className="rounded-md border border-info-border bg-accent p-4 leading-7 text-accent-foreground">{content.intro}</p>
          <div className="mt-8 space-y-8">{content.sections.map((section) => <section key={section.title}><h3 className="font-display text-lg font-bold text-foreground">{section.title}</h3><p className="mt-2 leading-7 text-muted-foreground">{section.body}</p></section>)}</div>
        </div>
      </DialogContent>
    </Dialog>
  );
}