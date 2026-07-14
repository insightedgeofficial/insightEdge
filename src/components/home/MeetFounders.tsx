'use client';

import { founders } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SectionWrapper } from "../shared/SectionWrapper";
import { PageTitle } from "../shared/PageTitle";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function MeetFounders() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    animationType: 'fade-up',
  });

  return (
    <SectionWrapper>
      <div ref={sectionRef}>
        <PageTitle 
          title="Meet our Founders" 
          subtitle="Founded by psychology graduates from Sri Ramachandra Institute of Higher Education and Research, InsightEdge is built on the principles of empowering psychology students. Our goal is to provide guidance, resources, and hands-on learning experiences that support their academic and professional journeys." 
          className={`mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        />
        <div className="grid max-w-4xl mx-auto gap-12 md:grid-cols-2">
          {founders.map((founder, index) => (
            <FounderCard key={founder.name} founder={founder} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function FounderCard({ founder, index, isVisible }: { founder: typeof founders[0], index: number, isVisible: boolean }) {
  const [cardVisible, setCardVisible] = useState(false);
  const image = PlaceHolderImages.find(p => p.id === founder.image);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setCardVisible(true);
      }, index * 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);

  return (
    <Card 
      className={`text-center border-none shadow-none bg-transparent transition-all duration-500 ease-out ${
        cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <CardHeader>
        {image && (
          <div className={`relative w-40 h-40 mx-auto rounded-full overflow-hidden transition-all duration-500 ease-out ${
            cardVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
          }`} style={{ transitionDelay: `${index * 200 + 150}ms` }}>
            <Image
              src={image.imageUrl}
              alt={image.description}
              data-ai-hint={image.imageHint}
              width={200}
              height={200}
              className="w-40 h-40 object-cover"
              style={{
                transform: founder.name === 'Priyanka Surana' 
                  ? 'scale(1.15) translateX(-8px) translateY(10px)' 
                  : 'scale(1.1)'
              }}
            />
          </div>
        )}
        <CardTitle className="mt-4 font-headline text-2xl">{founder.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{founder.title}</p>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{founder.bio}</p>
      </CardContent>
    </Card>
  );
}
