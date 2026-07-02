import { Phone } from "lucide-react";
import { TEL } from "@/lib/constants";

const UninsuredChildFloatingCallIcon = () => (
  <a href={TEL} aria-label="Call North Cross Dental Care"
    className="fixed bottom-24 right-4 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-promo text-promo-foreground shadow-lg transition-transform hover:scale-110 md:flex">
    <Phone className="h-6 w-6" />
  </a>
);

export default UninsuredChildFloatingCallIcon;
