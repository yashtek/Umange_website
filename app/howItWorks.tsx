"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { appSteps } from "./landing-content";
import { PhoneMockup } from "./phoneMockup";
import { cn } from "@/lib/utils";


export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep((prev) =>
      Math.min(prev + 1, appSteps.length - 1)
    );
  };

  const previousStep = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section
      id="how-it-works"
      className="section-space overflow-hidden bg-background"
    >
      <div className="page-container">
        {/* Header */}
        <div className="text-center">
          <span className="section-kicker">
            A simpler workflow
          </span>

          <h2 className="section-title mx-auto mt-4 max-w-3xl">
            Everything you need, right at your fingertips
          </h2>

          <p className="section-copy mx-auto mt-5 max-w-2xl">
            See how Umanage simplifies your everyday management
            workflow.
          </p>
        </div>

        {/* Main slider */}
        <div className="relative mt-16 min-h-[650px] overflow-hidden">
          {/* Slides */}
          <div className="relative h-full min-h-[650px]">
            {appSteps.map((item, index) => {
              const position = index - activeStep;

              return (
                <div
                  key={item.number}
                  className={cn(
                    "absolute inset-0",
                    "transition-all duration-700",
                    "ease-[cubic-bezier(0.22,1,0.36,1)]",

                    // Active
                    position === 0 &&
                      "translate-x-0 opacity-100",

                    // Previous slides
                    position < 0 &&
                      "-translate-x-full opacity-0",

                    // Next slides
                    position > 0 &&
                      "translate-x-full opacity-0"
                  )}
                >
                  <div className="grid h-full items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
                    {/* LEFT CONTENT */}
                    <div className="relative">
                      <div className="border-l-2 border-primary py-6 pl-8">
                        <div className="flex items-center gap-4">
                          <span className="step-number">
                            {item.number}
                          </span>

                          <span className="h-px w-12 bg-primary" />
                        </div>

                        <h3 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                          {item.title}
                        </h3>

                        <p className="mt-5 max-w-md text-lg leading-8 text-muted-foreground">
                          {item.description}
                        </p>

                        <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-primary">
                          <span className="grid size-6 place-items-center rounded-full bg-accent">
                            <Check className="size-3.5" />
                          </span>

                          Step {index + 1} of {appSteps.length}
                        </div>
                      </div>
                    </div>

                    {/* RIGHT PHONE */}
                    <div className="flex items-center justify-center">
                      <div className="relative flex h-[550px] w-full max-w-[32rem] items-center justify-center">
                        {/* Background */}
                        <div className="absolute inset-x-0 top-1/2 h-[88%] -translate-y-1/2 rounded-2xl bg-[#EFF7FF]" />

                        {/* Glow */}
                        <div
                          className="
                            absolute
                            left-1/2
                            top-1/2
                            size-[24rem]
                            -translate-x-1/2
                            -translate-y-1/2
                            rounded-full
                            bg-primary/10
                            blur-3xl
                          "
                        />

                        <PhoneMockup
                          src={item.image}
                          alt={item.alt}
                          priority={index === 0}
                          className="
                            relative
                            z-10
                            h-[88%]
                            max-h-[34rem]
                            w-auto
                            shadow-2xl
                          "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ===============================
              PREVIOUS BUTTON
          ================================ */}
          <button
            type="button"
            onClick={previousStep}
            disabled={activeStep === 0}
            aria-label="Previous step"
            className="
              absolute
              bottom-4
              left-0
              z-30
              grid
              size-12
              place-items-center
              rounded-full
              border
              border-border
              bg-background
              shadow-sm
              transition-all
              hover:border-primary
              hover:bg-primary
              hover:text-primary-foreground
              disabled:pointer-events-none
              disabled:opacity-30
            "
          >
            <ArrowLeft className="size-5" />
          </button>

          {/* ===============================
              NEXT BUTTON
          ================================ */}
          <button
            type="button"
            onClick={nextStep}
            disabled={activeStep === appSteps.length - 1}
            aria-label="Next step"
            className="
              absolute
              bottom-4
              right-0
              z-30
              grid
              size-12
              place-items-center
              rounded-full
              bg-primary
              text-primary-foreground
              shadow-lg
              transition-all
              hover:scale-105
              hover:bg-primary/90
              disabled:pointer-events-none
              disabled:opacity-30
            "
          >
            <ArrowRight className="size-5" />
          </button>

          {/* ===============================
              CENTER PROGRESS
          ================================ */}
          <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
            {appSteps.map((item, index) => (
              <button
                key={item.number}
                type="button"
                onClick={() => setActiveStep(index)}
                aria-label={`Go to step ${index + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  activeStep === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/20 hover:bg-primary/40"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;