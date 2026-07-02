import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Do you accept my dental insurance?", a: "We accept most major dental insurance plans. Call us with your insurance details and we'll verify your coverage before your visit — no surprises." },
  { q: "How often should I get a dental cleaning?", a: "We recommend professional cleanings every six months for most patients. Some patients with gum disease may benefit from more frequent visits." },
  { q: "What if I haven't been to the dentist in years?", a: "No judgment here! We see patients in every situation. We'll do a thorough exam, discuss your options, and create a comfortable treatment plan at your pace." },
  { q: "Do you offer same-day emergency appointments?", a: "Yes! If you're experiencing tooth pain, a broken tooth, or any dental emergency, call us right away. We make every effort to see emergencies the same day." },
  { q: "Is sedation available for anxious patients?", a: "We offer options to help anxious patients feel comfortable during their visit. Let us know about your concerns when you call and we'll discuss what's available." },
  { q: "What payment options do you offer?", a: "We accept cash, credit, debit, and offer flexible payment plans for larger treatments. We also work with most insurance providers to maximize your benefits." },
];

const GeneralFaqSection = () => (
  <section className="bg-background px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border bg-muted px-4">
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

export default GeneralFaqSection;
