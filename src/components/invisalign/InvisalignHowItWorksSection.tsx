import { Phone, PhoneCall, Scan, Smile, Sparkles } from "lucide-react";
import { PHONE, TEL, CTA_REASSURANCE } from "@/lib/constants";

const steps = [
  { icon: PhoneCall, title: "Call To Book", desc: `Call ${PHONE} to schedule your free consultation and lock in 15% off.` },
  { icon: Scan, title: "3D Scan & Treatment Plan", desc: "We take a digital 3D scan of your teeth and show you a preview of your new smile before you start." },
  { icon: Smile, title: "Wear Your Aligners", desc: "Swap to a new set of custom aligners every 1–2 weeks. They're removable, comfortable, and nearly invisible." },
  { icon: Sparkles, title: "Reveal Your New Smile", desc: "Finish treatment with perfectly straight teeth and custom retainers to keep them that way." },
];

const InvisalignHowItWorksSection = () => (
  <section className="bg-muted px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
        How Invisalign Works
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

export default InvisalignHowItWorksSection;
