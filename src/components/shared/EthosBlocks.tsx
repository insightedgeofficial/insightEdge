import { SectionWrapper } from "./SectionWrapper";
import { PageTitle } from "./PageTitle";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";

type EthosBlock = {
  title: string;
  text: string;
};

interface EthosBlocksProps {
  ethosBlocks: EthosBlock[];
  title: string;
}

export function EthosBlocks({ ethosBlocks, title }: EthosBlocksProps) {
  return (
    <SectionWrapper className="bg-secondary/30">
      <PageTitle title={title} className="mb-12" />
      <div className="grid gap-8 md:grid-cols-2">
        {ethosBlocks.map((block) => (
          <Card key={block.title} className="bg-background">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-felt">{block.title}</CardTitle>
              <CardDescription className="pt-2 text-base text-muted-foreground">{block.text}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
