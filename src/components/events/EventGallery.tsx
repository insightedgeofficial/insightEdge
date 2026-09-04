'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { EventImage } from '@/lib/types';

interface EventGalleryProps {
  images: EventImage[];
  eventTitle: string;
}

type TileSize = 'small' | 'wide' | 'tall' | 'large';

function getTileSize(index: number): TileSize {
  const pattern: TileSize[] = ['large', 'wide', 'tall', 'small', 'small', 'wide', 'tall'];
  return pattern[index % pattern.length];
}

export function EventGallery({ images, eventTitle }: EventGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div className="w-full">
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3"
        style={{
          gridAutoRows: 'minmax(140px, 180px)',
          gridAutoFlow: 'dense',
        }}
      >
        {images.map((image, index) => {
          const size = getTileSize(index);
          return (
            <div
              key={index}
              className={cn(
                'relative overflow-hidden rounded-lg group cursor-pointer',
                size === 'large' && 'col-span-2 row-span-2',
                size === 'wide' && 'col-span-2 row-span-1',
                size === 'tall' && 'col-span-1 row-span-2',
                size === 'small' && 'col-span-1 row-span-1'
              )}
            >
              <Image
                src={image.src}
                alt={`${eventTitle} - Image ${index + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
