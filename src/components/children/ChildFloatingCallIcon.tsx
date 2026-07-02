import { Phone } from "lucide-react";
import { TEL } from "@/lib/constants";

const ChildFloatingCallIcon = () => (
  <a href={TEL} aria-label="Call North Cross Dental Care now"
    className="fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-promo text-promo-foreground shadow-lg transition-transform duration-150 hover:scale-110 active:scale-95 md:bottom-6">
    <Phone className="h-6 w-6" />
  </a>
);

export default ChildFloatingCallIcon;
