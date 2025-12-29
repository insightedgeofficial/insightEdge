'use client';

import { SectionWrapper } from '../shared/SectionWrapper';
import { Sparkles, TrendingUp, Lightbulb, Eye, Target } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function NameBreakdown() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    animationType: 'fade-up',
  });

  return (
    <SectionWrapper className="relative bg-gradient-to-b from-background via-secondary/10 to-background py-20 lg:py-28 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div ref={sectionRef} className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div
            className={`text-center mb-16 transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="inline-block mb-3">
              <span className="text-sm md:text-base font-semibold text-primary uppercase tracking-wider">
                Meaning Behind the Name
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-headline font-bold text-foreground tracking-tight">
              INSIGHT<span className="text-primary">EDGE</span>
            </h2>
          </div>

          {/* Split Layout */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start relative">
            {/* Vertical Divider */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

            {/* INSIGHT - Left Side */}
            <div
              className={`transition-all duration-500 ease-out delay-75 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-6'
              }`}
            >
              <div className="relative">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                    <Lightbulb className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold text-primary tracking-tighter">
                    INSIGHT
                  </h3>
                </div>

                {/* Points */}
                <div className="space-y-5">
                  <div className="group flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-200">
                    <div className="flex-shrink-0 mt-1">
                      <Eye className="h-5 w-5 text-primary transition-transform duration-200 group-hover:scale-110" />
                    </div>
                    <div>
                      <p className="text-base md:text-lg font-semibold text-foreground mb-1">
                        Awareness
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Seeing beyond the surface
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-200">
                    <div className="flex-shrink-0 mt-1">
                      <Sparkles className="h-5 w-5 text-primary transition-transform duration-200 group-hover:rotate-12" />
                    </div>
                    <div>
                      <p className="text-base md:text-lg font-semibold text-foreground mb-1">
                        Clarity
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Understanding what truly matters
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-200">
                    <div className="flex-shrink-0 mt-1">
                      <Target className="h-5 w-5 text-primary transition-transform duration-200 group-hover:scale-110" />
                    </div>
                    <div>
                      <p className="text-base md:text-lg font-semibold text-foreground mb-1">
                        Deeper understanding
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Connecting the dots
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* EDGE - Right Side */}
            <div
              className={`transition-all duration-500 ease-out delay-150 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-6'
              }`}
            >
              <div className="relative">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8 justify-end md:justify-start">
                  <h3 className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold text-accent tracking-tighter">
                    EDGE
                  </h3>
                  <div className="p-3 bg-accent/10 rounded-xl border border-accent/20">
                    <TrendingUp className="h-7 w-7 text-accent" />
                  </div>
                </div>

                {/* Points */}
                <div className="space-y-5">
                  <div className="group flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-200">
                    <div className="flex-shrink-0 mt-1 order-2 md:order-1">
                      <TrendingUp className="h-5 w-5 text-accent transition-transform duration-200 group-hover:scale-110" />
                    </div>
                    <div className="order-1 md:order-2 text-right md:text-left">
                      <p className="text-base md:text-lg font-semibold text-foreground mb-1">
                        Advantage
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Standing out with purpose
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-200">
                    <div className="flex-shrink-0 mt-1 order-2 md:order-1">
                      <TrendingUp className="h-5 w-5 text-accent transition-transform duration-200 group-hover:scale-110" />
                    </div>
                    <div className="order-1 md:order-2 text-right md:text-left">
                      <p className="text-base md:text-lg font-semibold text-foreground mb-1">
                        Growth
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Continuous evolution
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-200">
                    <div className="flex-shrink-0 mt-1 order-2 md:order-1">
                      <TrendingUp className="h-5 w-5 text-accent transition-transform duration-200 group-hover:scale-110" />
                    </div>
                    <div className="order-1 md:order-2 text-right md:text-left">
                      <p className="text-base md:text-lg font-semibold text-foreground mb-1">
                        Forward movement
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Progress with intention
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div
            className={`mt-16 h-0.5 bg-gradient-to-r from-transparent via-primary/20 via-accent/20 to-transparent transition-all duration-500 delay-300 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

