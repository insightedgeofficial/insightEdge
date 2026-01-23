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
    description: 'Evidence-based frameworks and behavioral science',
    color: 'from-primary/20 to-primary/10',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Creative approaches for engaging learning experiences',
    color: 'from-accent/20 to-accent/10',
  },
  {
    icon: Rocket,
    title: 'Execute',
    description: 'Programs delivered across schools, workplaces, and communities',
    color: 'from-primary/30 to-accent/30',
  },
  {
    icon: Target,
    title: 'Impact',
    description: 'Empowered individuals and stronger communities',
    color: 'from-accent/30 to-primary/20',
  },
];

export function AboutUsFlow() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
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
      <div ref={sectionRef} className="relative">
        <h2 
          className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center tracking-tight text-foreground"
        >
          About Us
        </h2>
        <p 
          className="text-center mb-12 md:mb-16 max-w-2xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed font-light text-muted-foreground"
        >
          Our dual-focus model transforms psychological insight into real-world impact
        </p>
        
        <div className="max-w-5xl mx-auto">
          {/* Flow Diagram */}
          <div className="relative">
            {/* Connecting Line - Horizontal for desktop */}
            <div className="hidden md:flex absolute top-1/2 left-0 right-0 h-1 bg-muted transform -translate-y-1/2 z-0 items-center">
              <div 
                className={cn(
                  "h-full bg-primary transition-all duration-1000 ease-out",
                  isVisible ? "w-full" : "w-0"
                )}
                style={{ transitionDelay: '300ms' }}
              />
            </div>
            
            {/* Mobile connecting line */}
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-muted transform -translate-x-1/2 z-0 flex items-center justify-center">
              <div 
                className={cn(
                  "w-full bg-primary transition-all duration-1000 ease-out",
                  isVisible ? "h-full" : "h-0"
                )}
                style={{ transitionDelay: '300ms' }}
              />
            </div>

            {/* Steps */}
            <div className="relative flex flex-col md:flex-row gap-8 md:gap-4 z-10">
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
        "relative backdrop-blur-sm border transition-all duration-700 ease-out text-center shadow-sm hover:shadow-md bg-card border-border flex flex-col",
        stepVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      )}
      style={{ 
        transitionDelay: `${index * 200 + 400}ms`,
        borderRadius: '16px',
        flex: '1 1 0%',
        minHeight: '200px',
        height: '100%',
      }}
    >
      <CardContent className="p-0 flex-1 flex flex-col justify-center items-center py-6 px-4 md:px-5 overflow-hidden min-h-full">
        {/* Icon Circle */}
        <div
          className={cn(
            "relative mx-auto mb-3 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-500 ease-out bg-secondary flex-shrink-0",
            stepVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
          )}
          style={{ transitionDelay: `${index * 200 + 600}ms` }}
        >
          <Icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
        </div>

        {/* Title */}
        <h3 
          className="font-headline text-base md:text-lg font-bold mb-2 text-foreground break-words"
          style={{ 
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
            lineHeight: '1.3',
          }}
        >
          {step.title}
        </h3>

        {/* Description */}
        <p 
          className="text-xs md:text-sm font-light font-body text-muted-foreground break-words px-2"
          style={{ 
            lineHeight: '1.6',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
          }}
        >
          {step.description}
        </p>

        {/* Arrow for mobile */}
        {index < flowSteps.length - 1 && (
          <div className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
            <div className="w-0.5 h-8 bg-primary" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div 
                className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-primary" 
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

