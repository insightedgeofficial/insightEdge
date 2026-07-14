'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { 
  ChalkboardTeacher, GraduationCap, Heartbeat, Handshake, Briefcase, AirplaneTilt, ChartLineUp,
  ArrowRight, ArrowLeft, Shield, TrendUp, Compass, Heart, Globe, Lightbulb, Users, MagnifyingGlass
} from '@phosphor-icons/react/dist/ssr';
import { cn } from '@/lib/utils';

// Hardcoded Home Page services to avoid affecting the Services route
const homeServices = [
  {
    category: 'Schools',
    overview: "Our school-based programs build socio-emotional and life skills, pair psychological tools with trained facilitators for emotionally safe classrooms, and guide students through career counselling for what's next.",
    icon: ChalkboardTeacher,
    benefits: [
      { icon: Shield, label: 'Safe Learning' },
      { icon: TrendUp, label: 'Skill Building' },
      { icon: Compass, label: 'Career Guidance' },
    ]
  },
  {
    category: 'Universities',
    overview: "Designed for undergraduate and postgraduate psychology and allied health science students, our programs build essential skills in psychological techniques, therapeutic communication, facilitation, research design, and career readiness.",
    icon: GraduationCap,
    benefits: [
      { icon: GraduationCap, label: 'Career ready' },
      { icon: Lightbulb, label: 'Real world skills' },
      { icon: Users, label: 'Dialogue driven' },
    ]
  },
  {
    category: 'Rehab Centers',
    overview: "We deliver evidence-based psychoeducational and wellbeing programs, led by a team of equipped facilitators trained to support recovery.",
    icon: Heartbeat,
    benefits: [
      { icon: Heart, label: 'Evidence-based' },
      { icon: Shield, label: 'Recover support' },
      { icon: Globe, label: 'Holistic approach' },
    ]
  },
  {
    category: 'NGOs',
    overview: "We collaborate with organisations to organize workshops for communities and underserved populations, designing context-sensitive psychological interventions that meet people where they are.",
    icon: Handshake,
    benefits: [
      { icon: TrendUp, label: 'Capacity Building' },
      { icon: Users, label: 'Inclusivity' },
      { icon: MagnifyingGlass, label: 'Context-informed' },
    ]
  },
  {
    category: 'Corporate Well-being',
    overview: "We design programs that foster psychological safety, leadership growth, and emotional resilience, built into how organizations actually work.",
    icon: Briefcase,
    benefits: [
      { icon: Shield, label: 'EAPs' },
      { icon: TrendUp, label: 'Leadership growth' },
      { icon: Globe, label: 'Systemic-oriented' },
    ]
  },
  {
    category: 'Study Abroad',
    overview: "Designed specifically for psychology pathways, our consulting service supports students through every step of the national & international education process – from shortlisting universities to crafting compelling SOPs and preparing for interviews.",
    icon: AirplaneTilt,
    benefits: [
      { icon: Compass, label: 'Strategic guidance' },
      { icon: Globe, label: 'Global pathways' },
      { icon: Lightbulb, label: 'Expert mentorship' },
    ]
  },
  {
    category: 'Research Support',
    overview: "We provide support across all domains of research, from study formulation and research design to statistical analysis and final reporting, helping students, researchers, and organizations.",
    icon: ChartLineUp,
    benefits: [
      { icon: ChartLineUp, label: 'Statistical support' },
      { icon: FileTextIcon, label: 'Reporting & review' },
      { icon: TrendUp, label: 'Iterative process' },
    ]
  }
];

// Helper icon component since FileText might not be imported above
function FileTextIcon(props: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" {...props}><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216ZM168,128a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,128Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,160Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,192Z"></path></svg>
    )
}

