import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How quickly can I be seen?", a: "Most emergency patients are seen the same day." },
  { q: "What should I do if my tooth is knocked out?", a: "Call immediately. Fast treatment may save the tooth." },
  { q: "Do you accept dental insurance?", a: "Yes. We accept most major insurance plans." },
  { q: "What if I don't have insurance?", a: "Financing options may be available." },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-muted px-4 py-12">
      <div className="mx-auto max-w-xl">
        <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="card-elevated overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between p-4 text-left font-semibold text-foreground">
                {faq.q}
                <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-150 ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-4 pb-4 text-muted-foreground">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
