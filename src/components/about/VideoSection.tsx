'use client';

import { useRef, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface VideoSectionProps {
  videoUrl?: string;
  posterImage?: string;
  title?: string;
}

export function VideoSection({ 
  videoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  posterImage,
  title = 'Our Approach'
}: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    animationType: 'fade-up',
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video always plays
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log('Autoplay prevented, attempting to play:', error);
      }
    };

    playVideo();

    // Keep video playing if it pauses
    const handlePause = () => {
      if (video.paused) {
        playVideo();
      }
    };

    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  return (
    <div 
      ref={ref}
      className={cn(
        "w-full relative flex items-center justify-center",
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{
        transition: 'opacity 1s ease-out, transform 1s ease-out',
        backgroundColor: '#F9F7F2',
        paddingTop: '40px',
        paddingBottom: '40px',
        paddingLeft: '20px',
        paddingRight: '20px',
        minHeight: 'auto',
      }}
    >
      {/* Background Image with Reduced Opacity - Section Level */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/DSC_0566.JPG"
          alt="Background"
          fill
          className="object-cover"
          style={{
            opacity: 0.65,
          }}
          priority
          quality={90}
        />
        {/* Subtle overlay for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F9F7F2]/30 via-[#F9F7F2]/20 to-[#F9F7F2]/25" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto w-full">
        <div className="relative w-full rounded-[20px] overflow-hidden shadow-lg bg-background/80 backdrop-blur-sm aspect-video">
          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster={posterImage}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

