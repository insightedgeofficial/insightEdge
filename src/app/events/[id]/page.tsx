import { upcomingEvents } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { PageTitle } from '@/components/shared/PageTitle';
import { BackButton } from '@/components/shared/BackButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, User, CurrencyDollar, ArrowSquareOut } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface EventPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EventPage({ params }: EventPageProps) {
  const { id } = await params;
  const event = upcomingEvents.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  const image = PlaceHolderImages.find((p) => p.id === event.image);

  return (
    <div>
      {/* Banner Image */}
      {image && (
        <div className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden">
          <Image
            src={image.imageUrl}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute top-4 left-4 z-10">
            <BackButton href="/events" label="Back" className="bg-background/90 backdrop-blur-sm shadow-sm" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 md:px-6 pb-8">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              {event.title}
            </h1>
          </div>
        </div>
      )}

      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          {!image && (
            <div className="mb-6">
              <BackButton href="/events" label="Back to Events" />
            </div>
          )}
          {/* Abstract */}
          {event.abstract && (
            <div className="mb-12">
              <h2 className="font-headline text-3xl font-bold mb-4">About This Event</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {event.abstract}
              </p>
            </div>
          )}

          {/* Key Details Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">Date & Time</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{event.date}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">Location</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{event.location}</p>
              </CardContent>
            </Card>

            {event.facilitator && (
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">Facilitator</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.facilitator}</p>
                </CardContent>
              </Card>
            )}

            {event.pricing && (
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <CurrencyDollar className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">Pricing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground whitespace-pre-line">{event.pricing}</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Agenda */}
          {event.agenda && event.agenda.length > 0 && (
            <div className="mb-12">
              <h2 className="font-headline text-3xl font-bold mb-6">Agenda</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {event.agenda.map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center text-sm">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground pt-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Venue Details */}
          {event.venue && (
            <div className="mb-12">
              <h2 className="font-headline text-3xl font-bold mb-4">Venue Details</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground whitespace-pre-line">{event.venue}</p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            {event.registrationLink && (
              <Button asChild size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                  Register Now
                  <ArrowSquareOut className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            <Button asChild size="lg" variant="outline" className="flex-1">
              <Link href="/contact">Have Questions? Contact Us</Link>
            </Button>
          </div>

          {/* FAQs */}
          {event.faqs && event.faqs.length > 0 && (
            <div className="mb-12">
              <h2 className="font-headline text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {event.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
        </div>
      </SectionWrapper>
    </div>
  );
}

