import { PageHero } from "@/components/shared/PageHero";
import { ServiceStackCards } from "@/components/services/ServiceStackCards";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        backgroundImageSrc="/services_page.jpeg?v=2"
        title="Our Services"
        description="We design and deliver programs that bring psychological insights to real-world spaces, from classrooms and organizations to communities and research ecosystems."
      >
        <Button asChild size="lg" className="h-12 md:h-13 px-6 text-base md:text-lg font-semibold bg-morning-quiet hover:bg-morning-quiet/90 text-still-ground border-none shadow-md">
          <Link href="/#services">See All Services</Link>
        </Button>
        <Button asChild size="lg" className="h-12 md:h-13 px-6 text-base md:text-lg font-semibold bg-still-ground hover:bg-still-ground/90 text-morning-quiet border-none shadow-md">
          <Link href="/contact">Request a Proposal</Link>
        </Button>
      </PageHero>
      <ServiceStackCards />
    </div>
  );
}
