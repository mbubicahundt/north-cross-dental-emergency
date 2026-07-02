import { Phone } from "lucide-react";
import { TEL, PHONE } from "@/lib/constants";
import doctorsImage from "@/assets/doctors.webp";

const WhiteningDoctorSection = () => (
  <section className="bg-background px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        Meet Your Doctors
      </h2>

      <img
        src={doctorsImage}
        alt="Dr. Bryan Persinger, DDS and Dr. Connor Zehak, DMD at North Cross Dental Care"
        className="mb-6 w-full rounded-2xl object-cover"
        loading="lazy"
        width={768}
        height={999}
      />

      {/* Dr. Persinger */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-foreground">Dr. Bryan Persinger, DDS</h3>
        <p className="mb-2 text-xs font-medium text-promo">Kois Center Graduate · ADA · AACD · NC Dental Society</p>
        <p className="text-sm text-muted-foreground">
          Dr. Persinger has practiced dentistry since 1998, bringing over 25 years of experience to every whitening treatment. A graduate of Ohio State University's dental school and the prestigious Kois Center in Seattle, he stays at the forefront of cosmetic dentistry through ongoing advanced education. His patients know him for his attention to detail and commitment to creating an exceptional experience.
        </p>
      </div>

      {/* Dr. Zehak */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-foreground">Dr. Connor Zehak, DMD</h3>
        <p className="mb-2 text-xs font-medium text-promo">Spear Education · Academy of General Dentistry</p>
        <p className="text-sm text-muted-foreground">
          Dr. Zehak is passionate about helping patients transform their confidence through exceptional dental care. A graduate of Midwestern University of Arizona, he continually expands his skills through advanced education in cosmetic and biomimetic dentistry. He takes the time to listen, explain options clearly, and tailor each treatment plan to your individual needs.
        </p>
      </div>

      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="btn-promo flex w-full items-center justify-center gap-2 text-center">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        Your whitening treatment is performed by experienced, credentialed dentists — not assistants.
      </p>
    </div>
  </section>
);

export default WhiteningDoctorSection;
