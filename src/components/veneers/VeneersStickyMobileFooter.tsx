import { Phone } from "lucide-react";
import { PHONE, TEL } from "@/lib/constants";

const VeneersStickyMobileFooter = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 block bg-foreground md:hidden"
    style={{ boxShadow: "0 -4px 12px -1px rgba(0,0,0,0.15)" }}>
    <div className="px-4 py-2">
      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="flex w-full flex-col items-center justify-center gap-0.5 rounded-lg bg-promo py-2.5 text-center text-promo-foreground transition-all active:scale-[0.97]">
        <span className="text-xs font-semibold">Call About Porcelain Veneers</span>
        <span className="flex items-center gap-1.5 text-base font-bold">
          <Phone className="h-4 w-4" />
          {PHONE}
        </span>
      </a>
    </div>
  </div>
);

export default VeneersStickyMobileFooter;
