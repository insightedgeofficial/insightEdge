'use client';

import { pastEvents } from "@/lib/data";
import { SectionWrapper } from "../shared/SectionWrapper";
import { PageTitle } from "../shared/PageTitle";
import { Card } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function PastEvents() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    animationType: 'fade-up',
  });

  // Debug: Log events to console
  if (typeof window !== 'undefined') {
    console.log('Past Events:', pastEvents);
  }

  return (
    <SectionWrapper className="bg-secondary/30">
      <div ref={sectionRef}>
        <PageTitle 
          title="Past Events & Learning Highlights" 
          subtitle="Explore our recent workshops, community sessions, and trainings." 
          className={`mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pastEvents.map((event, index) => (
            <PastEventCard key={event.id} event={event} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function PastEventCard({ 
  event, 
  index, 
  isVisible 
}: { 
  event: typeof pastEvents[0]; 
  index: number; 
  isVisible: boolean;
}) {
  const [cardVisible, setCardVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Get first non-HEIC image, or first image if no JPG/PNG available
  const firstImage = event.images && event.images.length > 0
    ? event.images.find(img => !img.src.toLowerCase().endsWith('.heic'))?.src || event.images[0].src
    : null;

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setCardVisible(true);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);

  return (
    <Link href={`/events/past/${event.id}`}>
      <Card
        className={cn(
          "relative h-64 overflow-hidden cursor-pointer group transition-all duration-500 ease-out",
          cardVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        )}
        style={{ transitionDelay: `${index * 100}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {firstImage && !imageError ? (
          <div className="absolute inset-0">
            <Image
              src={firstImage}
              alt={event.title}
              fill
              className={cn(
                "object-cover transition-transform duration-500 ease-out",
                isHovered ? "scale-110" : "scale-100"
              )}
              unoptimized
              onError={() => setImageError(true)}
            />
            {/* Overlay */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-300",
                isHovered ? "opacity-100" : "opacity-60"
              )}
            />
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <h3 className="font-headline text-xl font-bold text-white mb-1">
                {event.title}
              </h3>
              <p className="text-sm text-white/90">{event.date}</p>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <div className="text-center p-4">
              <h3 className="font-headline text-xl font-bold mb-1">
                {event.title}
              </h3>
              <p className="text-sm text-muted-foreground">{event.date}</p>
            </div>
          </div>
        )}
      </Card>
    </Link>
  );
}
