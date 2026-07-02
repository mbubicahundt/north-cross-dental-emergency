import { useEffect } from "react";
import WhiteningBanner from "@/components/whitening/WhiteningBanner";
import WhiteningHeroSection from "@/components/whitening/WhiteningHeroSection";
import WhiteningProblemSection from "@/components/whitening/WhiteningProblemSection";
import WhiteningBeforeAfterSection from "@/components/whitening/WhiteningBeforeAfterSection";
import WhiteningDoctorSection from "@/components/whitening/WhiteningDoctorSection";
import WhiteningServicesSection from "@/components/whitening/WhiteningServicesSection";
import WhiteningOfficeSection from "@/components/whitening/WhiteningOfficeSection";
import WhiteningSocialProofSection from "@/components/whitening/WhiteningSocialProofSection";
import WhiteningHowItWorksSection from "@/components/whitening/WhiteningHowItWorksSection";
import WhiteningPricingSection from "@/components/whitening/WhiteningPricingSection";
import WhiteningFinalCtaSection from "@/components/whitening/WhiteningFinalCtaSection";
import WhiteningFaqSection from "@/components/whitening/WhiteningFaqSection";
import FooterSection from "@/components/FooterSection";
import WhiteningStickyMobileFooter from "@/components/whitening/WhiteningStickyMobileFooter";
import { PHONE } from "@/lib/constants";

const SCHEMA_JSON_LD = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Dentist"],
  name: "North Cross Dental Care",
  image: "https://urgent-smile-guard.lovable.app/og-image.png",
  telephone: "+17044206900",
  url: "https://urgent-smile-guard.lovable.app/zoom-whitening",
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

const ZoomWhitening = () => {
  useEffect(() => {
    // Page title
    document.title = "Zoom Teeth Whitening Huntersville | 50% Off — North Cross Dental Care";

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    const descContent = `Get up to 8 shades whiter in one visit with professional Zoom whitening in Huntersville. Now 50% off for a limited time. Call ${PHONE}.`;
    if (metaDesc) {
      metaDesc.setAttribute("content", descContent);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      metaDesc.setAttribute("content", descContent);
      document.head.appendChild(metaDesc);
    }

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://urgent-smile-guard.lovable.app/zoom-whitening";

    // JSON-LD Schema
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
      <WhiteningBanner />
      <WhiteningHeroSection />
      <WhiteningProblemSection />
      <WhiteningBeforeAfterSection />
      <WhiteningDoctorSection />
      <WhiteningServicesSection />
      <WhiteningOfficeSection />
      <WhiteningSocialProofSection />
      <WhiteningHowItWorksSection />
      <WhiteningPricingSection />
      <WhiteningFinalCtaSection />
      <WhiteningFaqSection />
      <FooterSection />
      <WhiteningStickyMobileFooter />
      <div className="h-20 md:hidden" />
    </>
  );
};

export default ZoomWhitening;
