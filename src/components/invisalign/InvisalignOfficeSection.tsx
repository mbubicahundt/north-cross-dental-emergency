import officeReception from "@/assets/office-reception.webp";
import officeFrontDesk from "@/assets/office-front-desk.webp";
import officeLobby from "@/assets/office-lobby.webp";
import officeWaitingRoom from "@/assets/office-waiting-room.webp";

const photos = [
  { src: officeReception, alt: "Friendly staff greeting a patient at the front desk" },
  { src: officeWaitingRoom, alt: "Modern, comfortable waiting room at North Cross Dental Care" },
  { src: officeFrontDesk, alt: "Clean, modern front desk area" },
  { src: officeLobby, alt: "Welcoming lobby with marble countertops" },
];

const InvisalignOfficeSection = () => (
  <section className="bg-muted px-4 py-12">
    <div className="mx-auto max-w-xl md:max-w-4xl">
      <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
        Our Modern Huntersville Office
      </h2>
      <p className="mb-6 text-muted-foreground">
        Experience Invisalign treatment in a comfortable, state-of-the-art environment.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {photos.map((photo) => (
          <img
            key={photo.alt}
            src={photo.src}
            alt={photo.alt}
            className="w-full rounded-xl object-cover aspect-square"
            loading="lazy"
            width={600}
            height={600}
          />
        ))}
      </div>
    </div>
  </section>
);

export default InvisalignOfficeSection;
