'use client';

import { SectionWrapper } from "../shared/SectionWrapper";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export function AboutHero() {
  const { ref, animationClasses } = useScrollAnimation({
    threshold: 0.1,
    animationType: 'fade-up',
  });

  return (
    <SectionWrapper className="relative bg-gradient-to-b from-primary/10 via-primary/5 to-background overflow-hidden !py-20 md:!py-28 lg:!py-36">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        {/* Neural curve patterns */}
        <svg className="absolute top-10 right-10 w-64 h-64 text-primary/10" viewBox="0 0 200 200">
          <path
            d="M20,100 Q60,40 100,100 T180,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.3"
          />
          <path
            d="M20,120 Q80,60 140,120"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.2"
          />
        </svg>
        {/* Blurred organic shapes */}
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div ref={ref} className={cn("relative text-center max-w-2xl mx-auto", animationClasses)}>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed tracking-tight" style={{ lineHeight: '1.8' }}>
          At InsightEdge, we're committed to fostering mental well-being and professional growth through a dual focus: empowering future mental health professionals and raising awareness within the broader community.
        </p>
      </div>
    </SectionWrapper>
  );
}
