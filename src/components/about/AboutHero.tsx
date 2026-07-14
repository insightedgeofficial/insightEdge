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
    <SectionWrapper className="relative overflow-hidden bg-still-ground text-morning-quiet" style={{ 
      paddingTop: '40px',
      paddingBottom: '40px',
      paddingLeft: '20px',
      paddingRight: '20px',
    }}>
      <div 
        ref={ref} 
        className={cn(
          "relative text-center max-w-3xl mx-auto font-body",
          animationClasses
        )}
      >
        <p 
          className="text-base md:text-lg lg:text-xl leading-relaxed font-light text-morning-quiet"
          style={{ lineHeight: '1.6' }}
        >
          At InsightEdge, we're committed to fostering mental well-being and professional growth through a dual focus: empowering future mental health professionals and raising awareness within the broader community.
        </p>
      </div>
    </SectionWrapper>
  );
}
