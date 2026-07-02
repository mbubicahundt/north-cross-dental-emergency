import { useEffect } from "react";
import InvisalignBanner from "@/components/invisalign/InvisalignBanner";
import InvisalignHeroSection from "@/components/invisalign/InvisalignHeroSection";
import InvisalignProblemSection from "@/components/invisalign/InvisalignProblemSection";
import InvisalignBenefitsSection from "@/components/invisalign/InvisalignBenefitsSection";
import InvisalignDoctorSection from "@/components/invisalign/InvisalignDoctorSection";
import InvisalignServicesSection from "@/components/invisalign/InvisalignServicesSection";
import InvisalignOfficeSection from "@/components/invisalign/InvisalignOfficeSection";
import InvisalignSocialProofSection from "@/components/invisalign/InvisalignSocialProofSection";
import InvisalignHowItWorksSection from "@/components/invisalign/InvisalignHowItWorksSection";
import InvisalignPricingSection from "@/components/invisalign/InvisalignPricingSection";
import InvisalignFinalCtaSection from "@/components/invisalign/InvisalignFinalCtaSection";
import InvisalignFaqSection from "@/components/invisalign/InvisalignFaqSection";
import FooterSection from "@/components/FooterSection";
import InvisalignStickyMobileFooter from "@/components/invisalign/InvisalignStickyMobileFooter";
import { PHONE } from "@/lib/constants";

const SCHEMA_JSON_LD = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Dentist"],
  name: "North Cross Dental Care",
  image: "https://urgent-smile-guard.lovable.app/og-image.png",
  telephone: "+17044206900",
  url: "https://urgent-smile-guard.lovable.app/invisalign",
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

const Invisalign = () => {
  useEffect(() => {
    document.title = "Invisalign Huntersville | 15% Off Clear Aligners — North Cross Dental Care";

    let metaDesc = document.querySelector('meta[name="description"]');
    const descContent = `Get straighter teeth with Invisalign clear aligners in Huntersville. Now 15% off for adults & teens. Call ${PHONE} for a free consultation.`;
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
    canonical.href = "https://urgent-smile-guard.lovable.app/invisalign";

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
      <InvisalignBanner />
      <InvisalignHeroSection />
      <InvisalignProblemSection />
      <InvisalignBenefitsSection />
      <InvisalignDoctorSection />
      <InvisalignServicesSection />
      <InvisalignOfficeSection />
      <InvisalignSocialProofSection />
      <InvisalignHowItWorksSection />
      <InvisalignPricingSection />
      <InvisalignFinalCtaSection />
      <InvisalignFaqSection />
      <FooterSection />
      <InvisalignStickyMobileFooter />
      <div className="h-20 md:hidden" />
    </>
  );
};

export default Invisalign;
