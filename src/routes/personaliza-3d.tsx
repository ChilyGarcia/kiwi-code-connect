import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Box, Palette, Ruler, Send, Sparkles, Shirt, CheckCircle2, Layers } from "lucide-react";

export const Route = createFileRoute("/personaliza-3d")({
  head: () => ({
    meta: [
      { title: "Personaliza 3D · Diseña tu uniforme | Kiwi Total" },
      {
        name: "description",
        content:
          "Diseña tu uniforme deportivo en 3D y solicita tu cotización. Personaliza colores, escudos, números y patrones para tu club con Kiwi Total.",
      },
      { property: "og:title", content: "Personaliza 3D · Diseña tu uniforme | Kiwi Total" },
      {
        property: "og:description",
        content:
          "Configurador 3D de uniformes deportivos. Diseña, visualiza y cotizá la indumentaria de tu equipo.",
      },
    ],
  }),
  component: Personaliza3D,
});

const sports = ["Rugby", "Fútbol", "Training", "Otro"] as const;
const garments = ["Camiseta", "Short", "Medias", "Kit completo"] as const;

function Personaliza3D() {
  const [sport, setSport] = useState<(typeof sports)[number]>("Rugby");
  const [garment, setGarment] = useState<(typeof garments)[number]>("Camiseta");

  return (
    <>
      {/* HERO */}
      <section className="relative border-b border-border bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">
            <Sparkles className="size-3.5" /> Nuevo · Configurador 3D
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.95] tracking-tight">
            Personaliza tu <span className="text-accent">uniforme</span>
            <br />en 3D.
          </h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground">
            Diseñá la indumentaria de tu club en tiempo real: colores, escudos, números y patrones.
            Visualizá cada detalle en 3D y enviá tu cotización en minutos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#configurador"
              className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-accent transition"
            >
              <Box className="size-4" /> Empezar a diseñar
            </a>
            <a
              href="#cotizacion"
              className="inline-flex items-center gap-2 rounded-md border border-foreground/20 px-6 py-3 text-sm font-bold uppercase tracking-widest hover:border-foreground transition"
            >
              Solicitar cotización
            </a>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-6">
          {[
            { Icon: Shirt, t: "1. Elegí prenda", d: "Camiseta, short, medias o kit completo." },
            { Icon: Palette, t: "2. Personalizá", d: "Colores, patrones, escudos y tipografías." },
            { Icon: Layers, t: "3. Visualizá 3D", d: "Rotá y revisá tu diseño en tiempo real." },
            { Icon: Send, t: "4. Cotizá", d: "Enviá tu diseño y recibí tu propuesta." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="flex gap-3">
              <Icon className="size-6 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-sm uppercase tracking-widest">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONFIGURADOR */}
      <section id="configurador" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-[1fr_360px] gap-8">
          {/* 3D viewer placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl border border-border bg-gradient-to-br from-muted via-background to-muted overflow-hidden relative">
              {/* Reemplazar este iframe por el build de Unity WebGL cuando esté listo */}
              {/* <iframe src="/unity/index.html" className="w-full h-full" title="Configurador 3D Kiwi Total" /> */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <div className="rounded-full border border-accent/30 bg-accent/5 p-5 mb-5">
                  <Box className="size-10 text-accent" />
                </div>
                <h3 className="font-display text-xl uppercase tracking-widest">Visor 3D</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Próximamente: configurador interactivo desarrollado en Unity WebGL embebido en este espacio.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-bold">
                  <span className="size-2 rounded-full bg-accent animate-pulse" /> En integración
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              El visor 3D corre sobre Unity WebGL. Compatible con Chrome, Edge, Safari y Firefox de escritorio.
            </p>
          </div>

          {/* Side controls (preview UI) */}
          <aside className="space-y-6">
            <div>
              <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
                Deporte
              </label>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {sports.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSport(s)}
                    className={`px-3 py-2 text-xs uppercase tracking-widest font-bold border rounded transition ${
                      sport === s
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-foreground/50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
                Prenda
              </label>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {garments.map((g) => (
                  <button
                    key={g}
                    onClick={() => setGarment(g)}
                    className={`px-3 py-2 text-xs uppercase tracking-widest font-bold border rounded transition ${
                      garment === g
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-foreground/50"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
                Paleta sugerida
              </label>
              <div className="mt-2 flex gap-2">
                {["#0a0a0a", "#dc2626", "#16a34a", "#2563eb", "#facc15", "#ffffff"].map((c) => (
                  <button
                    key={c}
                    aria-label={`Color ${c}`}
                    className="size-8 rounded-full border border-border hover:scale-110 transition"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                El control real de colores se hará desde el visor Unity.
              </p>
            </div>

            <a
              href="#cotizacion"
              className="w-full inline-flex items-center justify-center gap-2 rounded bg-accent text-accent-foreground px-4 py-3 text-sm font-bold uppercase tracking-widest hover:opacity-90 transition"
            >
              <Send className="size-4" /> Cotizar este diseño
            </a>
          </aside>
        </div>
      </section>

      {/* COTIZACIÓN */}
      <section id="cotizacion" className="border-b border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-accent font-bold">
              Cotización
            </span>
            <h2 className="mt-2 text-3xl md:text-5xl font-display font-bold">
              Pedí tu propuesta
            </h2>
            <p className="mt-3 text-muted-foreground max-w-md">
              Compartinos los detalles de tu club y te respondemos con tiempos, precios y muestra final.
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Asesoramiento de diseño incluido.",
                "Mínimo desde 10 unidades por modelo.",
                "Sublimación full-print con telas técnicas.",
                "Envíos a toda Colombia y LATAM.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="size-5 text-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-card space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nombre" name="nombre" />
              <Field label="Club / Empresa" name="club" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Email" name="email" type="email" />
              <Field label="WhatsApp" name="tel" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Cantidad estimada" name="cantidad" type="number" />
              <div>
                <label className="text-xs uppercase tracking-widest font-bold">Deporte</label>
                <select className="mt-1 w-full bg-background border border-border rounded px-3 py-2 text-sm focus:outline-none focus:border-accent">
                  {sports.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest font-bold">
                Detalles del diseño
              </label>
              <textarea
                rows={5}
                placeholder="Contanos colores, escudos, tallas, fechas de entrega..."
                className="mt-1 w-full bg-background border border-border rounded px-3 py-2 text-sm focus:outline-none focus:border-accent"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-foreground text-background py-3 rounded font-bold uppercase tracking-widest text-sm hover:bg-accent transition inline-flex items-center justify-center gap-2"
            >
              <Send className="size-4" /> Enviar cotización
            </button>
            <p className="text-[11px] text-muted-foreground text-center">
              Te respondemos en menos de 24 horas hábiles.
            </p>
          </form>
        </div>
      </section>

      {/* SPECS */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-3 gap-6 text-sm">
          {[
            { Icon: Ruler, t: "Talles 4 a 4XL", d: "Curvas adulto y juvenil." },
            { Icon: Palette, t: "Sublimación full color", d: "Sin límite de colores ni degradés." },
            { Icon: Shirt, t: "Telas técnicas", d: "Ligeras, transpirables y resistentes." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="flex gap-3 items-start">
              <Icon className="size-5 text-accent mt-0.5" />
              <div>
                <h3 className="font-display uppercase tracking-widest">{t}</h3>
                <p className="text-muted-foreground mt-1">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest font-bold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-1 w-full bg-background border border-border rounded px-3 py-2 text-sm focus:outline-none focus:border-accent"
      />
    </div>
  );
}
