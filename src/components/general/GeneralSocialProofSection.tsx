import { Star, Phone } from "lucide-react";
import { PHONE, TEL, GOOGLE_REVIEWS_URL } from "@/lib/constants";

const reviews = [
  { name: "Lisa M.", text: "Best dental office in Huntersville! The team is incredibly gentle and thorough. I actually look forward to my cleanings now.", stars: 5 },
  { name: "Robert J.", text: "Had a crown done here and the whole process was smooth and painless. They explain everything upfront — no surprises.", stars: 5 },
  { name: "Amanda C.", text: "From routine cleanings to my daughter's first filling, they handle everything with care. Truly a one-stop dental home for our family.", stars: 5 },
];

const GeneralSocialProofSection = () => (
  <section className="bg-muted px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
        Huntersville Families Trust Us
      </h2>
      <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer"
        className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue underline underline-offset-2">
        See all Google reviews →
      </a>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        {reviews.map((r) => (
          <div key={r.name} className="card-elevated space-y-2">
            <div className="flex gap-0.5">
              {Array.from({ length: r.stars }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-star-gold text-star-gold" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">"{r.text}"</p>
            <p className="text-sm font-bold text-foreground">— {r.name}</p>
          </div>
        ))}
      </div>

      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="btn-blue flex w-full items-center justify-center gap-2 text-center">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>
    </div>
  </section>
);

export default GeneralSocialProofSection;
