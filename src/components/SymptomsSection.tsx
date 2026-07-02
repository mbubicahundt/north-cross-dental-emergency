import { Phone, Zap, ThermometerSun, CircleAlert, AlertTriangle, Crown, Siren } from "lucide-react";
import { PHONE, TEL } from "@/lib/constants";
import kidPrize from "@/assets/kid-prize-machine.webp";

const symptoms = [
  { icon: Zap, label: "Sudden severe tooth pain" },
  { icon: ThermometerSun, label: "Sensitivity when biting or chewing" },
  { icon: CircleAlert, label: "Swelling in gums or jaw" },
  { icon: AlertTriangle, label: "Broken or cracked tooth" },
  { icon: Crown, label: "Lost dental crown or filling" },
  { icon: Siren, label: "Knocked-out tooth" },
];

const SymptomsSection = () => (
  <section className="bg-background px-4 py-12">
    <div className="mx-auto max-w-xl">
      <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        Are You Experiencing Any Of These Symptoms?
      </h2>

      <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {symptoms.map(({ icon: Icon, label }) => (
          <div key={label} className="card-elevated flex flex-col items-center gap-2 p-4 text-center">
            <Icon className="h-8 w-8 text-brand-blue" />
            <span className="text-sm font-medium text-foreground">{label}</span>
          </div>
        ))}
      </div>

      <div className="mb-6 overflow-hidden rounded-2xl">
        <img src={kidPrize} alt="Team member helping a young patient pick a prize after their visit"
          className="w-full rounded-2xl object-cover aspect-[3/2]" loading="lazy" width={800} height={533} />
      </div>

      <p className="mb-6 text-center text-muted-foreground">
        We make every visit a positive experience — even for kids. If you're experiencing any of these symptoms, it's important to get treatment as soon as possible.
      </p>

      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="btn-emergency flex w-full items-center justify-center gap-2 text-center">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>
    </div>
  </section>
);

export default SymptomsSection;
