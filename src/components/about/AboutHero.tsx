import { SectionWrapper } from "../shared/SectionWrapper";

export function AboutHero() {
  return (
    <SectionWrapper className="bg-secondary/30">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline lg:text-6xl text-primary-foreground mix-blend-multiply bg-primary/80 p-4 rounded-lg inline">
            Bringing Psychology Closer to People.
        </h1>
        <p className="mt-8 max-w-3xl mx-auto text-xl text-muted-foreground">
          We started InsightEdge with a simple question – What if psychology were as easy to access as everyday learning? From classrooms to boardrooms, our journey began with the vision of making psychology personalised, understandable, actionable, and human.
        </p>
      </div>
    </SectionWrapper>
  );
}
