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
        className={cn("relative grid items-start gap-12 lg:gap-16 lg:grid-cols-2 max-w-5xl mx-auto", animationClasses)}
      >
        <Card 
          className="border shadow-sm bg-card border-border"
          style={{ borderRadius: '16px' }}
        >
            <CardHeader className="p-6 pb-4">
                <div className="flex items-center gap-3">
                    <div 
                      className="flex-shrink-0 p-3 rounded-xl shadow-sm bg-secondary"
                    >
                        <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 
                      className="font-headline text-xl md:text-2xl font-bold text-foreground"
                    >
                      For Psychology Students and Early Graduates
                    </h3>
                </div>
            </CardHeader>
            <CardContent className="p-6 pt-0">
                <div 
                  className="space-y-4 text-base md:text-lg leading-[1.6] font-light font-body text-foreground"
                >
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
        
        <Card 
          className="border shadow-sm bg-card border-border"
          style={{ borderRadius: '16px' }}
        >
            <CardHeader className="p-6 pb-4">
                <div className="flex items-center gap-3">
                    <div 
                      className="flex-shrink-0 p-3 rounded-xl shadow-sm bg-secondary"
                    >
                        <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 
                      className="font-headline text-xl md:text-2xl font-bold text-foreground"
                    >
                      For the Community
                    </h3>
                </div>
            </CardHeader>
            <CardContent className="p-6 pt-0">
                <div 
                  className="space-y-4 text-base md:text-lg leading-[1.6] font-light font-body text-foreground"
                >
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
