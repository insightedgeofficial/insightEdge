'use client';

import { SectionWrapper } from "../shared/SectionWrapper";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export function AboutCompany() {
  const { ref, animationClasses } = useScrollAnimation({
    threshold: 0.1,
    animationType: 'fade-up',
  });

  return (
    <SectionWrapper className="relative bg-background overflow-hidden !py-20 md:!py-28 lg:!py-32">
      {/* Grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div ref={ref} className={cn("relative max-w-3xl mx-auto", animationClasses)}>
        <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16 text-center tracking-tight">
          About InsightEdge
        </h2>
        <div className="space-y-8 md:space-y-10 text-muted-foreground">
          <p className="text-lg md:text-xl leading-[1.75] tracking-tight">
            InsightEdge is a dynamic platform that bridges the gap between psychological theory and real-world application. We bring psychology out of the textbooks and into classrooms, workplaces, and communities through evidence-based workshops, therapy, and training experiences that drive meaningful change.
          </p>
          <p className="text-lg md:text-xl leading-[1.75] tracking-tight">
            At the heart of our work is a <strong className="text-foreground font-semibold">dual focus</strong>: empowering future mental health professionals with practical skills and tools, while simultaneously raising awareness and breaking down barriers to mental health care within the broader community. We believe that psychology should be lived, not just learned—and accessible to everyone.
          </p>
          <p className="text-lg md:text-xl leading-[1.75] tracking-tight">
            Our approach uniquely blends <strong className="text-foreground font-semibold">rigorous, evidence-based methods</strong> with <strong className="text-foreground font-semibold">creative, experiential learning</strong>. Every program we design is grounded in established psychological frameworks and behavioral science, yet delivered through innovative, engaging formats that make learning memorable and impactful.
          </p>
          <p className="text-lg md:text-xl leading-[1.75] tracking-tight">
            Our vision is to create a world where mental health is normalized, psychological insights are accessible, and everyone has the tools they need to thrive. Through our workshops, training programs, and community initiatives, we're building a network of empowered individuals who can navigate life's challenges with confidence and support others along the way.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

