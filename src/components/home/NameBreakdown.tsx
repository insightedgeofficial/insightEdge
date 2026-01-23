'use client';

import { SectionWrapper } from '../shared/SectionWrapper';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Search, Palette, Rocket, Target, Heart, Lightbulb } from 'lucide-react';

const cardData = [
  { keyword: 'RESEARCH', icon: Search },
  { keyword: 'DESIGN', icon: Palette },
  { keyword: 'IMPACT', icon: Target },
  { keyword: 'EMPATHY', icon: Heart },
  { keyword: 'INNOVATION', icon: Lightbulb },
];

export function NameBreakdown() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    animationType: 'fade-up',
  });

  return (
    <SectionWrapper 
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      style={{
        backgroundColor: 'hsl(var(--background))', // Website beige/cream
      }}
    >
      <div ref={sectionRef} className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Static Section Introduction */}
          <div
            className={`mb-16 md:mb-20 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start relative">
              {/* Heading - Left aligned */}
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-foreground text-left">
                  The InsightEdge Philosophy
                </h2>
              </div>

              {/* Animated Graphics - Center (visible on md and up) */}
              <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[200px] pointer-events-none z-0">
                {/* Animated connecting line */}
                <div 
                  className="absolute top-1/2 left-0 right-0 h-[1px]"
                  style={{
                    background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)',
                  }}
                />
                
                {/* Floating icons */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-12 h-12">
                    {/* Main icon circle */}
                    <div 
                      className="absolute inset-0 rounded-full border-2 animate-pulse"
                      style={{
                        borderColor: 'hsl(var(--primary) / 0.4)',
                        animation: 'pulse 3s ease-in-out infinite',
                      }}
                    />
                    <div 
                      className="absolute inset-0 rounded-full border animate-ping"
                      style={{
                        borderColor: 'hsl(var(--primary) / 0.2)',
                        animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
                        animationDelay: '0.5s',
                      }}
                    />
                  </div>
                </div>

                {/* Floating decorative elements */}
                <div 
                  className="absolute top-0 left-1/4 w-2 h-2 rounded-full animate-float"
                  style={{
                    backgroundColor: 'hsl(var(--primary) / 0.4)',
                    animationDelay: '0s',
                  }}
                />
                <div 
                  className="absolute bottom-0 right-1/4 w-1.5 h-1.5 rounded-full animate-float"
                  style={{
                    backgroundColor: 'hsl(var(--primary) / 0.3)',
                    animationDelay: '1s',
                  }}
                />
                <div 
                  className="absolute top-1/4 right-0 w-1 h-1 rounded-full animate-float"
                  style={{
                    backgroundColor: 'hsl(var(--primary) / 0.35)',
                    animationDelay: '1.5s',
                  }}
                />
                <div 
                  className="absolute bottom-1/4 left-0 w-1.5 h-1.5 rounded-full animate-float"
                  style={{
                    backgroundColor: 'hsl(var(--primary) / 0.3)',
                    animationDelay: '2s',
                  }}
                />
              </div>

              {/* Paragraph - Right aligned */}
              <div className="text-right relative z-10">
                <p 
                  className="text-base md:text-lg leading-relaxed font-body"
                  style={{
                    color: 'hsl(var(--primary))', // Project's sage green
                    lineHeight: '1.8',
                  }}
                >
                  InsightEdge was born from the intersection of deep psychological understanding and the competitive advantage of behavioral science. We don't just provide data; we provide the 'Edge' needed to foster lasting impact and human growth.
                </p>
              </div>
            </div>
          </div>

          {/* Scrolling Card Marquee */}
          <div className="relative w-full overflow-hidden py-8">
            {/* Faded edges mask */}
            <div 
              className="absolute inset-0 z-[1] pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
              }}
            />
            
            {/* Marquee wrapper */}
            <div className="marquee-card-wrapper group">
              <div className="marquee-card-content marquee-smooth">
                {/* First set of cards */}
                <div className="flex items-center whitespace-nowrap">
                  {cardData.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div 
                        key={`first-${index}`}
                        className="flex-shrink-0 rounded-xl px-5 py-3 md:px-6 md:py-4 mr-4 md:mr-6"
                        style={{
                          backgroundColor: 'hsl(42 25% 94%)', // Light beige (slightly different from bg)
                          border: '1px solid hsl(var(--primary) / 0.3)', // Subtle sage green border
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: '0.75rem',
                          minWidth: 'fit-content',
                        }}
                      >
                        <Icon 
                          className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
                          style={{ color: 'hsl(var(--primary))' }} // Sage green icon
                        />
                        <span 
                          className="font-headline font-bold text-sm md:text-base uppercase tracking-wide whitespace-nowrap"
                          style={{ color: 'hsl(var(--primary))' }} // Sage green text
                        >
                          {item.keyword}
                        </span>
                      </div>
                    );
                  })}
                </div>
                
                {/* Second set of cards (duplicate for seamless loop) */}
                <div className="flex items-center whitespace-nowrap" aria-hidden="true">
                  {cardData.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div 
                        key={`second-${index}`}
                        className="flex-shrink-0 rounded-xl px-5 py-3 md:px-6 md:py-4 mr-4 md:mr-6"
                        style={{
                          backgroundColor: 'hsl(42 25% 94%)',
                          border: '1px solid hsl(var(--primary) / 0.3)',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: '0.75rem',
                          minWidth: 'fit-content',
                        }}
                      >
                        <Icon 
                          className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
                          style={{ color: 'hsl(var(--primary))' }}
                        />
                        <span 
                          className="font-headline font-bold text-sm md:text-base uppercase tracking-wide whitespace-nowrap"
                          style={{ color: 'hsl(var(--primary))' }}
                        >
                          {item.keyword}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

