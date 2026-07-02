import { Clock, Phone } from "lucide-react";
import { PHONE, TEL, OFFICE_HOURS } from "@/lib/constants";

const HoursSection = () => (
  <section className="bg-muted px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
        Available When You Need Us
      </h2>
      <p className="mb-6 text-sm font-semibold text-promo">
        Open evenings and Saturdays — when most dentists aren't.
      </p>

      <div className="card-elevated mb-6 p-5">
        <div className="mb-4 flex items-center gap-2 text-foreground">
          <Clock className="h-5 w-5 text-promo" />
          <span className="font-bold">Office Hours</span>
        </div>
        <div className="space-y-2">
          {OFFICE_HOURS.map((h) => (
            <div key={h.day} className="flex justify-between border-b border-border/50 pb-2 last:border-0 last:pb-0">
              <span className="text-sm font-medium text-foreground">{h.day}</span>
              <span className={`text-sm ${h.hours === "Closed" ? "text-muted-foreground" : "text-foreground font-semibold"}`}>
                {h.hours}
              </span>
            </div>
          ))}
        </div>
      </div>

      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="btn-promo flex w-full items-center justify-center gap-2 text-center">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>
    </div>
  </section>
);

export default HoursSection;
