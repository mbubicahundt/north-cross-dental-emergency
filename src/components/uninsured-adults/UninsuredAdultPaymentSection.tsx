import { Phone, CheckCircle } from "lucide-react";
import { TEL, PHONE } from "@/lib/constants";

const items = [
  "Transparent, upfront pricing — no surprises",
  "Flexible payment plans available",
  "Cash, credit, and debit accepted",
  "Multiple treatment options for every budget",
];

const UninsuredAdultPaymentSection = () => (
  <section className="bg-background px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        Flexible Payment Options For Every Budget
      </h2>

      <ul className="mb-8 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
            <span className="text-lg text-foreground">{item}</span>
          </li>
        ))}
      </ul>

      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="btn-blue flex w-full items-center justify-center gap-2 text-center">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>
    </div>
  </section>
);

export default UninsuredAdultPaymentSection;
