import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How quickly can my child be seen?", a: "Most children with dental emergencies are seen the same day." },
  { q: "What should I do if my child knocks out a tooth?", a: "Call immediately. If it's a permanent tooth, place it in milk and bring it with you. Fast treatment may save the tooth." },
  { q: "Do you treat baby teeth emergencies?", a: "Yes. Baby tooth injuries can affect the developing permanent teeth, so prompt treatment is important." },
  { q: "Do you offer sedation for anxious children?", a: "We offer comfort options to help anxious children relax during treatment. Call us to discuss what's best for your child." },
  { q: "Do you accept dental insurance for children?", a: "Yes. We accept most major dental insurance plans, including children's coverage." },
];

const ChildFaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-muted px-4 py-12">
      <div className="mx-auto max-w-xl">
        <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
          Frequently Asked Questions About Children's Dental Emergencies
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

export default ChildFaqSection;
