import { Phone, Coffee, Wine, Cigarette, Clock, Pill, Droplets } from "lucide-react";
import { PHONE, TEL, CTA_REASSURANCE } from "@/lib/constants";

const items = [
  { icon: Coffee, label: "Coffee & tea stains" },
  { icon: Wine, label: "Red wine discoloration" },
  { icon: Cigarette, label: "Tobacco staining" },
  { icon: Clock, label: "Age-related yellowing" },
  { icon: Pill, label: "Medication discoloration" },
  { icon: Droplets, label: "Uneven tooth color" },
];

const WhiteningProblemSection = () => (
  <section className="bg-surface-promo px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
        Stained Teeth Holding Back Your Smile?
      </h2>
      <p className="mb-6 text-muted-foreground">
        Years of coffee, wine, and everyday wear can leave teeth looking dull and yellow. Over-the-counter whitening strips and toothpastes can only do so much — professional Zoom whitening delivers dramatic results in a single appointment.
      </p>
      <p className="mb-8 font-semibold text-foreground">
        Don't settle for a dull smile. Call today to claim your 50% discount.
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

export default WhiteningProblemSection;
