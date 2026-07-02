import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { PHONE, TEL } from "@/lib/constants";

const faqs = [
  { q: "What are porcelain veneers?", a: "Porcelain veneers are thin, custom-made shells that cover the front surface of your teeth. They're permanently bonded to correct chips, stains, gaps, and uneven teeth for a flawless, natural-looking smile." },
  { q: "How long do porcelain veneers last?", a: "With proper care, porcelain veneers typically last 15–20 years. They're highly durable and resistant to staining." },
  { q: "Does getting veneers hurt?", a: "The procedure is minimally invasive. We use local anesthesia during preparation, and most patients experience little to no discomfort during or after the process." },
  { q: "How many visits does it take?", a: "Porcelain veneers are typically completed in just 2 visits — one for consultation and preparation, and a second for final placement." },
  { q: "Can veneers fix crooked teeth?", a: "Veneers can correct the appearance of mildly crooked or uneven teeth without braces. For more significant alignment issues, we may recommend Invisalign first." },
  { q: "How much do veneers cost?", a: "The cost depends on how many veneers you need and the complexity of your case. We offer flexible financing through CareCredit and Cherry, and we accept most major insurance plans. Call us for a personalized quote." },
  { q: "Do you accept dental insurance for veneers?", a: "We accept most major dental insurance plans. While cosmetic veneers may not always be fully covered, we'll work with your insurance to maximize any applicable benefits." },
  { q: "How do I care for my veneers?", a: "Care for veneers just like natural teeth — brush twice daily, floss regularly, and visit us for routine checkups. Avoid biting hard objects like ice or pen caps." },
];

const VeneersFaqSection = () => {
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

export default VeneersFaqSection;
