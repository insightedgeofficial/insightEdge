import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FaqAccordion() {
  return (
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className={cn(
              "border-0 rounded-lg overflow-hidden",
              "bg-card border border-border shadow-sm",
              "border-l-4 border-l-primary"
            )}
          >
            <AccordionTrigger
              className={cn(
                "text-left font-semibold text-lg px-5 py-4 hover:no-underline",
                "text-foreground hover:text-primary/90 hover:bg-primary/5",
                "transition-colors [&[data-state=open]]:bg-primary/5 [&[data-state=open]]:text-foreground"
              )}
            >
              {faq.question}
            </AccordionTrigger>
            <AccordionContent
              className={cn(
                "text-base px-5 pb-4 pt-0",
                "text-foreground/90 leading-relaxed"
              )}
            >
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
