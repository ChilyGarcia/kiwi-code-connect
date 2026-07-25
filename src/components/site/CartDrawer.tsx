import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart, buildWhatsAppUrl } from "@/lib/cart";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

export function CartDrawer() {
  const { items, open, setOpen, setQty, remove, total, clear } = useCart();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="px-6 py-5 border-b border-border">
          <SheetTitle className="font-display uppercase tracking-widest text-lg">
            Tu carrito ({items.length})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-3">
            <ShoppingBag className="size-10 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Tu carrito está vacío.</p>
            <button
              onClick={() => setOpen(false)}
              className="mt-2 text-xs uppercase tracking-widest font-bold text-accent hover:underline"
            >
              Seguir comprando
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((i) => (
                <div key={i.id} className="flex gap-3 border-b border-border pb-4">
                  <img src={i.image} alt={i.name} className="size-20 rounded object-cover bg-muted" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold leading-tight">{i.name}</p>
                    <p className="mt-1 text-sm text-foreground/70">
                      ${i.price.toLocaleString("es-CO")}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => setQty(i.id, i.qty - 1)}
                        className="size-7 border border-border rounded flex items-center justify-center hover:border-foreground"
                        aria-label="Restar"
                      >
                        <Minus className="size-3" />
                      </button>
                      <span className="text-sm w-6 text-center font-semibold">{i.qty}</span>
                      <button
                        onClick={() => setQty(i.id, i.qty + 1)}
                        className="size-7 border border-border rounded flex items-center justify-center hover:border-foreground"
                        aria-label="Sumar"
                      >
                        <Plus className="size-3" />
                      </button>
                      <button
                        onClick={() => remove(i.id)}
                        className="ml-auto text-muted-foreground hover:text-accent"
                        aria-label="Eliminar"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border px-6 py-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Subtotal
                </span>
                <span className="text-xl font-display font-bold">
                  ${total.toLocaleString("es-CO")}
                </span>
              </div>
              <a
                href={buildWhatsAppUrl(items, total)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded font-bold uppercase tracking-widest text-sm hover:opacity-90 transition"
              >
                Finalizar por WhatsApp
              </a>
              <button
                onClick={clear}
                className="w-full text-xs uppercase tracking-widest text-muted-foreground hover:text-accent"
              >
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
