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
    <SectionWrapper 
      className="relative overflow-hidden"
      style={{ 
        backgroundColor: '#F9F7F2',
        paddingTop: '40px',
        paddingBottom: '40px',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      <div 
        ref={ref} 
        className={cn("relative max-w-4xl mx-auto", animationClasses)}
      >
        <h2 
          className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 text-center tracking-tight text-foreground"
        >
          About InsightEdge
        </h2>
        <div className="space-y-6 md:space-y-8 font-body">
          <p className="text-base md:text-lg lg:text-xl leading-[1.6] font-light text-foreground">
            InsightEdge is a dynamic platform that bridges the gap between psychological theory and real-world application. We bring psychology out of the textbooks and into classrooms, workplaces, and communities through evidence-based workshops, therapy, and training experiences that drive meaningful change.
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-[1.6] font-light text-foreground">
            At the heart of our work is a <strong className="font-semibold text-primary">dual focus</strong>: empowering future mental health professionals with practical skills and tools, while simultaneously raising awareness and breaking down barriers to mental health care within the broader community. We believe that psychology should be lived, not just learned—and accessible to everyone.
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-[1.6] font-light text-foreground">
            Our approach uniquely blends <strong className="font-semibold text-primary">rigorous, evidence-based methods</strong> with <strong className="font-semibold text-primary">creative, experiential learning</strong>. Every program we design is grounded in established psychological frameworks and behavioral science, yet delivered through innovative, engaging formats that make learning memorable and impactful.
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-[1.6] font-light text-foreground">
            Our vision is to create a world where mental health is normalized, psychological insights are accessible, and everyone has the tools they need to thrive. Through our workshops, training programs, and community initiatives, we're building a network of empowered individuals who can navigate life's challenges with confidence and support others along the way.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

