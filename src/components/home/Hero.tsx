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
    <section className="relative w-full py-24 lg:py-32 xl:py-48 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div ref={ref} className={`max-w-4xl mx-auto ${animationClasses}`}>
          <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            We are - Experience Designers
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl transition-all duration-700 ease-out delay-200">
            We bring psychology out of the textbooks - into classrooms, workplaces, and communities, through evidence-based workshops, therapy, and training experiences that drive real change.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 transition-all duration-700 ease-out delay-300">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">Book a Workshop →</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/#services">See Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
