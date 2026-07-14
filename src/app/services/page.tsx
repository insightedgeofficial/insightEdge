import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { PageTitle } from "@/components/shared/PageTitle";
import { ServiceStackCards } from "@/components/services/ServiceStackCards";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div>
      <SectionWrapper className="bg-secondary/30 py-16 md:py-24 lg:py-28 pb-12 md:pb-16">
        <PageTitle
          title="Our Services"
          subtitle="We design and deliver programs that bring psychological insights to real-world spaces, from classrooms and organizations to communities and research ecosystems."
        />
         <div className="mt-12 md:mt-16 flex items-center justify-center gap-x-4">
            <Button asChild size="lg" variant="outline">
              <Link href="/#services">See All Services</Link>
            </Button>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">Request a Proposal</Link>
            </Button>
          </div>
      </SectionWrapper>
      <ServiceStackCards />
    </div>
  );
}
