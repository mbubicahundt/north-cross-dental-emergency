import { Phone, Shield, Clock, Sparkles, Building } from "lucide-react";
import { PHONE, TEL, CTA_REASSURANCE } from "@/lib/constants";
import heroImage from "@/assets/veneers-hero.webp";
import logo from "@/assets/NCDC_Trans.webp";

const VeneersHeroSection = () => (
  <section className="bg-background px-4 pb-12 pt-8">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <div className="mb-6 flex items-center justify-between">
        <img src={logo} alt="North Cross Dental Care logo" className="w-48" width={200} height={80} />
        <a href={TEL} className="flex items-center gap-1.5 font-bold text-promo transition-colors hover:text-promo/80">
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">{PHONE}</span>
          <span className="sm:hidden text-sm">Call Us</span>
        </a>
      </div>

      <h1 className="mb-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
        Porcelain Veneers In Huntersville — A Perfect Smile In Just 2 Visits
      </h1>
      <p className="mb-6 text-lg text-muted-foreground">
        Chipped, stained, or uneven teeth? Custom porcelain veneers give you a flawless, natural-looking smile that lasts 15–20 years. Call today to schedule your consultation.
      </p>

      <img src={heroImage} alt="Woman smiling confidently showing beautiful teeth"
        className="mb-6 w-full rounded-2xl object-cover" loading="eager" width={1024} height={768} />

      <ul className="mb-6 space-y-2 text-foreground">
        {[
          "Custom-crafted porcelain veneers",
          "Natural-looking, stain-resistant results",
          "Completed in just 2 office visits",
          "Fix chips, gaps, stains & uneven teeth",
          "Long-lasting — 15 to 20 years",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Shield className="mt-0.5 h-5 w-5 shrink-0 text-promo" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="btn-promo mb-2 flex w-full items-center justify-center gap-2 text-center">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>

      <p className="mb-8 text-center text-xs text-muted-foreground">{CTA_REASSURANCE}</p>

      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: Sparkles, label: "Natural-Looking Results" },
          { icon: Clock, label: "Done In 2 Visits" },
          { icon: Shield, label: "15–20 Year Lifespan" },
          { icon: Building, label: "Modern Dental Office" },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="card-elevated flex items-center gap-2 text-sm font-medium text-foreground">
            <Icon className="h-5 w-5 shrink-0 text-promo" />
            {label}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VeneersHeroSection;
