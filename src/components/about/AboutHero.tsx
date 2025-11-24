import { SectionWrapper } from "../shared/SectionWrapper";

export function AboutHero() {
  return (
    <SectionWrapper className="bg-primary/20">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline lg:text-6xl text-primary-foreground mix-blend-multiply bg-primary/80 p-4 rounded-lg inline">
            Fostering Growth & Awareness
        </h1>
        <p className="mt-8 max-w-3xl mx-auto text-xl text-muted-foreground">
         At InsightEdge, we’re committed to fostering mental well-being and professional growth through a dual focus: empowering future mental health professionals and raising awareness within the broader community.
        </p>
      </div>
    </SectionWrapper>
  );
}
