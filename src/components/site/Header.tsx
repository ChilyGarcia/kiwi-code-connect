import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import logo from "@/assets/kiwistore-logo.png";


const nav = [
  { to: "/tienda", label: "Tienda" },
  { to: "/personaliza-3d", label: "Personaliza 3D" },
  { to: "/clubes", label: "Clubes" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { count, setOpen: setCartOpen } = useCart();
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="bg-foreground text-background text-center text-[10px] sm:text-xs py-2 font-semibold tracking-widest uppercase px-3 truncate">
        <span className="hidden sm:inline">Envíos a toda Colombia · </span>
        <span className="text-accent">+30 años</span> vistiendo grandes equipos
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-6">
          <button
            className="lg:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>

          <Link to="/" className="flex items-center gap-2 group shrink-0" aria-label="Kiwi Total · Inicio">
            <img
              src={logo}
              alt="Kiwi Total"
              className="h-9 md:h-10 w-auto object-contain [filter:invert(1)]"
              width={200}
              height={70}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold uppercase tracking-wide">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-foreground/80 hover:text-accent transition-colors"
                activeProps={{ className: "text-accent" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 text-foreground/80">
            <button aria-label="Buscar" className="hover:text-accent transition-colors">
              <Search className="size-5" />
            </button>
            <button aria-label="Cuenta" className="hover:text-accent transition-colors hidden sm:block">
              <User className="size-5" />
            </button>
            <button
              aria-label={`Carrito (${count} ${count === 1 ? "producto" : "productos"})`}
              onClick={() => setCartOpen(true)}
              className="relative hover:text-accent transition-colors"
            >
              <ShoppingBag className="size-5" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] font-bold rounded-full min-w-4 h-4 px-1 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden pb-4 flex flex-col gap-3 text-sm font-semibold uppercase tracking-wide">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-accent py-1"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
