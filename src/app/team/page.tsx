'use client';

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { TeamGrid } from "@/components/team/TeamGrid";
import Link from "next/link";
import { motion } from "framer-motion";
import { hoverPop, hoverPopCard } from "@/lib/hover-animation";

export default function TeamPage() {
  return (
    <div>
      <PageHero
        backgroundImageSrc="/teams_page.jpeg"
        title="Meet Our Team"
        description="Every experience begins with the people behind it"
      />
      <TeamGrid />
      <SectionWrapper>
        <motion.div 
          whileHover={hoverPopCard.whileHover}
          transition={hoverPopCard.transition}
          className="text-center bg-primary/10 p-10 md:p-14 rounded-2xl border border-primary/20 shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-foreground">Want to Collaborate or Join Our Network?</h2>
          <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl mx-auto font-light">
            We’re always looking to connect with facilitators and practitioners who share our belief that psychology should be lived, not lectured.
          </p>
          <motion.div
            whileHover={hoverPop.whileHover}
            transition={hoverPop.transition}
            className="inline-block"
          >
            <Button asChild size="lg" className="h-12 md:h-14 px-8 text-base md:text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg rounded-xl">
              <Link href="/contact">Collaborate with Us</Link>
            </Button>
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
