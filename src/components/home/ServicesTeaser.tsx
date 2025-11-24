import { services } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SectionWrapper } from "../shared/SectionWrapper";
import { PageTitle } from "../shared/PageTitle";
import { ArrowRight } from "lucide-react";

export function ServicesTeaser() {
  return (
    <SectionWrapper id="services" className="bg-secondary/30">
      <PageTitle title="Our Services" subtitle="Tailored programs to bring psychological insights into your world." className="mb-12"/>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader className="flex-grow">
              <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              <CardDescription className="pt-2 text-base">{service.text}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild variant="link" className="p-0 text-foreground">
                <Link href={service.href}>
                  {service.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
