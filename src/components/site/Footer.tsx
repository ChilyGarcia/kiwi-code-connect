import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, MapPin, Phone, Clock } from "lucide-react";
import logo from "@/assets/kiwistore-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <img
            src={logo}
            alt="Kiwi Total"
            className="h-10 w-auto object-contain [filter:invert(1)]"
            width={200}
            height={70}
          />
          <p className="mt-4 text-sm text-muted-foreground">
            Más de 30 años vistiendo la pasión de grandes equipos.
            Indumentaria deportiva 100 % personalizada, fabricada en Colombia.
          </p>
          <div className="mt-5 flex gap-3 text-muted-foreground">
            <a href="https://www.instagram.com/kiwi_sport/" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-accent"><Instagram className="size-5" /></a>
            <a href="https://facebook.com/kiwirugby" target="_blank" rel="noopener" aria-label="Facebook" className="hover:text-accent"><Facebook className="size-5" /></a>
            <a href="mailto:kiwirugbyclub@gmail.com" aria-label="Email" className="hover:text-accent"><Mail className="size-5" /></a>
            <a href="https://wa.me/573006811351" target="_blank" rel="noopener" aria-label="WhatsApp" className="hover:text-accent"><Phone className="size-5" /></a>
          </div>
        </div>

        <FooterCol title="Tienda" links={[
          ["/tienda", "Todos los productos"],
          ["/tienda", "Clásicas"],
          ["/tienda", "Camisas"],
          ["/tienda", "Petos"],
          ["/personaliza-3d", "Personaliza 3D"],
        ]} />

        <FooterCol title="Empresa" links={[
          ["/clubes", "Diseño para clubes"],
          ["/contacto", "Quiénes somos"],
          ["/contacto", "Contacto"],
        ]} />

        <div>
          <h4 className="text-sm font-display tracking-widest mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><Phone className="size-4 mt-0.5 text-accent" /> +57 300 681 1351</li>
            <li className="flex gap-2"><Mail className="size-4 mt-0.5 text-accent" /> kiwirugbyclub@gmail.com</li>
            <li className="flex gap-2"><MapPin className="size-4 mt-0.5 text-accent" /> Calle 13N #11E-35, Guaimaral · Frente al mini estadio</li>
            <li className="flex gap-2"><Clock className="size-4 mt-0.5 text-accent" /> Lun-Vie 8:00-12:00 / 14:00-18:00 · Sáb 8:00-16:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Kiwi Total · kiwitotal.store · Todos los derechos reservados.
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-sm font-display tracking-widest mb-4">{title}</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {links.map(([to, label]) => (
          <li key={label}>
            <Link to={to} className="hover:text-accent transition-colors">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
