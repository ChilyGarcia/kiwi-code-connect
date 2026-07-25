import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/products";
import heroImg from "@/assets/cat-rugby.jpg";

export const Route = createFileRoute("/rugby")({
  head: () => ({
    meta: [
      { title: "Rugby · Kiwi Total" },
      { name: "description", content: "Camisetas clásicas de rugby bordadas, selecciones y retro." },
    ],
  }),
  component: Rugby,
});

function Rugby() {
  const items = products.filter((p) => p.category === "Clásicas");
  return (
    <>
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="Rugby" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <span className="text-xs uppercase tracking-[0.4em] text-accent font-bold">Colección</span>
          <h1 className="mt-2 text-4xl sm:text-5xl md:text-7xl font-display font-bold">CLÁSICAS</h1>
          <p className="mt-3 max-w-md text-foreground/80">Camisetas bordadas de las selecciones más icónicas del rugby mundial.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
          {items.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
    </>
  );
}
