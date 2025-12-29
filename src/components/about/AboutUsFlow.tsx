'use client';

import { SectionWrapper } from "../shared/SectionWrapper";
import { Search, Palette, Rocket, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";

const flowSteps = [
  {
    icon: Search,
    title: 'Research',
    description: 'Grounded in evidence-based psychological frameworks and behavioral science',
    color: 'from-primary/20 to-primary/10',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Creative, experiential approaches that make learning engaging and memorable',
    color: 'from-accent/20 to-accent/10',
  },
  {
    icon: Rocket,
    title: 'Implementation',
    description: 'Practical programs delivered in real-world contexts: schools, workplaces, communities',
    color: 'from-primary/30 to-accent/30',
  },
  {
    icon: Target,
    title: 'Impact',
    description: 'Measurable outcomes: empowered individuals, stronger communities, normalized mental health',
    color: 'from-accent/30 to-primary/20',
  },
];

export function AboutUsFlow() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    animationType: 'fade-up',
  });

  return (
    <SectionWrapper className="relative bg-gradient-to-b from-background via-secondary/20 to-background overflow-hidden !py-20 md:!py-28 lg:!py-32">
      {/* Grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div ref={sectionRef} className="relative">
        <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-center tracking-tight">
          About Us
        </h2>
        <p className="text-center text-muted-foreground mb-20 md:mb-24 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Our dual-focus model transforms psychological insight into real-world impact
        </p>
        
        <div className="max-w-6xl mx-auto">
          {/* Flow Diagram */}
          <div className="relative">
            {/* Connecting Line - Horizontal for mobile, curved for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary/60 transform -translate-y-1/2 z-0">
              <div 
                className={cn(
                  "h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out",
                  isVisible ? "w-full" : "w-0"
                )}
                style={{ transitionDelay: '300ms' }}
              />
            </div>
            
            {/* Mobile connecting line */}
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary/60 transform -translate-x-1/2 z-0">
              <div 
                className={cn(
                  "w-full bg-gradient-to-b from-primary to-accent transition-all duration-1000 ease-out",
                  isVisible ? "h-full" : "h-0"
                )}
                style={{ transitionDelay: '300ms' }}
              />
            </div>

            {/* Steps */}
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 z-10">
              {flowSteps.map((step, index) => (
                <FlowStep
                  key={step.title}
                  step={step}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function FlowStep({
  step,
  index,
  isVisible,
}: {
  step: typeof flowSteps[0];
  index: number;
  isVisible: boolean;
}) {
  const [stepVisible, setStepVisible] = useState(false);
  const Icon = step.icon;

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setStepVisible(true);
      }, index * 200 + 400);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);

  return (
    <Card
      className={cn(
        "relative bg-background/80 backdrop-blur-sm border-2 transition-all duration-700 ease-out text-center shadow-sm hover:shadow-md",
        stepVisible
          ? "opacity-100 translate-y-0 scale-100 border-primary/20"
          : "opacity-0 translate-y-8 scale-95 border-transparent"
      )}
      style={{ transitionDelay: `${index * 200 + 400}ms` }}
    >
      <CardContent className="pt-8 pb-8 px-6">
        {/* Icon Circle */}
        <div
          className={cn(
            "relative mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br flex items-center justify-center transition-all duration-500 ease-out",
            step.color,
            stepVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
          )}
          style={{ transitionDelay: `${index * 200 + 600}ms` }}
        >
          <Icon className="h-8 w-8 text-primary" />
        </div>

        {/* Title */}
        <h3 className="font-headline text-xl font-bold mb-2">{step.title}</h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {step.description}
        </p>

        {/* Arrow for mobile */}
        {index < flowSteps.length - 1 && (
          <div className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-accent" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-accent" />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

