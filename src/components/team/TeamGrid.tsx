'use client';

import { teamMembers } from "@/lib/data";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SectionWrapper } from "../shared/SectionWrapper";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Filter team members - those with complete info vs facilitators
const allTeamMembers = teamMembers.filter(m => m.name && m.role && m.tagline && m.bio);
// Split into core team (first 3-4) and facilitators (rest, or those with "facilitator" in role)
const coreTeam = allTeamMembers.slice(0, 4);
const facilitators = allTeamMembers.filter(
  (m, idx) => idx >= 4 || m.role.toLowerCase().includes('facilitator')
);

export function TeamGrid() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    animationType: 'fade-up',
  });

  return (
    <div>
      {/* Core Team - Alternating Layout */}
      <SectionWrapper>
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-headline font-bold text-center mb-12">
            Our Core Team
          </h2>
          <div className="space-y-16">
            {coreTeam.map((member, index) => (
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

      {/* Facilitators Carousel */}
      {facilitators.length > 0 && (
        <SectionWrapper className="bg-secondary/30">
          <FacilitatorsCarousel facilitators={facilitators} />
        </SectionWrapper>
      )}
    </div>
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
              style={{ transform: 'scale(1.4)' }}
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

// Hover Reveal Cards for Facilitators Carousel
function FacilitatorsCarousel({
  facilitators,
}: {
  facilitators: typeof teamMembers;
}) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    animationType: 'fade-up',
  });

  return (
    <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <h2 className="text-3xl font-headline font-bold text-center mb-12">
        Our Facilitators
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-4 md:-ml-6">
          {facilitators.map((member, index) => (
            <CarouselItem key={member.name} className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3">
              <HoverRevealCard member={member} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}

// Hover Reveal Card Component
function HoverRevealCard({
  member,
  index,
}: {
  member: typeof teamMembers[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const image = PlaceHolderImages.find(p => p.id === member.image);

  return (
    <Card
      className={cn(
        "relative h-96 overflow-hidden cursor-pointer transition-all duration-500 ease-out group",
        "hover:shadow-2xl hover:-translate-y-2"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image.imageUrl}
            alt={`Portrait of ${member.name}`}
            data-ai-hint="person portrait"
            fill
            className="object-cover transition-all duration-500 ease-out"
            style={{ transform: isHovered ? 'scale(1.5)' : 'scale(1.4)' }}
          />
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent transition-opacity duration-500",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          />
        </div>
      )}

      {/* Content Overlay */}
      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 ease-out",
          isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}
      >
        <h3 className="font-headline text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-primary text-sm font-semibold mb-2">{member.role}</p>
        <p className="text-sm italic text-muted-foreground">
          "{member.tagline}"
        </p>
      </div>

      {/* Default State - Just Name */}
      {!isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-primary/10 backdrop-blur-sm">
          <h3 className="font-headline text-2xl font-bold text-foreground">
            {member.name}
          </h3>
        </div>
      )}
    </Card>
  );
}
