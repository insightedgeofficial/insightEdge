'use client';

import { pastEvents } from "@/lib/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { EventImage } from "@/lib/types";

export function FloatingGallery() {
  const [currentImages, setCurrentImages] = useState<EventImage[]>([]);
  
  // Collect all images from past events
  useEffect(() => {
    const allImages: EventImage[] = [];
    pastEvents.forEach(event => {
      if (event.images) {
        allImages.push(...event.images);
      }
    });
    // Shuffle and take first 6 for display
    const shuffled = [...allImages].sort(() => Math.random() - 0.5).slice(0, 6);
    setCurrentImages(shuffled);
  }, []);

  if (currentImages.length === 0) return null;

  return (
    <div className="fixed right-4 bottom-4 z-40 w-56 md:w-72 opacity-90 hover:opacity-100 transition-all duration-300 hidden lg:block">
      <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-3 md:p-4 shadow-2xl border border-border/50">
        <h3 className="font-headline text-xs md:text-sm font-semibold mb-3 text-center text-primary">
          Event Highlights
        </h3>
        <div className="grid grid-cols-3 gap-1.5 md:gap-2" style={{ gridAutoRows: '60px' }}>
          {currentImages.slice(0, 6).map((image, index) => {
            // Masonry-like layout: first image spans 2x2, 4th spans 2x1, others are 1x1
            const isLarge = index === 0;
            const isWide = index === 3;
            
            return (
              <div
                key={`${image.src}-${index}`}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
                style={{
                  gridColumn: isLarge || isWide ? 'span 2' : 'span 1',
                  gridRow: isLarge ? 'span 2' : 'span 1',
                }}
              >
                <Image
                  src={image.src}
                  alt="Event highlight"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

