import { Phone, CheckCircle } from "lucide-react";
import { TEL, PHONE } from "@/lib/constants";

interface Treatment {
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
}

const GeneralTreatmentSection = ({ treatment, index }: { treatment: Treatment; index: number }) => {
  const isReversed = index % 2 === 1;
  const bgClass = index % 2 === 0 ? "bg-background" : "bg-muted";

  return (
    <section className={`${bgClass} px-4 py-12`}>
      <div className="mx-auto max-w-xl md:max-w-4xl">
        <div className={`mb-6 grid gap-6 md:grid-cols-2 ${isReversed ? "md:[direction:rtl]" : ""}`}>
          <img
            src={treatment.image}
            alt={treatment.imageAlt}
            className="w-full rounded-2xl object-cover md:[direction:ltr]"
            loading="lazy"
            width={800}
            height={600}
          />
          <div className="md:[direction:ltr]">
            <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
              {treatment.title}
            </h2>
            <p className="mb-4 text-muted-foreground">{treatment.description}</p>
            <ul className="mb-6 space-y-2">
              {treatment.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                  <span className="font-medium text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a href={TEL} aria-label={`Call about ${treatment.title}`}
          className="btn-blue flex w-full items-center justify-center gap-2 text-center">
          <Phone className="h-5 w-5" />
          Call Now — {PHONE}
        </a>
      </div>
    </section>
  );
};

export default GeneralTreatmentSection;
