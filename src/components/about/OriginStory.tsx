import { SectionWrapper } from "../shared/SectionWrapper";
import { PageTitle } from "../shared/PageTitle";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { GraduationCap, Users } from "lucide-react";

export function OriginStory() {
  return (
    <SectionWrapper>
      <div className="grid items-start gap-16 lg:grid-cols-2">
        <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="p-0">
                <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 bg-primary/20 text-primary p-3 rounded-lg">
                        <GraduationCap className="w-8 h-8" />
                    </div>
                    <PageTitle title="For Psychology Students and Early Graduates" className="text-left mb-0" />
                </div>
            </CardHeader>
            <CardContent className="p-0 mt-6">
                <div className="space-y-4 text-muted-foreground text-lg">
                    <p>
                        The transition from student to practitioner can be overwhelming, which is why we focus on giving psychology students and recent graduates the practical experience they need to succeed. At InsightEdge, we offer hands-on training in key assessment techniques, mock therapy sessions, and real-world case simulations.
                    </p>
                    <p>
                        Our team of experienced psychologists and psychiatrists offers mentorship, ensuring that students gain a deep understanding of the field. Equally important, we emphasize self-care, helping future professionals prioritize their own mental health as they build their careers.
                    </p>
                     <p>
                        Through this approach, we guide students in discovering their ideal specialization, ultimately bridging the gap between theory and practice, and helping them develop expertise in their chosen area.
                    </p>
                </div>
            </CardContent>
        </Card>
        
        <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="p-0">
                <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 bg-primary/20 text-primary p-3 rounded-lg">
                        <Users className="w-8 h-8" />
                    </div>
                    <PageTitle title="For the Community" className="text-left mb-0" />
                </div>
            </CardHeader>
            <CardContent className="p-0 mt-6">
                <div className="space-y-4 text-muted-foreground text-lg">
                    <p>
                        Mental health should be a part of everyday conversation. Our second focus is to make mental health a natural part of life, raising awareness and breaking down the barriers that prevent people from seeking help.
                    </p>
                    <p>
                        We do this by crafting unique, community-driven approaches to address mental health that are relatable and easy to connect with. Our mission is to reduce stigma and empower individuals to take control of their mental health, encouraging them to seek support when needed.
                    </p>
                    <p>
                        Through innovative outreach, we aim to normalize mental health discussions and make it a priority in people's lives.
                    </p>
                </div>
            </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
