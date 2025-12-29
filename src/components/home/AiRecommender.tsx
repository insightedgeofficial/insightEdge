'use client';

import { useState } from 'react';
import { getPersonalizedServiceRecommendations, type PersonalizedServiceRecommendationsOutput } from '@/ai/flows/personalized-service-recommendations';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';
import { SectionWrapper } from '../shared/SectionWrapper';
import { PageTitle } from '../shared/PageTitle';
import { Label } from '../ui/label';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function AiRecommender() {
  const { ref, animationClasses } = useScrollAnimation({
    threshold: 0.1,
    animationType: 'fade-right',
  });
  const [profile, setProfile] = useState('');
  const [history, setHistory] = useState('');
  const [recommendations, setRecommendations] = useState<PersonalizedServiceRecommendationsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile && !history) {
        setError('Please tell us a bit about yourself or your interests.');
        return;
    }
    setIsLoading(true);
    setError(null);
    setRecommendations(null);

    try {
      const result = await getPersonalizedServiceRecommendations({
        userProfile: profile,
        browsingHistory: history,
      });
      setRecommendations(result);
    } catch (err) {
      setError('Sorry, we couldn\'t generate recommendations at this time. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionWrapper className="bg-secondary/30">
      <div ref={ref} className={animationClasses}>
        <PageTitle 
          title="Find Your Edge"
          subtitle="Not sure where to start? Describe your goals or interests, and our AI will suggest the perfect InsightEdge service for you."
          className="mb-12"
        />
        <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
        <Card>
            <CardHeader>
                <CardTitle>Tell Us About Yourself</CardTitle>
                <CardDescription>The more we know, the better our recommendations.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="profile">Your Profile & Goals</Label>
                        <Textarea
                            id="profile"
                            value={profile}
                            onChange={(e) => setProfile(e.target.value)}
                            placeholder="e.g., 'I am a university student interested in clinical psychology.' or 'I lead a corporate team and want to improve communication.'"
                            rows={4}
                        />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="history">Your Interests</Label>
                        <Textarea
                            id="history"
                            value={history}
                            onChange={(e) => setHistory(e.target.value)}
                            placeholder="e.g., 'I'm interested in art therapy, workshops for stress management, and study abroad options.'"
                            rows={4}
                        />
                    </div>
                    <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                        Get Recommendations
                    </Button>
                </form>
            </CardContent>
        </Card>
        
        <div className="flex items-center justify-center">
          {isLoading && (
             <div className="flex flex-col items-center gap-4 text-muted-foreground">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                <p>Analyzing your needs...</p>
            </div>
          )}
          {error && <p className="text-destructive text-center">{error}</p>}
          {recommendations && (
            <div className="w-full space-y-4">
                <h3 className="text-2xl font-headline font-bold text-center">Here are our suggestions for you:</h3>
                {recommendations.map((rec, index) => (
                    <Card key={index} className="bg-background">
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">{rec.serviceName}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{rec.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
          )}
          {!isLoading && !error && !recommendations && (
            <div className="text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg">
                <Sparkles className="mx-auto h-12 w-12 mb-4" />
                <p>Your personalized recommendations will appear here.</p>
            </div>
          )}
        </div>
      </div>
      </div>
    </SectionWrapper>
  );
}
