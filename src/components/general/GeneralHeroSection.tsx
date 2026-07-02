import { Phone, Shield, Clock, Users, Star } from "lucide-react";
import { PHONE, TEL } from "@/lib/constants";
import heroImage from "@/assets/general-hero.webp";
import logo from "@/assets/NCDC_Trans.webp";

const GeneralHeroSection = () => (
  <section className="bg-background px-4 pb-12 pt-8">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <img src={logo} alt="North Cross Dental Care logo" className="mx-auto mb-6 w-48" width={200} height={80} />

      <div className="md:flex md:items-start md:gap-8">
        <div className="md:flex-1">
          <h1 className="mb-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
            The Most Trusted Dentist In Huntersville, NC
          </h1>
          <p className="mb-6 text-lg text-muted-foreground">
            From routine cleanings to advanced restorations — we provide complete dental care for the whole family in one convenient location.
          </p>

          <ul className="mb-6 space-y-2 text-foreground">
            {[
              "Comprehensive exams & cleanings",
              "Same-day emergency appointments",
              "Most insurance plans accepted",
              "Gentle, experienced dental team",
              "Modern technology for comfortable care",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Shield className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <img src={heroImage} alt="North Cross Dental Care office building exterior in Huntersville NC"
          className="mb-6 w-full rounded-2xl object-cover md:mb-0 md:w-[45%]" loading="eager" width={1024} height={768} />
      </div>

      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="btn-blue mb-3 mt-6 flex w-full items-center justify-center gap-2 text-center">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>

      <p className="mb-8 text-center text-sm text-muted-foreground">Click to call · Most insurance accepted</p>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { icon: Star, label: "5-Star Rated Practice" },
          { icon: Clock, label: "Same Day Appointments" },
          { icon: Users, label: "Family-Friendly Team" },
          { icon: Shield, label: "Most Insurance Accepted" },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="card-elevated flex items-center gap-2 text-sm font-medium text-foreground">
            <Icon className="h-5 w-5 shrink-0 text-brand-blue" />
            {label}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GeneralHeroSection;
