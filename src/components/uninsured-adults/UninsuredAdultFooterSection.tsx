import { PHONE, TEL } from "@/lib/constants";
import logo from "@/assets/NCDC_Trans.webp";

const UninsuredAdultFooterSection = () => (
  <footer className="bg-foreground px-4 py-8 text-center">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <img src={logo} alt="North Cross Dental Care logo" className="mx-auto mb-3 w-36 brightness-0 invert" width={150} height={60} />
      <a href={TEL} className="mb-2 block text-lg font-extrabold text-background underline decoration-background/30 underline-offset-4 hover:decoration-background"
        style={{ fontVariantNumeric: "tabular-nums" }}>
        {PHONE}
      </a>
      <p className="mb-4 text-sm text-background/60">Affordable Dental Care · Huntersville, NC</p>
      <p className="text-xs text-background/40">Privacy Policy · © {new Date().getFullYear()} North Cross Dental Care</p>
    </div>
  </footer>
);

export default UninsuredAdultFooterSection;
