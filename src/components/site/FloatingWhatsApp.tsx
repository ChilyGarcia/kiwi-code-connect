import { MessageCircle } from "lucide-react";

const WA_URL =
  "https://wa.me/573006811351?text=" +
  encodeURIComponent("¡Hola Kiwi Total! Quiero más información sobre sus productos.");

export function FloatingWhatsApp() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-4 right-4 z-40 group flex items-center gap-2 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 pl-3 pr-4 py-3 md:pl-4 md:pr-5 md:py-3.5 font-bold text-sm hover:scale-105 active:scale-95 transition-transform"
    >
      <MessageCircle className="size-5 shrink-0" />
      <span className="hidden sm:inline uppercase tracking-widest text-xs">WhatsApp</span>
      <span className="absolute -top-1 -right-1 size-3 rounded-full bg-accent animate-ping" />
      <span className="absolute -top-1 -right-1 size-3 rounded-full bg-accent" />
    </a>
  );
}
