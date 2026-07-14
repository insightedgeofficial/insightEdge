'use client';

import { SectionWrapper } from "../shared/SectionWrapper";
import { PageTitle } from "../shared/PageTitle";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { GraduationCap, Users } from '@phosphor-icons/react/dist/ssr';
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export function OriginStory() {
  const { ref, animationClasses } = useScrollAnimation({
    threshold: 0.1,
    animationType: 'fade-up',
  });

  return (
    <SectionWrapper 
      className="relative overflow-hidden bg-sage-mist"
      style={{ 
        paddingTop: '40px',
        paddingBottom: '40px',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      <div ref={ref} className={cn("relative max-w-5xl mx-auto", animationClasses)}>
        <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center tracking-tight text-foreground">
          About Us
        </h2>
        <div className="space-y-6 md:space-y-8 font-body mb-12 max-w-4xl mx-auto">
          <p className="text-base md:text-lg lg:text-xl leading-[1.6] font-light text-foreground text-center">
            If you had met us a few years ago, you would've probably found us doing what we still do best, asking questions. About people. About behaviour. About why some experiences stay with us while others fade away. Somewhere between lectures, internships, research projects, and countless conversations over coffee, we realised we shared the same dream: to make psychology feel less intimidating, less exclusive, and far more human.
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-[1.6] font-light text-foreground text-center">
            We're still the same two people who ask too many questions, find meaning in everyday moments, and believe that understanding ourselves is one of the most valuable things we can do. Everything we create is simply an extension of those beliefs and the kind of impact we hope to leave behind.
          </p>
        </div>

        <div className="grid items-start gap-12 lg:gap-16 lg:grid-cols-2">
          <Card className="border shadow-sm bg-card border-border h-full" style={{ borderRadius: '16px' }}>
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
              <CardContent className="p-6 pt-0">
                  <div className="space-y-4 text-base md:text-lg leading-[1.6] font-light font-body text-foreground">
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
          </Card>
          
          <Card className="border shadow-sm bg-card border-border h-full" style={{ borderRadius: '16px' }}>
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
              <CardContent className="p-6 pt-0">
                  <div className="space-y-4 text-base md:text-lg leading-[1.6] font-light font-body text-foreground">
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
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
