import { useEffect } from "react";
import UninsuredAdultBanner from "@/components/uninsured-adults/UninsuredAdultBanner";
import UninsuredAdultHeroSection from "@/components/uninsured-adults/UninsuredAdultHeroSection";
import UninsuredAdultProblemSection from "@/components/uninsured-adults/UninsuredAdultProblemSection";
import UninsuredAdultServicesSection from "@/components/uninsured-adults/UninsuredAdultServicesSection";
import UninsuredAdultSocialProofSection from "@/components/uninsured-adults/UninsuredAdultSocialProofSection";
import UninsuredAdultHowItWorksSection from "@/components/uninsured-adults/UninsuredAdultHowItWorksSection";
import UninsuredAdultPaymentSection from "@/components/uninsured-adults/UninsuredAdultPaymentSection";
import UninsuredAdultFinalCtaSection from "@/components/uninsured-adults/UninsuredAdultFinalCtaSection";
import UninsuredAdultFaqSection from "@/components/uninsured-adults/UninsuredAdultFaqSection";
import UninsuredAdultFooterSection from "@/components/uninsured-adults/UninsuredAdultFooterSection";
import UninsuredAdultStickyMobileFooter from "@/components/uninsured-adults/UninsuredAdultStickyMobileFooter";
import UninsuredAdultFloatingCallIcon from "@/components/uninsured-adults/UninsuredAdultFloatingCallIcon";

const SCHEMA_JSON_LD = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Dentist"],
  name: "North Cross Dental Care",
  description: "Affordable dentist in Huntersville NC for uninsured adults. Transparent pricing, flexible payment plans, and many treatment options.",
  telephone: "+17044206900",
  url: "https://urgent-smile-guard.lovable.app/adults-uninsured",
  address: { "@type": "PostalAddress", streetAddress: "16535 Holly Crest Lane, Suite 200", addressLocality: "Huntersville", addressRegion: "NC", postalCode: "28078" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday"], opens: "08:00", closes: "16:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "10:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "07:00", closes: "15:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "14:00" },
  ],
};

const UninsuredAdults = () => {
  useEffect(() => {
    document.title = "Affordable Dentist Huntersville — No Insurance Needed | Many Options Available";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "No dental insurance? North Cross Dental Care offers affordable dental care for adults with transparent pricing and flexible payment plans in Huntersville NC.");
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(SCHEMA_JSON_LD);
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <>
      <UninsuredAdultBanner />
      <UninsuredAdultHeroSection />
      <UninsuredAdultProblemSection />
      <UninsuredAdultServicesSection />
      <UninsuredAdultSocialProofSection />
      <UninsuredAdultHowItWorksSection />
      <UninsuredAdultPaymentSection />
      <UninsuredAdultFinalCtaSection />
      <UninsuredAdultFaqSection />
      <UninsuredAdultFooterSection />
      <UninsuredAdultStickyMobileFooter />
      <UninsuredAdultFloatingCallIcon />
      <div className="h-20 md:hidden" />
    </>
  );
};

export default UninsuredAdults;
