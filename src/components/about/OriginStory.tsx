'use client';

import { SectionWrapper } from "../shared/SectionWrapper";
import { PageTitle } from "../shared/PageTitle";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { GraduationCap, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export function OriginStory() {
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

      <div ref={ref} className={cn("relative grid items-start gap-20 lg:gap-24 lg:grid-cols-2", animationClasses)}>
        <Card className="border-0 shadow-sm bg-background/50 backdrop-blur-sm">
            <CardHeader className="p-0 pb-8">
                <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 bg-gradient-to-br from-primary/20 to-primary/10 text-primary p-4 rounded-xl shadow-sm">
                        <GraduationCap className="w-8 h-8" />
                    </div>
                    <PageTitle title="For Psychology Students and Early Graduates" className="text-left mb-0" />
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <div className="space-y-6 text-muted-foreground text-lg md:text-xl leading-[1.75]">
                    <p>
                        The transition from student to practitioner can be overwhelming, which is why we focus on giving psychology students and recent graduates the practical experience they need to succeed. At InsightEdge, we offer hands-on training in key assessment techniques, mock therapy sessions, and real-world case simulations.
                    </p>
                    <p>
                        Our team of experienced psychologists and psychiatrists offers mentorship, ensuring that students gain a deep understanding of the field. Equally important, we emphasize self-care, helping future professionals prioritize their own mental health as they build their careers.
                    </p>
                     <p>
                        Through this approach, we guide students in discovering their ideal specialization, ultimately bridging the gap between theory and practice, and helping them develop expertise in their chosen area.
                    </p>
                </div>
            </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm bg-background/50 backdrop-blur-sm">
            <CardHeader className="p-0 pb-8">
                <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 bg-gradient-to-br from-primary/20 to-primary/10 text-primary p-4 rounded-xl shadow-sm">
                        <Users className="w-8 h-8" />
                    </div>
                    <PageTitle title="For the Community" className="text-left mb-0" />
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <div className="space-y-6 text-muted-foreground text-lg md:text-xl leading-[1.75]">
                    <p>
                        Mental health should be a part of everyday conversation. Our second focus is to make mental health a natural part of life, raising awareness and breaking down the barriers that prevent people from seeking help.
                    </p>
                    <p>
                        We do this by crafting unique, community-driven approaches to address mental health that are relatable and easy to connect with. Our mission is to reduce stigma and empower individuals to take control of their mental health, encouraging them to seek support when needed.
                    </p>
                    <p>
                        Through innovative outreach, we aim to normalize mental health discussions and make it a priority in people's lives.
                    </p>
                </div>
            </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
