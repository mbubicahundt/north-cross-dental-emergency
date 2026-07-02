import { Phone, CheckCircle, Info } from "lucide-react";
import { TEL, PHONE, CTA_REASSURANCE } from "@/lib/constants";
import smileImg from "@/assets/veneers-smile.webp";

const inclusions = [
  "Comprehensive smile consultation",
  "Digital smile design preview",
  "Custom porcelain veneer fabrication",
  "Professional tooth preparation",
  "Precision bonding and placement",
  "Follow-up adjustment visit",
];

const VeneersServicesSection = () => (
  <section className="bg-muted px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        What's Included In Your Veneers Treatment
      </h2>

      <div className="mb-6 grid gap-6 md:grid-cols-2">
        <img src={smileImg} alt="Beautiful confident smile after veneers"
          className="w-full rounded-2xl object-cover" loading="lazy" width={800} height={600} />
        <ul className="space-y-3">
          {inclusions.map((t) => (
            <li key={t} className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-promo" />
              <span className="text-lg font-semibold text-foreground">{t}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8 flex items-start gap-3 rounded-xl border border-border bg-background p-4">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-promo" />
        <p className="text-sm font-medium text-foreground">
          Your veneers are custom-crafted in a professional dental lab using the highest-quality porcelain for a natural, beautiful result that lasts.
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

export default VeneersServicesSection;
