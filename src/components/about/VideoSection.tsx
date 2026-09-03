'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function VideoSection() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    animationType: 'fade-up',
  });

  return (
    <div
      ref={ref}
      className={cn(
        "w-full relative flex items-center justify-center h-[50vh] md:h-[60vh]",
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{
        transition: 'opacity 1s ease-out, transform 1s ease-out',
        backgroundColor: '#F9F7F2',
      }}
    >
      {/* Background Image, slightly translucent */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/DSC_0566.JPG"
          alt="InsightEdge team and community"
          fill
          className="object-cover"
          style={{ opacity: 0.65 }}
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F9F7F2]/30 via-[#F9F7F2]/20 to-[#F9F7F2]/25" />
      </div>
    </div>
  );
}
