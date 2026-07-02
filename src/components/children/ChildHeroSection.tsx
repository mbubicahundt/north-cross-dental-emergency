import { Phone, Shield, Clock, Users, Building } from "lucide-react";
import { PHONE, TEL } from "@/lib/constants";
import heroImage from "@/assets/child-hero-dentist-new.webp";
import logo from "@/assets/NCDC_Trans.webp";

const ChildHeroSection = () => (
  <section className="bg-background px-4 pb-12 pt-8">
    <div className="mx-auto max-w-xl">
      <img src={logo} alt="North Cross Dental Care logo" className="mx-auto mb-6 w-48" width={200} height={80} />
      <h1 className="mb-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
        Children's Emergency Dentist In Huntersville — Same Day Appointments
      </h1>
      <p className="mb-6 text-lg text-muted-foreground">
        Your child has a toothache? Broken tooth? Dental injury?<br />
        Our kid-friendly emergency dental team is ready to help today.
      </p>

      <img src={heroImage} alt="Smiling dental team member with a happy young patient at North Cross Dental Care"
        className="mb-6 aspect-[5/4] w-full rounded-2xl object-cover object-top" loading="eager" width={800} height={640} />

      <ul className="mb-6 space-y-2 text-foreground">
        {[
          "Same-day children's emergency dental appointments",
          "Gentle, kid-friendly approach to pain relief",
          "Treatment for broken, knocked-out, or injured teeth",
          "Experienced with anxious and nervous children",
          "Most insurance plans accepted",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Shield className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="btn-emergency mb-3 flex w-full items-center justify-center gap-2 text-center">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>

      <p className="mb-8 text-center text-sm text-muted-foreground">Click to call · Most insurance accepted</p>

      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: Clock, label: "Same Day Emergency Care" },
          { icon: Shield, label: "Most Insurance Accepted" },
          { icon: Users, label: "Kid-Friendly Dental Team" },
          { icon: Building, label: "Comfortable Modern Office" },
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

export default ChildHeroSection;
