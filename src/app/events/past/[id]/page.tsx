import { pastEvents } from '@/lib/data';
import { notFound } from 'next/navigation';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { BackButton } from '@/components/shared/BackButton';
import { EventGallery } from '@/components/events/EventGallery';

interface PastEventPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PastEventPage({ params }: PastEventPageProps) {
  const { id } = await params;
  const event = pastEvents.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  const eventImages = event.images || [];

  return (
    <div>
      <SectionWrapper className="bg-secondary/30 pt-6 md:pt-8 lg:pt-10">
        <div className="max-w-7xl mx-auto relative">
          {/* Back Button - Positioned absolutely like upcoming events */}
          <div className="absolute top-4 left-4 z-10">
            <BackButton href="/events" label="Back" className="bg-background/90 backdrop-blur-sm shadow-sm" />
          </div>

          {/* Title - Centered */}
          <div className="mb-6 text-center pt-12">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold">
              {event.title}
            </h1>
          </div>

          {/* Description - Centered */}
          {event.description && (
            <div className="mb-12 text-center">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {event.description}
              </p>
            </div>
          )}

          {/* Image Gallery - No heading, just images */}
          {eventImages.length > 0 && (
            <div className="mb-12">
              <EventGallery images={eventImages} eventTitle={event.title} />
            </div>
          )}
        </div>
      </SectionWrapper>
    </div>
  );
}

