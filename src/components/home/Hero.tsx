'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { hoverPop } from "@/lib/hover-animation";

export function Hero() {
  const { ref, animationClasses } = useScrollAnimation({
    threshold: 0.2,
    animationType: 'fade-up',
    delay: 100,
  });

  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40 xl:py-48 bg-still-ground overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div ref={ref} className={`max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto ${animationClasses}`}>
          {/* Main Hero Headline: Standout, Massive & Single Line */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-playful font-bold tracking-tight text-morning-quiet whitespace-nowrap leading-none drop-shadow-md">
            Experience Designers
          </h1>
          
          {/* Subtitle */}
          <h2 className="mt-6 md:mt-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-headline font-semibold text-morning-quiet/90 tracking-wide transition-all duration-700 ease-out delay-150">
            Making Room For Better Mental Health
          </h2>

          {/* Action Buttons */}
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-6 transition-all duration-700 ease-out delay-300">
            <motion.div
              whileHover={hoverPop.whileHover}
              transition={hoverPop.transition}
              className="inline-block"
            >
              <Button asChild size="lg" className="h-12 md:h-14 px-7 text-base md:text-lg font-semibold bg-morning-quiet hover:bg-morning-quiet/90 text-still-ground border-none shadow-lg">
                <Link href="/#services">See Services</Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={hoverPop.whileHover}
              transition={hoverPop.transition}
              className="inline-block"
            >
              <Button asChild size="lg" className="h-12 md:h-14 px-7 text-base md:text-lg font-semibold bg-still-ground hover:bg-still-ground/90 text-morning-quiet border border-morning-quiet/35 shadow-lg">
                <Link href="/contact">Book a Workshop →</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
