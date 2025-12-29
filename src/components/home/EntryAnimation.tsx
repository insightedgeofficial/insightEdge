'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface EntryAnimationProps {
  children: React.ReactNode;
  onAnimationComplete?: () => void;
}

export function EntryAnimation({ children, onAnimationComplete }: EntryAnimationProps) {
  const [stage, setStage] = useState<'initial' | 'logo-blur' | 'logo-sharp' | 'line-pulse' | 'content-fade' | 'complete'>('initial');
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Initial fade in from off-white
    const timer1 = setTimeout(() => setStage('logo-blur'), 50);
    // Logo appears blurred
    const timer2 = setTimeout(() => setStage('logo-sharp'), 600);
    // Logo sharpens
    const timer3 = setTimeout(() => setStage('line-pulse'), 1200);
    // Line pulse passes through, then fade out and show content
    const timer4 = setTimeout(() => {
      setStage('content-fade');
      setContentVisible(true);
    }, 2200);
    // Content fades in
    const timer5 = setTimeout(() => {
      setStage('complete');
      onAnimationComplete?.();
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onAnimationComplete]);

  return (
    <>
      {/* Entry Animation Overlay */}
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
              className="font-headline text-7xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tight block whitespace-nowrap"
              style={{ 
                transition: 'filter 1.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1)',
                filter: stage === 'logo-blur' ? 'blur(20px)' : 'blur(0px)',
                opacity: stage === 'logo-blur' ? 0.4 : (stage === 'content-fade' || stage === 'complete' ? 0 : 1),
                willChange: 'filter, opacity'
              }}
            >
              INSIGHTEDGE
            </span>

            {/* Pulse Line */}
            {stage === 'line-pulse' && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Main pulse line with glow */}
                <div
                  className="absolute left-0 bg-gradient-to-r from-transparent via-primary to-transparent"
                  style={{
                    animation: 'pulseLine 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
                    top: '50%',
                    height: '4px',
                    width: '60%',
                    boxShadow: '0 0 20px rgba(142, 211, 162, 0.9), 0 0 40px rgba(142, 211, 162, 0.6), 0 0 60px rgba(142, 211, 162, 0.3)',
                  }}
                />
                {/* Glow effect trailing behind */}
                <div
                  className="absolute left-0 bg-gradient-to-r from-transparent via-primary/70 to-transparent"
                  style={{
                    animation: 'pulseLineGlow 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) 0.12s',
                    top: '50%',
                    height: '8px',
                    width: '80%',
                    filter: 'blur(6px)',
                    opacity: 0.7,
                  }}
                />
                {/* Outer glow */}
                <div
                  className="absolute left-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                  style={{
                    animation: 'pulseLineGlow 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) 0.24s',
                    top: '50%',
                    height: '12px',
                    width: '100%',
                    filter: 'blur(8px)',
                    opacity: 0.5,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={cn(
          contentVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4'
        )}
        style={{ 
          transition: 'opacity 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s, transform 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
          willChange: 'opacity, transform' 
        }}
      >
        {children}
      </div>
    </>
  );
}

