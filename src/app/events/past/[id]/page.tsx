import { pastEvents } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, CheckCircle2 } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PastEventPageProps {
  params: {
    id: string;
  };
}

export default function PastEventPage({ params }: PastEventPageProps) {
  const event = pastEvents.find((e) => e.id === params.id);

  if (!event) {
    notFound();
  }

  const eventImages = event.images
    ?.map(id => PlaceHolderImages.find(p => p.id === id))
    .filter(Boolean) || [];

  return (
    <div>
      <SectionWrapper className="bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          {/* Title and Date */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">{event.date}</span>
            </div>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold">
              {event.title}
            </h1>
          </div>

          {/* Description */}
          <div className="mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {event.description}
            </p>
          </div>

          {/* Highlights */}
          {event.highlights && event.highlights.length > 0 && (
            <div className="mb-12">
              <h2 className="font-headline text-3xl font-bold mb-6">Highlights</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {event.highlights.map((highlight, index) => (
                  <Card key={index} className="border-primary/20">
                    <CardContent className="pt-6 flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{highlight}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Image Gallery */}
          {eventImages.length > 0 && (
            <div className="mb-12">
              <h2 className="font-headline text-3xl font-bold mb-6">Event Gallery</h2>
              {eventImages.length === 1 ? (
                <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src={eventImages[0]!.imageUrl}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {eventImages.map((image, index) => (
                      <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                          <Image
                            src={image!.imageUrl}
                            alt={`${event.title} - Image ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex" />
                  <CarouselNext className="hidden md:flex" />
                </Carousel>
              )}
            </div>
          )}
        </div>
      </SectionWrapper>
    </div>
  );
}

