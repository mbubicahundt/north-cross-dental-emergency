import { Phone } from "lucide-react";
import { PHONE, TEL } from "@/lib/constants";

const UninsuredChildFinalCtaSection = () => (
  <section className="bg-brand-blue px-4 py-16">
    <div className="mx-auto max-w-xl md:max-w-4xl text-center">
      <h2 className="mb-4 text-3xl font-bold text-brand-blue-foreground md:text-4xl">
        Every Child Deserves A Healthy Smile
      </h2>
      <p className="mb-8 text-lg text-brand-blue-foreground/90">
        No insurance? No problem. Call now to book your child's cleaning &amp; exam starting at just $160.
      </p>

      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="btn-blue mx-auto mb-4 flex w-full items-center justify-center gap-2 text-center sm:w-auto bg-background text-promo">
        <Phone className="h-5 w-5" />
        Call Now
      </a>

      <a href={TEL} className="text-3xl font-extrabold text-brand-blue-foreground underline decoration-brand-blue-foreground/30 underline-offset-4 hover:decoration-brand-blue-foreground"
        style={{ fontVariantNumeric: "tabular-nums" }}>
        {PHONE}
      </a>
      <p className="mt-2 text-sm text-brand-blue-foreground/70">Click to call · Cleaning &amp; exam from $160</p>
    </div>
  </section>
);

export default UninsuredChildFinalCtaSection;
