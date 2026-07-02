import { Phone } from "lucide-react";
import { PHONE, TEL } from "@/lib/constants";

const ChildStickyMobileFooter = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 block bg-background/80 backdrop-blur-md md:hidden"
    style={{ boxShadow: "0 -4px 6px -1px rgba(0,0,0,0.05)" }}>
    <div className="flex items-center px-4 py-2">
      <a href={TEL} aria-label="Call Northcross Dental now"
        className="btn-promo flex w-full flex-col items-center justify-center gap-0.5 py-2.5 text-center">
        <span className="text-xs font-semibold">Call Northcross Dental</span>
        <span className="flex items-center gap-1.5 text-base font-bold">
          <Phone className="h-4 w-4" />
          {PHONE}
        </span>
      </a>
    </div>
  </div>
);

export default ChildStickyMobileFooter;
