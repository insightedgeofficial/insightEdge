import { AboutHero } from '@/components/about/AboutHero';
import { AboutCompany } from '@/components/about/AboutCompany';
import { AboutUsFlow } from '@/components/about/AboutUsFlow';
import { OriginStory } from '@/components/about/OriginStory';

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Global grain texture overlay */}
      <div 
        className="fixed inset-0 opacity-[0.01] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative z-10">
        <AboutHero />
        <AboutCompany />
        <AboutUsFlow />
        <OriginStory />
      </div>
    </div>
  );
}
