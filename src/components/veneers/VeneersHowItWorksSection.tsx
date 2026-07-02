import { Phone, PhoneCall, Scan, Smile, Sparkles } from "lucide-react";
import { PHONE, TEL, CTA_REASSURANCE } from "@/lib/constants";

const steps = [
  { icon: PhoneCall, title: "Call To Schedule", desc: `Call ${PHONE} to book your veneers consultation. We'll discuss your goals and answer all your questions.` },
  { icon: Scan, title: "Consultation & Prep", desc: "We examine your teeth, take impressions, and prepare your teeth with minimal reshaping. Temporary veneers are placed while your custom ones are crafted." },
  { icon: Smile, title: "Custom Fabrication", desc: "Our lab creates your porcelain veneers to match your ideal shape, size, and color — typically ready in 1–2 weeks." },
  { icon: Sparkles, title: "Placement & Reveal", desc: "Your custom veneers are bonded to your teeth for a perfect fit. You'll walk out with a stunning, natural-looking smile." },
];

const VeneersHowItWorksSection = () => (
  <section className="bg-muted px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
        How Porcelain Veneers Work
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

export default VeneersHowItWorksSection;
