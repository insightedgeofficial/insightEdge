import { Hero } from '@/components/home/Hero';
import { ValueBlocks } from '@/components/home/ValueBlocks';
import { ServicesTeaser } from '@/components/home/ServicesTeaser';
import { UpcomingEvents } from '@/components/home/UpcomingEvents';
import { Testimonials } from '@/components/home/Testimonials';
import { MeetFounders } from '@/components/home/MeetFounders';
import { AiRecommender } from '@/components/home/AiRecommender';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ValueBlocks />
      <ServicesTeaser />
      <UpcomingEvents />
      <AiRecommender />
      <Testimonials />
      <MeetFounders />
    </div>
  );
}
