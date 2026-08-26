'use client';

import { SectionWrapper } from "../shared/SectionWrapper";
import { MagnifyingGlass, Palette, RocketLaunch, Target } from '@phosphor-icons/react/dist/ssr';
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import { motion } from 'framer-motion';

const flowSteps = [
  {
    icon: MagnifyingGlass,
    title: 'Research',
    description: 'Sustainable frameworks built on evidence; finding the gaps that matter most.',
    color: 'from-primary/20 to-primary/10',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Curated, personally tailored experiences built to fit the people in the room.',
    color: 'from-accent/20 to-accent/10',
  },
  {
    icon: RocketLaunch,
    title: 'Execute',
    description: 'Programs delivered in schools, workplaces, and the communities that need them most.',
    color: 'from-primary/30 to-accent/30',
  },
  {
    icon: Target,
    title: 'Impact',
    description: 'Not numbers on a slide. Individuals empowered, communities made stronger.',
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
      className="relative overflow-hidden py-16 md:py-24 lg:py-28 px-4 md:px-8 bg-morning-quiet border-t border-border/40"
    >
      <div ref={sectionRef} className="relative">
        <h2
          className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center tracking-tight text-foreground"
        >
          How We Work
        </h2>
        <p
          className="text-center mb-12 md:mb-16 max-w-2xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed font-light text-muted-foreground"
        >
          Our dual-focus model transforms psychological insight into real-world impact
        </p>

        <div className="max-w-5xl mx-auto">
          {/* Flow Diagram */}
          <div className="relative">
            {/* Connecting Line - Horizontal for desktop (centered at 50% vertical height of card boxes, behind cards at z-0) */}
            <div className="hidden md:flex absolute top-1/2 left-0 right-0 h-1 bg-muted transform -translate-y-1/2 z-0 items-center overflow-hidden rounded-full">
              <div
                className={cn(
                  "h-full bg-primary transition-all duration-1000 ease-out",
                  isVisible ? "w-full" : "w-0"
                )}
                style={{ transitionDelay: '300ms' }}
              />
            </div>

            {/* Mobile connecting line (centered horizontally at 50% width of card boxes, behind cards at z-0) */}
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-muted transform -translate-x-1/2 z-0 flex items-center justify-center overflow-hidden rounded-full">
              <div
                className={cn(
                  "w-full bg-primary transition-all duration-1000 ease-out",
                  isVisible ? "h-full" : "h-0"
                )}
                style={{ transitionDelay: '300ms' }}
              />
            </div>

            {/* Steps - 4-column grid for 100% equal height box alignment */}
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 z-10 items-stretch">
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
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      className="h-full group cursor-pointer"
    >
      <Card
        className={cn(
          "relative backdrop-blur-sm border text-center bg-card border-border flex flex-col h-full min-h-[220px] md:min-h-[240px] rounded-[16px] z-10 transition-all duration-300 ease-out shadow-sm group-hover:shadow-[0_20px_35px_-12px_rgba(24,61,44,0.15)] group-hover:border-primary/40",
          stepVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95"
        )}
        style={{
          transitionDelay: `${index * 200 + 400}ms`,
        }}
      >
        {/* Subtle Ambient Background Glow on Hover */}
        <div className="absolute -inset-1 rounded-[20px] bg-gradient-to-b from-primary/15 via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-lg pointer-events-none -z-10" />

        <CardContent className="p-0 flex-1 flex flex-col justify-start items-center py-6 px-4 md:px-5 h-full relative z-10">
          {/* Icon Circle */}
          <div
            className={cn(
              "relative z-30 mx-auto mb-3 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-500 ease-out bg-secondary flex-shrink-0 ring-4 ring-morning-quiet shadow-sm group-hover:scale-110 group-hover:ring-primary/20",
              stepVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
            )}
            style={{ transitionDelay: `${index * 200 + 600}ms` }}
          >
            <Icon className="h-6 w-6 md:h-7 md:w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
          </div>

          {/* Title */}
          <h3
            className="font-headline text-base md:text-lg font-bold mb-2 text-foreground break-words transition-colors duration-300 group-hover:text-primary"
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
    </motion.div>
  );
}
