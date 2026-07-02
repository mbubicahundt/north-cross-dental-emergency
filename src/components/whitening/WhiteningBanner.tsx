import CountdownTimer from "./CountdownTimer";

const WhiteningBanner = () => {
  const scrollToCta = () => {
    const cta = document.querySelector('a[aria-label="Call North Cross Dental Care now"]');
    cta?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div
      className="cursor-pointer bg-foreground py-2.5 text-center"
      onClick={scrollToCta}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && scrollToCta()}
    >
      <p className="text-xs font-bold tracking-wider text-background sm:text-sm">
        🔥 Limited Time — <span className="text-star-gold">50% Off</span> Zoom Teeth Whitening |{" "}
        <CountdownTimer showDate />
      </p>
    </div>
  );
};

export default WhiteningBanner;
