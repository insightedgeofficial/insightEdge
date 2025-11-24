import { valueBlocks } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionWrapper } from "../shared/SectionWrapper";
import { PageTitle } from "../shared/PageTitle";

export function ValueBlocks() {
  return (
    <SectionWrapper className="bg-background">
      <PageTitle title="What Makes Us Different?" className="mb-12" />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {valueBlocks.map((block) => (
          <Card key={block.title} className="text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary mb-4">
                <block.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="font-headline text-xl">{block.title}</CardTitle>
              <CardDescription className="pt-2 text-base">
                {block.text}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
