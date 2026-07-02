import frontDesk from "@/assets/front-desk-receptionist.webp";

const OfficeSection = () => (
  <section className="bg-muted px-4 py-12">
    <div className="mx-auto max-w-xl">
      <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
        A Welcoming, Modern Office
      </h2>
      <p className="mb-6 text-muted-foreground">
        From the moment you walk in, our team is here to make you feel comfortable — not anxious.
      </p>

      <img src={frontDesk} alt="Friendly receptionist greeting patients at the North Cross Dental Care front desk"
        className="w-full rounded-2xl object-cover aspect-[3/2]" loading="lazy" width={800} height={533} />
    </div>
  </section>
);

export default OfficeSection;
