'use client';

import { testimonials } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionWrapper } from "../shared/SectionWrapper";
import { PageTitle } from "../shared/PageTitle";
import Autoplay from "embla-carousel-autoplay";

export function Testimonials() {
  return (
    <SectionWrapper className="bg-secondary/30">
      <PageTitle title="Real Stories. Real Impact." className="mb-12" />
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="bg-background">
                  <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                    <p className="text-lg italic text-muted-foreground">
                      “{testimonial.quote}”
                    </p>
                    <p className="mt-4 font-semibold text-foreground">
                      — {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </SectionWrapper>
  );
}
