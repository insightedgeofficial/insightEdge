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
    <section className="w-full bg-sage-mist text-still-ground py-8 md:py-10 px-6 md:px-12 border-y border-still-ground/15">
      <div 
        ref={ref} 
        className={cn(
          "relative text-center max-w-4xl mx-auto font-body",
          animationClasses
        )}
      >
        <p 
          className="text-base md:text-lg lg:text-xl leading-relaxed font-normal text-still-ground/90"
          style={{ lineHeight: '1.65' }}
        >
          At InsightEdge, we're committed to fostering mental well-being and professional growth through a dual focus: empowering future mental health professionals and raising awareness within the broader community.
        </p>
      </div>
    </section>
  );
}
