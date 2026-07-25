import { createFileRoute } from "@tanstack/react-router";
import { Mail, Instagram, MapPin, Clock, Phone, Facebook, Music2 } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto · Kiwi Total" },
      { name: "description", content: "Contactanos: WhatsApp +57 300 681 1351, email kiwirugbyclub@gmail.com, Calle 13N #11E-35 Guaimaral, Colombia." },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  return (
    <>
      {/* Quiénes somos */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <span className="text-xs uppercase tracking-[0.4em] text-accent font-bold">Kiwi Total</span>
          <h1 className="mt-3 text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.05] max-w-4xl">
            Más de 30 años vistiendo la pasión de grandes equipos.
          </h1>
          <div className="mt-8 grid md:grid-cols-2 gap-8 text-foreground/80 text-[15px] leading-relaxed">
            <p>
              En Kiwi llevamos más de tres décadas transformando ideas en uniformes que representan
              identidad, orgullo y pasión por el deporte. Somos una empresa colombiana dedicada al
              diseño, fabricación y personalización de indumentaria deportiva y empresarial.
            </p>
            <p>
              Somos un referente del rugby colombiano y hoy también acompañamos equipos de fútbol,
              baloncesto y empresas que buscan prendas personalizadas con altos estándares de calidad,
              con la misma pasión, cercanía y compromiso que nos ha caracterizado desde nuestros inicios.
            </p>
          </div>
        </div>
      </section>

      {/* Propuesta de valor */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <span className="text-xs uppercase tracking-[0.4em] text-accent font-bold">Propuesta de valor</span>
          <h2 className="mt-2 text-2xl md:text-4xl font-display font-bold max-w-3xl">
            No entregamos uniformes en serie. Creamos prendas únicas.
          </h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm">
            {[
              ["Diseño 100 % personalizado", "Cada prenda se crea desde cero para reflejar la esencia de tu equipo."],
              ["Producción nacional", "Fabricación colombiana con materiales de excelente calidad."],
              ["Acompañamiento cercano", "Asesoría de diseño durante todo el proceso, del boceto al despacho."],
            ].map(([t, d]) => (
              <div key={t} className="p-6 border border-border rounded-lg bg-background">
                <h3 className="font-display uppercase tracking-widest text-sm">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <span className="text-xs uppercase tracking-[0.4em] text-accent font-bold">Contacto</span>
        <h2 className="mt-2 text-3xl md:text-5xl font-display font-bold">Hablemos</h2>
        <p className="mt-3 text-muted-foreground max-w-xl">
          Escribinos por WhatsApp para consultas rápidas, cotizaciones o pedidos mayoristas.
        </p>

        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <Info Icon={Phone} title="WhatsApp" text="+57 300 681 1351" href="https://wa.me/573006811351" />
            <Info Icon={Mail} title="Email" text="kiwirugbyclub@gmail.com" href="mailto:kiwirugbyclub@gmail.com" />
            <Info Icon={MapPin} title="Dirección" text="Calle 13N #11E-35 · Guaimaral, frente al mini estadio" />
            <Info Icon={Clock} title="Horario" text="Lun a Vie 8:00 - 12:00 · 14:00 - 18:00 / Sáb 8:00 - 16:00" />
            <div className="grid grid-cols-3 gap-4 pt-2">
              <Social Icon={Instagram} label="@kiwi_sport" href="https://instagram.com/kiwi_sport" />
              <Social Icon={Facebook} label="Kiwi Rugby" href="https://facebook.com/kiwirugby" />
              <Social Icon={Music2} label="TikTok" href="https://tiktok.com/@kiwirugbytotal" />
            </div>
          </div>

          <a
            href="https://wa.me/573006811351?text=Hola%20Kiwi%20Total%2C%20quiero%20hacer%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white rounded-lg p-10 flex flex-col justify-center items-start gap-4 hover:opacity-95 transition"
          >
            <Phone className="size-10" />
            <h3 className="text-2xl font-display font-bold">Escribinos por WhatsApp</h3>
            <p className="opacity-90 text-sm">Respondemos en horario comercial. Cotizaciones, pedidos y postventa.</p>
            <span className="mt-2 inline-flex items-center gap-2 border border-white/40 px-4 py-2 rounded font-bold uppercase tracking-widest text-xs">
              Abrir chat →
            </span>
          </a>
        </div>
      </section>
    </>
  );
}

function Info({ Icon, title, text, href }: { Icon: typeof Mail; title: string; text: string; href?: string }) {
  const Wrap = href ? "a" : "div";
  return (
    <Wrap
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex gap-4 p-5 border border-border rounded-lg bg-card hover:border-accent/40 transition"
    >
      <Icon className="size-6 text-accent shrink-0 mt-0.5" />
      <div>
        <h3 className="font-display text-sm tracking-widest">{title}</h3>
        <p className="text-foreground/80">{text}</p>
      </div>
    </Wrap>
  );
}

function Social({ Icon, label, href }: { Icon: typeof Instagram; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-1 p-4 border border-border rounded-lg hover:border-accent hover:text-accent transition text-xs font-semibold"
    >
      <Icon className="size-5" />
      {label}
    </a>
  );
}
