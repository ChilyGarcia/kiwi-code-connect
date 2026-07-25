import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { ProductCard } from "@/components/site/ProductCard";
import { products, categories, activeCategories } from "@/data/products";

export const Route = createFileRoute("/tienda")({
  head: () => ({
    meta: [
      { title: "Tienda · Kiwi Total" },
      { name: "description", content: "Colecciones Clásicas, Suramérica, Camisas y Petos: indumentaria fabricada en Colombia." },
    ],
  }),
  component: Tienda,
});

function Tienda() {
  const [active, setActive] = useState<string>("Todos");
  const [sort, setSort] = useState<"relevance" | "price-asc" | "price-desc" | "name">("relevance");

  const items = useMemo(() => {
    const filtered = active === "Todos" ? products : products.filter((p) => p.category === active);
    const sorted = [...filtered];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    else if (sort === "name") sorted.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
  }, [active, sort]);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <span className="text-xs uppercase tracking-[0.4em] text-accent font-bold">Catálogo</span>
      <h1 className="mt-2 text-4xl md:text-5xl font-display font-bold">Tienda</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl text-sm md:text-base">
        Prendas fabricadas en Colombia con sublimación digital, puntada de seguridad y doble costura.
        Producción de 20 a 25 días hábiles.
      </p>

      {/* Category chips */}
      <div className="mt-8 flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-none">
        {["Todos", ...categories].map((c) => {
          const isActive = active === c;
          const isAvailable = c === "Todos" || (activeCategories as readonly string[]).includes(c);
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              aria-pressed={isActive}
              className={`relative shrink-0 px-4 py-2 text-xs font-bold uppercase tracking-widest border rounded-full transition ${
                isActive
                  ? "bg-foreground text-background border-foreground"
                  : isAvailable
                    ? "bg-background text-foreground/70 border-border hover:border-foreground"
                    : "bg-background text-foreground/40 border-dashed border-border hover:text-foreground/60"
              }`}
            >
              {c}
              {!isAvailable && <span className="ml-2 text-[9px] text-accent">Pronto</span>}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          {items.length} {items.length === 1 ? "producto" : "productos"}
        </p>
        <label className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
          Ordenar
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="bg-background border border-border rounded px-2 py-1.5 text-xs font-semibold focus:outline-none focus:border-accent"
          >
            <option value="relevance">Relevancia</option>
            <option value="price-asc">Precio: menor a mayor</option>
            <option value="price-desc">Precio: mayor a menor</option>
            <option value="name">Nombre A-Z</option>
          </select>
        </label>
      </div>

      {items.length === 0 ? (
        <div className="mt-8 border border-dashed border-border rounded-lg p-12 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-accent font-bold">Próximamente</p>
          <h2 className="mt-3 text-2xl font-display font-bold">Línea {active}</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
            Estamos preparando esta colección. Escríbenos por WhatsApp para reservar o cotizar sobre pedido.
          </p>
          <a
            href="https://wa.me/573006811351"
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-bold uppercase tracking-widest text-xs hover:shadow-glow transition"
          >
            Consultar por WhatsApp
          </a>
        </div>
      ) : (
        <div className="mt-4 grid gap-5 grid-cols-2 lg:grid-cols-4">
          {items.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      )}
    </section>
  );
}
