import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { PageTitle } from "@/components/shared/PageTitle";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export default function FaqPage() {
  return (
    <div>
        <SectionWrapper className="bg-secondary/30">
            <PageTitle
                title="What You Should Know"
                subtitle="Find answers to common questions about our programs, booking process, and how we work."
            />
        </SectionWrapper>
        <SectionWrapper className="bg-muted/20 py-12 md:py-16">
            <FaqAccordion />
        </SectionWrapper>
    </div>
  );
}
