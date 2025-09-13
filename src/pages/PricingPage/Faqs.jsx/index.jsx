import SectionTitle from "@/components/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FaqsData } from "./FaqsData";

export function Faqs() {
  return (
    <section className="w-full px-2.5 py-12">
      <SectionTitle
        title="Frequently Asked Questions"
        paragraph="Everything you need to know about our pricing"
        center
        width="665px"
        mb="60px"
      />

      <Accordion
        type="single"
        collapsible
        className="max-w-[1100px] mx-auto border border-white/30 p-5 rounded-md"
        defaultValue="item-1"
      >
        {FaqsData.map((items, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{items.question}</AccordionTrigger>
            <AccordionContent className="text-balance">
              <p>{items.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
