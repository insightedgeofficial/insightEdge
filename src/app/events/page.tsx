import { EventDirectory } from "@/components/events/EventDirectory";
import { PastEvents } from "@/components/events/PastEvents";
import { FloatingGallery } from "@/components/events/FloatingGallery";
import { PageTitle } from "@/components/shared/PageTitle";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EventsPage() {
  return (
    <div>
      <SectionWrapper className="bg-secondary/30">
        <PageTitle
          title="Events"
          subtitle="From workshops and panels to certification programs, InsightEdge curates experiences that turn psychological insight into action. Join us online or in person to learn, connect, and grow."
        />
        <div className="mt-8 flex items-center justify-center gap-x-4">
          <Button asChild size="lg" variant="outline">
            <Link href="#upcoming">View Upcoming Events</Link>
          </Button>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact">Host an Event with Us</Link>
          </Button>
        </div>
      </SectionWrapper>
      <EventDirectory />
      <PastEvents />
      <FloatingGallery />
      <SectionWrapper>
        <div className="text-center bg-primary/10 p-12 rounded-lg">
          <h2 className="text-3xl font-bold font-headline mb-4">Have an idea for a workshop?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We love collaborating on new ideas. If you want to co-host a workshop or event, get in touch with our team.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact">Propose an Event</Link>
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
