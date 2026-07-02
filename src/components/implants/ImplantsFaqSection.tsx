import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { PHONE, TEL } from "@/lib/constants";

const faqs = [
  { q: "How much do dental implants cost?", a: "The cost varies depending on the number of implants and complexity of your case. With our 15% discount on non-financed treatments, single implants typically range from $3,000–$5,000 including the crown. We offer a detailed cost breakdown at your consultation." },
  { q: "Does getting an implant hurt?", a: "Most patients are pleasantly surprised — the procedure is done under local anesthesia and is often less uncomfortable than a tooth extraction. Post-procedure discomfort is typically managed with over-the-counter pain medication." },
  { q: "How long does the implant process take?", a: "The implant is placed in one visit (about 1–2 hours). Healing takes 3–6 months while the implant fuses with your jawbone. Then we place your permanent custom crown." },
  { q: "How long do dental implants last?", a: "With proper care, dental implants can last a lifetime. The crown on top may need replacement after 15–20 years due to normal wear." },
  { q: "Am I a candidate for dental implants?", a: "Most adults with healthy gums and adequate bone density are good candidates. If bone loss has occurred, bone grafting may be an option. The best way to find out is a consultation with 3D imaging." },
  { q: "What's the difference between implants and bridges?", a: "Implants are standalone — they don't rely on or damage neighboring teeth. They also preserve jawbone. Bridges require grinding down adjacent teeth and don't prevent bone loss." },
  { q: "Do you accept dental insurance for implants?", a: "Yes. We accept most major dental insurance plans. Many plans now include implant coverage. We'll verify your benefits and maximize your coverage before treatment." },
  { q: "Can I get an implant if I've had a tooth missing for years?", a: "Yes, though bone grafting may be needed if significant bone loss has occurred. We'll assess this during your consultation with our 3D CBCT scan." },
  { q: "How do I get the 15% discount?", a: "Call our office and mention the dental implant promotion. The 15% discount applies to non-financed treatments paid in full at time of service." },
];

const ImplantsFaqSection = () => {
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

export default ImplantsFaqSection;
