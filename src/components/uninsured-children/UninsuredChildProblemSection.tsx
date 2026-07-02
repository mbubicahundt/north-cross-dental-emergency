import { Phone, DollarSign, AlertTriangle, ShieldOff, Clock, Heart, TrendingUp } from "lucide-react";
import { PHONE, TEL } from "@/lib/constants";

const items = [
  { icon: DollarSign, label: "Worried about the cost of dental care" },
  { icon: AlertTriangle, label: "Skipping check-ups due to no insurance" },
  { icon: ShieldOff, label: "Unsure what treatments your child needs" },
  { icon: Clock, label: "Putting off dental visits too long" },
  { icon: Heart, label: "Concerned about your child's oral health" },
  { icon: TrendingUp, label: "Small problems becoming expensive ones" },
];

const UninsuredChildProblemSection = () => (
  <section className="bg-surface-problem px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
        No Insurance Shouldn't Mean No Dental Care For Your Child
      </h2>
      <p className="mb-6 text-muted-foreground md:max-w-2xl">
        We understand — dental insurance is expensive, and many families don't have it. But skipping your child's dental visits can lead to cavities, infections, and costly emergency treatments down the road.
      </p>
      <p className="mb-8 font-semibold text-foreground">
        That's why we offer affordable, transparent pricing so every child can get the care they deserve.
      </p>

      <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-3">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon className="h-5 w-5 shrink-0 text-brand-blue" />
            <span className="text-sm font-medium text-foreground">{label}</span>
          </div>
        ))}
      </div>

      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="btn-blue flex w-full items-center justify-center gap-2 text-center">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>
    </div>
  </section>
);

export default UninsuredChildProblemSection;
