import { upcomingEvents } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SectionWrapper } from "../shared/SectionWrapper";
import { PageTitle } from "../shared/PageTitle";
import { Calendar, MapPin } from "lucide-react";

export function EventDirectory() {
  return (
    <SectionWrapper id="upcoming">
      <PageTitle title="Upcoming Events" className="mb-12" />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {upcomingEvents.map((event) => {
          const image = PlaceHolderImages.find(p => p.id === event.image);
          return (
            <Card key={event.title} className="overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              {image && (
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
              )}
              <CardHeader>
                <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={event.href}>{event.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
