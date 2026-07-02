import { Phone, Frown, Utensils, MessageCircle, Bone, SmilePlus, AlertTriangle } from "lucide-react";
import { PHONE, TEL, CTA_REASSURANCE } from "@/lib/constants";

const items = [
  { icon: Frown, label: "Missing one or more teeth" },
  { icon: Utensils, label: "Difficulty chewing food" },
  { icon: MessageCircle, label: "Self-conscious about your smile" },
  { icon: Bone, label: "Jawbone deterioration" },
  { icon: AlertTriangle, label: "Ill-fitting dentures" },
  { icon: SmilePlus, label: "Shifting surrounding teeth" },
];

const ImplantsProblemSection = () => (
  <section className="bg-surface-promo px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
        Living With Missing Teeth?
      </h2>
      <p className="mb-6 text-muted-foreground">
        Missing teeth affect more than your appearance. They can lead to bone loss, shifting teeth, difficulty eating, and lost confidence. Bridges and dentures are temporary fixes — dental implants are the permanent solution.
      </p>
      <p className="mb-8 font-semibold text-foreground">
        Restore your smile for good. Call today to save 15% on dental implants.*
      </p>

      <div className="mb-8 grid grid-cols-2 gap-3">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon className="h-5 w-5 shrink-0 text-promo" />
            <span className="text-sm font-medium text-foreground">{label}</span>
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

export default ImplantsProblemSection;
