'use client';

import { SectionWrapper } from "../shared/SectionWrapper";
import { ServiceCardStack } from "./ServiceCardStack";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function ServicesTeaser() {
  const { ref, animationClasses } = useScrollAnimation({
    threshold: 0.1,
    animationType: 'fade-up',
  });
  const [underlineVisible, setUnderlineVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setUnderlineVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SectionWrapper id="services" className="bg-still-deep text-morning-quiet">
      <div ref={ref} className={cn(animationClasses, "space-y-8 md:space-y-10")}>
        {/* Enhanced Heading Section */}
        <div className="text-center space-y-3">
          <h2 
            className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Our Services
          </h2>
          <div className="relative inline-block">
            <div 
              className={cn(
                "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full",
                "transition-all duration-1000 ease-out",
                underlineVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              )}
            />
          </div>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-morning-quiet/80 leading-relaxed">
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
