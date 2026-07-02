import { useState, useRef, useCallback } from "react";
import { Phone, Sparkles, Eye, Smile, Heart, ThumbsUp, Star } from "lucide-react";
import { PHONE, TEL, CTA_REASSURANCE } from "@/lib/constants";
import beforeImage from "@/assets/whitening-before.webp";
import afterImage from "@/assets/whitening-after.webp";

const benefits = [
  { icon: Sparkles, label: "Dramatically whiter teeth" },
  { icon: Eye, label: "More youthful appearance" },
  { icon: Smile, label: "Confidence to smile freely" },
  { icon: Heart, label: "Great for special occasions" },
  { icon: ThumbsUp, label: "No sensitivity with Zoom" },
  { icon: Star, label: "Professional-grade results" },
];

const BeforeAfterSlider = () => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mb-4 w-full cursor-ew-resize select-none overflow-hidden rounded-2xl touch-none"
      style={{ aspectRatio: "1 / 1" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      role="slider"
      aria-label="Before and after comparison slider"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <img src={afterImage} alt="After whitening" className="absolute inset-0 h-full w-full object-cover" loading="lazy" width={1024} height={1024} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <img src={beforeImage} alt="Before whitening" className="h-full w-full object-cover" loading="lazy" width={1024} height={1024} />
      </div>
      <div className="absolute top-0 bottom-0 z-10 w-1 -translate-x-1/2 bg-background" style={{ left: `${position}%` }}>
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background shadow-lg">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-muted-foreground">
            <path d="M6 4L2 10L6 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 4L18 10L14 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <span className="absolute left-3 bottom-3 z-10 rounded-md bg-foreground/70 px-2 py-1 text-xs font-bold uppercase text-background">Before</span>
      <span className="absolute right-3 bottom-3 z-10 rounded-md bg-promo/90 px-2 py-1 text-xs font-bold uppercase text-promo-foreground">After</span>
    </div>
  );
};

const WhiteningBeforeAfterSection = () => (
  <section className="bg-background px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        See The Difference Zoom Whitening Makes
      </h2>

      <BeforeAfterSlider />
      <p className="mb-6 text-center text-xs text-muted-foreground">Drag the slider to compare · Results after 1 Zoom session — Philips Zoom</p>

      <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {benefits.map(({ icon: Icon, label }) => (
          <div key={label} className="card-elevated flex flex-col items-center gap-2 p-4 text-center">
            <Icon className="h-8 w-8 text-promo" />
            <span className="text-sm font-medium text-foreground">{label}</span>
          </div>
        ))}
      </div>

      <p className="mb-6 text-center text-muted-foreground">
        Zoom whitening is the #1 patient-requested professional whitening treatment worldwide. — <em>Philips Zoom</em>
      </p>

      <a href={TEL} aria-label="Call North Cross Dental Care now"
        className="btn-promo flex w-full items-center justify-center gap-2 text-center">
        <Phone className="h-5 w-5" />
        Call Now — {PHONE}
      </a>
      <p className="mt-2 text-center text-xs text-muted-foreground">{CTA_REASSURANCE}</p>
    </div>
  </section>
);

export default WhiteningBeforeAfterSection;
