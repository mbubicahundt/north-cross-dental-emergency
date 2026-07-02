import { Phone, CheckCircle } from "lucide-react";
import { TEL, PHONE } from "@/lib/constants";

const included = [
  "Comprehensive dental exam",
  "Professional teeth cleaning",
  "Digital X-rays (if needed)",
  "Personalized treatment plan",
  "Fluoride treatment",
];

const UninsuredChildPricingSection = () => (
  <section className="bg-surface-promo px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <div className="md:flex md:items-center md:gap-10">
        <div className="md:flex-1">
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Children's Cleaning &amp; Exam — Starting At Just $160
          </h2>
          <p className="mb-6 text-muted-foreground">
            No hidden fees. No surprise bills. Just quality dental care at a price that works for your family.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-promo bg-background p-6 shadow-lg md:w-[380px]">
          <p className="mb-1 text-sm font-bold tracking-wider text-promo">Children's Special</p>
          <p className="mb-4 text-4xl font-extrabold text-foreground">
            $160<span className="text-lg font-medium text-muted-foreground"> starting</span>
          </p>

          <ul className="mb-6 space-y-2">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-promo" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <a href={TEL} aria-label="Call to book"
            className="btn-blue flex w-full items-center justify-center gap-2 whitespace-nowrap text-center">
            <Phone className="h-5 w-5" />
            Call Now — {PHONE}
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default UninsuredChildPricingSection;
