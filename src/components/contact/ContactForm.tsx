'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContactForm } from './actions';
import { useEffect } from 'react';
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
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Message
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, { message: null, errors: {} });
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && !state.errors) {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
    } else if (state.message && state.errors) {
        toast({
            variant: "destructive",
            title: "Error",
            description: state.message,
        })
    }
  }, [state, toast]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Get in Touch</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required />
            {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
            {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input id="phone" name="phone" type="tel" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="organization">Organization (Optional)</Label>
            <Input id="organization" name="organization" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="topic">Topic</Label>
            <Select name="topic" required>
                <SelectTrigger id="topic" className={cn(state.errors?.topic && "border-destructive")}>
                    <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="workshop-booking">Workshop Booking</SelectItem>
                    <SelectItem value="corporate-inquiry">Corporate Inquiry</SelectItem>
                    <SelectItem value="collaboration-partnerships">Collaboration / Partnerships</SelectItem>
                    <SelectItem value="general-support">General Support</SelectItem>
                    <SelectItem value="research-evaluation">Research / Evaluation Inquiry</SelectItem>
                </SelectContent>
            </Select>
            {state.errors?.topic && <p className="text-sm text-destructive">{state.errors.topic[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea id="message" name="message" rows={5} placeholder="Tell us more about your inquiry..." />
            {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
