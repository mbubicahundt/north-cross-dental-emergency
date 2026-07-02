import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { PHONE, TEL } from "@/lib/constants";

const faqs = [
  { q: "Will it cause sensitivity?", a: "Some patients experience mild, temporary sensitivity. We apply a fluoride treatment afterward to minimize any discomfort. Most patients report no sensitivity at all with Zoom." },
  { q: "How long does Zoom whitening take?", a: "The in-office treatment takes about 45 minutes to an hour. You'll walk out with noticeably whiter teeth the same day." },
  { q: "Is Zoom whitening safe?", a: "Yes. Zoom is FDA-approved and administered by dental professionals. It's one of the safest and most effective whitening options available." },
  { q: "Who is a good candidate for Zoom whitening?", a: "Most adults with healthy teeth and gums are great candidates. We'll do a quick assessment at your appointment to confirm Zoom is right for you." },
  { q: "How is Zoom different from drugstore whitening strips?", a: "Zoom uses a professional-grade hydrogen peroxide gel activated by LED light, delivering up to 8 shades of improvement in one session. Over-the-counter strips typically take weeks and produce less dramatic results." },
  { q: "Do you accept my dental insurance?", a: "We accept most major dental insurance plans and will work with your provider to maximize your benefits. We also offer CareCredit and Cherry Financing for flexible payment options." },
  { q: "Will Zoom whiten crowns or veneers?", a: "Zoom whitening works on natural tooth enamel. Crowns, veneers, and bonding won't change color. We can discuss options to match your restorations during your consultation." },
  { q: "How long do results last?", a: "With proper care and the included touch-up kit, results can last 1–2 years. Avoiding heavy staining foods and drinks helps extend results." },
  { q: "How do I claim the 50% discount?", a: "Simply call our office and mention the Zoom whitening promotion when scheduling your appointment." },
];

const WhiteningFaqSection = () => {
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

        {/* Post-FAQ CTA */}
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

export default WhiteningFaqSection;
