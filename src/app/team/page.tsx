import { Button } from "@/components/ui/button";
import { PageTitle } from "@/components/shared/PageTitle";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { TeamGrid } from "@/components/team/TeamGrid";
import Link from "next/link";

export default function TeamPage() {
  return (
    <div>
      <SectionWrapper className="bg-secondary/30">
        <PageTitle
          title="Meet Our Team"
          subtitle="Every experience begins with the people behind it"
        />
      </SectionWrapper>
      <TeamGrid />
      <SectionWrapper>
        <div className="text-center bg-primary/10 p-12 rounded-lg">
          <h2 className="text-3xl font-bold font-headline mb-4">Want to Collaborate or Join Our Network?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We’re always looking to connect with facilitators and practitioners who share our belief that psychology should be lived, not lectured.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact">Collaborate with Us</Link>
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
