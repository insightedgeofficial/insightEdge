'use client';

import { teamMembers } from "@/lib/data";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SectionWrapper } from "../shared/SectionWrapper";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Filter team members - those with complete info
const allTeamMembers = teamMembers.filter(m => m.name && m.role && m.tagline && m.bio);

// Per-member fine-tuning for portrait framing, keyed by their image id.
// Members not listed here keep the default top-anchored crop untouched.
const imageFraming: Record<string, { objectPosition: string; scale?: number }> = {
  'team-heena': { objectPosition: 'center 50%', scale: 1.6 },
  'team-yashi': { objectPosition: 'center 45%', scale: 1.3 },
  'team-drishti': { objectPosition: 'center 5%' },
  'team-kiran': { objectPosition: 'center 8%' },
};

export function TeamGrid() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    animationType: 'fade-up',
  });

  return (
    <SectionWrapper>
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        {/* Unified Team - Alternating Layout */}
        <div className="space-y-16">
          {allTeamMembers.map((member, index) => (
            <AlternatingProfileCard
              key={member.name}
              member={member}
              index={index}
              isVisible={isVisible}
              alignLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

// Alternating Left-Right Profile Layout
function AlternatingProfileCard({
  member,
  index,
  isVisible,
  alignLeft,
}: {
  member: typeof teamMembers[0];
  index: number;
  isVisible: boolean;
  alignLeft: boolean;
}) {
  const [cardVisible, setCardVisible] = useState(false);
  const image = PlaceHolderImages.find(p => p.id === member.image);
  const framing = imageFraming[member.image];

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setCardVisible(true);
      }, index * 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ease-out",
        alignLeft ? "md:flex-row" : "md:flex-row-reverse",
        cardVisible
          ? "opacity-100 translate-x-0 translate-y-0 rotate-0"
          : alignLeft
          ? "opacity-0 -translate-x-12 translate-y-8 -rotate-2"
          : "opacity-0 translate-x-12 translate-y-8 rotate-2"
      )}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Image */}
      <div className="flex-shrink-0">
        {image && (
          <div
            className={cn(
              "relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ease-out",
              cardVisible ? "scale-100 rotate-0" : "scale-90 rotate-6"
            )}
            style={{ transitionDelay: `${index * 200 + 150}ms` }}
          >
            <Image
              src={image.imageUrl}
              alt={`Portrait of ${member.name}`}
              data-ai-hint="person portrait"
              fill
              className="object-cover"
              style={{
                objectPosition: framing?.objectPosition ?? 'top',
                transform: framing?.scale ? `scale(${framing.scale})` : undefined,
                transformOrigin: framing?.objectPosition ?? 'top',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="font-headline text-2xl md:text-3xl font-bold mb-2">
          {member.name}
        </h3>
        <p className="text-primary font-semibold mb-3">{member.role}</p>
        <p className="text-lg italic text-muted-foreground mb-4">
          "{member.tagline}"
        </p>
        <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );
}
