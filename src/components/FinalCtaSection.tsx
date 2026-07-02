import { Phone } from "lucide-react";
import { PHONE, TEL } from "@/lib/constants";
import youngCouple from "@/assets/young-couple-smiling.webp";

const FinalCtaSection = () => (
  <section className="bg-promo px-4 py-16">
    <div className="mx-auto max-w-xl text-center">
      <div className="mb-8 overflow-hidden rounded-2xl">
        <img src={youngCouple} alt="Happy young patients smiling at North Cross Dental Care"
          className="w-full rounded-2xl object-cover aspect-[3/2]" loading="lazy" width={800} height={533} />
      </div>

      <h2 className="mb-4 text-3xl font-bold text-promo-foreground md:text-4xl">
        Don't Stay in Pain — Call Now
      </h2>
      <p className="mb-8 text-lg text-promo-foreground/90">
        Our team is ready to help you get relief and protect your smile.
      </p>

      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="btn-final mx-auto mb-4 flex w-full items-center justify-center gap-2 text-center sm:w-auto">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>

      <p className="mt-2 text-sm text-promo-foreground/70">Click to call · Most insurance accepted</p>
    </div>
  </section>
);

export default FinalCtaSection;
