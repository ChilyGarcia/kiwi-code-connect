import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-rugby.jpg";
import rugbyImg from "@/assets/cat-rugby.jpg";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/products";
import { ArrowRight, Truck, ShieldCheck, Headphones, CreditCard } from "lucide-react";
import { ClubsMarquee } from "@/components/site/ClubsMarquee";


export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden diagonal-cut">
        <img
          src={heroImg}
          alt="Jugador de rugby Kiwi Total"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-44">
          <span className="inline-block text-xs uppercase tracking-[0.4em] text-accent font-bold border border-accent/40 px-3 py-1.5 rounded-sm bg-background/60 backdrop-blur">
            Kiwi Total · Colombia · +30 años
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.95] text-foreground">
            MÁS DE 30 AÑOS<br />
            VISTIENDO LA<br />
            <span className="text-accent">PASIÓN</span> DE GRANDES EQUIPOS.
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-foreground/80">
            Diseño 100 % personalizado, fabricación colombiana y materiales de alto desempeño.
            Uniformes de rugby, fútbol, gimnasio y empresa desde 1990.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/tienda"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-md font-bold uppercase tracking-widest text-sm hover:shadow-glow transition-all"
            >
              Comprar ahora
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/clubes"
              className="inline-flex items-center gap-2 border border-foreground/30 hover:border-primary text-foreground px-7 py-3.5 rounded-md font-bold uppercase tracking-widest text-sm hover:text-primary transition-all"
            >
              Diseño para clubes
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { Icon: Truck, t: "Envíos a toda Colombia", s: "Despacho 24-48h" },
            { Icon: ShieldCheck, t: "Compra segura", s: "Pago protegido" },
            { Icon: CreditCard, t: "Hasta 12 cuotas", s: "Sin interés" },
            { Icon: Headphones, t: "Atención experta", s: "Lun a Sáb" },
          ].map(({ Icon, t, s }) => (
            <div key={t} className="flex items-center gap-3">
              <Icon className="size-7 text-primary shrink-0" />
              <div>
                <p className="text-sm font-semibold">{t}</p>
                <p className="text-xs text-muted-foreground">{s}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          eyebrow="Colecciones"
          title="Nuestras líneas"
          desc="Piezas diseñadas y producidas en Colombia."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <CategoryCard image={products[0].image} label="Clásicas" to="/rugby" />
          <CategoryCard image={products[5].image} label="Suramérica" to="/futbol" />
        </div>
      </section>

      {/* CLUBS MARQUEE */}
      <ClubsMarquee />




      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <SectionHeading
            eyebrow="Lo último"
            title="Productos destacados"
            desc="Las prendas más buscadas de la temporada."
          />
          <Link
            to="/tienda"
            className="text-sm font-bold uppercase tracking-widest text-primary hover:underline inline-flex items-center gap-1"
          >
            Ver toda la tienda <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 8).map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* CLUBS CTA */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative overflow-hidden rounded-xl bg-gradient-hero shadow-card">
          <img
            src={rugbyImg}
            alt=""
            loading="lazy"
            className="absolute inset-0 size-full object-cover opacity-25"
          />
          <div className="relative grid gap-8 md:grid-cols-2 items-center p-10 md:p-16">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-accent font-bold">
                Para clubes
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold leading-tight">
                DISEÑAMOS LA<br /><span className="text-primary">CAMISETA DE TU CLUB</span>
              </h2>
              <p className="mt-4 text-foreground/80 max-w-md">
                Sublimación full color, telas técnicas y producción nacional.
                Pedí tu cotización y armá el kit completo de tu equipo.
              </p>
              <Link
                to="/clubes"
                className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-md font-bold uppercase tracking-widest text-sm hover:shadow-glow transition"
              >
                Cotizar ahora <ArrowRight className="size-4" />
              </Link>
            </div>
            <ul className="grid grid-cols-2 gap-4 text-sm">
              {["Telas dry-fit", "Sublimación HD", "Tallaje completo", "Producción nacional", "Mínimos accesibles", "Asesoría de diseño"].map((f) => (
                <li key={f} className="flex items-center gap-2 bg-background/40 backdrop-blur rounded p-3 border border-border">
                  <span className="size-2 bg-primary rounded-full" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeading({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div>
      <span className="text-xs uppercase tracking-[0.4em] text-accent font-bold">{eyebrow}</span>
      <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold">{title}</h2>
      {desc && <p className="mt-2 text-muted-foreground max-w-xl">{desc}</p>}
    </div>
  );
}

function CategoryCard({ image, label, to }: { image: string; label: string; to: "/rugby" | "/futbol" | "/training" }) {
  return (
    <Link
      to={to}
      className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-card border border-border hover:border-primary transition-all"
    >
      <img
        src={image}
        alt={label}
        loading="lazy"
        className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-2xl font-display font-bold">{label}</h3>
        <span className="mt-1 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-accent font-bold">
          Ver productos <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
