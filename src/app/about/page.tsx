import { AboutHero } from '@/components/about/AboutHero';
import { AboutCompany } from '@/components/about/AboutCompany';
import { AnimatedStats } from '@/components/about/AnimatedStats';
import { VideoSection } from '@/components/about/VideoSection';
import { AboutUsFlow } from '@/components/about/AboutUsFlow';
import { OriginStory } from '@/components/about/OriginStory';

export default function AboutPage() {
  return (
    <div className="relative" style={{ backgroundColor: '#F9F7F2' }}>
      <div className="relative z-10">
        <VideoSection />
        <AboutHero />
        <AnimatedStats />
        <AboutCompany />
        <AboutUsFlow />
        <OriginStory />
      </div>
    </div>
  );
}
