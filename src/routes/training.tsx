import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/products";
import heroImg from "@/assets/cat-fitness.jpg";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Training · Kiwi Total" },
      { name: "description", content: "Ropa de entrenamiento y running." },
    ],
  }),
  component: Training,
});

function Training() {
  const items = products;

  return (
    <>
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="Training" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <span className="text-xs uppercase tracking-[0.4em] text-accent font-bold">Disciplina</span>
          <h1 className="mt-2 text-5xl md:text-7xl font-display font-bold">TRAINING</h1>
          <p className="mt-3 max-w-md text-foreground/80">Tecnología y diseño para entrenar al máximo.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
    </>
  );
}
