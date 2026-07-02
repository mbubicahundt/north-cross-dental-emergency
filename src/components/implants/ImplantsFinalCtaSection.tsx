import { Phone, MapPin, Clock } from "lucide-react";
import { PHONE, TEL, ADDRESS, OFFICE_HOURS } from "@/lib/constants";
import CountdownTimer from "@/components/whitening/CountdownTimer";

const ImplantsFinalCtaSection = () => (
  <section className="bg-promo px-4 py-16">
    <div className="mx-auto max-w-xl md:max-w-4xl text-center">
      <h2 className="mb-4 text-3xl font-bold text-promo-foreground md:text-4xl">
        Your Complete Smile Is One Call Away
      </h2>
      <p className="mb-4 text-lg text-promo-foreground/90">
        Don't wait — missing teeth lead to bone loss and further dental problems. Save 15% on implants today.*
      </p>

      <div className="mb-6">
        <CountdownTimer />
      </div>

      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="btn-promo-final mx-auto mb-3 flex w-full items-center justify-center gap-2 text-center sm:w-auto">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>

      <p className="mb-6 text-xs text-promo-foreground/70">
        What happens when you call? You'll speak with our friendly scheduling team. No pressure, no commitment.
      </p>

      <div className="space-y-2 text-sm text-promo-foreground/80">
        <div className="flex items-center justify-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>{ADDRESS}</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <Clock className="h-4 w-4" />
          {OFFICE_HOURS.filter(h => h.hours !== "Closed").map((h) => (
            <span key={h.day} className="text-xs">{h.day}: {h.hours}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ImplantsFinalCtaSection;
