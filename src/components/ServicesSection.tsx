import { Phone, CheckCircle } from "lucide-react";
import { TEL, PHONE } from "@/lib/constants";
import olderWoman from "@/assets/older-woman-smiling.webp";

const treatments = [
  "Emergency tooth pain treatment",
  "Broken or cracked tooth repair",
  "Emergency root canals",
  "Tooth extractions",
  "Dental infection treatment",
  "Crown or filling replacement",
];

const ServicesSection = () => (
  <section className="bg-muted px-4 py-12">
    <div className="mx-auto max-w-xl">
      <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        Emergency Dental Treatments We Provide
      </h2>

      <div className="mb-6 grid gap-6 md:grid-cols-2">
        <img src={olderWoman} alt="Happy patient smiling comfortably in the dental chair"
          className="w-full rounded-2xl object-cover" loading="lazy" width={640} height={640} />
        <ul className="space-y-3">
          {treatments.map((t) => (
            <li key={t} className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
              <span className="text-lg font-semibold text-foreground">{t}</span>
            </li>
          ))}
        </ul>
      </div>

      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="btn-emergency flex w-full items-center justify-center gap-2 text-center">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>
    </div>
  </section>
);

export default ServicesSection;
