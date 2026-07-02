import { Phone, Shield, Clock, Sparkles, Building } from "lucide-react";
import { PHONE, TEL, CTA_REASSURANCE } from "@/lib/constants";
import heroImage from "@/assets/invisalign-hero.webp";
import logo from "@/assets/NCDC_Trans.webp";

const InvisalignHeroSection = () => (
  <section className="bg-background px-4 pb-12 pt-8">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      {/* Header: logo + phone */}
      <div className="mb-6 flex items-center justify-between">
        <img src={logo} alt="North Cross Dental Care logo" className="w-48" width={200} height={80} />
        <a href={TEL} className="flex items-center gap-1.5 font-bold text-promo transition-colors hover:text-promo/80">
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">{PHONE}</span>
          <span className="sm:hidden text-sm">Call Us</span>
        </a>
      </div>

      <h1 className="mb-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
        15% Off Invisalign In Huntersville — Adults & Teens
      </h1>
      <p className="mb-6 text-lg text-muted-foreground">
        Crooked or crowded teeth? Get the straight, confident smile you've always wanted with Invisalign clear aligners — now 15% off for a limited time.
      </p>

      <img src={heroImage} alt="Woman smiling and holding an Invisalign clear aligner tray"
        className="mb-6 w-full rounded-2xl object-cover" loading="eager" width={1024} height={768} />

      <ul className="mb-6 space-y-2 text-foreground">
        {[
          "Nearly invisible clear aligners",
          "Custom 3D treatment plan",
          "Removable — eat whatever you want",
          "Results in as few as 6 months",
          "Now 15% off — limited time offer",
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
          { icon: Sparkles, label: "Nearly Invisible Aligners" },
          { icon: Clock, label: "Results In 6–18 Months" },
          { icon: Shield, label: "Certified Provider" },
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

export default InvisalignHeroSection;
