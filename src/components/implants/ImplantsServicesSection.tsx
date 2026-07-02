import { Phone, CheckCircle, Info } from "lucide-react";
import { TEL, PHONE, CTA_REASSURANCE } from "@/lib/constants";

const inclusions = [
  "Comprehensive implant consultation & exam",
  "3D CBCT scan for precise implant planning",
  "Surgical implant placement",
  "Custom abutment & crown fabrication",
  "All follow-up visits during healing",
  "Final crown placement & bite adjustment",
];

const ImplantsServicesSection = () => (
  <section className="bg-muted px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        What's Included In Your Implant Treatment
      </h2>

      <ul className="mb-6 space-y-3">
        {inclusions.map((t) => (
          <li key={t} className="flex items-start gap-2">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-promo" />
            <span className="text-lg font-semibold text-foreground">{t}</span>
          </li>
        ))}
      </ul>

      <div className="mb-8 flex items-start gap-3 rounded-xl border border-border bg-background p-4">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-promo" />
        <p className="text-sm font-medium text-foreground">
          Everything from consultation through final crown — one comprehensive treatment plan. No surprise bills or hidden fees.
        </p>
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

export default ImplantsServicesSection;
