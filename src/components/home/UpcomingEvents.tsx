'use client';

import { upcomingEvents } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SectionWrapper } from "../shared/SectionWrapper";
import { PageTitle } from "../shared/PageTitle";
import { Calendar, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";

export function UpcomingEvents() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    animationType: 'scale-up',
  });

  return (
    <SectionWrapper>
      <div ref={sectionRef}>
        <PageTitle 
          title="What's Happening Next at InsightEdge" 
          className={`mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} 
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event, index) => (
            <EventCard key={event.title} event={event} index={index} isVisible={isVisible} />
          ))}
        </div>
        <div className={`mt-12 text-center transition-all duration-700 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/events">View All Events →</Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}

function EventCard({ event, index, isVisible }: { event: typeof upcomingEvents[0], index: number, isVisible: boolean }) {
  const [cardVisible, setCardVisible] = useState(false);
  const image = PlaceHolderImages.find(p => p.id === event.image);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setCardVisible(true);
      }, index * 150);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);

  return (
    <Card 
      className={`overflow-hidden transform transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl ${
        cardVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {image && (
        <div className={`relative w-full h-48 overflow-hidden transition-all duration-500 ease-out ${
          cardVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
        }`} style={{ transitionDelay: `${index * 150 + 100}ms` }}>
          <Image
            src={image.imageUrl}
            alt={image.description}
            data-ai-hint={image.imageHint}
            width={600}
            height={400}
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>{event.location}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={event.href}>Get More Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
