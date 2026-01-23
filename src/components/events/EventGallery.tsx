'use client';

import Image from 'next/image';
import type { EventImage } from '@/lib/types';

interface EventGalleryProps {
  images: EventImage[];
  eventTitle: string;
}

export function EventGallery({ images, eventTitle }: EventGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div className="w-full">
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4" style={{ columnGap: 0 }}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative mb-0 break-inside-avoid group cursor-pointer w-full"
          >
            <div className="relative w-full overflow-hidden rounded-sm">
              <Image
                src={image.src}
                alt={`${eventTitle} - Image ${index + 1}`}
                width={800}
                height={1200}
                className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                unoptimized
                loading="lazy"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
