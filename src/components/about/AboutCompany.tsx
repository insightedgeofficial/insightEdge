'use client';

import { SectionWrapper } from "../shared/SectionWrapper";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export function AboutCompany() {
  const { ref, animationClasses } = useScrollAnimation({
    threshold: 0.1,
    animationType: 'fade-up',
  });

  return (
    <SectionWrapper 
      className="relative overflow-hidden py-16 md:py-24 lg:py-28 px-4 md:px-8 bg-background"
    >
      <div 
        ref={ref} 
        className={cn("relative max-w-4xl mx-auto space-y-8", animationClasses)}
      >
        <h2 
          className="font-playful text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 text-center tracking-tight text-foreground"
        >
          About InsightEdge
        </h2>
        
        <div className="space-y-6 font-body text-center text-base md:text-lg lg:text-xl leading-relaxed text-foreground/90">
          <p>
            We live in a world that has learned to talk about mental health. What it hasn't learned yet, not fully, is how to listen.
          </p>
          <p>
            Insight Edge was created to close that gap. Not with campaigns. Not with hashtags. But with experience. With rooms full of real conversations. With tools that help people turn inward, without fear.
          </p>

          {/* Italicized Callout */}
          <div className="my-8 text-center">
            <p className="italic font-headline text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary">
              We are Experience Designers.
            </p>
          </div>

          <p>
            People don't just remember what they're told. They remember what they experience.
          </p>
          <p>
            Everything we build reflects the kind of work we believe in. Because at the heart of Insight Edge, it isn't just psychology. It's the belief that when people understand themselves better, they begin to live, lead, and connect differently.
          </p>
          <p>
            We build those conditions. And we train the next generation of psychologists to hold space for others with the same depth, skill, and care.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
