import { ArrowDown, Building2, CheckCircle2, Download, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { dashboardImage } from "./landing-content";
import { PhoneMockup } from "./phoneMockup";

export function Hero() {
  return (
    <section id="home" className="hero-surface relative overflow-hidden pt-28 sm:pt-32">
      <div className="hero-grid" aria-hidden="true" />
      <div className="page-container relative z-10 grid min-h-[calc(100svh-2rem)] items-center gap-12 pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(380px,.82fr)] lg:gap-10 lg:pb-20">
        <div className="max-w-3xl animate-fade-up">
          <div className="eyebrow"><span className="size-2 rounded-full bg-success" /> One place for every property</div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.04] text-foreground sm:text-6xl lg:text-7xl xl:text-[5rem]">Manage everything.<br /><span className="text-primary">From one place.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">Umanage makes it simple to manage PGs, flats, hotels and property services — all from one powerful platform.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="premium" size="xl"><a href="#download"><Download />Download Umanage</a></Button>
            <Button asChild variant="outline" size="xl"><a href="#how-it-works">See how it works<ArrowDown /></a></Button>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-6">
            {[['PGs','Residents'],['Flats','Rentals'],['Hotels','Operations']].map(([title,label]) => (
              <div key={title}><p className="font-display text-lg font-bold text-foreground sm:text-xl">{title}</p><p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{label}</p></div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] animate-fade-up-delayed">
          <div className="hero-glow" aria-hidden="true" />
          <div className="relative mx-auto w-[min(74vw,20.5rem)] lg:w-[20.5rem]">
            <PhoneMockup src={dashboardImage} alt="Umanage app dashboard showing properties, residents and collections" priority className="aspect-[768/1456] w-full shadow-phone" />
            <div className="floating-card -left-16 top-[20%] hidden sm:flex"><span className="icon-chip"><Building2 /></span><span><strong>8 properties</strong><small>All in one view</small></span></div>
            <div className="floating-card -right-20 bottom-[20%] hidden sm:flex"><span className="icon-chip icon-chip-success"><UsersRound /></span><span><strong>124 residents</strong><small>Organized & updated</small></span></div>
            <div className="status-pill"><CheckCircle2 />Everything is on track</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;