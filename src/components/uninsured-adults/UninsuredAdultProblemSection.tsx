import { Phone, DollarSign, AlertTriangle, ShieldOff, Clock, Heart, TrendingUp } from "lucide-react";
import { PHONE, TEL } from "@/lib/constants";

const items = [
  { icon: DollarSign, label: "Worried about the cost of dental work" },
  { icon: AlertTriangle, label: "Skipping check-ups due to no insurance" },
  { icon: ShieldOff, label: "Unsure what treatment options exist" },
  { icon: Clock, label: "Putting off dental visits for too long" },
  { icon: Heart, label: "Concerned about your oral health" },
  { icon: TrendingUp, label: "Small problems becoming expensive ones" },
];

const UninsuredAdultProblemSection = () => (
  <section className="bg-surface-problem px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
        No Insurance Shouldn't Mean No Dental Care
      </h2>
      <p className="mb-6 text-muted-foreground md:max-w-2xl">
        We get it — dental insurance is expensive, and many adults go years without seeing a dentist because of cost. But putting off care leads to bigger problems, more pain, and higher bills down the road.
      </p>
      <p className="mb-8 font-semibold text-foreground">
        That's why we offer many affordable options and flexible payment plans so you can get the care you need — on your terms.
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

export default UninsuredAdultProblemSection;
