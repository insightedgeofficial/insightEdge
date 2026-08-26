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
      className="sticky top-16 w-full flex items-center justify-center px-4 md:px-6 py-2 md:py-4"
      style={{
        zIndex: safeZIndex,
        scale,
        opacity: 1,
        height: 'calc(100vh - 5rem)',
        position: 'sticky',
      }}
    >
      {/* Card Container - bg-sage-mist warm green background harmonized with cream page */}
      <motion.div
        className="w-full max-w-[82rem] mx-auto max-h-[540px] md:max-h-[580px] rounded-[2rem] overflow-hidden flex flex-col bg-sage-mist text-still-ground border border-still-ground/20"
        style={{
          opacity: 1,
          boxShadow: useTransform(
            shadowIntensity,
            (intensity) => `0 ${20 * intensity}px ${40 * intensity}px rgba(0, 0, 0, ${0.12 * intensity}), 0 ${10 * intensity}px ${20 * intensity}px rgba(0, 0, 0, ${0.08 * intensity})`
          ),
        }}
      >
        {/* Card Content - clean two-column layout */}
        <div className="h-full flex flex-col md:flex-row overflow-y-auto md:overflow-hidden p-6 md:p-8 lg:p-10 gap-6 md:gap-8">
          {/* Left: Title, overview, CTA */}
          <div className="flex-1 min-w-0 flex flex-col justify-between md:max-w-[50%]">
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-still-ground/15 flex items-center justify-center shadow-sm">
                  <ServiceIcon className="h-6 w-6 md:h-7 md:w-7 text-still-ground" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold text-still-ground pt-1">
                  {service.category}
                </h2>
              </div>
              <p className="text-sm md:text-[15px] leading-relaxed text-still-ground/90 font-medium" style={{ lineHeight: '1.6' }}>
                {service.overview}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-still-ground/20">
              <Button asChild size="lg" className="h-12 md:h-13 px-6 text-base font-bold bg-still-ground hover:bg-still-ground/90 text-morning-quiet shadow-md rounded-xl">
                <Link href={service.ctaLink}>
                  <Handshake className="mr-2.5 h-5 w-5 text-morning-quiet" /> {service.cta}
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Outcomes + details in a warm cream card-style block */}
          <div className="flex-1 min-w-0 p-2 md:p-4 flex flex-col justify-center md:max-w-[50%]">
            <div className="rounded-2xl bg-morning-quiet/90 border border-still-ground/20 p-5 md:p-6 space-y-4 my-auto shadow-sm">
              <div>
                <h3 className="font-bold text-still-ground mb-2.5 flex items-center gap-2 text-xs uppercase tracking-wider">
                  <Check className="h-4 w-4 text-still-ground" strokeWidth={2} /> What you'll gain
                </h3>
                <ul className="space-y-2">
                  {service.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-still-ground/90 font-medium">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-still-ground flex-shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-3.5 border-t border-still-ground/20">
                <h3 className="font-bold text-still-ground mb-2.5 flex items-center gap-2 text-xs uppercase tracking-wider">
                  <Target className="h-4 w-4 text-still-ground" strokeWidth={2} /> Rooted in
                </h3>
                <ul className="space-y-2">
                  {service.rootedIn.map((root, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-still-ground/90 font-medium">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-still-ground flex-shrink-0" />
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

