'use client';

import { SectionWrapper } from "../shared/SectionWrapper";
import { Card, CardContent, CardHeader } from "../ui/card";
import { GraduationCap, Users } from '@phosphor-icons/react/dist/ssr';
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export function WhoWeServe() {
  const { ref, animationClasses } = useScrollAnimation({
    threshold: 0.1,
    animationType: 'fade-up',
  });

  return (
    <SectionWrapper 
      className="relative overflow-hidden py-16 md:py-24 lg:py-28 px-4 md:px-8 bg-background"
    >
      <div 
        ref={ref} 
        className={cn("relative max-w-5xl mx-auto space-y-10 md:space-y-12", animationClasses)}
      >
        {/* Subsection Lead-in & Transition to Cards */}
        <div className="text-center space-y-2">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-muted-foreground">Our Focus</span>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Who We Serve
          </h2>
        </div>

        {/* Cards with Hover Animations */}
        <div className="grid items-stretch gap-8 lg:gap-12 lg:grid-cols-2">
          <Card className="group relative overflow-hidden border shadow-sm bg-card border-border hover:border-primary/40 hover:backdrop-blur-md transition-all duration-500 ease-out h-full flex flex-col rounded-[16px]">
            <CardHeader className="p-6 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 p-3 rounded-xl shadow-sm bg-secondary">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-headline text-xl md:text-2xl font-bold text-foreground">
                  For Psychology Students and Early Graduates
                </h3>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-1">
              <div className="space-y-4 text-base md:text-lg leading-relaxed font-light font-body text-foreground">
                <p>
                  The leap from classroom to practice room is rarely gentle. Not with theory alone. Not with textbooks. But with reps. With real cases. With rooms where mistakes are part of learning, not the end of it.
                </p>
                <p>
                  We are not here to teach psychology again. We are here to teach what psychology feels like when it's in your hands.
                </p>
                <p>
                  Through assessment practice, mock sessions, and real-world simulations, we build the muscle that lectures can't. Our psychologists and psychiatrists don't just mentor – they hold space, the same way they'll be asking you to hold space for others.
                </p>
                <p>
                  And before we ask you to care for anyone else, we ask you to care for yourself first.
                </p>
              </div>
            </CardContent>
            <div className="absolute bottom-0 left-0 h-[3px] bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out" />
          </Card>

          <Card className="group relative overflow-hidden border shadow-sm bg-card border-border hover:border-primary/40 hover:backdrop-blur-md transition-all duration-500 ease-out h-full flex flex-col rounded-[16px]">
            <CardHeader className="p-6 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 p-3 rounded-xl shadow-sm bg-secondary">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-headline text-xl md:text-2xl font-bold text-foreground">
                  For the Community
                </h3>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-1">
              <div className="space-y-4 text-base md:text-lg leading-relaxed font-light font-body text-foreground">
                <p>
                  Mental health is no longer a quiet subject. But talking about it and understanding it are not the same thing.
                </p>
                <p>
                  We don't believe in campaigns. We don't believe in hashtags that disappear after a week. We believe in conversations that stay – the kind that make seeking help feel less like a last resort, and more like a first step.
                </p>
                <p>
                  This is not outreach for the sake of outreach. It's an invitation to make mental health part of how people already live, not something they turn to only when everything else has failed.
                </p>
              </div>
            </CardContent>
            <div className="absolute bottom-0 left-0 h-[3px] bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out" />
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
