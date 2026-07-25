import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CartProvider } from "@/lib/cart";
import { CartDrawer } from "@/components/site/CartDrawer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-display">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscás no existe o fue movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary/90 transition"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kiwi Total · Indumentaria deportiva profesional Colombia" },
      {
        name: "description",
        content:
          "Tienda oficial Kiwi Total. Camisetas, shorts y equipamiento de rugby, fútbol y training para Colombia. Diseño para clubes y mayoristas.",
      },
      { name: "author", content: "Kiwi Total" },
      { property: "og:title", content: "Kiwi Total · Indumentaria deportiva profesional Colombia" },
      { property: "og:description", content: "Tienda oficial Kiwi Total. Camisetas, shorts y equipamiento de rugby, fútbol y training para Colombia. Diseño para clubes y mayoristas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kiwi Total · Indumentaria deportiva profesional Colombia" },
      { name: "description", content: "Tienda oficial Kiwi Total. Camisetas, shorts y equipamiento de rugby, fútbol y training para Colombia. Diseño para clubes y mayoristas." },
      { name: "twitter:description", content: "Tienda oficial Kiwi Total. Camisetas, shorts y equipamiento de rugby, fútbol y training para Colombia. Diseño para clubes y mayoristas." },
      { property: "og:image", content: "https://kiwi-six-mu.vercel.app/og-image.png" },
      { name: "twitter:image", content: "https://kiwi-six-mu.vercel.app/og-image.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <CartDrawer />
        <FloatingWhatsApp />
      </div>
    </CartProvider>
  );
}
