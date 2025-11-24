import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SectionWrapper } from "../shared/SectionWrapper";
import { PageTitle } from "../shared/PageTitle";

export function OriginStory() {
  const image = PlaceHolderImages.find(p => p.id === 'founders-candid');
  return (
    <SectionWrapper>
      <PageTitle title="The InsightEdge Journey" className="mb-12"/>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6 text-muted-foreground text-lg">
          <p>
            InsightEdge was born out of a shared belief that psychology shouldn’t stay confined to therapy rooms or textbooks. As practicing psychologists and facilitators, we saw how real transformation happens when people engage with psychological ideas in everyday spaces – through conversation, creativity, and collaboration.
          </p>
          <p>
            What started as small, interactive sessions with students and young adults has grown into a community initiative with a focus on designing workshops, training sessions, and wellness programs for schools, universities, corporates, and organizations across India.
          </p>
          <p>
            Our approach combines behavioural science with empathy, communication, and co-creation – making every space we enter one that invites learning, reflection, and growth.
          </p>
        </div>
        {image && (
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={image.imageUrl}
              alt={image.description}
              data-ai-hint={image.imageHint}
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
