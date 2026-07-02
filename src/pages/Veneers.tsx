import { useEffect } from "react";
import VeneersBanner from "@/components/veneers/VeneersBanner";
import VeneersHeroSection from "@/components/veneers/VeneersHeroSection";
import VeneersProblemSection from "@/components/veneers/VeneersProblemSection";
import VeneersBenefitsSection from "@/components/veneers/VeneersBenefitsSection";
import VeneersDoctorSection from "@/components/veneers/VeneersDoctorSection";
import VeneersServicesSection from "@/components/veneers/VeneersServicesSection";
import VeneersOfficeSection from "@/components/veneers/VeneersOfficeSection";
import VeneersSocialProofSection from "@/components/veneers/VeneersSocialProofSection";
import VeneersHowItWorksSection from "@/components/veneers/VeneersHowItWorksSection";
import VeneersPricingSection from "@/components/veneers/VeneersPricingSection";
import VeneersFinalCtaSection from "@/components/veneers/VeneersFinalCtaSection";
import VeneersFaqSection from "@/components/veneers/VeneersFaqSection";
import FooterSection from "@/components/FooterSection";
import VeneersStickyMobileFooter from "@/components/veneers/VeneersStickyMobileFooter";
import { PHONE } from "@/lib/constants";

const SCHEMA_JSON_LD = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Dentist"],
  name: "North Cross Dental Care",
  image: "https://urgent-smile-guard.lovable.app/og-image.png",
  telephone: "+17044206900",
  url: "https://urgent-smile-guard.lovable.app/veneers",
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
  priceRange: "$$",
};

const Veneers = () => {
  useEffect(() => {
    document.title = "Porcelain Veneers Huntersville NC — North Cross Dental Care";

    let metaDesc = document.querySelector('meta[name="description"]');
    const descContent = `Get a perfect smile with custom porcelain veneers in Huntersville NC. Fix chips, stains & gaps in just 2 visits. Call ${PHONE} to schedule your consultation.`;
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
    canonical.href = "https://urgent-smile-guard.lovable.app/veneers";

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
      <VeneersBanner />
      <VeneersHeroSection />
      <VeneersProblemSection />
      <VeneersBenefitsSection />
      <VeneersDoctorSection />
      <VeneersServicesSection />
      <VeneersOfficeSection />
      <VeneersSocialProofSection />
      <VeneersHowItWorksSection />
      <VeneersPricingSection />
      <VeneersFinalCtaSection />
      <VeneersFaqSection />
      <FooterSection />
      <VeneersStickyMobileFooter />
      <div className="h-20 md:hidden" />
    </>
  );
};

export default Veneers;
