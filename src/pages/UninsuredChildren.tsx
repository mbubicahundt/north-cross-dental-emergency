import { useEffect } from "react";
import UninsuredChildBanner from "@/components/uninsured-children/UninsuredChildBanner";
import UninsuredChildHeroSection from "@/components/uninsured-children/UninsuredChildHeroSection";
import UninsuredChildProblemSection from "@/components/uninsured-children/UninsuredChildProblemSection";
import UninsuredChildPricingSection from "@/components/uninsured-children/UninsuredChildPricingSection";
import UninsuredChildServicesSection from "@/components/uninsured-children/UninsuredChildServicesSection";
import UninsuredChildSocialProofSection from "@/components/uninsured-children/UninsuredChildSocialProofSection";
import UninsuredChildHowItWorksSection from "@/components/uninsured-children/UninsuredChildHowItWorksSection";
import UninsuredChildPaymentSection from "@/components/uninsured-children/UninsuredChildPaymentSection";
import UninsuredChildFinalCtaSection from "@/components/uninsured-children/UninsuredChildFinalCtaSection";
import UninsuredChildFaqSection from "@/components/uninsured-children/UninsuredChildFaqSection";
import UninsuredChildFooterSection from "@/components/uninsured-children/UninsuredChildFooterSection";
import UninsuredChildStickyMobileFooter from "@/components/uninsured-children/UninsuredChildStickyMobileFooter";
import UninsuredChildFloatingCallIcon from "@/components/uninsured-children/UninsuredChildFloatingCallIcon";

const SCHEMA_JSON_LD = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Dentist"],
  name: "North Cross Dental Care",
  description: "Affordable children's dentist in Huntersville NC — no insurance needed. Cleaning & exam starting at $160.",
  telephone: "+17044206900",
  url: "https://urgent-smile-guard.lovable.app/children-uninsured",
  address: { "@type": "PostalAddress", streetAddress: "16535 Holly Crest Lane, Suite 200", addressLocality: "Huntersville", addressRegion: "NC", postalCode: "28078" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday"], opens: "08:00", closes: "16:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "10:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "07:00", closes: "15:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "14:00" },
  ],
};

const UninsuredChildren = () => {
  useEffect(() => {
    document.title = "Affordable Children's Dentist Huntersville — No Insurance Needed | From $160";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "No dental insurance? North Cross Dental Care offers affordable children's dental cleaning & exam starting at $160. Kid-friendly team in Huntersville NC.");
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(SCHEMA_JSON_LD);
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <>
      <UninsuredChildBanner />
      <UninsuredChildHeroSection />
      <UninsuredChildProblemSection />
      <UninsuredChildPricingSection />
      <UninsuredChildServicesSection />
      <UninsuredChildSocialProofSection />
      <UninsuredChildHowItWorksSection />
      <UninsuredChildPaymentSection />
      <UninsuredChildFinalCtaSection />
      <UninsuredChildFaqSection />
      <UninsuredChildFooterSection />
      <UninsuredChildStickyMobileFooter />
      <UninsuredChildFloatingCallIcon />
      <div className="h-20 md:hidden" />
    </>
  );
};

export default UninsuredChildren;
