import { Phone } from "lucide-react";
import { TEL, PHONE } from "@/lib/constants";
import doctorsImage from "@/assets/doctors.webp";

const VeneersDoctorSection = () => (
  <section className="bg-background px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        Meet Your Cosmetic Dentists
      </h2>

      <img
        src={doctorsImage}
        alt="Dr. Bryan Persinger, DDS and Dr. Connor Zehak, DMD at North Cross Dental Care"
        className="mb-6 w-full rounded-2xl object-cover"
        loading="lazy"
        width={768}
        height={999}
      />

      <div className="mb-6">
        <h3 className="text-lg font-bold text-foreground">Dr. Bryan Persinger, DDS</h3>
        <p className="mb-2 text-xs font-medium text-promo">25+ Years Experience · Kois Center Graduate · ADA · NC Dental Society</p>
        <p className="text-sm text-muted-foreground">
          With over 25 years of experience in cosmetic and restorative dentistry, Dr. Persinger has transformed hundreds of smiles with porcelain veneers. A graduate of Ohio State University's dental school and the prestigious Kois Center, he combines artistry with precision for stunning, natural-looking results.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-bold text-foreground">Dr. Connor Zehak, DMD</h3>
        <p className="mb-2 text-xs font-medium text-promo">Spear Education · Academy of General Dentistry · Biomimetic Dentistry</p>
        <p className="text-sm text-muted-foreground">
          Dr. Zehak is passionate about using cutting-edge techniques to create beautiful smiles. With advanced training in biomimetic and cosmetic dentistry, he designs custom veneer treatments tailored to each patient's unique facial features and goals.
        </p>
      </div>

      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="btn-promo flex w-full items-center justify-center gap-2 text-center">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        Your veneers are designed and placed by experienced cosmetic dentists — right here in Huntersville.
      </p>
    </div>
  </section>
);

export default VeneersDoctorSection;
