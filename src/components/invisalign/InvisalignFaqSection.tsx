import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { PHONE, TEL } from "@/lib/constants";

const faqs = [
  { q: "How much does Invisalign cost?", a: "The cost varies depending on the complexity of your case. With our current 15% discount, most cases range from $3,400–$6,800. We offer flexible financing with payments as low as $99/month." },
  { q: "How long does Invisalign treatment take?", a: "Most cases take 6–18 months, depending on the complexity of the alignment needed. Minor cases can be completed in as few as 6 months." },
  { q: "Does Invisalign hurt?", a: "Most patients experience mild pressure when switching to a new set of aligners, which is a sign your teeth are moving. Any discomfort typically subsides within a day or two." },
  { q: "Can teens use Invisalign?", a: "Yes! Invisalign Teen is specifically designed for teenage patients, with compliance indicators and features built for growing smiles." },
  { q: "How many hours a day do I wear the aligners?", a: "For best results, wear your aligners 20–22 hours per day. Remove them only for eating, drinking (anything besides water), brushing, and flossing." },
  { q: "Will Invisalign work for my case?", a: "Invisalign treats a wide range of cases including crowding, spacing, overbites, underbites, and crossbites. The best way to find out is to schedule a free consultation." },
  { q: "Do you accept dental insurance for Invisalign?", a: "Yes. We accept most major dental insurance plans that include orthodontic benefits. We'll verify your coverage and maximize your benefits before treatment begins." },
  { q: "What happens after Invisalign treatment?", a: "You'll receive custom retainers to maintain your new smile. We recommend wearing them nightly to prevent any shifting." },
  { q: "How do I get the 15% discount?", a: "Simply call our office and mention the Invisalign promotion when scheduling your free consultation." },
];

const InvisalignFaqSection = () => {
  const [open, setOpen] = useState<Set<number>>(new Set([0, 1]));

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section className="bg-muted px-4 py-12">
      <div className="mx-auto max-w-xl md:max-w-4xl">
        <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
          Frequently Asked Questions
        </h2>

        <div className="mb-8 space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="card-elevated overflow-hidden">
              <button onClick={() => toggle(i)}
                className="flex w-full items-center justify-between p-4 text-left font-semibold text-foreground">
                {faq.q}
                <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-150 ${open.has(i) ? "rotate-180" : ""}`} />
              </button>
              {open.has(i) && (
                <div className="px-4 pb-4 text-muted-foreground">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="mb-3 text-sm font-medium text-muted-foreground">Still have questions?</p>
          <a href={TEL} aria-label="Call North Cross Dental Care"
            className="btn-promo inline-flex items-center gap-2 px-8">
            <Phone className="h-5 w-5" />
            Call Us — {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
};

export default InvisalignFaqSection;
