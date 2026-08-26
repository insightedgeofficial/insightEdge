'use client';

import { testimonialsRow1, testimonialsRow2 } from "@/lib/data";
import { SectionWrapper } from "../shared/SectionWrapper";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";
import { Star } from '@phosphor-icons/react/dist/ssr';

export function Testimonials() {
  const { ref, animationClasses } = useScrollAnimation({
    threshold: 0.1,
    animationType: 'fade-up',
  });

  // Duplicate testimonials for seamless loop
  const duplicatedRow1 = [...testimonialsRow1, ...testimonialsRow1];
  const duplicatedRow2 = [...testimonialsRow2, ...testimonialsRow2];

  return (
    <SectionWrapper 
      className="relative py-20 md:py-28 lg:py-36 overflow-hidden"
      style={{
        backgroundColor: 'hsl(var(--background))', // Website beige
      }}
    >
      <div ref={ref} className={animationClasses}>
        {/* Static Header */}
        <div className="text-center mb-16 md:mb-20">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-foreground">
            What our community says
          </h2>
        </div>

        {/* Multi-Row Scrolling Marquee */}
        <div className="relative w-full py-8">
          {/* Edge Fading Mask */}
          <div 
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            }}
          />

          {/* Row 1 - Left to Right */}
          <div className="mb-8 overflow-visible">
            <div 
              className="flex gap-6 w-fit will-change-transform"
              style={{
                animation: 'loop-scroll 50s linear infinite',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.animationPlayState = 'paused';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.animationPlayState = 'running';
              }}
            >
              {duplicatedRow1.map((testimonial, index) => (
                <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left (Opposite Direction) */}
          <div className="overflow-visible">
            <div 
              className="flex gap-6 w-fit will-change-transform"
              style={{
                animation: 'loop-scroll-reverse 50s linear infinite',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.animationPlayState = 'paused';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.animationPlayState = 'running';
              }}
            >
              {duplicatedRow2.map((testimonial, index) => (
                <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function TestimonialCard({ testimonial }: { testimonial: { quote: string; author: string; role: string; image?: string } }) {
  return (
    <div 
      className="group flex-shrink-0 rounded-xl p-5 md:p-6 transition-all duration-500 ease-out"
      style={{
        backgroundColor: 'hsl(var(--background))', // Beige background
        border: '1px solid hsl(var(--border))', // Subtle border
        display: 'flex',
        flexDirection: 'column',
        gap: '0.875rem',
        width: '380px',
        minWidth: '380px',
        maxWidth: 'calc(100vw - 2rem)',
        minHeight: 'fit-content',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(142, 71, 55, 0.05)',
        transform: 'perspective(1000px) rotateY(0deg) translateZ(0)',
        transition: 'box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), width 0.5s cubic-bezier(0.4, 0, 0.2, 1), padding 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'visible',
        zIndex: 1,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.width = '480px';
        e.currentTarget.style.minWidth = '480px';
        e.currentTarget.style.padding = '1.5rem 1.75rem';
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.12), 0 6px 12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.1)';
        e.currentTarget.style.transform = 'perspective(1000px) rotateY(-2deg) translateZ(12px) scale(1.03)';
        e.currentTarget.style.zIndex = '10';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.width = '380px';
        e.currentTarget.style.minWidth = '380px';
        e.currentTarget.style.padding = '1.25rem 1.5rem';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)';
        e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) translateZ(0) scale(1)';
        e.currentTarget.style.zIndex = '1';
      }}
    >
      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-3.5 h-3.5 fill-current text-felt"
          />
        ))}
      </div>

      {/* Quote */}
      <div className="flex-1 overflow-hidden">
        <p 
          className="text-sm leading-relaxed font-body text-foreground group-hover:line-clamp-none line-clamp-3 transition-all duration-500"
          style={{
            lineHeight: '1.7',
          }}
        >
          "{testimonial.quote}"
        </p>
      </div>

      {/* Avatar, Name, Role */}
      <div className="flex items-center gap-3.5">
        {/* Avatar */}
        <div 
          className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-offset-2 border border-border/40"
          style={{
            backgroundColor: 'hsl(var(--muted))',
          }}
        >
          {testimonial.image ? (
            <Image
              src={`https://picsum.photos/seed/${testimonial.image}/100/100`}
              alt={testimonial.author}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          ) : (
            <div 
              className="w-full h-full flex items-center justify-center text-sm font-semibold text-foreground"
            >
              {testimonial.author.charAt(0)}
            </div>
          )}
        </div>

        {/* Name and Role */}
        <div className="flex flex-col min-w-0 flex-1">
          <span 
            className="font-semibold text-sm truncate text-foreground"
          >
            {testimonial.author}
          </span>
          {testimonial.role && (
            <span 
              className="text-xs text-muted-foreground truncate mt-0.5"
            >
              {testimonial.role}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
