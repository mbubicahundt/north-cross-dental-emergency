import { Phone } from "lucide-react";
import { TEL, PHONE } from "@/lib/constants";
import doctorsImage from "@/assets/doctors.webp";

const ImplantsDoctorSection = () => (
  <section className="bg-background px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        Meet Your Implant Specialists
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
        <p className="mb-2 text-xs font-medium text-promo">Implant Trained · Kois Center Graduate · ADA · NC Dental Society</p>
        <p className="text-sm text-muted-foreground">
          With over 25 years of experience, Dr. Persinger has placed hundreds of dental implants with precision and care. A graduate of Ohio State University's dental school and the prestigious Kois Center, he brings advanced surgical training and a patient-first approach to every implant case.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-bold text-foreground">Dr. Connor Zehak, DMD</h3>
        <p className="mb-2 text-xs font-medium text-promo">Implant Trained · Spear Education · Academy of General Dentistry</p>
        <p className="text-sm text-muted-foreground">
          Dr. Zehak combines cutting-edge implant techniques with a compassionate chair-side manner. With advanced training in implant placement and biomimetic dentistry, he creates treatment plans tailored to each patient's unique anatomy and goals.
        </p>
      </div>

      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="btn-promo flex w-full items-center justify-center gap-2 text-center">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        Your implant treatment is planned and placed by experienced, trained providers — not referred out.
      </p>
    </div>
  </section>
);

export default ImplantsDoctorSection;
