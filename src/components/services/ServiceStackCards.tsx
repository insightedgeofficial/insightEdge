'use client';

import { fullServices } from "@/lib/data";
import { SectionWrapper } from "../shared/SectionWrapper";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check, Users, Target, Clock, Tag, Handshake, ChartBar, GraduationCap, Buildings, Heart, Briefcase, Globe } from '@phosphor-icons/react/dist/ssr';
import { Button } from "../ui/button";
import Link from "next/link";

export function ServiceStackCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const totalHeight = fullServices.length * 70; // 70vh per card for more white space

  return (
    <SectionWrapper 
      className="relative py-0 z-0"
      style={{
        backgroundColor: 'hsl(var(--background))', // Beige background
      }}
    >
      <div 
        ref={containerRef}
        className="relative z-0"
        style={{
          minHeight: `${totalHeight}vh`,
        }}
      >
        {fullServices.map((service, index) => (
          <StickyServiceCard
            key={service.category}
            service={service}
            index={index}
            totalCards={fullServices.length}
            scrollProgress={scrollYProgress}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

const categoryIcons: Record<string, any> = {
  Schools: GraduationCap,
  Universities: Buildings,
  'Rehab Centres': Heart,
  NGOs: Users,
  'Corporate Wellbeing': Briefcase,
  'Study Abroad': Globe,
  'Research Support': ChartBar,
};

/** Show one key point: first segment before comma or " / " */
function oneKeyPoint(text: string): string {
  const first = text.split(/[,/]/)[0]?.trim() ?? text;
  return first.length > 0 ? first : text;
}

function StickyServiceCard({
  service,
  index,
  totalCards,
  scrollProgress,
}: {
  service: typeof fullServices[0];
  index: number;
  totalCards: number;
  scrollProgress: any;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const ServiceIcon = categoryIcons[service.category] ?? Users;
  
  // Calculate scroll sections - faster transitions with compressed ranges
  const sectionHeight = 1 / totalCards;
  const cardStart = index * sectionHeight;
  const cardEnd = (index + 1) * sectionHeight;
  
  // Transform scroll progress to this card's progress (0 to 1)
  const cardProgress = useTransform(
    scrollProgress,
    [cardStart, cardEnd],
    [0, 1],
    { clamp: true }
  );

  // Scale down cards that are behind the current one
  // Cards scale from 1 to 0.95 as they go behind
  const scale = useTransform(
    scrollProgress,
    [0, cardStart, cardEnd, Math.min(cardEnd + sectionHeight * 0.5, 1)],
    index === 0 ? [1, 1, 1, 0.95] : [0.95, 0.95, 1, 0.95],
    { clamp: true }
  );

  // Opacity - cards remain fully opaque at all times
  const opacity = 1;

  // Shadow intensity - increases when card is active
  const shadowIntensity = useTransform(
    cardProgress,
    [0, 0.5, 1],
    [0, 1, 0.5],
    { clamp: true }
  );

  // Z-index: later cards have higher z-index so they stack on top
  // But must be much less than header's z-50 to stay behind it
  // Using z-10, z-20, z-30, etc. for cards, all below header's z-50
  const zIndex = (index + 1) * 10;

  // Ensure z-index is capped and cards stay below header
  const safeZIndex = Math.min(zIndex, 40);
  
  return (
    <motion.div
      ref={cardRef}
      className="sticky top-16 w-full flex items-center justify-center px-4 md:px-6 py-4 md:py-6"
      style={{
        zIndex: safeZIndex, // Cap at 40, well below header's z-50
        scale,
        opacity: 1,
        height: 'calc(100vh - 4rem)',
        position: 'sticky', // Explicitly set position
      }}
    >
      {/* Card Container */}
      <motion.div
        className="w-full max-w-[85rem] mx-auto h-full rounded-[2.5rem] overflow-hidden flex flex-col my-2 md:my-4"
        style={{
          backgroundColor: 'hsl(var(--background))',
          opacity: 1,
          boxShadow: useTransform(
            shadowIntensity,
            (intensity) => `0 ${20 * intensity}px ${40 * intensity}px rgba(0, 0, 0, ${0.15 * intensity}), 0 ${10 * intensity}px ${20 * intensity}px rgba(0, 0, 0, ${0.1 * intensity})`
          ),
        }}
      >
        {/* Card Content - clean two-column layout */}
        <div className="h-full flex flex-col md:flex-row overflow-hidden">
          {/* Left: Title, overview, CTA - comfortable reading width */}
          <div className="flex-1 min-w-0 p-6 md:p-8 lg:p-10 flex flex-col justify-between md:max-w-[50%]">
            <div className="space-y-4 md:space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ServiceIcon className="h-6 w-6 md:h-7 md:w-7 text-primary" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold text-foreground pt-1">
                  {service.category}
                </h2>
              </div>
              <p className="text-sm md:text-[15px] leading-relaxed text-muted-foreground" style={{ lineHeight: '1.6' }}>
                {service.overview}
              </p>
            </div>
            <div className="mt-6 md:mt-8 pt-6 border-t border-border/60">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href={service.ctaLink}>
                  <Handshake className="mr-2 h-4 w-4" /> {service.cta}
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Outcomes + details in a single card-style block */}
          <div className="flex-1 min-w-0 p-6 md:p-8 lg:p-10 md:pl-0 lg:pl-0 flex flex-col justify-center md:max-w-[50%]">
            <div className="rounded-2xl bg-muted/40 border border-border/60 p-5 md:p-6 space-y-4 my-auto">
              <div>
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-primary" /> What you'll gain
                </h3>
                <ul className="space-y-1.5">
                  {service.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-foreground/90">
                      <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-3 border-t border-border/50">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
                  <Target className="h-3.5 w-3.5 text-primary" /> Rooted in
                </h3>
                <ul className="space-y-1.5">
                  {service.rootedIn.map((root, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-foreground/90">
                      <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{root}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

