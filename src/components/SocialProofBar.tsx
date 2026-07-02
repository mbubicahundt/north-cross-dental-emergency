import { Star } from "lucide-react";
import { GOOGLE_REVIEWS_URL } from "@/lib/constants";

const SocialProofBar = () => (
  <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer"
    className="block bg-muted py-3 px-4 text-center">
    <div className="mx-auto flex items-center justify-center gap-2 text-sm font-semibold text-foreground">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-star-gold text-star-gold" />
        ))}
      </div>
      <span>5.0 Google Rating</span>
      <span className="text-muted-foreground">·</span>
      <span className="text-muted-foreground font-medium">Rated 5 Stars by Huntersville Patients</span>
    </div>
  </a>
);

export default SocialProofBar;
