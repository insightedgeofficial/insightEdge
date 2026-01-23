'use client';

import { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface Stat {
  number: number;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { number: 500, label: 'Sessions Conducted', suffix: '+' },
  { number: 200, label: 'Happy Clients', suffix: '+' },
  { number: 50, label: 'Workshops Delivered', suffix: '+' },
  { number: 15, label: 'Partner Organizations', suffix: '+' },
];

function useCountUp(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>();
  const startTimeRef = useRef<number>();

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      const progress = Math.min((currentTime - startTimeRef.current) / duration, 1);
      
      // Ease-out curve: 1 - (1 - t)^3
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration, start]);

  return count;
}

export function AnimatedStats() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.3,
    animationType: 'fade-up',
  });

  return (
    <div 
      ref={ref} 
      className="w-full"
      style={{ 
        backgroundColor: '#F9F7F2',
        paddingTop: '40px',
        paddingBottom: '40px',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      <div className={cn(
        "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto",
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ 
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        transitionDelay: '0.2s'
      }}>
        {stats.map((stat, index) => (
          <StatItem key={stat.label} stat={stat} start={isVisible} delay={index * 100} />
        ))}
      </div>
    </div>
  );
}

function StatItem({ stat, start, delay }: { stat: Stat; start: boolean; delay: number }) {
  const count = useCountUp(stat.number, 2000, start);

  return (
    <div 
      className="text-center"
      style={{
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 font-headline">
        {count.toLocaleString()}{stat.suffix || ''}
      </div>
      <div className="text-xs md:text-sm text-muted-foreground font-light font-body">
        {stat.label}
      </div>
    </div>
  );
}

