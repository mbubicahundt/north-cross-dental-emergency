import { useEffect } from "react";
import GeneralBanner from "@/components/general/GeneralBanner";
import GeneralHeroSection from "@/components/general/GeneralHeroSection";
import GeneralTreatmentSection from "@/components/general/GeneralTreatmentSection";
import GeneralSocialProofSection from "@/components/general/GeneralSocialProofSection";
import GeneralFinalCtaSection from "@/components/general/GeneralFinalCtaSection";
import GeneralFaqSection from "@/components/general/GeneralFaqSection";
import GeneralFooterSection from "@/components/general/GeneralFooterSection";
import GeneralStickyMobileFooter from "@/components/general/GeneralStickyMobileFooter";
import GeneralFloatingCallIcon from "@/components/general/GeneralFloatingCallIcon";
import GeneralDoctorSection from "@/components/general/GeneralDoctorSection";

import cleaningImg from "@/assets/general-cleaning.webp";
import fillingsImg from "@/assets/general-fillings.webp";
import crownsImg from "@/assets/general-crowns.webp";
import rootcanalImg from "@/assets/general-rootcanal.webp";
import extractionsImg from "@/assets/general-extractions.webp";
import gumImg from "@/assets/general-gum.webp";
import emergencyImg from "@/assets/general-emergency.webp";

const treatments = [
  {
    title: "Cleanings & Exams",
    description: "Regular cleanings and comprehensive exams are the foundation of a healthy smile. Our gentle hygienists remove plaque and tartar while our dentists check for any concerns early — before they become costly problems.",
    bullets: ["Professional teeth cleaning", "Comprehensive oral exam", "Digital X-rays", "Oral cancer screening", "Personalized hygiene plan"],
    image: cleaningImg,
    imageAlt: "Happy patient after dental cleaning appointment",
  },
  {
    title: "Fillings & Restorations",
    description: "Cavities happen — but they don't have to ruin your smile. We use tooth-colored composite fillings that blend seamlessly with your natural teeth for a durable, invisible repair.",
    bullets: ["Tooth-colored composite fillings", "Mercury-free materials", "Same-day treatment available", "Painless numbing techniques", "Long-lasting results"],
    image: fillingsImg,
    imageAlt: "Dentist performing a dental filling restoration",
  },
  {
    title: "Crowns & Bridges",
    description: "Damaged or missing teeth? Crowns restore strength and appearance to weakened teeth, while bridges fill gaps left by missing teeth — giving you a complete, confident smile.",
    bullets: ["Custom-crafted dental crowns", "Fixed bridges for missing teeth", "Natural-looking porcelain materials", "Durable, long-lasting results", "Comfortable, precise fit"],
    image: crownsImg,
    imageAlt: "Dental crown being placed on a tooth",
  },
  {
    title: "Root Canal Therapy",
    description: "A root canal doesn't have to be scary. With modern techniques and gentle numbing, we can save your infected tooth and relieve your pain — often in just one comfortable visit.",
    bullets: ["Pain-free modern techniques", "Save your natural tooth", "Relieve infection & pain fast", "Same-day relief available", "Followed by protective crown"],
    image: rootcanalImg,
    imageAlt: "Dentist explaining root canal procedure to patient",
  },
  {
    title: "Tooth Extractions",
    description: "When a tooth can't be saved, our experienced team performs gentle extractions with your comfort as the top priority. We'll also discuss replacement options to keep your smile complete.",
    bullets: ["Gentle, careful technique", "Effective pain management", "Wisdom tooth removal", "Post-extraction care guidance", "Replacement options discussed"],
    image: extractionsImg,
    imageAlt: "Dentist performing a gentle tooth extraction",
  },
  {
    title: "Gum Disease Treatment",
    description: "Bleeding gums, bad breath, or loose teeth? These could be signs of gum disease. We offer deep cleanings and targeted treatments to stop gum disease and protect your teeth.",
    bullets: ["Deep cleaning (scaling & root planing)", "Periodontal disease management", "Antibiotic therapy", "Ongoing maintenance plans", "Prevent tooth loss"],
    image: gumImg,
    imageAlt: "Periodontal gum disease treatment",
  },
  {
    title: "Emergency Dental Care",
    description: "Tooth pain, a knocked-out tooth, or a broken filling? Don't wait — call us immediately. We offer same-day emergency appointments to get you out of pain fast.",
    bullets: ["Same-day emergency visits", "Broken or chipped tooth repair", "Severe toothache relief", "Lost filling or crown fix", "After-hours guidance available"],
    image: emergencyImg,
    imageAlt: "Patient seeking emergency dental care",
  },
];

const SCHEMA_JSON_LD = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Dentist"],
  name: "North Cross Dental Care",
  description: "Comprehensive general dentistry in Huntersville NC. Cleanings, fillings, crowns, root canals, extractions, dentures, gum treatment & emergencies.",
  telephone: "+17044206900",
  url: "https://urgent-smile-guard.lovable.app/general-dentistry",
  address: { "@type": "PostalAddress", streetAddress: "16535 Holly Crest Lane, Suite 200", addressLocality: "Huntersville", addressRegion: "NC", postalCode: "28078" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday"], opens: "08:00", closes: "16:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "10:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "07:00", closes: "15:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "14:00" },
  ],
};

const GeneralDentistry = () => {
  useEffect(() => {
    document.title = "General Dentist Huntersville NC — Cleanings, Fillings, Crowns & More";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "North Cross Dental Care offers comprehensive general dentistry in Huntersville NC — cleanings, fillings, crowns, root canals, extractions, dentures & emergency care. Call today!");
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(SCHEMA_JSON_LD);
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <>
      <GeneralBanner />
      <GeneralHeroSection />
      {treatments.map((t, i) => (
        <GeneralTreatmentSection key={t.title} treatment={t} index={i} />
      ))}
      <GeneralDoctorSection />
      <GeneralSocialProofSection />
      <GeneralFinalCtaSection />
      <GeneralFaqSection />
      <GeneralFooterSection />
      <GeneralStickyMobileFooter />
      <GeneralFloatingCallIcon />
      <div className="h-20 md:hidden" />
    </>
  );
};

export default GeneralDentistry;
