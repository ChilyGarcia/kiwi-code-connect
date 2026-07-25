import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
}

export function ProductCard({ p }: { p: Product }) {
  const { add } = useCart();
  return (
    <div className="group relative bg-card border border-border rounded-md overflow-hidden hover:border-foreground/40 transition-all hover:shadow-card">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {p.badge && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm">
            {p.badge}
          </span>
        )}
        <button
          onClick={() => add({ id: p.id, name: p.name, price: p.price, image: p.image })}
          aria-label={`Añadir ${p.name} al carrito`}
          className="absolute bottom-3 right-3 size-10 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all hover:bg-accent"
        >
          <ShoppingBag className="size-4" />
        </button>
      </div>
      <div className="p-4">
        <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{p.category}</p>
        <h3 className="mt-1 font-semibold text-sm leading-tight line-clamp-2 min-h-10">{p.name}</h3>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-foreground font-bold">${p.price.toLocaleString("es-CO")}</span>
          {p.oldPrice && (
            <span className="text-xs text-accent line-through">
              ${p.oldPrice.toLocaleString("es-CO")}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
