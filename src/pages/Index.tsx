import EmergencyBanner from "@/components/EmergencyBanner";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import ProblemSection from "@/components/ProblemSection";
import SymptomsSection from "@/components/SymptomsSection";
import ServicesSection from "@/components/ServicesSection";
import SocialProofSection from "@/components/SocialProofSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import InsuranceSection from "@/components/InsuranceSection";
import OfficeSection from "@/components/OfficeSection";
import HoursSection from "@/components/HoursSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";
import StickyMobileFooter from "@/components/StickyMobileFooter";
import FloatingCallIcon from "@/components/FloatingCallIcon";

const Index = () => (
  <>
    <EmergencyBanner />
    <HeroSection />
    <SocialProofBar />
    <ProblemSection />
    <SymptomsSection />
    <ServicesSection />
    <SocialProofSection />
    <HowItWorksSection />
    <InsuranceSection />
    <OfficeSection />
    <HoursSection />
    <FinalCtaSection />
    <FaqSection />
    <FooterSection />
    <StickyMobileFooter />
    
    {/* Bottom padding for sticky footer on mobile */}
    <div className="h-20 md:hidden" />
  </>
);

export default Index;
