'use client';

import { testimonials } from "@/lib/data";
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
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Testimonials() {
  const { ref, animationClasses } = useScrollAnimation({
    threshold: 0.1,
    animationType: 'blur-in',
  });

  return (
    <SectionWrapper className="bg-secondary/30">
      <div ref={ref} className={animationClasses}>
        <PageTitle title="Real Stories. Real Impact." className="mb-12" />
      <div className="w-full max-w-6xl mx-auto">
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
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const image = testimonial.image 
                ? PlaceHolderImages.find(p => p.id === testimonial.image) 
                : null;
              
              return (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="flex flex-col md:flex-row bg-background rounded-2xl overflow-hidden shadow-lg">
                      {/* Left Panel - Portrait */}
                      <div className="relative w-full md:w-1/2 h-64 md:h-[320px] bg-muted rounded-tl-2xl rounded-bl-2xl md:rounded-tr-none md:rounded-br-none overflow-hidden">
                        {image ? (
                          <Image
                            src={image.imageUrl}
                            alt={`Portrait of ${testimonial.author}`}
                            fill
                            className="object-cover"
                            data-ai-hint={image.imageHint || "person portrait"}
                          />
                        ) : (
                          <div className="w-full h-full bg-muted" />
                        )}
                        {/* Name and Role Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-foreground/80 backdrop-blur-sm px-6 py-4">
                          <p className="text-background font-semibold text-lg">
                            {testimonial.author}
                          </p>
                          <p className="text-background/80 text-sm uppercase tracking-wider">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      {/* Right Panel - Quote */}
                      <div className="relative w-full md:w-1/2 bg-primary rounded-tr-2xl rounded-br-2xl md:rounded-tl-none md:rounded-bl-none p-6 md:p-8 flex flex-col justify-between min-h-[320px] md:min-h-[320px]">
                        <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed italic">
                          "{testimonial.quote}"
                        </p>
                        
                        {/* Navigation Buttons */}
                        <div className="flex items-center gap-3 mt-auto pt-6">
                          <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] border-0 text-white transition-colors">
                            <ChevronLeft className="h-6 w-6" />
                            <span className="sr-only">Previous testimonial</span>
                          </CarouselPrevious>
                          <CarouselNext className="static translate-y-0 h-12 w-12 rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] border-0 text-white transition-colors">
                            <ChevronRight className="h-6 w-6" />
                            <span className="sr-only">Next testimonial</span>
                          </CarouselNext>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
      </div>
    </SectionWrapper>
  );
}
