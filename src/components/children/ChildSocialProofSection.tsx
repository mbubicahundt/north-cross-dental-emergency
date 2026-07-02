import { Star, ExternalLink } from "lucide-react";
import { GOOGLE_REVIEWS_URL } from "@/lib/constants";
import doctorConsultation from "@/assets/child-social-proof.webp";

const reviews = [
  { text: "My daughter fell off the monkey bars and chipped her front tooth. I was panicking, but Northcross Dental got us in within an hour. The whole team was so gentle with her — she was laughing by the end of the visit. They even let her pick a prize from the toy machine. Best experience we've ever had at a dentist with our kids.", author: "Jessica Thompson" },
  { text: "My 5-year-old has always been terrified of the dentist. I was dreading bringing him in for his toothache, but the staff here completely changed his mind. They talked to him at his level, showed him everything before they did it, and made him feel like a superhero. He actually asked when he can go back. I can't recommend this office enough for parents with anxious kids.", author: "David Martinez" },
  { text: "We rushed our son in after he knocked out a tooth during soccer practice. Dr. Persinger and the team were calm, reassuring, and so fast. They explained every step to both me and my son, and he was brave the whole time because they made him feel so safe. The office is beautiful, clean, and clearly designed with kids in mind.", author: "Amanda Patterson" },
  { text: "I brought my two kids in for emergency visits after a trampoline accident — one had a cracked tooth, the other a busted lip. The front desk got us right in, and the hygienists were absolute angels with both of them. They even separated my kids so each one got individual attention. This is our family dentist for life.", author: "Rachel Kim" },
];

const stats = [
  { value: "1000s", label: "Patients Treated" },
  { value: "15+", label: "Years Serving Huntersville" },
  { value: "100+", label: "Five-Star Google Reviews" },
];

const ChildSocialProofSection = () => (
  <section className="bg-background px-4 py-12">
    <div className="mx-auto max-w-xl">
      <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        Parents Trust Us With Their Children's Smiles
      </h2>

      <div className="mb-8 overflow-hidden rounded-2xl">
        <img src={doctorConsultation} alt="Dr. Persinger consulting warmly with a patient at North Cross Dental Care"
          className="w-full rounded-2xl object-cover aspect-[3/2]" loading="lazy" width={800} height={533} />
      </div>

      <div className="mb-8 space-y-4">
        {reviews.map((r) => (
          <div key={r.author} className="card-elevated p-5">
            <div className="mb-2 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-star-gold text-star-gold" />
              ))}
            </div>
            <p className="mb-2 text-foreground">"{r.text}"</p>
            <p className="text-sm font-semibold text-muted-foreground">— {r.author}</p>
          </div>
        ))}
      </div>

      <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer"
        className="mb-8 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue underline underline-offset-2">
        <ExternalLink className="h-4 w-4" />
        See All Google Reviews →
      </a>

      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-2xl font-extrabold text-brand-blue">{s.value}</p>
            <p className="text-xs font-medium text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ChildSocialProofSection;
