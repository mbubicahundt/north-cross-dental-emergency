import { Star, ExternalLink } from "lucide-react";
import { GOOGLE_REVIEWS_URL } from "@/lib/constants";

const reviews = [
  { text: "I got a dental implant to replace a tooth I lost years ago. It looks completely natural — even my dentist back home couldn't tell.", author: "Robert H.", city: "Huntersville, NC" },
  { text: "I was terrified of the procedure but Dr. Persinger made it painless. Now I can eat anything I want again.", author: "Karen T.", city: "Cornelius, NC" },
  { text: "After years with a bridge that kept failing, I finally got an implant. Best decision I've ever made for my health.", author: "Steve M.", city: "Davidson, NC" },
  { text: "The whole team was incredible. They walked me through every step and I felt completely comfortable the entire time.", author: "Patricia L.", city: "Huntersville, NC" },
  { text: "My implant has been rock solid for 3 years now. It's like having my real tooth back. Wish I'd done it sooner.", author: "Tom R.", city: "Huntersville, NC" },
];

const stats = [
  { value: "5,000+", label: "Patients Treated" },
  { value: "15+", label: "Years Serving Huntersville" },
  { value: "83", label: "Five-Star Google Reviews" },
  { value: "5.0★", label: "Google Rating" },
];

const ImplantsSocialProofSection = () => (
  <section className="bg-background px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
        Real Patients, Restored Smiles
      </h2>
      <p className="mb-6 text-sm text-muted-foreground">5.0★ rating from 83 verified Google reviews</p>

      <div className="mb-6 space-y-4">
        {reviews.map((r) => (
          <div key={r.author} className="card-elevated p-5">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-star-gold text-star-gold" />
                ))}
              </div>
              <svg className="h-4 w-4 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
            <p className="mb-2 text-foreground">"{r.text}"</p>
            <p className="text-sm font-semibold text-muted-foreground">— {r.author}, {r.city}</p>
          </div>
        ))}
      </div>

      <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer"
        className="mb-8 flex items-center justify-center gap-2 text-sm font-semibold text-promo underline decoration-promo/30 underline-offset-4 hover:decoration-promo transition-colors">
        <ExternalLink className="h-4 w-4" />
        Read All 83 Reviews on Google
      </a>

      <div className="grid grid-cols-4 gap-3 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-xl font-extrabold text-promo sm:text-2xl">{s.value}</p>
            <p className="text-xs font-medium text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImplantsSocialProofSection;
