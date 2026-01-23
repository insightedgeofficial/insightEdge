'use client';

import { Hero } from '@/components/home/Hero';
import { NameBreakdown } from '@/components/home/NameBreakdown';
import { ServicesTeaser } from '@/components/home/ServicesTeaser';
import { ValueBlocks } from '@/components/home/ValueBlocks';
import { UpcomingEvents } from '@/components/home/UpcomingEvents';
import { Testimonials } from '@/components/home/Testimonials';
import { MeetFounders } from '@/components/home/MeetFounders';
import { EntryAnimation } from '@/components/home/EntryAnimation';

export default function Home() {
  return (
    <EntryAnimation>
      <div className="flex flex-col">
        {/* 1. Tagline and about us (we are - experience designers) */}
        <Hero />
        
        {/* 2. The InsightEdge Philosophy */}
        <NameBreakdown />
        
        {/* 3. Our Services */}
        <ServicesTeaser />
        
        {/* 4. What makes us different */}
        <ValueBlocks />
        
        {/* 5. What's happening next at IE */}
        <UpcomingEvents />
        
        {/* 6. Testimonials */}
        <Testimonials />
        
        {/* 7. About the founders */}
        <MeetFounders />
      </div>
    </EntryAnimation>
  );
}
