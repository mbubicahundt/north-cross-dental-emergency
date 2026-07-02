import { Phone, Eye, Clock, Sparkles, Smile, Shield, Paintbrush } from "lucide-react";
import { PHONE, TEL, CTA_REASSURANCE } from "@/lib/constants";

const benefits = [
  { icon: Eye, label: "Natural appearance", desc: "Custom-matched to your tooth color, shape, and size for a seamless look." },
  { icon: Paintbrush, label: "Stain-resistant", desc: "Porcelain resists coffee, wine, and food stains better than natural teeth." },
  { icon: Clock, label: "Done in 2 visits", desc: "Consultation and prep at visit one, final placement at visit two." },
  { icon: Smile, label: "Minimally invasive", desc: "Only a thin layer of enamel is removed — your tooth stays mostly intact." },
  { icon: Shield, label: "Long-lasting", desc: "With proper care, porcelain veneers last 15–20 years." },
  { icon: Sparkles, label: "Instant transformation", desc: "Fix chips, gaps, stains, and uneven teeth all at once." },
];

const VeneersBenefitsSection = () => (
  <section className="bg-background px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        Why Patients Choose Porcelain Veneers
      </h2>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {benefits.map(({ icon: Icon, label, desc }) => (
          <div key={label} className="card-elevated flex flex-col items-start gap-2 p-5">
            <Icon className="h-8 w-8 text-promo" />
            <span className="text-base font-bold text-foreground">{label}</span>
            <span className="text-sm text-muted-foreground">{desc}</span>
          </div>
        ))}
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

export default VeneersBenefitsSection;
