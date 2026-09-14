import { ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "./brandLogo";
import { footerLinks, PLAY_STORE_URL } from "./landing-content";

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="page-container py-14 lg:py-16">
        <div className="grid gap-10 border-b border-footer-border pb-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div><BrandLogo inverse /><p className="mt-5 max-w-md leading-7 text-footer-muted">Simplifying property and service management, one place at a time.</p></div>
          <Button asChild variant="footer" size="lg"><a href={PLAY_STORE_URL} target="_blank" rel="noreferrer"><Download />Get it on Google Play<ArrowUpRight /></a></Button>
        </div>
        <div className="grid gap-6 pt-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <p className="text-sm text-footer-muted">© {new Date().getFullYear()} Umanage. All rights reserved.</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer navigation">
            {footerLinks.map((link) => <a key={link.label} href={link.href} className="footer-link">{link.label}</a>)}
          </nav>
        </div>
      </div>
    </footer>
  );
}