export function ServiceCardStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  const [iconAnimation, setIconAnimation] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalServices = homeServices.length;

  useEffect(() => {
    setIconAnimation(false);
    const timer = setTimeout(() => setIconAnimation(true), 50);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) handleNext();
    else if (distance < -minSwipeDistance) handlePrevious();
  };

  const handlePrevious = () => {
    setSlideDirection('right');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? totalServices - 1 : prev - 1));
      setSlideDirection(null);
    }, 500);
  };

  const handleNext = () => {
    setSlideDirection('left');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === totalServices - 1 ? 0 : prev + 1));
      setSlideDirection(null);
    }, 500);
  };

  const getServicesToDisplay = () => {
    const prevIndex = currentIndex === 0 ? totalServices - 1 : currentIndex - 1;
    const nextIndex = currentIndex === totalServices - 1 ? 0 : currentIndex + 1;
    return [
      { service: homeServices[prevIndex], position: 'prev' as const },
      { service: homeServices[currentIndex], position: 'current' as const },
      { service: homeServices[nextIndex], position: 'next' as const },
    ];
  };

  return (
    <div 
      className="relative w-full"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative w-full h-[320px] md:h-[360px] flex items-center justify-center overflow-hidden">
        <button
          onClick={handlePrevious}
          className={cn(
            "absolute left-2 md:left-4 z-30 w-11 h-11 md:w-12 md:h-12 rounded-full",
            "bg-background/60 backdrop-blur-xl border border-primary/25",
            "hover:border-primary/40 hover:bg-background/70",
            "text-primary transition-all duration-300 ease-out",
            "flex items-center justify-center shadow-lg hover:shadow-xl",
            "hover:scale-110"
          )}
          style={{ backdropFilter: 'blur(20px)' }}
          aria-label="Previous service"
        >
          <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
        </button>

        <button
          onClick={handleNext}
          className={cn(
            "absolute right-2 md:right-4 z-30 w-11 h-11 md:w-12 md:h-12 rounded-full",
            "bg-background/60 backdrop-blur-xl border border-primary/25",
            "hover:border-primary/40 hover:bg-background/70",
            "text-primary transition-all duration-300 ease-out",
            "flex items-center justify-center shadow-lg hover:shadow-xl",
            "hover:scale-110"
          )}
          style={{ backdropFilter: 'blur(20px)' }}
          aria-label="Next service"
        >
          <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
        </button>

        <div className="relative w-full max-w-[900px] mx-auto h-full flex items-center justify-center">
          {getServicesToDisplay().map(({ service, position }, idx) => {
            const isCurrent = position === 'current';
            const isPrev = position === 'prev';
            const isNext = position === 'next';
            const Icon = service.icon;
            const benefits = service.benefits;

            let translateX = 0;
            let opacity = 1;
            let scale = 1;
            let zIndex = 10;

            if (slideDirection === 'left') {
              if (isCurrent) { translateX = -100; opacity = 0; }
              else if (isNext) { translateX = 0; zIndex = 20; }
              else if (isPrev) { translateX = -100; }
            } else if (slideDirection === 'right') {
              if (isCurrent) { translateX = 100; opacity = 0; }
              else if (isPrev) { translateX = 0; zIndex = 20; }
              else if (isNext) { translateX = 100; }
            } else {
              if (isCurrent) { translateX = 0; scale = 1; zIndex = 20; }
              else if (isPrev) { translateX = -50; scale = 0.7; opacity = 0.6; zIndex = 10; }
              else if (isNext) { translateX = 50; scale = 0.7; opacity = 0.6; zIndex = 10; }
            }

            return (
              <div
                key={`${service.category}-${currentIndex}-${idx}`}
                className={cn(
                  "absolute transition-all duration-500 ease-in-out",
                  isCurrent && "cursor-pointer"
                )}
                style={{
                  width: '480px',
                  maxWidth: '85%',
                  height: '100%',
                  left: '50%',
                  transform: `translateX(calc(-50% + ${translateX}%)) scale(${scale})`,
                  opacity,
                  zIndex,
                  pointerEvents: isCurrent ? 'auto' : 'none',
                }}
              >
                <Card
                  className={cn(
                    "relative w-full h-full rounded-3xl overflow-hidden",
                    "transition-all duration-500 ease-in-out",
                    "backdrop-blur-xl border border-primary/20",
                    "bg-gradient-to-br from-background/80 via-background/70 to-background/80",
                    isCurrent ? "shadow-2xl shadow-primary/10 ring-2 ring-primary/20" : "shadow-lg"
                  )}
                  style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/5 pointer-events-none" />
                  
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
                    <Icon className="w-[160px] h-[160px] text-foreground" weight="regular" />
                  </div>
                  
                  {isCurrent && (
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-sm -z-10 opacity-50" />
                  )}

                  <div className="relative h-full flex flex-col p-4 md:p-5">
                    <div className="flex-shrink-0 mb-3">
                      <div
                        className={cn(
                          "relative w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-primary/25 via-primary/15 to-accent/15",
                          "border border-primary/30 backdrop-blur-sm flex items-center justify-center",
                          "transition-all duration-700 ease-out",
                          "shadow-lg shadow-primary/20",
                          iconAnimation ? "opacity-100 scale-100" : "opacity-0 scale-0"
                        )}
                        style={{ backdropFilter: 'blur(10px)' }}
                      >
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary drop-shadow-lg" weight="regular" />
                        <div className="absolute inset-0 rounded-lg bg-primary/20 blur-2xl -z-10" />
                      </div>
                    </div>

                    <CardTitle className="font-headline text-xl md:text-2xl font-bold mb-2 text-foreground tracking-tight">
                      {service.category}
                    </CardTitle>

                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3 flex-1 line-clamp-3" style={{ lineHeight: '1.6' }}>
                      {service.overview}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {benefits.map((benefit, idx) => {
                        const BenefitIcon = benefit.icon;
                        return (
                          <div
                            key={idx}
                            className={cn(
                              "flex items-center gap-1 px-2.5 py-1 rounded-full",
                              "bg-background/40 backdrop-blur-sm",
                              "border border-primary/25 text-foreground/90",
                              "transition-all duration-300 ease-out",
                              "hover:scale-105 hover:shadow-md hover:border-primary/40 hover:bg-background/60"
                            )}
                            style={{ backdropFilter: 'blur(8px)' }}
                          >
                            <BenefitIcon className="h-3 w-3 text-primary" weight="regular" />
                            <span className="text-[10px] md:text-xs font-semibold">{benefit.label}</span>
                          </div>
                        );
                      })}
                    </div>

                    {isCurrent && (
                      <div className="mt-auto flex justify-end">
                        <Link
                          href="/services"
                          className={cn(
                            "group flex items-center gap-1.5 text-primary font-semibold text-xs md:text-sm",
                            "transition-all duration-300 ease-out",
                            "hover:translate-x-1 hover:text-primary/90"
                          )}
                        >
                          <span>Explore Program</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-6">
        <span className="text-xs text-muted-foreground font-medium">
          {String(currentIndex + 1).padStart(2, '0')} / {String(totalServices).padStart(2, '0')}
        </span>
        <div className="relative w-40 h-0.5 bg-muted/30 rounded-full overflow-hidden">
          <div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + 1) / totalServices) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
