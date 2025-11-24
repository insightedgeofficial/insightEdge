import { AboutHero } from '@/components/about/AboutHero';
import { OriginStory } from '@/components/about/OriginStory';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { PageTitle } from '@/components/shared/PageTitle';

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <OriginStory />
      <SectionWrapper className="bg-secondary/30">
        <PageTitle title="Our Mission" />
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground text-center">
            We aim to bridge the gap between academic learning and practical application by offering innovative programs, collaborative workshops, and professional development opportunities. Our initiatives are designed to equip psychology students and professionals with diverse skill sets, enabling them to navigate and excel in their careers.
        </p>
      </SectionWrapper>
    </div>
  );
}
