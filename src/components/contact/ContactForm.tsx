'use client';

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Spinner, CheckCircle } from '@phosphor-icons/react/dist/ssr';
import { cn } from '@/lib/utils';

export function ContactForm() {
  const { toast } = useToast();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const organization = formData.get('organization') as string;
    const topic = formData.get('topic') as string;
    const message = formData.get('message') as string;
    
    // Client-side validation
    const newErrors: Record<string, string> = {};
    if (!name?.trim()) newErrors.name = "Name is required.";
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "A valid email is required.";
    if (!topic) newErrors.topic = "Please select a topic.";
    if (!message?.trim()) newErrors.message = "Message is required.";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }
    
    // Build Google Form data mapping
    const googleFormData = new URLSearchParams();
    
    // Add emailAddress in case 'Collect Email Addresses' is turned on in settings
    googleFormData.append('emailAddress', email);
    
    googleFormData.append('entry.1617254499', name);
    googleFormData.append('entry.743453784', email);
    googleFormData.append('entry.736140269', phone || '');
    googleFormData.append('entry.1753948307', organization || '');
    googleFormData.append('entry.1612314629', topic);
    googleFormData.append('entry.884219049', message);
    
    try {
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSeZFpFaOfO4qUI53KFy3IzdQGbFLQLeUYBuPynFxnxBtudUNQ/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: googleFormData.toString(),
      });
      
      // Since it's no-cors, we assume success if fetch didn't throw a network error
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset(); // Clear the form fields
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Connection Error",
        description: "Failed to send the message. Please try again or contact us directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="flex flex-col items-center justify-center text-center p-12 space-y-4">
        <CheckCircle className="h-16 w-16 text-primary" weight="fill" />
        <h3 className="font-headline text-3xl font-bold">Message Sent</h3>
        <p className="text-muted-foreground">Thanks for reaching out &mdash; we'll be in touch soon.</p>
        <Button variant="outline" className="mt-4" onClick={() => setIsSuccess(false)}>
          Send another message
        </Button>
      </Card>
    );
  }

  return (
    <Card className="shadow-sm border border-border">
      <CardHeader>
        <CardTitle className="font-headline text-2xl md:text-3xl font-bold text-foreground">Get in Touch</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base font-medium">Name</Label>
            <Input id="name" name="name" required className="h-12 text-base" />
            {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-base font-medium">Email</Label>
            <Input id="email" name="email" type="email" required className="h-12 text-base" />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-base font-medium">Phone Number (Optional)</Label>
            <Input id="phone" name="phone" type="tel" className="h-12 text-base" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="organization" className="text-base font-medium">Organization (Optional)</Label>
            <Input id="organization" name="organization" className="h-12 text-base" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="topic" className="text-base font-medium">Topic</Label>
            <Select name="topic" required>
                <SelectTrigger id="topic" className={cn("h-12 text-base", errors.topic && "border-destructive")}>
                    <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Explore Our Workshops">Explore Our Workshops</SelectItem>
                    <SelectItem value="Work With Your Organization">Work With Your Organization</SelectItem>
                    <SelectItem value="Collaboration & Partnerships">Collaboration & Partnerships</SelectItem>
                    <SelectItem value="Ask a Question">Ask a Question</SelectItem>
                    <SelectItem value="Research Support">Research Support</SelectItem>
                </SelectContent>
            </Select>
            {errors.topic && <p className="text-sm text-destructive">{errors.topic}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-base font-medium">Message</Label>
            <Textarea id="message" name="message" rows={5} placeholder="Tell us more about your inquiry..." required className="text-base leading-relaxed" />
            {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full h-12 md:h-14 text-base md:text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-md rounded-xl">
            {isSubmitting ? <Spinner className="mr-2 h-5 w-5 animate-spin" /> : null}
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
