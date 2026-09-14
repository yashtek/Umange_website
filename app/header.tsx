"use client";

import { useEffect, useState } from "react";
import { Download, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { BrandLogo } from "./brandLogo";
import { navigation } from "./landing-content";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-40 transition-all duration-300", scrolled ? "border-b border-border/70 bg-background/92 py-2 shadow-header backdrop-blur-xl" : "py-4")}>
      <div className="page-container grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
        <BrandLogo compact={scrolled} />
        <nav className="hidden items-center justify-center gap-7 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.href} href={item.href} className="nav-link">{item.label}</a>)}
        </nav>
        <Button asChild className="hidden lg:inline-flex" variant="premium" size="lg">
          <a href="#download"><Download />Download app</a>
        </Button>
        <Sheet>
          <SheetTrigger render={<Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation"><Menu /></Button>} />
          <SheetContent className="w-[min(88vw,22rem)] border-l-border bg-background p-7">
            <SheetHeader className="text-left">
              <SheetTitle><BrandLogo /></SheetTitle>
              <SheetDescription>Property management, made simple.</SheetDescription>
            </SheetHeader>
            <nav className="mt-10 flex flex-col" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <SheetClose key={item.href} render={<a href={item.href} className="border-b border-border py-4 text-base font-semibold text-foreground transition-colors hover:text-primary">{item.label}</a>} />
              ))}
            </nav>
            <SheetClose render={<a href="#download" className="mt-8 inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-2.5 text-sm font-medium text-primary-foreground shadow-brand transition-all hover:bg-primary-strong"><Download />Download Umanage</a>} />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Header;