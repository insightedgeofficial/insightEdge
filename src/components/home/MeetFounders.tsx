import { founders } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SectionWrapper } from "../shared/SectionWrapper";
import { PageTitle } from "../shared/PageTitle";

export function MeetFounders() {
  return (
    <SectionWrapper>
      <PageTitle title="Meet the Minds Behind InsightEdge" subtitle="Founded by psychology graduates, InsightEdge is built on empowering students with guidance, resources, and hands-on learning experiences." className="mb-12"/>
      <div className="grid max-w-4xl mx-auto gap-12 md:grid-cols-2">
        {founders.map((founder) => {
          const image = PlaceHolderImages.find(p => p.id === founder.image);
          return (
            <Card key={founder.name} className="text-center border-none shadow-none bg-transparent">
              <CardHeader>
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    width={200}
                    height={200}
                    className="w-40 h-40 mx-auto rounded-full object-cover"
                  />
                )}
                <CardTitle className="mt-4 font-headline text-2xl">{founder.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{founder.title}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{founder.bio}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
      <div className="mt-12 text-center">
        <Button asChild size="lg" variant="outline">
          <Link href="/about">Learn More About Us →</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
