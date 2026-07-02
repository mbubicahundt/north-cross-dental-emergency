import { Phone, CheckCircle, Info } from "lucide-react";
import { TEL, PHONE, CTA_REASSURANCE } from "@/lib/constants";

const inclusions = [
  "Comprehensive shade assessment",
  "Professional teeth cleaning",
  "Custom-fitted whitening trays",
  "Zoom advanced LED light treatment (~60-minute session)",
  "Sensitivity-reducing fluoride treatment",
  "Take-home touch-up kit",
];

const WhiteningServicesSection = () => (
  <section className="bg-muted px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        What's Included In Your Zoom Whitening Visit
      </h2>

      <ul className="mb-6 space-y-3">
        {inclusions.map((t) => (
          <li key={t} className="flex items-start gap-2">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-promo" />
            <span className="text-lg font-semibold text-foreground">{t}</span>
          </li>
        ))}
      </ul>

      {/* No-surprises callout */}
      <div className="mb-8 flex items-start gap-3 rounded-xl border border-border bg-background p-4">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-promo" />
        <p className="text-sm font-medium text-foreground">
          No upsells. No surprises. Your whitening visit includes everything listed above — one price, one appointment.
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

export default WhiteningServicesSection;
