import { fullServices } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionWrapper } from "../shared/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Check, Users, Target, Clock, Tag, Handshake } from '@phosphor-icons/react/dist/ssr';
import { Button } from "../ui/button";
import Link from "next/link";

export function ServiceTabs() {
  const categoryToId = (category: string) => category.toLowerCase().replace(/\s+/g, '-').replace('&', 'and');

  return (
    <SectionWrapper>
      <Tabs defaultValue={categoryToId(fullServices[0].category)} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 h-auto">
          {fullServices.map((service) => (
            <TabsTrigger key={service.category} value={categoryToId(service.category)}>{service.category}</TabsTrigger>
          ))}
        </TabsList>
        {fullServices.map((service) => (
          <TabsContent key={service.category} value={categoryToId(service.category)}>
            <Card className="mt-6 border-none bg-transparent shadow-none">
              <CardHeader>
                <CardTitle className="font-headline text-3xl">{service.category}</CardTitle>
                <p className="text-muted-foreground pt-2 text-lg">{service.overview}</p>
              </CardHeader>
              <CardContent className="mt-4 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center"><Check className="mr-2 h-5 w-5 text-primary"/> What You'll Gain</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {service.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>{outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center"><Target className="mr-2 h-5 w-5 text-primary"/> Rooted in</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {service.rootedIn.map((root, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>{root}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <div className="mt-8 text-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href={service.ctaLink}>
                        <Handshake className="mr-2 h-4 w-4"/> {service.cta}
                    </Link>
                </Button>
              </div>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </SectionWrapper>
  );
}
