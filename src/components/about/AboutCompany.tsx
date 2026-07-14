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
      className="relative overflow-hidden"
      style={{ 
        backgroundColor: '#F9F7F2',
        paddingTop: '40px',
        paddingBottom: '40px',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      <div 
        ref={ref} 
        className={cn("relative max-w-4xl mx-auto", animationClasses)}
      >
        <h2 
          className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 text-center tracking-tight text-foreground"
        >
          About InsightEdge
        </h2>
        <div className="space-y-6 md:space-y-8 font-body">
          <p className="text-base md:text-lg lg:text-xl leading-[1.6] font-light text-foreground">
            We live in a world that has learned to talk about mental health. What it hasn't learned yet, not fully, is how to listen.
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-[1.6] font-light text-foreground">
            Insight Edge was created to close that gap. Not with campaigns. Not with hashtags. But with experience. With rooms full of real conversations. With tools that help people turn inward, without fear.
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-[1.6] font-semibold text-foreground">
            We are Experience Designers.
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-[1.6] font-light text-foreground">
            People don't just remember what they're told. They remember what they experience.
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-[1.6] font-light text-foreground">
            Everything we build reflects the kind of work we believe in. Because at the heart of Insight Edge, it isn't just psychology. It's the belief that when people understand themselves better, they begin to live, lead, and connect differently.
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-[1.6] font-light text-foreground">
            We build those conditions. And we train the next generation of psychologists to hold space for others with the same depth, skill, and care.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

