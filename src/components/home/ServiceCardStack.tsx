'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
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
      { icon: Shield, label: 'Recovery support' },
      { icon: Globe, label: 'Holistic approach' },
    ]
  },
  {
    category: 'NGOs',
    overview: "We collaborate with organisations to organize workshops for communities and underserved populations, designing context-sensitive psychological interventions that meet people where they are.",
    icon: Handshake,
    benefits: [
      { icon: TrendUp, label: 'Capacity building' },
      { icon: Users, label: 'Inclusivity' },
      { icon: MagnifyingGlass, label: 'Context-informed' },
    ]
  },
  {
    category: 'Corporations',
    overview: "We help HR and leadership teams organize workshops for organizations, designing context-sensitive sessions that meet people where they are.",
    icon: Briefcase,
    benefits: [
      { icon: Shield, label: 'Context-informed' },
      { icon: TrendUp, label: 'Team workshops' },
      { icon: Globe, label: 'Scalable' },
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

// Helper icon component
function FileTextIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" {...props}>
      <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216ZM168,128a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,128Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,160Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,192Z"></path>
    </svg>
  );
}

export function ServiceCardStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(800);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const totalServices = homeServices.length;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // Shortest path wraparound index offset
  const getWrappedOffset = useCallback((index: number, activeIndex: number, total: number) => {
    let diff = index - activeIndex;
    const half = Math.floor(total / 2);
    while (diff > half) diff -= total;
    while (diff < -half) diff += total;
    return diff;
  }, []);

  const goToSlide = useCallback((newIndex: number) => {
    setCurrentIndex((newIndex + totalServices) % totalServices);
  }, [totalServices]);

  const handleNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const handlePrevious = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Autoplay (~4.8s timer)
  const resetAutoplayTimer = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    resetAutoplayTimer();
    if (!isHovered && !isFocused && !prefersReducedMotion) {
      autoplayTimerRef.current = setInterval(() => {
        handleNext();
      }, 4800);
    }
    return () => resetAutoplayTimer();
  }, [isHovered, isFocused, prefersReducedMotion, handleNext, resetAutoplayTimer]);

  // Touch handlers
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
    if (distance >= 40) {
      handleNext();
    } else if (distance <= -40) {
      handlePrevious();
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrevious();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  // Gap sizing based on viewport
  const isMobile = windowWidth < 720;
  const gap = isMobile ? 180 : 310;

  return (
    <div 
      className="relative w-full select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Our Services Carousel"
    >
      {/* Carousel Stage Container */}
      <div 
        ref={stageRef}
        className="relative w-full min-h-[440px] md:min-h-[480px] h-[440px] md:h-[480px] flex items-center justify-center overflow-hidden py-4 focus:outline-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Breathing Glow behind active card */}
        {!prefersReducedMotion && (
          <div 
            className="absolute left-1/2 top-1/2 -z-10 pointer-events-none rounded-full blur-3xl transition-opacity duration-700 animate-breathing-glow"
            style={{
              width: isMobile ? '320px' : '500px',
              height: isMobile ? '320px' : '500px',
              background: 'radial-gradient(circle, rgba(227,238,208,0.9) 0%, rgba(112,140,105,0.2) 60%, transparent 80%)',
            }}
          />
        )}

        {/* Circular Nav Buttons */}
        <button
          onClick={handlePrevious}
          className={cn(
            "absolute left-3 md:left-8 z-40 w-11 h-11 md:w-13 md:h-13 rounded-full",
            "bg-white/80 backdrop-blur-md border border-still-ground/15",
            "text-still-ground transition-all duration-300 ease-out",
            "flex items-center justify-center shadow-md hover:shadow-xl",
            "hover:scale-105 hover:bg-white",
            "focus-visible:ring-2 focus-visible:ring-still-ground focus-visible:ring-offset-2 focus-visible:outline-none"
          )}
          aria-label="Previous service"
        >
          <ArrowLeft className="h-5 w-5 md:h-6 md:w-6" weight="bold" />
        </button>

        <button
          onClick={handleNext}
          className={cn(
            "absolute right-3 md:right-8 z-40 w-11 h-11 md:w-13 md:h-13 rounded-full",
            "bg-white/80 backdrop-blur-md border border-still-ground/15",
            "text-still-ground transition-all duration-300 ease-out",
            "flex items-center justify-center shadow-md hover:shadow-xl",
            "hover:scale-105 hover:bg-white",
            "focus-visible:ring-2 focus-visible:ring-still-ground focus-visible:ring-offset-2 focus-visible:outline-none"
          )}
          aria-label="Next service"
        >
          <ArrowRight className="h-5 w-5 md:h-6 md:w-6" weight="bold" />
        </button>

        {/* Cards Stage */}
        <div className="relative w-full max-w-[1150px] mx-auto h-full flex items-center justify-center">
          {homeServices.map((service, index) => {
            const offset = getWrappedOffset(index, currentIndex, totalServices);
            const absOffset = Math.abs(offset);
            const Icon = service.icon;
            const benefits = service.benefits;

            const translateX = offset * gap;
            const scale = Math.max(0.65, 1 - absOffset * 0.12);
            const opacity = absOffset > 2 ? 0 : Math.max(0, 1 - absOffset * 0.42);
            const blurPx = Math.min(6, absOffset * 2.5);
            const zIndex = 30 - absOffset * 10;
            const isCurrent = offset === 0;

            return (
              <div
                key={service.category}
                tabIndex={isCurrent ? 0 : -1}
                role="button"
                aria-label={`Service: ${service.category}`}
                onClick={() => {
                  if (!isCurrent && absOffset <= 2) {
                    goToSlide(index);
                  }
                }}
                onKeyDown={(e) => {
                  if ((e.key === 'Enter' || e.key === ' ') && !isCurrent && absOffset <= 2) {
                    e.preventDefault();
                    goToSlide(index);
                  }
                }}
                className={cn(
                  "absolute top-0 bottom-0 mx-auto",
                  isCurrent ? "cursor-default" : (absOffset <= 2 ? "cursor-pointer" : "pointer-events-none"),
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-still-ground focus-visible:ring-offset-2 rounded-[28px]"
                )}
                style={{
                  width: isMobile ? '310px' : '440px',
                  maxWidth: '88%',
                  height: '100%',
                  left: '50%',
                  transform: `translateX(calc(-50% + ${translateX}px)) scale(${scale}) translateZ(0)`,
                  opacity,
                  filter: blurPx > 0 ? `blur(${blurPx}px)` : 'none',
                  zIndex,
                  pointerEvents: isCurrent ? 'auto' : (absOffset <= 2 ? 'auto' : 'none'),
                  willChange: 'transform, opacity, filter',
                  transitionProperty: 'transform, opacity, filter',
                  transitionDuration: prefersReducedMotion ? '0.01s' : '0.6s',
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <Card
                  className={cn(
                    "relative w-full h-full rounded-[28px] md:rounded-[32px] overflow-hidden flex flex-col justify-between border border-still-ground/15",
                    "bg-[#F7F4EE] text-still-ground",
                    isCurrent ? "shadow-2xl shadow-still-ground/10 ring-1 ring-still-ground/20" : "shadow-lg opacity-90"
                  )}
                >
                  <div className="relative h-full flex flex-col p-6 md:p-8 justify-between">
                    {/* Top Group */}
                    <div>
                      {/* Icon Badge */}
                      <div className="mb-5">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#E3EED0] border border-still-ground/15 flex items-center justify-center shadow-sm">
                          <Icon className="w-6 h-6 md:w-7 md:h-7 text-still-ground" weight="regular" />
                        </div>
                      </div>

                      {/* Title */}
                      <CardTitle className="font-headline text-2xl md:text-3xl font-bold mb-3 text-still-ground tracking-tight">
                        {service.category}
                      </CardTitle>

                      {/* Overview */}
                      <p className="font-body text-sm md:text-base text-still-ground/75 leading-relaxed mb-6 line-clamp-3">
                        {service.overview}
                      </p>
                    </div>

                    {/* Bottom Group */}
                    <div className="mt-auto">
                      {/* Staggered Tag Pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {benefits.map((benefit, idx) => (
                          <div
                            key={idx}
                            className={cn(
                              "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full",
                              "bg-still-ground/5 border border-still-ground/15 text-still-ground text-xs md:text-sm font-medium",
                              "transition-all duration-300",
                              isCurrent && !prefersReducedMotion && "animate-in fade-in slide-in-from-bottom-2 duration-300"
                            )}
                            style={{
                              animationDelay: (isCurrent && !prefersReducedMotion) ? `${idx * 80}ms` : '0ms',
                              animationFillMode: 'backwards',
                            }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-still-ground/60" />
                            <span>{benefit.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Divider & Explore Program Link */}
                      <div className="pt-4 border-t border-still-ground/15 flex items-center justify-end">
                        <Link
                          href="/services"
                          tabIndex={isCurrent ? 0 : -1}
                          className="group inline-flex items-center gap-2 text-still-ground font-semibold text-xs md:text-sm font-body hover:opacity-80 transition-opacity"
                        >
                          <span>Explore Program</span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" weight="bold" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Segmented Progress Bar & Index Label */}
      <div className="flex flex-col items-center justify-center gap-2 mt-4 md:mt-6">
        {/* Segmented Pills */}
        <div 
          className="flex items-center gap-2" 
          role="tablist" 
          aria-label="Service navigation slides"
        >
          {homeServices.map((service, idx) => {
            const isActive = idx === currentIndex;
            const isPassed = idx < currentIndex;
            return (
              <button
                key={idx}
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${idx + 1}: ${service.category}`}
                onClick={() => goToSlide(idx)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 cursor-pointer",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-still-ground focus-visible:ring-offset-2",
                  isActive 
                    ? "w-8 md:w-10 bg-still-ground shadow-sm" 
                    : (isPassed ? "w-4 md:w-5 bg-still-ground/60 hover:bg-still-ground/80" : "w-4 md:w-5 bg-still-ground/20 hover:bg-still-ground/40")
                )}
              />
            );
          })}
        </div>

        {/* Index Label with aria-live="polite" */}
        <div 
          aria-live="polite" 
          className="text-xs md:text-sm font-semibold tracking-wider text-still-ground/80 font-mono"
        >
          {String(currentIndex + 1).padStart(2, '0')} / {String(totalServices).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
}
