import { Phone, CheckCircle, Shield, Heart } from "lucide-react";
import { TEL, PHONE } from "@/lib/constants";
import staffHygienist from "@/assets/staff-hygienist.webp";

const InsuranceSection = () => (
  <section className="bg-background px-4 py-12">
    <div className="mx-auto max-w-xl">
      <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        Don't Have Insurance? We Have Options.
      </h2>

      <div className="mb-6 overflow-hidden rounded-2xl">
        <img src={staffHygienist} alt="Welcoming hygienist at North Cross Dental Care"
          className="w-full rounded-2xl object-cover aspect-[3/4]" loading="lazy" width={480} height={640} />
      </div>

      <div className="mb-6 grid gap-6 md:grid-cols-2">
        {/* Column 1 */}
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="mb-3 flex items-center gap-2">
            <Shield className="h-5 w-5 text-brand-blue" />
            <h3 className="text-lg font-bold text-foreground">We Accept Most Major Insurance</h3>
          </div>
          <ul className="space-y-2">
            {["Delta Dental", "Aetna", "Cigna", "MetLife", "United Healthcare", "And many more"].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                <span className="text-sm text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 */}
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="mb-3 flex items-center gap-2">
            <Heart className="h-5 w-5 text-promo-foreground" />
            <h3 className="text-lg font-bold text-foreground">No Insurance? No Problem</h3>
          </div>
          <p className="mb-3 text-sm text-muted-foreground">
            Our in-house savings plan starts at just <span className="font-bold text-foreground">$394/year</span> and covers:
          </p>
          <ul className="space-y-2">
            {["Two cleanings per year", "Annual exams & X-rays", "15% off all other services"].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                <span className="text-sm text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mb-6 text-center text-lg font-semibold text-foreground">
        We'll never let cost stop you from getting out of pain.
      </p>

      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="btn-promo flex w-full items-center justify-center gap-2 text-center">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>
    </div>
  </section>
);

export default InsuranceSection;
