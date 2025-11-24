import { milestones } from "@/lib/data";
import { SectionWrapper } from "../shared/SectionWrapper";
import { PageTitle } from "../shared/PageTitle";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Badge } from "../ui/badge";

export function PastEvents() {
  // Using milestones as past events for demonstration
  const pastEvents = milestones.slice(1).reverse(); 

  return (
    <SectionWrapper className="bg-secondary/30">
      <PageTitle title="Past Events & Learning Highlights" subtitle="Explore our recent workshops, community sessions, and trainings." className="mb-12" />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {pastEvents.map((event, index) => (
          <Card key={index} className="bg-background transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <div className="flex justify-between items-start">
                  <CardTitle className="font-headline text-lg">{event.description}</CardTitle>
                  <Badge variant="outline">Past</Badge>
              </div>
              <CardDescription className="pt-2">{event.date}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
