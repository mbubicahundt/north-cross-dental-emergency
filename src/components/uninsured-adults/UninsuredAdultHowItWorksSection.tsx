import { Phone, PhoneCall, Search, HeartPulse } from "lucide-react";
import { PHONE, TEL } from "@/lib/constants";

const steps = [
  { icon: PhoneCall, title: "Call Us", desc: "Let us know you don't have insurance — we'll walk you through your affordable options upfront." },
  { icon: Search, title: "Thorough Exam", desc: "Our experienced team gives you a comprehensive, comfortable dental exam." },
  { icon: HeartPulse, title: "Your Options, Your Choice", desc: "We present all treatment options with clear pricing — you decide what's right for you." },
];

const UninsuredAdultHowItWorksSection = () => (
  <section className="bg-background px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
        Simple, Affordable Care — Here's How It Works
      </h2>

      <div className="mb-8 space-y-6 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
        {steps.map((s, i) => (
          <div key={s.title} className="flex items-start gap-4 md:flex-col md:items-center md:text-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue text-brand-blue-foreground">
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
        className="btn-blue flex w-full items-center justify-center gap-2 text-center">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>
    </div>
  </section>
);

export default UninsuredAdultHowItWorksSection;
