import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How much does a children's dental visit cost without insurance?", a: "Our children's cleaning and exam starts at just $160. We provide transparent pricing upfront so you know exactly what to expect — no hidden fees or surprise bills." },
  { q: "Do you offer payment plans for uninsured families?", a: "Yes! We offer flexible payment options to help make dental care affordable for every family. Call us and we'll walk you through your options." },
  { q: "What's included in the $160 cleaning and exam?", a: "The visit includes a comprehensive dental exam, professional cleaning, digital X-rays (if needed), fluoride treatment, and a personalized care plan for your child." },
  { q: "Is the quality of care different without insurance?", a: "Absolutely not. Every child receives the same high-quality, gentle care regardless of insurance status. Your child's health is our top priority." },
  { q: "Can I bring multiple children for affordable care?", a: "Of course! We welcome families with multiple children and can schedule back-to-back appointments for convenience. Ask about our family pricing when you call." },
  { q: "What if my child needs additional treatment beyond the cleaning?", a: "We'll explain any recommended treatments with clear, upfront pricing before proceeding. You'll never be pressured into a treatment you can't afford." },
];

const UninsuredChildFaqSection = () => (
  <section className="bg-muted px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        Questions About Uninsured Children's Dental Care
      </h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border bg-background px-4">
            <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default UninsuredChildFaqSection;
