import { SectionWrapper } from "../shared/SectionWrapper";
import { PageTitle } from "../shared/PageTitle";
import { Check } from '@phosphor-icons/react/dist/ssr';

export function Safeguarding() {
  const commitments = [
    "Informed consent and clear communication before every session.",
    "Confidentiality and data protection aligned with ethical guidelines.",
    "Culturally sensitive, inclusive, and non-discriminatory practices.",
    "Referral pathways when participant needs go beyond our scope."
  ];

  return (
    <SectionWrapper>
      <PageTitle
        title="Safeguarding and Ethical Practice"
        subtitle="At InsightEdge, every interaction is built on respect, confidentiality, and emotional safety. Our facilitators and therapists adhere to professional ethical standards and trauma-informed practices at all times."
        className="mb-12"
      />
      <div className="max-w-3xl mx-auto bg-secondary/30 p-8 rounded-lg">
        <ul className="space-y-4">
          {commitments.map((item, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-6 w-6 text-primary flex-shrink-0 mr-4 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-semibold text-center text-muted-foreground">
          We are committed to upholding the dignity and autonomy of every individual who engages with our work.
        </p>
      </div>
    </SectionWrapper>
  );
}
