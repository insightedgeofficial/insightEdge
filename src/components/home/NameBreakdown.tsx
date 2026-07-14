'use client';

import { SectionWrapper } from '../shared/SectionWrapper';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { BookOpen, MapTrifold, ShieldCheck, ChartLineUp } from '@phosphor-icons/react/dist/ssr';

const philosophyCards = [
  {
    title: "Rooted in Psychology",
    description: "Every workshop draws from established psychological frameworks, backed by research and tested in rooms before they're trusted.",
    icon: BookOpen
  },
  {
    title: "Tailored for You",
    description: "Not one script for every room. We adapt psychological insight to fit real world contexts – classrooms, corporates, communities.",
    icon: MapTrifold
  },
  {
    title: "Facilitators You Can Trust",
    description: "Every facilitator brings clinical insight, ethical care, and the discipline to hold space; not just lead a session.",
    icon: ShieldCheck
  },
  {
    title: "Results that Stay",
    description: "Not a checklist, completed. Every engagement is measured by what someone carries with them, long after they've left.",
    icon: ChartLineUp
  }
];

export function NameBreakdown() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    animationType: 'fade-up',
  });

  return (
    <SectionWrapper 
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-cleared text-still-deep"
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-still-deep text-left">
                  The InsightEdge Philosophy
                </h2>
              </div>

              {/* Paragraph - Right aligned */}
              <div className="text-left md:text-right relative z-10">
                <p 
                  className="text-base md:text-lg leading-relaxed font-body text-still-deep"
                  style={{
                    lineHeight: '1.8',
                  }}
                >
                  InsightEdge was not built on data alone. It was built in rooms full of real conversations, where psychological understanding met real, lived experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10">
            {philosophyCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div 
                  key={index}
                  className={`bg-morning-quiet border border-still-deep/10 rounded-2xl p-6 md:p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all duration-500 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="bg-still-deep/5 p-3 rounded-xl w-fit">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-still-deep" weight="regular" />
                  </div>
                  <h3 className="font-headline font-bold text-xl md:text-2xl text-still-ground">
                    {card.title}
                  </h3>
                  <p className="font-body text-still-ground/80 text-sm md:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
