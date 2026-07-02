import { Phone, Bone, Smile, Shield, Clock, Heart, Sparkles } from "lucide-react";
import { PHONE, TEL, CTA_REASSURANCE } from "@/lib/constants";

const benefits = [
  { icon: Bone, label: "Preserves jawbone", desc: "Implants stimulate bone growth, preventing the deterioration that occurs with missing teeth." },
  { icon: Smile, label: "Natural look & feel", desc: "Custom-crafted crowns match your existing teeth in shape, size, and color." },
  { icon: Clock, label: "Built to last", desc: "With proper care, dental implants can last a lifetime — no replacements needed." },
  { icon: Shield, label: "No damage to other teeth", desc: "Unlike bridges, implants don't require grinding down adjacent healthy teeth." },
  { icon: Heart, label: "Eat what you love", desc: "Full chewing power restored — enjoy steak, apples, corn on the cob, everything." },
  { icon: Sparkles, label: "Confidence restored", desc: "Smile, laugh, and speak without worrying about gaps or slipping dentures." },
];

const ImplantsBenefitsSection = () => (
  <section className="bg-background px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        Why Patients Choose Dental Implants
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

export default ImplantsBenefitsSection;
