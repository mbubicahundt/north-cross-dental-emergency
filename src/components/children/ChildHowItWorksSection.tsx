import { Phone, PhoneCall, Search, HeartPulse } from "lucide-react";
import { PHONE, TEL } from "@/lib/constants";
import staffPortrait from "@/assets/staff-portrait-floral.webp";

const steps = [
  { icon: PhoneCall, title: "Call Now", desc: "Our team will schedule the soonest available emergency visit for your child." },
  { icon: Search, title: "Gentle Diagnosis", desc: "Our dentist carefully examines your child to find the cause of pain." },
  { icon: HeartPulse, title: "Comfortable Treatment", desc: "We relieve your child's pain with gentle, kid-friendly care." },
];

const ChildHowItWorksSection = () => (
  <section className="bg-muted px-4 py-12">
    <div className="mx-auto max-w-xl">
      <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
        Fast, Gentle Emergency Care For Kids
      </h2>

      <div className="mb-8 grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          {steps.map((s, i) => (
            <div key={s.title} className="flex items-start gap-4">
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
        <img src={staffPortrait} alt="Friendly team member at North Cross Dental Care"
          className="w-full rounded-2xl object-cover aspect-[3/4]" loading="lazy" width={480} height={640} />
      </div>

      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="btn-emergency flex w-full items-center justify-center gap-2 text-center">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>
    </div>
  </section>
);

export default ChildHowItWorksSection;
