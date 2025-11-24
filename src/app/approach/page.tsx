import { ethosBlocks } from '@/lib/data';
import { EthosBlocks } from '@/components/shared/EthosBlocks';
import { Safeguarding } from '@/components/approach/Safeguarding';
import { PageTitle } from '@/components/shared/PageTitle';
import { SectionWrapper } from '@/components/shared/SectionWrapper';

export default function ApproachPage() {
  return (
    <div>
        <SectionWrapper className='bg-secondary/30'>
            <PageTitle
                title="Our Framework"
                subtitle="How we work, our commitment to safety, and the evidence behind our practice."
            />
        </SectionWrapper>
        <EthosBlocks ethosBlocks={ethosBlocks} title="Our Guiding Principles" />
        <Safeguarding />
    </div>
  );
}
