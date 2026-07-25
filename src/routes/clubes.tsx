import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import heroImg from "@/assets/cat-rugby.jpg";
import { ClubsMarquee } from "@/components/site/ClubsMarquee";

export const Route = createFileRoute("/clubes")({
  head: () => ({
    meta: [
      { title: "Diseño para clubes · Kiwi Total" },
      { name: "description", content: "Diseñamos y producimos la indumentaria de tu club deportivo." },
    ],
  }),
  component: Clubes,
});

function Clubes() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="Diseño para clubes" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
          <span className="text-xs uppercase tracking-[0.4em] text-accent font-bold">Para clubes</span>
          <h1 className="mt-2 text-5xl md:text-7xl font-display font-bold max-w-3xl">
            DISEÑAMOS LA <span className="text-gradient">CAMISETA</span> DE TU CLUB
          </h1>
          <p className="mt-4 max-w-xl text-foreground/80">
            Sublimación full color, telas dry-fit y asesoría completa para tu equipo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold">¿Cómo trabajamos?</h2>
          <ol className="mt-8 space-y-6">
            {[
              ["1. Briefing", "Nos contás los colores, escudo y necesidades del club."],
              ["2. Diseño", "Te enviamos propuestas digitales hasta aprobar el modelo."],
              ["3. Producción", "Sublimamos y confeccionamos en producción nacional."],
              ["4. Entrega", "Despachamos a todo el país en 15-20 días hábiles."],
            ].map(([t, d]) => (
              <li key={t} className="border-l-2 border-primary pl-5">
                <h3 className="font-display text-xl">{t}</h3>
                <p className="text-muted-foreground mt-1">{d}</p>
              </li>
            ))}
          </ol>
        </div>
        <form className="bg-card border border-border rounded-lg p-8 shadow-card space-y-4">
          <h3 className="font-display text-2xl">Pedí tu cotización</h3>
          <Field label="Nombre del club" />
          <Field label="Tu nombre" />
          <Field label="Email" type="email" />
          <Field label="Teléfono / WhatsApp" />
          <div>
            <label className="text-xs uppercase tracking-widest font-semibold">Mensaje</label>
            <textarea rows={4} className="mt-1 w-full bg-input border border-border rounded px-3 py-2 text-sm focus:outline-none focus:border-primary" />
          </div>
          <button type="button" className="w-full bg-primary text-primary-foreground py-3 rounded font-bold uppercase tracking-widest text-sm hover:shadow-glow transition">
            Solicitar cotización
          </button>
        </form>
      </section>

      <section className="bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-display font-bold">Lo que incluimos</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {["Diseño personalizado", "Sublimación HD full color", "Telas dry-fit premium", "Tallaje adulto y juvenil", "Numeración y nombres", "Kit completo (camiseta + short + medias)", "Mínimos accesibles", "Reposiciones rápidas", "Asesoría de diseño gratis"].map((f) => (
              <div key={f} className="flex items-center gap-3 p-4 border border-border rounded">
                <Check className="size-5 text-primary shrink-0" />
                <span className="text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClubsMarquee />
    </>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest font-semibold">{label}</label>
      <input type={type} className="mt-1 w-full bg-input border border-border rounded px-3 py-2 text-sm focus:outline-none focus:border-primary" />
    </div>
  );
}
