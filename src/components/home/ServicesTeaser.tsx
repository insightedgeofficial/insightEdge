'use client';

import { SectionWrapper } from "../shared/SectionWrapper";
import { ServiceCardStack } from "./ServiceCardStack";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export function ServicesTeaser() {
  const { ref, animationClasses } = useScrollAnimation({
    threshold: 0.1,
    animationType: 'fade-up',
  });

  return (
    <SectionWrapper id="services" className="bg-sage-mist text-still-ground py-16 md:py-24 overflow-hidden">
      <div ref={ref} className={cn(animationClasses, "space-y-10 md:space-y-12")}>
        {/* Header Section matching exact design */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 text-xs md:text-sm tracking-widest uppercase text-still-ground/60 font-semibold">
            <span className="w-8 h-[1px] bg-still-ground/30" />
            <span>WHAT WE OFFER</span>
            <span className="w-8 h-[1px] bg-still-ground/30" />
          </div>
          
          <h2 
            className="font-playful text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-still-ground"
            style={{ letterSpacing: '-0.02em' }}
          >
            Our Services
          </h2>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-still-ground/80 leading-relaxed font-body">
            Tailored programs to bring psychological insights into your world.
          </p>
        </div>

        {/* Service Card Stack */}
        <div className="transition-all duration-700 ease-out">
          <ServiceCardStack />
        </div>
      </div>
    </SectionWrapper>
  );
}
