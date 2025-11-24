import { milestones } from "@/lib/data";
import { SectionWrapper } from "../shared/SectionWrapper";
import { PageTitle } from "../shared/PageTitle";
import { CheckCircle2 } from "lucide-react";

export function Milestones() {
  return (
    <SectionWrapper>
      <PageTitle title="Milestones on Our Journey" className="mb-16"/>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border"></div>
        {milestones.map((milestone, index) => (
          <div key={index} className="relative mb-12">
            <div className="flex items-center">
              <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <p className="font-headline text-lg font-semibold">{milestone.date}</p>
                <p className="text-muted-foreground">{milestone.description}</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bg-background p-1 rounded-full">
                <CheckCircle2 className="w-8 h-8 text-primary fill-background stroke-primary" />
              </div>
              <div className="flex-1"></div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
