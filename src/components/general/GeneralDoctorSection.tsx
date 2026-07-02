import { Phone } from "lucide-react";
import { TEL, PHONE } from "@/lib/constants";
import doctorsImage from "@/assets/doctors.webp";

const GeneralDoctorSection = () => (
  <section className="bg-background px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        Meet Your Dentists
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
          With over 25 years of experience, Dr. Persinger provides comprehensive dental care rooted in precision and compassion. A graduate of Ohio State University's dental school and the prestigious Kois Center, he brings advanced training and a patient-first approach to every visit.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-bold text-foreground">Dr. Connor Zehak, DMD</h3>
        <p className="mb-2 text-xs font-medium text-promo">Spear Education · Academy of General Dentistry · Biomimetic Dentistry</p>
        <p className="text-sm text-muted-foreground">
          Dr. Zehak combines cutting-edge techniques with a compassionate chair-side manner. With advanced training in biomimetic and restorative dentistry, he creates treatment plans tailored to each patient's unique needs and goals.
        </p>
      </div>

      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="btn-blue flex w-full items-center justify-center gap-2 text-center">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        Your care is provided by experienced, highly trained dentists — right here in Huntersville.
      </p>
    </div>
  </section>
);

export default GeneralDoctorSection;
