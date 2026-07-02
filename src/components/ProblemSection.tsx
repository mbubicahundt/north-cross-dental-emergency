import { Phone, Zap, AlertTriangle, ShieldOff, Droplets, Crown, Siren } from "lucide-react";
import { PHONE, TEL } from "@/lib/constants";
import happyPatient from "@/assets/happy-patient-chair.webp";

const items = [
  { icon: Zap, label: "Severe tooth pain" },
  { icon: AlertTriangle, label: "Broken or cracked tooth" },
  { icon: Siren, label: "Knocked-out tooth" },
  { icon: ShieldOff, label: "Dental infection or swelling" },
  { icon: Crown, label: "Lost filling or crown" },
  { icon: Droplets, label: "Bleeding or trauma" },
];

const ProblemSection = () => (
  <section className="bg-surface-problem px-4 py-12">
    <div className="mx-auto max-w-xl">
      <div className="mb-6 overflow-hidden rounded-2xl">
        <img src={happyPatient} alt="Smiling patient relaxing comfortably in the dental chair"
          className="w-full rounded-2xl object-cover aspect-[5/3]" loading="lazy" width={800} height={480} />
      </div>

      <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
        Dental Emergencies Can Get Worse Quickly
      </h2>
      <p className="mb-6 text-muted-foreground">
        Ignoring dental pain can lead to infection, tooth loss, and more serious health problems.
        Getting treatment quickly can prevent complications and relieve pain.
      </p>
      <p className="mb-8 font-semibold text-foreground">
        If you're experiencing a dental emergency, call now for immediate care.
      </p>

      <div className="mb-8 grid grid-cols-2 gap-3">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon className="h-5 w-5 shrink-0 text-brand-blue" />
            <span className="text-sm font-medium text-foreground">{label}</span>
          </div>
        ))}
      </div>

      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="btn-emergency flex w-full items-center justify-center gap-2 text-center">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>
    </div>
  </section>
);

export default ProblemSection;
