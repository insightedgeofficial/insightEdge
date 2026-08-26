import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export default function FaqPage() {
  return (
    <div>
      <PageHero
        backgroundImageSrc="/faq_page.jpeg"
        title="What You Should Know"
        description="Find answers to common questions about our programs, booking process, and how we work."
      />
        <SectionWrapper className="bg-muted/20 py-12 md:py-16">
            <FaqAccordion />
        </SectionWrapper>
    </div>
  );
}
