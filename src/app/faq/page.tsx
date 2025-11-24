import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { PageTitle } from "@/components/shared/PageTitle";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export default function FaqPage() {
  return (
    <div>
        <SectionWrapper className="bg-secondary/30">
            <PageTitle
                title="Frequently Asked Questions"
                subtitle="Find answers to common questions about our programs, booking process, and how we work."
            />
        </SectionWrapper>
        <FaqAccordion />
    </div>
  );
}
