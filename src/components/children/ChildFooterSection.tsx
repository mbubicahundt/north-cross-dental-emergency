import { MapPin, Clock, ExternalLink } from "lucide-react";
import { PHONE, TEL, ADDRESS, OFFICE_HOURS, GOOGLE_REVIEWS_URL } from "@/lib/constants";
import logo from "@/assets/NCDC_Trans.webp";

const ChildFooterSection = () => (
  <footer className="bg-foreground px-4 py-10 text-center">
    <div className="mx-auto max-w-xl">
      <img src={logo} alt="North Cross Dental Care logo" className="mx-auto mb-4 w-36 brightness-0 invert" width={150} height={60} />

      <a href={TEL} className="mb-4 block text-lg font-extrabold text-background underline decoration-background/30 underline-offset-4 hover:decoration-background"
        style={{ fontVariantNumeric: "tabular-nums" }}>
        {PHONE}
      </a>

      <div className="mb-4 flex items-center justify-center gap-2 text-sm text-background/70">
        <MapPin className="h-4 w-4 shrink-0" />
        <span>{ADDRESS}</span>
      </div>

      <div className="mb-5">
        <div className="mb-2 flex items-center justify-center gap-2 text-sm font-semibold text-background/80">
          <Clock className="h-4 w-4" />
          Office Hours
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs text-background/60">
          {OFFICE_HOURS.map((h) => (
            <div key={h.day} className="flex justify-between gap-2">
              <span className="font-medium">{h.day}</span>
              <span>{h.hours}</span>
            </div>
          ))}
        </div>
      </div>

      <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer"
        className="mb-5 inline-flex items-center gap-1.5 text-sm font-medium text-background/70 underline decoration-background/30 underline-offset-4 hover:text-background hover:decoration-background transition-colors">
        <ExternalLink className="h-3.5 w-3.5" />
        Read All 83 Five-Star Reviews on Google
      </a>

      <p className="mt-4 text-sm text-background/60">Children's Emergency Dental Care · Huntersville, NC</p>
      <p className="mt-2 text-xs text-background/40">Privacy Policy · © {new Date().getFullYear()} North Cross Dental Care</p>
    </div>
  </footer>
);

export default ChildFooterSection;
