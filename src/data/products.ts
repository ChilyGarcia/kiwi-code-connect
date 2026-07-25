import clasicaAllBlacks from "@/assets/clasica-all-blacks.png";
import clasicaArgentina from "@/assets/clasica-argentina.png";
import clasicaFrancia from "@/assets/clasica-francia.png";
import clasicaSpringboks from "@/assets/clasica-springboks.png";
import clasicaGeneral from "@/assets/clasica-general.png";
import suramericaColombia from "@/assets/suramerica-colombia.png";
import camisaAllBlacks1 from "@/assets/shirts/all-blacks-1.png";
import camisaAllBlacks2 from "@/assets/shirts/all-blacks-2.png";
import petoAllBlacks from "@/assets/shirts/all-blacks-3.png";
import camisaPumas1 from "@/assets/shirts/pumas-1.png";
import camisaPumas2 from "@/assets/shirts/pumas-2.png";
import petoPumas from "@/assets/shirts/pumas-3.png";
import camisaSpringboks1 from "@/assets/shirts/springboks-1.png";
import camisaSpringboks2 from "@/assets/shirts/springboks-2.png";
import petoSpringboks from "@/assets/shirts/springboks-3.png";
import type { Product } from "@/components/site/ProductCard";

/** Líneas oficiales actuales de Kiwi Total */
/**
 * Líneas actualmente disponibles con productos publicados.
 */
export const activeCategories = ["Clásicas", "Suramérica", "Camisas", "Petos"] as const;

/**
 * Todas las líneas de Kiwi Total. Las que aún no tienen productos aparecen
 * en el filtro como "Próximamente" hasta que se suban SKUs.
 */
export const categories = [
  "Clásicas",
  "Suramérica",
  "Camisas",
  "Petos",
  "Réplicas",
  "Esqueletos",
  "Rompevientos",
  "Buzos",
  "Joggers",
  "Chaquetas",
  "Cuello Redondo",
  "Polos",
  "Crossfit",
  "Shorts",
  "Medias",
  "Gorras",
  "Vísceras",
  "Accesorios",
  "Kit Clubes",
] as const;
export type Category = (typeof categories)[number];

const raw: Omit<Product, "id">[] = [
  {
    name: "Clásica All Blacks — Negra",
    category: "Clásicas",
    price: 129000,
    image: clasicaAllBlacks,
    badge: "Bordado",
  },
  {
    name: "Clásica Argentina — Celeste",
    category: "Clásicas",
    price: 129000,
    image: clasicaArgentina,
    badge: "Bordado",
  },
  {
    name: "Clásica Francia — Gris",
    category: "Clásicas",
    price: 129000,
    image: clasicaFrancia,
    badge: "Bordado",
  },
  {
    name: "Clásica Springboks — Blanca",
    category: "Clásicas",
    price: 129000,
    image: clasicaSpringboks,
    badge: "Bordado",
  },
  {
    name: "Pack Clásicas · 4 Selecciones",
    category: "Clásicas",
    price: 459000,
    oldPrice: 516000,
    image: clasicaGeneral,
    badge: "Pack",
  },
  {
    name: "Suramérica Kiwi Colombia — Retro",
    category: "Suramérica",
    price: 179000,
    image: suramericaColombia,
    badge: "Nuevo",
  },
  // Camisas (con mangas)
  {
    name: "Camisa All Blacks — Fern",
    category: "Camisas",
    price: 149000,
    image: camisaAllBlacks1,
    badge: "Nuevo",
  },
  {
    name: "Camisa All Blacks — Altrad",
    category: "Camisas",
    price: 149000,
    image: camisaAllBlacks2,
  },
  {
    name: "Camisa Pumas — Escudo",
    category: "Camisas",
    price: 149000,
    image: camisaPumas1,
    badge: "Nuevo",
  },
  {
    name: "Camisa Pumas — Rayas Visa",
    category: "Camisas",
    price: 149000,
    image: camisaPumas2,
  },
  {
    name: "Camisa Springboks — Geométrica",
    category: "Camisas",
    price: 149000,
    image: camisaSpringboks1,
    badge: "Nuevo",
  },
  {
    name: "Camisa Springboks — FNB",
    category: "Camisas",
    price: 149000,
    image: camisaSpringboks2,
  },
  // Petos (sin mangas)
  {
    name: "Peto All Blacks — Tribal",
    category: "Petos",
    price: 119000,
    image: petoAllBlacks,
    badge: "Nuevo",
  },
  {
    name: "Peto Pumas — Visa",
    category: "Petos",
    price: 119000,
    image: petoPumas,
    badge: "Nuevo",
  },
  {
    name: "Peto Springboks — South Africa",
    category: "Petos",
    price: 119000,
    image: petoSpringboks,
    badge: "Nuevo",
  },
];

export const products: Product[] = raw.map((p) => ({
  ...p,
  id: p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
}));
