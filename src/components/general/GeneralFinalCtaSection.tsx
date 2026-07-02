import { Phone } from "lucide-react";
import { PHONE, TEL } from "@/lib/constants";

const GeneralFinalCtaSection = () => (
  <section className="bg-brand-blue px-4 py-16">
    <div className="mx-auto max-w-xl md:max-w-4xl text-center">
      <h2 className="mb-4 text-3xl font-bold text-brand-blue-foreground md:text-4xl">
        Ready For A Healthier Smile?
      </h2>
      <p className="mb-8 text-lg text-brand-blue-foreground/90">
        Whether it's a routine cleaning or a treatment you've been putting off — we're here to help. Call now to schedule your appointment.
      </p>

      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="btn-blue mx-auto mb-4 flex w-full items-center justify-center gap-2 text-center sm:w-auto bg-background text-promo">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>

      <p className="mt-2 text-sm text-brand-blue-foreground/70">Click to call · Most insurance accepted</p>
    </div>
  </section>
);

export default GeneralFinalCtaSection;
