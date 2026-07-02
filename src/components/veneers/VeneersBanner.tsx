const VeneersBanner = () => {
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
        ✨ Transform Your Smile — <span className="text-star-gold">Porcelain Veneers</span> In Huntersville
      </p>
    </div>
  );
};

export default VeneersBanner;
