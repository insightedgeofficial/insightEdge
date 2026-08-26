'use client';

import { valueBlocks } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionWrapper } from "../shared/SectionWrapper";
import { PageTitle } from "../shared/PageTitle";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useRef, useState } from "react";

export function ValueBlocks() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    animationType: 'fade-up',
  });

  return (
    <SectionWrapper className="bg-background">
      <div ref={sectionRef}>
        <PageTitle 
          title="What Makes Us Different?" 
          className={`mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
        />
        <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-4">
          {valueBlocks.map((block, index) => (
            <ValueBlockCard 
              key={block.title} 
              block={block} 
              index={index} 
              isVisible={isVisible} 
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function ValueBlockCard({ block, index, isVisible }: { block: typeof valueBlocks[0], index: number, isVisible: boolean }) {
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setCardVisible(true);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);

  return (
    <Card 
      className={`text-center h-full flex flex-col justify-between transform transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl ${
        cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <CardHeader>
        <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary mb-4 transition-all duration-500 ease-out ${
          cardVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
        }`} style={{ transitionDelay: `${index * 100 + 200}ms` }}>
          <block.icon className="h-8 w-8 text-primary-foreground" />
        </div>
        <CardTitle className="font-headline text-xl">{block.title}</CardTitle>
        <CardDescription className="pt-2 text-base">
          {block.text}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
