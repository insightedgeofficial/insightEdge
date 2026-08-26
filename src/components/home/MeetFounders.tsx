'use client';

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SectionWrapper } from "../shared/SectionWrapper";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export function MeetFounders() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    animationType: 'fade-up',
  });

  const combinedImage = PlaceHolderImages.find(p => p.id === "founders-candid");

  return (
    <SectionWrapper className="bg-background py-16 md:py-24 lg:py-28">
      <div ref={sectionRef} className="max-w-4xl mx-auto text-center">
        <h2
          className={cn(
            "font-playful text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 text-center tracking-tight text-foreground transition-all duration-700 ease-out",
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          About the Founders
        </h2>

        <div className={cn("space-y-8 transition-all duration-700 ease-out delay-150", isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
          {/* Single Combined Photo of Founders */}
          <div className="relative w-full max-w-xl h-64 sm:h-72 md:h-80 mx-auto rounded-2xl overflow-hidden shadow-md border border-border">
            <Image
              src={combinedImage?.imageUrl || "https://images.unsplash.com/photo-1492366254240-43affaefc3e3?auto=format&fit=crop&q=80&w=1080"}
              alt="Priyanka Surana & Lakshmi Rajesh - Founders of InsightEdge"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <div className="text-left text-white">
                <h3 className="font-headline text-xl md:text-2xl font-bold">Priyanka Surana & Lakshmi Rajesh</h3>
                <p className="text-sm text-white/90 font-medium">Co-Founders, InsightEdge</p>
              </div>
            </div>
          </div>

          {/* Three Paragraph Narrative for Founders */}
          <div className="space-y-6 text-base md:text-lg lg:text-xl leading-relaxed font-body text-foreground/90 max-w-3xl mx-auto text-center">
            <p>
              If you had met us a few years ago, you would've probably found us doing what we still do best, asking questions. About people. About behaviour. About why some experiences stay with us while others fade away. Somewhere between lectures, internships, research projects, and countless conversations over coffee, we realised we shared the same dream: to make psychology feel less intimidating, less exclusive, and far more human.
            </p>
            <p>
              We're still the same two people who ask too many questions, find meaning in everyday moments, and believe that understanding ourselves is one of the most valuable things we can do. Everything we create is simply an extension of those beliefs and the kind of impact we hope to leave behind.
            </p>
            <p>
              Today, that curiosity has taken shape in our work. Priyanka is a Counselling Psychologist, currently specialising in Sports Psychology. Lakshmi is a Behavioural Researcher, currently pursuing her Master's in Counselling Psychology. Different paths, same thread, understanding people, a little more closely, every day.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
