'use client';

import { Hero } from '@/components/home/Hero';
import { NameBreakdown } from '@/components/home/NameBreakdown';
import { ValueBlocks } from '@/components/home/ValueBlocks';
import { ServicesTeaser } from '@/components/home/ServicesTeaser';
import { UpcomingEvents } from '@/components/home/UpcomingEvents';
import { Testimonials } from '@/components/home/Testimonials';
import { MeetFounders } from '@/components/home/MeetFounders';
import { AiRecommender } from '@/components/home/AiRecommender';
import { EntryAnimation } from '@/components/home/EntryAnimation';

export default function Home() {
  return (
    <EntryAnimation>
      <div className="flex flex-col">
        <Hero />
        <NameBreakdown />
        <ValueBlocks />
        <ServicesTeaser />
        <UpcomingEvents />
        <AiRecommender />
        <Testimonials />
        <MeetFounders />
      </div>
    </EntryAnimation>
  );
}
