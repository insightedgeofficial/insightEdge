'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { hoverPop, hoverPopCard } from "@/lib/hover-animation";
import { SectionWrapper } from "../shared/SectionWrapper";

export function EventDirectory() {
  return (
    <SectionWrapper id="upcoming" className="bg-sage-mist">
      <motion.div
        whileHover={hoverPopCard.whileHover}
        transition={hoverPopCard.transition}
        className="text-center bg-primary/10 p-10 md:p-14 rounded-2xl border border-primary/20 shadow-sm hover:shadow-lg transition-shadow cursor-pointer max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-foreground">
          Something Exciting Is Brewing! 🌿
        </h2>
        <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl mx-auto font-light">
          We've got a lineup of workshops, trainings, and events coming your way over the next few months.
          <br />
          Tap below to check out all the details and grab your spot.
        </p>
        <motion.div
          whileHover={hoverPop.whileHover}
          transition={hoverPop.transition}
          className="inline-block"
        >
          <Button asChild size="lg" className="h-12 md:h-14 px-8 text-base md:text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg rounded-xl">
            <Link href="https://linktr.ee/InsightEdge.enquiries" target="_blank" rel="noopener noreferrer">Explore Events & Registrations</Link>
          </Button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
