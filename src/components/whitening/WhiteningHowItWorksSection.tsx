import { Phone, PhoneCall, Scan, Sparkles } from "lucide-react";
import { PHONE, TEL, CTA_REASSURANCE } from "@/lib/constants";

const steps = [
  { icon: Phone, title: "Call To Book", desc: `Call ${PHONE} to schedule and lock in your 50% discount.` },
  { icon: PhoneCall, title: "Consultation & Shade Assessment", desc: "We evaluate your teeth, discuss your goals, and prepare custom trays for optimal results." },
  { icon: Scan, title: "Zoom Whitening Treatment", desc: "Relax while the Zoom LED system whitens your teeth up to 8 shades in about an hour." },
  { icon: Sparkles, title: "Walk Out Smiling", desc: "Leave with a dramatically brighter smile and a take-home touch-up kit to maintain results." },
];

const WhiteningHowItWorksSection = () => (
  <section className="bg-muted px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
        How Zoom Whitening Works
      </h2>

      <div className="mb-8 space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
        {steps.map((s, i) => (
          <div key={s.title} className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-promo text-promo-foreground">
              <s.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase text-muted-foreground">Step {i + 1}</p>
              <p className="text-lg font-bold text-foreground">{s.title}</p>
              <p className="text-muted-foreground">{s.desc}</p>
            </div>
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

export default WhiteningHowItWorksSection;
