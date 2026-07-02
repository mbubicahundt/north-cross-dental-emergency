import { Star, ExternalLink } from "lucide-react";
import { GOOGLE_REVIEWS_URL } from "@/lib/constants";
import doctorConsultation from "@/assets/doctor-consultation.webp";

const reviews = [
  { text: "This was my first time visiting this dental office, and I had a great experience. The woman at the front desk was very friendly, and we had a wonderful conversation that made me feel comfortable right away. The dentist and staff were very professional.", author: "Bobby Miller" },
  { text: "I hadn't been to the dentist in far longer than I'd like to admit — my last experience, at a different local office, left me feeling judged and anxious. But Northcross Dental completely changed that for me. From the moment I walked in, the team was welcoming.", author: "Lauren Williams" },
  { text: "The office is beautiful and clean. They have coffee and water available for patients. All of the staff is extremely friendly and knowledgeable. I normally hate seeing dentists, but they made it so comfortable.", author: "Kimber Gandy" },
  { text: "I had the best experience from the moment I walked in until I walked out. Everyone was so kind and helpful! Jessica is Amazing!!! She takes her time and explains everything so you can understand!", author: "Karla Harvey" },
  { text: "The whole staff from the front to the end was awesome! The dental hygienist and dentists were both spectacular and very informative! Highly recommend!", author: "John Keller" },
  { text: "Denise at the front desk was super helpful and friendly — she made checking in and scheduling so easy. The hygienist who did my cleaning was amazing.", author: "Nasire Bey" },
  { text: "Entire staff is welcoming, courteous and professional. I was very impressed with Doctor's patience and explanations AND not lecturing. I have definitely picked a great place for my new provider.", author: "Michael Merriam" },
  { text: "I was very pleased with the service I received. My visit was for a second opinion consultation and the details provided for my particular needs. I am comfortable with my decisions based on Northcross Dental's recommendations.", author: "Annie Richard" },
  { text: "Everyone was extremely nice and caring. Most dentists are sterile in their office and their attitude, but these guys really made me feel at home. Search is over! Perfect dentist found!", author: "Danny Pressler" },
];

const featured = reviews.slice(0, 4);

const stats = [
  { value: "1000s", label: "Patients Treated" },
  { value: "15+", label: "Years Serving Huntersville" },
  { value: "100+", label: "Five-Star Google Reviews" },
];

const SocialProofSection = () => (
  <section className="bg-background px-4 py-12">
    <div className="mx-auto max-w-xl">
      <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        Trusted By Patients Across Huntersville
      </h2>

      <div className="mb-8 overflow-hidden rounded-2xl">
        <img src={doctorConsultation} alt="Dr. Persinger consulting warmly with a patient at North Cross Dental Care"
          className="w-full rounded-2xl object-cover aspect-[3/2]" loading="lazy" width={800} height={533} />
      </div>

      <div className="mb-8 space-y-4">
        {featured.map((r) => (
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

export default SocialProofSection;
