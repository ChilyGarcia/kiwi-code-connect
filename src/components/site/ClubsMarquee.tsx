import yaguares1 from "@/assets/clubs/YAGUARES_ECUADOR.png";
import yaguares2 from "@/assets/clubs/YAGUARES_2_ECUADOR.png";
import carneros from "@/assets/clubs/CARNEROS_COLOMBIA.png";
import blackGoats from "@/assets/clubs/BLACK_GOATS.png";
import barbariansPa from "@/assets/clubs/BARBARIANS_PANAMA.png";
import barbariansCo from "@/assets/clubs/BARBARIANS_COLOMBIA.png";
import alcatraz from "@/assets/clubs/ALCATRAZ_VENEZUELA.png";
import cerberos from "@/assets/clubs/CERBEROS_ECUADOR.png";
import centinelas from "@/assets/clubs/CENTINELAS_COLOMBIA.png";
import cartago from "@/assets/clubs/CARTAGO_COSTA_RICA.png";
import caronte from "@/assets/clubs/CARONTE_COLOMBIA.png";
import carnotauros from "@/assets/clubs/CARNOTAUROS_COLOMBIA.png";

type Club = { name: string; country: string; url: string };

const clubs: Club[] = [
  { name: "Yaguares Mixed Ability", country: "Ecuador", url: yaguares1 },
  { name: "Yaguares Rugby Club", country: "Ecuador", url: yaguares2 },
  { name: "Carneros Andes RFC", country: "Colombia", url: carneros },
  { name: "Black Goats", country: "Colombia", url: blackGoats },
  { name: "Barbarians Rugby", country: "Panamá", url: barbariansPa },
  { name: "Barbarians Rugby Club", country: "Colombia", url: barbariansCo },
  { name: "Alcatraz Rugby Club", country: "Venezuela", url: alcatraz },
  { name: "Cerberos Rugby Club", country: "Ecuador", url: cerberos },
  { name: "Centinelas Rugby Club", country: "Colombia", url: centinelas },
  { name: "Rugby Cartago", country: "Costa Rica", url: cartago },
  { name: "Caronte Rugby", country: "Colombia", url: caronte },
  { name: "Carnotauros Rugby UNAL", country: "Colombia", url: carnotauros },
];

// Split into two visually balanced rows
const row1 = clubs.filter((_, i) => i % 2 === 0);
const row2 = clubs.filter((_, i) => i % 2 === 1);

export function ClubsMarquee() {
  return (
    <section className="border-y border-border bg-card/40 py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-accent font-bold">
          Confían en nosotros
        </span>
        <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold">
          Clubes que visten Kiwi
        </h2>
        <p className="mt-2 text-muted-foreground max-w-xl mx-auto text-sm">
          Más de 50 equipos en Latinoamérica confían en nuestra fábrica.
        </p>
      </div>

      <div className="mt-10 space-y-6">
        <MarqueeRow items={row1} duration={40} direction="left" />
        <MarqueeRow items={row2} duration={45} direction="right" />
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  duration,
  direction,
}: {
  items: Club[];
  duration: number;
  direction: "left" | "right";
}) {
  // Duplicate for seamless loop
  const loop = [...items, ...items, ...items];
  return (
    <div
      className="marquee-pause relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <div
        className="flex gap-8 w-max animate-marquee"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {loop.map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            title={`${c.name} · ${c.country}`}
            className="group shrink-0 h-24 w-40 md:h-28 md:w-48 flex items-center justify-center bg-background rounded-lg border border-border px-4 hover:border-foreground transition-colors"
          >
            <img
              src={c.url}
              alt={c.name}
              loading="lazy"
              className="max-h-full max-w-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
