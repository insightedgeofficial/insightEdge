import { AboutHero } from '@/components/about/AboutHero';
import { AboutCompany } from '@/components/about/AboutCompany';
import { AnimatedStats } from '@/components/about/AnimatedStats';
import { WhoWeServe } from '@/components/about/WhoWeServe';
import { VideoSection } from '@/components/about/VideoSection';
import { AboutUsFlow } from '@/components/about/AboutUsFlow';
import { MeetFounders } from '@/components/home/MeetFounders';

export default function AboutPage() {
  return (
    <div className="relative w-full overflow-x-hidden" style={{ backgroundColor: '#F9F7F2' }}>
      <div className="relative z-10 w-full">
        {/* 1. Photo Banner */}
        <VideoSection />

        {/* End-to-End Section Divider */}
        <div className="w-full border-b border-border/40" />

        {/* 2. Sleek Sage Green Commitment Banner */}
        <AboutHero />

        {/* End-to-End Section Divider */}
        <div className="w-full border-b border-border/40" />

        {/* 3. About InsightEdge Narrative */}
        <AboutCompany />

        {/* End-to-End Section Divider */}
        <div className="w-full border-b border-border/40" />

        {/* 4. Full Viewport Width End-to-End Animated Stats Banner */}
        <AnimatedStats />

        {/* End-to-End Section Divider */}
        <div className="w-full border-b border-border/40" />

        {/* 5. Who We Serve Cards */}
        <WhoWeServe />

        {/* End-to-End Section Divider */}
        <div className="w-full border-b border-border/40" />

        {/* 6. About the Founders */}
        <MeetFounders />

        {/* End-to-End Section Divider */}
        <div className="w-full border-b border-border/40" />

        {/* 7. How We Work */}
        <AboutUsFlow />
      </div>
    </div>
  );
}
