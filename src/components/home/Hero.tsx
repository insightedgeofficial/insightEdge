'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Hero() {
  const { ref, animationClasses } = useScrollAnimation({
    threshold: 0.2,
    animationType: 'fade-up',
    delay: 100,
  });

  return (
    <section className="relative w-full py-24 lg:py-32 xl:py-48 bg-still-ground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div ref={ref} className={`max-w-4xl mx-auto ${animationClasses}`}>
          <h1 className="text-4xl font-headline font-bold tracking-tight text-morning-quiet sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block font-playful text-cleared mt-1 sm:mt-2">Experience Designers</span>
          </h1>
          <h2 className="mt-4 text-2xl md:text-3xl font-headline font-semibold text-morning-quiet/90 transition-all duration-700 ease-out delay-150">
            Making room for better Mental Health
          </h2>
          <p className="mt-6 text-lg leading-8 text-morning-quiet/80 sm:text-xl transition-all duration-700 ease-out delay-200">
            We bring psychology out of the textbooks - into classrooms, workplaces, and communities, through evidence-based workshops, therapy, and training experiences that drive real change.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 transition-all duration-700 ease-out delay-300">
            <Button asChild size="lg" className="bg-cleared hover:bg-cleared/90 text-still-ground border-none">
              <Link href="/contact">Book a Workshop →</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent text-morning-quiet border-morning-quiet hover:bg-morning-quiet/10 hover:text-morning-quiet">
              <Link href="/#services">See Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
