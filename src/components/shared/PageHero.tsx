'use client';

import Image from "next/image";
import { cn } from "@/lib/utils";
import React, { type ReactNode } from "react";
import { motion } from "framer-motion";
import { hoverPop } from "@/lib/hover-animation";

interface PageHeroProps {
  backgroundImageSrc: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
  overlayClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
}

export function PageHero({
  backgroundImageSrc,
  title,
  description,
  children,
  className,
  overlayClassName,
  titleClassName,
  descriptionClassName,
  contentClassName,
}: PageHeroProps) {
  return (
    <section className={cn("relative w-full overflow-hidden py-24 md:py-32 lg:py-40", className)}>
      {/* Background Image - Full Strength & Vivid */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImageSrc}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Subtle edge gradient to transition into navbar and section bounds without fading the main image */}
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/20 pointer-events-none",
            overlayClassName
          )} 
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 text-center"
      >
        {/* Reusable radial gradient text overlay - unobtrusive, seamless fadeout with zero geometric edges */}
        <div
          className={cn(
            "max-w-4xl mx-auto space-y-5 py-6 px-4 bg-[radial-gradient(ellipse_at_center,_rgba(24,61,44,0.28)_0%,_rgba(24,61,44,0.12)_45%,_rgba(24,61,44,0)_75%)]",
            contentClassName
          )}
        >
          {typeof title === "string" ? (
            <h1 className={cn("font-playful text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-morning-quiet [text-shadow:_0_2px_6px_rgba(0,0,0,0.35)]", titleClassName)}>
              {title}
            </h1>
          ) : (
            title
          )}

          {description && (
            typeof description === "string" ? (
              <p className={cn("max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl leading-relaxed text-morning-quiet/95 font-medium [text-shadow:_0_1px_4px_rgba(0,0,0,0.35)]", descriptionClassName)}>
                {description}
              </p>
            ) : (
              description
            )
          )}
        </div>

        {children && (
          <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-5">
            {React.Children.map(children, (child, idx) => (
              child ? (
                <motion.div
                  key={idx}
                  whileHover={hoverPop.whileHover}
                  transition={hoverPop.transition}
                  className="inline-block"
                >
                  {child}
                </motion.div>
              ) : null
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}

