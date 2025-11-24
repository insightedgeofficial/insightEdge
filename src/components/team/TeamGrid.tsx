import { teamMembers } from "@/lib/data";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SectionWrapper } from "../shared/SectionWrapper";

export function TeamGrid() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.filter(m => m.name).map((member) => {
          const image = PlaceHolderImages.find(p => p.id === member.image);
          return (
            <Card key={member.name} className="flex flex-col items-center text-center p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              {image && (
                <Image
                  src={image.imageUrl}
                  alt={`Portrait of ${member.name}`}
                  data-ai-hint="person portrait"
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
              )}
              <CardHeader className="p-0">
                <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="text-sm italic text-muted-foreground mt-1">"{member.tagline}"</p>
              </CardHeader>
              <CardContent className="p-0 mt-4 text-sm text-muted-foreground">
                <p>{member.bio}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
