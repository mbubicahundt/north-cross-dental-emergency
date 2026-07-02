import { useEffect } from "react";
import ImplantsBanner from "@/components/implants/ImplantsBanner";
import ImplantsHeroSection from "@/components/implants/ImplantsHeroSection";
import ImplantsProblemSection from "@/components/implants/ImplantsProblemSection";
import ImplantsBenefitsSection from "@/components/implants/ImplantsBenefitsSection";
import ImplantsDoctorSection from "@/components/implants/ImplantsDoctorSection";
import ImplantsServicesSection from "@/components/implants/ImplantsServicesSection";
import ImplantsOfficeSection from "@/components/implants/ImplantsOfficeSection";
import ImplantsSocialProofSection from "@/components/implants/ImplantsSocialProofSection";
import ImplantsHowItWorksSection from "@/components/implants/ImplantsHowItWorksSection";
import ImplantsPricingSection from "@/components/implants/ImplantsPricingSection";
import ImplantsFinalCtaSection from "@/components/implants/ImplantsFinalCtaSection";
import ImplantsFaqSection from "@/components/implants/ImplantsFaqSection";
import FooterSection from "@/components/FooterSection";
import ImplantsStickyMobileFooter from "@/components/implants/ImplantsStickyMobileFooter";
import { PHONE } from "@/lib/constants";

const SCHEMA_JSON_LD = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Dentist"],
  name: "North Cross Dental Care",
  image: "https://urgent-smile-guard.lovable.app/og-image.png",
  telephone: "+17044206900",
  url: "https://urgent-smile-guard.lovable.app/dental-implants",
  address: {
    "@type": "PostalAddress",
    streetAddress: "16535 Holly Crest Lane, Suite 200",
    addressLocality: "Huntersville",
    addressRegion: "NC",
    postalCode: "28078",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.4107,
    longitude: -80.8429,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday"], opens: "08:00", closes: "16:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "10:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "07:00", closes: "15:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "14:00" },
  ],
  priceRange: "$$$",
};

const DentalImplants = () => {
  useEffect(() => {
    document.title = "Dental Implants Huntersville | 15% Off — North Cross Dental Care";

    let metaDesc = document.querySelector('meta[name="description"]');
    const descContent = `Permanent dental implants in Huntersville, NC. Now 15% off non-financed treatments. Experienced providers, 3D planning. Call ${PHONE}.`;
    if (metaDesc) {
      metaDesc.setAttribute("content", descContent);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      metaDesc.setAttribute("content", descContent);
      document.head.appendChild(metaDesc);
    }

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://urgent-smile-guard.lovable.app/dental-implants";

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(SCHEMA_JSON_LD);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <>
      <ImplantsBanner />
      <ImplantsHeroSection />
      <ImplantsProblemSection />
      <ImplantsBenefitsSection />
      <ImplantsDoctorSection />
      <ImplantsServicesSection />
      <ImplantsOfficeSection />
      <ImplantsSocialProofSection />
      <ImplantsHowItWorksSection />
      <ImplantsPricingSection />
      <ImplantsFinalCtaSection />
      <ImplantsFaqSection />
      <FooterSection />
      <ImplantsStickyMobileFooter />
      <div className="h-20 md:hidden" />
    </>
  );
};

export default DentalImplants;
