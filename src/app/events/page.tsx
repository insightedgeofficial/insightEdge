'use client';

import { EventDirectory } from "@/components/events/EventDirectory";
import { PastEvents } from "@/components/events/PastEvents";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { hoverPop, hoverPopCard } from "@/lib/hover-animation";

export default function EventsPage() {
  return (
    <div>
      <PageHero
        backgroundImageSrc="/events_page.jpeg"
        title="Events"
        description="From workshops and panels to certification programs, InsightEdge curates experiences that turn psychological insight into action. Join us online or in person to learn, connect, and grow."
      >
        <Button asChild size="lg" className="h-12 md:h-13 px-6 text-base md:text-lg font-semibold bg-morning-quiet hover:bg-morning-quiet/90 text-still-ground border-none shadow-md">
          <Link href="#upcoming">View Upcoming Events</Link>
        </Button>
        <Button asChild size="lg" className="h-12 md:h-13 px-6 text-base md:text-lg font-semibold bg-still-ground hover:bg-still-ground/90 text-morning-quiet border-none shadow-md">
          <Link href="/contact">Host an Event with Us</Link>
        </Button>
      </PageHero>
      <EventDirectory />
      <PastEvents />
      <SectionWrapper>
        <motion.div 
          whileHover={hoverPopCard.whileHover}
          transition={hoverPopCard.transition}
          className="text-center bg-primary/10 p-10 md:p-14 rounded-2xl border border-primary/20 shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-foreground">Have an idea for a workshop?</h2>
          <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl mx-auto font-light">
            We love collaborating on new ideas. If you want to co-host a workshop or event, get in touch with our team.
          </p>
          <motion.div
            whileHover={hoverPop.whileHover}
            transition={hoverPop.transition}
            className="inline-block"
          >
            <Button asChild size="lg" className="h-12 md:h-14 px-8 text-base md:text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg rounded-xl">
              <Link href="/contact">Propose an Event</Link>
            </Button>
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
