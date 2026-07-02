import { Phone, Frown, Camera, Briefcase, Heart, SmilePlus, Palette } from "lucide-react";
import { PHONE, TEL, CTA_REASSURANCE } from "@/lib/constants";

const items = [
  { icon: Frown, label: "Chipped or cracked teeth" },
  { icon: Palette, label: "Stained or discolored teeth" },
  { icon: Camera, label: "Hiding your smile in photos" },
  { icon: Briefcase, label: "Uneven or misshapen teeth" },
  { icon: Heart, label: "Gaps between front teeth" },
  { icon: SmilePlus, label: "Want a complete smile makeover" },
];

const VeneersProblemSection = () => (
  <section className="bg-surface-promo px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
        Embarrassed By Your Smile?
      </h2>
      <p className="mb-6 text-muted-foreground">
        Teeth that are chipped, stained, uneven, or gapped can hold you back from smiling with confidence. Porcelain veneers are a fast, permanent solution that transforms your smile in just two visits.
      </p>
      <p className="mb-8 font-semibold text-foreground">
        Stop hiding your teeth. Call today to learn how veneers can change your smile — and your confidence.
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

export default VeneersProblemSection;
