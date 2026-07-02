import { Phone } from "lucide-react";
import { PHONE, TEL } from "@/lib/constants";

const UninsuredAdultStickyMobileFooter = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 block h-20 bg-background/80 backdrop-blur-md md:hidden"
    style={{ boxShadow: "0 -4px 6px -1px rgba(0,0,0,0.05)" }}>
    <div className="flex h-full items-center px-4">
      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="btn-blue flex w-full items-center justify-center gap-2 py-4 text-center">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>
    </div>
  </div>
);

export default UninsuredAdultStickyMobileFooter;
