import { Phone, CheckCircle, CreditCard, Shield, BadgeCheck } from "lucide-react";
import { TEL, PHONE, CTA_REASSURANCE } from "@/lib/constants";
import CountdownTimer from "./CountdownTimer";

const benefits = [
  "50% off Zoom whitening — limited time",
  "Most major dental insurance accepted",
  "CareCredit & Cherry Financing available",
  "Cash, debit, credit cards, HSA/FSA accepted",
  "In-house Dental Savings Plan from $394/yr",
  "No hidden fees — transparent pricing",
];

const WhiteningPricingSection = () => (
  <section className="bg-background px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        A Brighter Smile At A Better Price
      </h2>

      <ul className="mb-6 space-y-3">
        {benefits.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-promo" />
            <span className="text-lg text-foreground">{item}</span>
          </li>
        ))}
      </ul>

      {/* Financing callout */}
      <div className="mb-6 rounded-xl border border-border bg-muted/50 p-4">
        <div className="flex items-center gap-2 mb-2">
          <CreditCard className="h-5 w-5 text-promo" />
          <span className="font-semibold text-foreground">Flexible Payment Options</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Apply for CareCredit or Cherry Financing right in our office. We'll work with your insurance to maximize your benefits so you pay as little out of pocket as possible.
        </p>
      </div>

      {/* Trust badges */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
        <div className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground">
          <BadgeCheck className="h-4 w-4 text-promo" />
          Philips Zoom Certified
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground">
          <Shield className="h-4 w-4 text-promo" />
          ADA Member
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground">
          <CheckCircle className="h-4 w-4 text-star-gold" />
          5★ on Google (83 Reviews)
        </div>
      </div>

      <div className="mb-4 text-center">
        <CountdownTimer showDate />
      </div>

      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="btn-promo flex w-full items-center justify-center gap-2 text-center">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>
      <p className="mt-2 text-center text-xs text-muted-foreground">{CTA_REASSURANCE}</p>
    </div>
  </section>
);

export default WhiteningPricingSection;
