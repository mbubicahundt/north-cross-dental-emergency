import { Phone, Eye, Clock, Utensils, Smile, Shield, Sparkles } from "lucide-react";
import { PHONE, TEL, CTA_REASSURANCE } from "@/lib/constants";

const benefits = [
  { icon: Eye, label: "Nearly invisible aligners", desc: "Clear, custom-fit trays that are virtually undetectable." },
  { icon: Utensils, label: "Eat whatever you want", desc: "Remove aligners for meals — no food restrictions." },
  { icon: Clock, label: "Fewer office visits", desc: "Check-ins every 6–8 weeks, not monthly adjustments." },
  { icon: Smile, label: "Comfortable fit", desc: "Smooth plastic trays with no brackets or wires." },
  { icon: Shield, label: "Predictable results", desc: "3D treatment plan shows your smile transformation upfront." },
  { icon: Sparkles, label: "Fast results", desc: "Many cases finished in 6–18 months." },
];

const InvisalignBenefitsSection = () => (
  <section className="bg-background px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        Why Patients Choose Invisalign
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

export default InvisalignBenefitsSection;
