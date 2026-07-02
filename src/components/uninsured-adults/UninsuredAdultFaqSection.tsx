import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How much does a dental visit cost without insurance?", a: "Costs vary depending on the treatment you need. We offer transparent pricing upfront and will discuss all your options before any work begins — no surprises." },
  { q: "Do you offer payment plans?", a: "Yes! We offer flexible payment options to help make dental care affordable. Call us and we'll walk you through the plans available." },
  { q: "What services do you offer for uninsured patients?", a: "We offer the full range of dental services — cleanings, exams, fillings, crowns, root canals, extractions, cosmetic treatments, and more. All at competitive prices." },
  { q: "Is the quality of care different without insurance?", a: "Absolutely not. Every patient receives the same high-quality care regardless of insurance status. Your oral health is our top priority." },
  { q: "I haven't been to a dentist in years. Is that okay?", a: "Of course! We see patients in every situation and never judge. We'll assess where you are and create a plan that fits your needs and budget." },
  { q: "What if I need extensive dental work?", a: "We'll explain all your treatment options with clear pricing and help you prioritize what's most important. Payment plans are available for larger treatments." },
];

const UninsuredAdultFaqSection = () => (
  <section className="bg-muted px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        Questions About Dental Care Without Insurance
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

export default UninsuredAdultFaqSection;
