import { AboutHero } from '@/components/about/AboutHero';
import { OriginStory } from '@/components/about/OriginStory';
import { EthosBlocks } from '@/components/shared/EthosBlocks';
import { Milestones } from '@/components/about/Milestones';
import { ethosBlocks } from '@/lib/data';

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <OriginStory />
      <EthosBlocks ethosBlocks={ethosBlocks} title="The Mindset Behind InsightEdge" />
      <Milestones />
    </div>
  );
}
