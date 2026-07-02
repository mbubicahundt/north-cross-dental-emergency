import { Phone, CheckCircle } from "lucide-react";
import { TEL, PHONE } from "@/lib/constants";
import examImage from "@/assets/child-dentist-examining.webp";

const treatments = [
  "Routine cleanings & exams",
  "Cavity fillings & sealants",
  "Fluoride treatments",
  "Emergency tooth pain relief",
  "Broken or chipped tooth repair",
  "Pediatric extractions",
];

const UninsuredChildServicesSection = () => (
  <section className="bg-muted px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        Affordable Children's Dental Services
      </h2>

      <div className="mb-6 grid gap-6 md:grid-cols-2">
        <img src={examImage} alt="Dentist gently examining a child's teeth"
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
        className="btn-blue flex w-full items-center justify-center gap-2 text-center">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>
    </div>
  </section>
);

export default UninsuredChildServicesSection;
