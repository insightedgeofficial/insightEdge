'use client';

import { useState, useEffect, useRef } from 'react';
import { fullServices } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  GraduationCap, Building2, Heart, Briefcase, Globe, School,
  Sparkles, ArrowRight, ArrowLeft, Star, TrendingUp, Shield, Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Icon mapping for each service category
const serviceIcons: Record<string, typeof School> = {
  'Schools': School,
  'Universities': GraduationCap,
  'Rehab Centers': Heart,
  'NGOs': Building2,
  'Corporate Wellbeing': Briefcase,
  'Study Abroad': Globe,
};

// Micro-benefits for each service (2-3 per service)
const microBenefits: Record<string, { icon: typeof Star; label: string }[]> = {
  'Schools': [
    { icon: Shield, label: 'Safe Learning' },
    { icon: TrendingUp, label: 'Skill Building' },
    { icon: Heart, label: 'Mental Wellness' },
  ],
  'Universities': [
    { icon: GraduationCap, label: 'Career Ready' },
    { icon: Star, label: 'Real-World Skills' },
    { icon: Sparkles, label: 'Expert Guidance' },
  ],
  'Rehab Centers': [
    { icon: Heart, label: 'Evidence-Based' },
    { icon: Shield, label: 'Recovery Support' },
    { icon: TrendingUp, label: 'Staff Training' },
  ],
  'NGOs': [
    { icon: Star, label: 'Research Support' },
    { icon: Building2, label: 'Capacity Building' },
    { icon: TrendingUp, label: 'Impact Focused' },
  ],
  'Corporate Wellbeing': [
    { icon: Zap, label: 'Wellness Programs' },
    { icon: TrendingUp, label: 'Leadership Growth' },
    { icon: Shield, label: 'Psychological Safety' },
  ],
  'Study Abroad': [
    { icon: Globe, label: 'Global Pathways' },
    { icon: Star, label: 'Personalized Guidance' },
    { icon: Sparkles, label: 'Expert Mentorship' },
  ],
};

export function ServiceCardStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  const [iconAnimation, setIconAnimation] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalServices = fullServices.length;

  // Trigger icon animation on index change
  useEffect(() => {
    setIconAnimation(false);
    const timer = setTimeout(() => setIconAnimation(true), 50);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Swipe detection
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
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
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

  // Get services to display (current, prev, next)
  const getServicesToDisplay = () => {
    const prevIndex = currentIndex === 0 ? totalServices - 1 : currentIndex - 1;
    const nextIndex = currentIndex === totalServices - 1 ? 0 : currentIndex + 1;
    return [
      { service: fullServices[prevIndex], position: 'prev' as const },
      { service: fullServices[currentIndex], position: 'current' as const },
      { service: fullServices[nextIndex], position: 'next' as const },
    ];
  };

  return (
    <div 
      className="relative w-full"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Service Panels Container */}
      <div className="relative w-full h-[320px] md:h-[360px] flex items-center justify-center overflow-hidden">
        {/* Arrow Navigation Buttons */}
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
          style={{
            backdropFilter: 'blur(20px)',
          }}
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
          style={{
            backdropFilter: 'blur(20px)',
          }}
          aria-label="Next service"
        >
          <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
        </button>

        {/* Service Panels */}
        <div className="relative w-full max-w-[900px] mx-auto h-full flex items-center justify-center">
          {getServicesToDisplay().map(({ service, position }, idx) => {
            const isCurrent = position === 'current';
            const isPrev = position === 'prev';
            const isNext = position === 'next';
            const Icon = serviceIcons[service.category] || Sparkles;
            const benefits = microBenefits[service.category] || [];

            // Slide animation transforms
            let translateX = 0;
            let opacity = 1;
            let scale = 1;
            let zIndex = 10;

            if (slideDirection === 'left') {
              if (isCurrent) {
                translateX = -100;
                opacity = 0;
              } else if (isNext) {
                translateX = 0;
                zIndex = 20;
              } else if (isPrev) {
                translateX = -100;
              }
            } else if (slideDirection === 'right') {
              if (isCurrent) {
                translateX = 100;
                opacity = 0;
              } else if (isPrev) {
                translateX = 0;
                zIndex = 20;
              } else if (isNext) {
                translateX = 100;
              }
            } else {
              if (isCurrent) {
                translateX = 0;
                scale = 1;
                zIndex = 20;
              } else if (isPrev) {
                translateX = -50;
                scale = 0.7;
                opacity = 0.6;
                zIndex = 10;
              } else if (isNext) {
                translateX = 50;
                scale = 0.7;
                opacity = 0.6;
                zIndex = 10;
              }
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
                    isCurrent 
                      ? "shadow-2xl shadow-primary/10 ring-2 ring-primary/20" 
                      : "shadow-lg"
                  )}
                  style={{
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                  }}
                >
                  {/* Soft inner gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/5 pointer-events-none" />

                  {/* Large translucent watermark icon */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
                    <Icon className="w-[160px] h-[160px] text-foreground" />
                  </div>
                  
                  {/* Subtle green glow effect */}
                  {isCurrent && (
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-sm -z-10 opacity-50" />
                  )}

                  {/* Content - Formal Vertical Layout */}
                  <div className="relative h-full flex flex-col p-4 md:p-5">
                    {/* Top Section - Icon Badge */}
                    <div className="flex-shrink-0 mb-3">
                      <div
                        className={cn(
                          "relative w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-primary/25 via-primary/15 to-accent/15",
                          "border border-primary/30 backdrop-blur-sm flex items-center justify-center",
                          "transition-all duration-700 ease-out",
                          "shadow-lg shadow-primary/20",
                          iconAnimation 
                            ? "opacity-100 scale-100" 
                            : "opacity-0 scale-0"
                        )}
                        style={{
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary drop-shadow-lg" />
                        {/* Soft glow */}
                        <div className="absolute inset-0 rounded-lg bg-primary/20 blur-2xl -z-10" />
                      </div>
                    </div>

                    {/* Title Section */}
                    <CardTitle className="font-headline text-xl md:text-2xl font-bold mb-2 text-foreground tracking-tight">
                      {service.category}
                    </CardTitle>

                    {/* Description Section */}
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3 flex-1 line-clamp-3" style={{ lineHeight: '1.6' }}>
                      {service.overview}
                    </p>

                    {/* Micro-benefits pills */}
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
                            style={{
                              backdropFilter: 'blur(8px)',
                            }}
                          >
                            <BenefitIcon className="h-3 w-3 text-primary" />
                            <span className="text-[10px] md:text-xs font-semibold">{benefit.label}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* CTA - Bottom Right */}
                    {isCurrent && (
                      <div className="mt-auto flex justify-end">
                        <Link
                          href={service.ctaLink}
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

      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <span className="text-xs text-muted-foreground font-medium">
          {String(currentIndex + 1).padStart(2, '0')} / {String(totalServices).padStart(2, '0')}
        </span>
        {/* Progress bar */}
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
