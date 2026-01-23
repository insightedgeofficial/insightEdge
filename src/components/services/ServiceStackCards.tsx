'use client';

import { fullServices } from "@/lib/data";
import { SectionWrapper } from "../shared/SectionWrapper";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check, Users, Target, Clock, Tag, Handshake, FileText, BarChart3, FileCheck } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function ServiceStackCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Calculate scroll room based on number of services - reduced for faster scrolling
  const totalHeight = fullServices.length * 60; // 60vh per card for quicker transitions

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
        className="w-full max-w-7xl mx-auto h-full rounded-[2.5rem] overflow-hidden flex flex-col my-2 md:my-4"
        style={{
          backgroundColor: 'hsl(var(--background))',
          opacity: 1,
          boxShadow: useTransform(
            shadowIntensity,
            (intensity) => `0 ${20 * intensity}px ${40 * intensity}px rgba(0, 0, 0, ${0.15 * intensity}), 0 ${10 * intensity}px ${20 * intensity}px rgba(0, 0, 0, ${0.1 * intensity})`
          ),
        }}
      >
        {/* Card Content */}
        <div className="h-full p-6 md:p-8 lg:p-10 grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column - Main Content */}
          <div className="flex flex-col justify-between space-y-4 md:space-y-5 min-h-0">
            <div className="flex flex-col space-y-4 md:space-y-5 flex-grow min-h-0">
              {/* Service Title */}
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-foreground flex-shrink-0"
              >
                {service.category}
              </h2>

              {/* Overview Description */}
              <p 
                className="text-base md:text-lg leading-relaxed font-body text-muted-foreground line-clamp-4 flex-shrink-0"
                style={{ 
                  lineHeight: '1.6',
                }}
              >
                {service.overview}
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex-shrink-0">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg w-fit"
              >
                <Link href={service.ctaLink}>
                  <Handshake className="mr-2 h-4 w-4" /> 
                  {service.cta}
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Details Grid */}
          <div className="flex flex-col justify-start space-y-5 md:space-y-6 min-h-0">
            {/* What You'll Gain */}
            <div className="flex-shrink-0">
              <h3 
                className="font-semibold text-lg md:text-xl mb-3 flex items-center text-foreground"
              >
                <Check className="mr-2 h-5 w-5 text-primary" /> 
                What You'll Gain
              </h3>
              {service.category === 'Statistical Services (Research Support)' ? (
                // Show as pills/tags with icons for Statistical Services (matching ServiceCardStack pattern)
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {service.outcomes.map((outcome, idx) => {
                    // Map outcomes to icons
                    let BenefitIcon;
                    if (outcome === 'Study Design') {
                      BenefitIcon = FileText;
                    } else if (outcome === 'Data Analysis') {
                      BenefitIcon = BarChart3;
                    } else if (outcome === 'Reporting & Review') {
                      BenefitIcon = FileCheck;
                    } else {
                      BenefitIcon = FileText;
                    }
                    
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-background/40 backdrop-blur-sm border border-primary/25 text-foreground/90 transition-all duration-300 ease-out hover:scale-105 hover:shadow-md hover:border-primary/40 hover:bg-background/60"
                        style={{
                          backdropFilter: 'blur(8px)',
                        }}
                      >
                        <BenefitIcon className="h-3 w-3 text-primary" />
                        <span className="text-[10px] md:text-xs font-semibold">{outcome}</span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                // Show as bullet list for other services
                <ul className="space-y-1.5">
                  {(service.outcomes.length > 4 
                    ? service.outcomes.slice(0, 4) 
                    : service.outcomes
                  ).map((outcome, i) => (
                    <li 
                      key={i} 
                      className="flex items-start text-muted-foreground"
                    >
                      <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                      <span className="font-body text-sm md:text-base line-clamp-2">{outcome}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Two Column Grid for Details */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 flex-shrink-0">
              {/* Audience */}
              <div className="flex items-start">
                <Users className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-1 flex-shrink-0 text-primary" />
                <div className="min-w-0">
                  <h4 
                    className="font-semibold mb-1.5 text-xs md:text-sm text-foreground"
                  >
                    Audience
                  </h4>
                  <p 
                    className="text-xs font-body text-muted-foreground leading-relaxed line-clamp-4"
                  >
                    {service.audience}
                  </p>
                </div>
              </div>

              {/* Format */}
              <div className="flex items-start">
                <Target className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-1 flex-shrink-0 text-primary" />
                <div className="min-w-0">
                  <h4 
                    className="font-semibold mb-1.5 text-xs md:text-sm text-foreground"
                  >
                    Format
                  </h4>
                  <p 
                    className="text-xs font-body text-muted-foreground leading-relaxed"
                  >
                    {service.format}
                  </p>
                </div>
              </div>

              {/* Duration */}
              <div className="flex items-start">
                <Clock className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-1 flex-shrink-0 text-primary" />
                <div className="min-w-0">
                  <h4 
                    className="font-semibold mb-1.5 text-xs md:text-sm text-foreground"
                  >
                    Duration
                  </h4>
                  <p 
                    className="text-xs font-body text-muted-foreground leading-relaxed line-clamp-2"
                  >
                    {service.duration}
                  </p>
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-start">
                <Tag className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 mt-1 flex-shrink-0 text-primary" />
                <div className="min-w-0">
                  <h4 
                    className="font-semibold mb-1.5 text-xs md:text-sm text-foreground"
                  >
                    Pricing
                  </h4>
                  <p 
                    className="text-xs font-body text-muted-foreground leading-relaxed line-clamp-3"
                  >
                    {service.pricing}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

