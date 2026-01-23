'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface EntryAnimationProps {
  children: React.ReactNode;
  onAnimationComplete?: () => void;
}

const ANIMATION_PLAYED_KEY = 'insightedge-entry-animation-played';

export function EntryAnimation({ children, onAnimationComplete }: EntryAnimationProps) {
  const [stage, setStage] = useState<'initial' | 'logo-blur' | 'logo-sharp' | 'content-fade' | 'complete'>('initial');
  const [contentVisible, setContentVisible] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    // Check if animation has already played in this session
    const animationPlayed = sessionStorage.getItem(ANIMATION_PLAYED_KEY);
    
    if (animationPlayed === 'true') {
      // Animation already played, skip it
      setHasPlayed(true);
      setStage('complete');
      setContentVisible(true);
      onAnimationComplete?.();
      return;
    }

    // Animation hasn't played yet, start it
    // Initial fade in from off-white
    const timer1 = setTimeout(() => setStage('logo-blur'), 50);
    // Logo appears blurred
    const timer2 = setTimeout(() => setStage('logo-sharp'), 600);
    // Logo sharpens, then fade out and show content
    const timer3 = setTimeout(() => {
      setStage('content-fade');
      setContentVisible(true);
    }, 1500);
    // Content fades in
    const timer4 = setTimeout(() => {
      setStage('complete');
      // Mark animation as played in sessionStorage
      sessionStorage.setItem(ANIMATION_PLAYED_KEY, 'true');
      onAnimationComplete?.();
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onAnimationComplete]);

  return (
    <>
      {/* Entry Animation Overlay */}
      {!hasPlayed && (
        <div
          className={cn(
            "fixed inset-0 z-[100] bg-[#faf9f7] pointer-events-none",
            stage === 'complete' ? 'opacity-0' : 'opacity-100'
          )}
          style={{ 
            transition: 'opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
            willChange: 'opacity'
          }}
        >
        {/* Logo Animation Container */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center"
        >
          {/* Logo Text */}
          <div className="relative">
            <span
              className="font-jakarta text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight block whitespace-nowrap"
              style={{ 
                color: '#1e3a8a', // Deep blue color
                transition: 'filter 1.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1)',
                filter: stage === 'logo-blur' ? 'blur(20px)' : 'blur(0px)',
                opacity: stage === 'logo-blur' ? 0.4 : (stage === 'content-fade' || stage === 'complete' ? 0 : 1),
                willChange: 'filter, opacity'
              }}
            >
              INSIGHTEDGE
            </span>
          </div>
        </div>
        </div>
      )}

      {/* Main Content */}
      <div
        className={cn(
          contentVisible || hasPlayed
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4'
        )}
        style={hasPlayed ? {} : {
          transition: 'opacity 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s, transform 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
          willChange: 'opacity, transform' 
        }}
      >
        {children}
      </div>
    </>
  );
}

