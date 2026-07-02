import { Phone, Frown, Users, Camera, Briefcase, Heart, SmilePlus } from "lucide-react";
import { PHONE, TEL, CTA_REASSURANCE } from "@/lib/constants";

const items = [
  { icon: Frown, label: "Crooked or crowded teeth" },
  { icon: Users, label: "Gaps between teeth" },
  { icon: Camera, label: "Hiding your smile in photos" },
  { icon: Briefcase, label: "Want a discreet solution for work" },
  { icon: Heart, label: "Bite alignment issues" },
  { icon: SmilePlus, label: "Previous braces relapse" },
];

const InvisalignProblemSection = () => (
  <section className="bg-surface-promo px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
        Tired Of Hiding Your Smile?
      </h2>
      <p className="mb-6 text-muted-foreground">
        Crooked, crowded, or gapped teeth affect more than your appearance — they can impact your confidence, oral health, and how others perceive you. Traditional metal braces aren't the only option anymore.
      </p>
      <p className="mb-8 font-semibold text-foreground">
        Invisalign straightens your teeth discreetly. Call today to save 15% on your case.
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

export default InvisalignProblemSection;
