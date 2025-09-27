"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Search,
  User,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";

type Item = { label: string; href: string };
type MegaColumn = { title: string; items: Item[] };
type Nav = {
  label: string;
  href?: string;
  children?: Item[];
  mega?: MegaColumn[];
};

const NAV: Nav[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Catálogo",
    mega: [
      {
        title: "Cocinas",
        items: [
          { label: "Cocinas integrales", href: "/cocinas/integrales" },
          { label: "Cubiertas", href: "/cocinas/cubiertas" },
          { label: "Islas y barras", href: "/cocinas/islas" },
          { label: "Alacenas", href: "/cocinas/alacenas" },
        ],
      },
      {
        title: "Hogar",
        items: [
          { label: "Muebles para baño", href: "/banos/muebles" },
          { label: "Lavabos", href: "/banos/lavabos" },
          { label: "Espejos", href: "/banos/espejos" },
          { label: "Repisas", href: "/banos/repisas" },
          { label: "Closets", href: "/recamaras/closets" },
          { label: "Vestidores", href: "/recamaras/vestidores" },
          { label: "Tocadores", href: "/recamaras/tocadores" },
        ],
      },
      {
        title: "Accesorios",
        items: [
          { label: "Herrajes", href: "/accesorios/herrajes" },
          { label: "Iluminación", href: "/accesorios/iluminacion" },
          { label: "Organizadores", href: "/accesorios/organizadores" },
        ],
      },
    ],
  },
  { label: "Promociones", href: "/promociones" },
  { label: "Sucursales", href: "/sucursales" },
  { label: "Contacto", href: "/contacto" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false); // acordeón móvil
  const drawerRef = useRef<HTMLDivElement>(null);

  // Cerrar con ESC y al navegar
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    // bloquear scroll cuando panel móvil está abierto
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b bg-neutral-100/90 backdrop-blur supports-[backdrop-filter]:bg-neutral-100/70">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
          {/* Izquierda: botón móvil + logo */}
          <div className="flex items-center gap-2">
            {/* Botón hamburguesa (solo móvil) */}
            <button
              aria-label="Abrir menú"
              className="lg:hidden rounded-xl p-2 hover:bg-white"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>

            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/logo.png"
                alt="Eurococinas"
                width={200}
                height={80}
                className="w-auto h-10 sm:h-12"
                priority
              />
            </Link>
          </div>

          {/* Menú desktop */}
          <nav className="hidden lg:block flex-1">
            <ul className="m-0 flex list-none items-center justify-start gap-7 p-0">
              {NAV.map((item) => {
                const hasMega = !!item.mega;

                if (hasMega) {
                  return (
                    <li key={item.label} className="relative group">
                      <button className="inline-flex items-center gap-1 text-sm font-semibold text-slate-800 hover:text-slate-900">
                        {item.label}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {/* Mega menú */}
                      <div className="invisible absolute left-0 top-full mt-3 w-[820px] overflow-hidden rounded-xl border bg-white shadow-xl opacity-0 transition group-hover:visible group-hover:opacity-100">
                        <div className="grid grid-cols-3 gap-6 p-6">
                          {item.mega!.map((col) => (
                            <div key={col.title}>
                              <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                                {col.title}
                              </h4>
                              <ul className="space-y-1">
                                {col.items.map((link) => (
                                  <li key={link.href}>
                                    <Link
                                      href={link.href}
                                      className="block rounded-md px-2 py-2 text-sm text-slate-700 hover:bg-slate-100"
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href!}
                      className="text-sm font-semibold text-slate-800 hover:text-slate-900"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Iconos derecha */}
          <div className="flex items-center gap-1 sm:gap-3">
            <button aria-label="Buscar" className="rounded-xl p-2 hover:bg-white">
              <Search className="h-5 w-5" />
            </button>
            <button aria-label="Cuenta" className="rounded-xl p-2 hover:bg-white">
              <User className="h-5 w-5" />
            </button>
            <button aria-label="Carrito" className="rounded-xl p-2 hover:bg-white">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay + Drawer móvil */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition ${
          mobileOpen ? "visible" : "invisible"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Fondo oscuro */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel lateral */}
        <div
          ref={drawerRef}
          className={`absolute left-0 top-0 h-full w-[86%] max-w-[340px] bg-white shadow-2xl transition-transform duration-200 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/logo.png"
                alt="Eurococinas"
                width={160}
                height={64}
                className="h-10 w-auto"
              />
            </Link>
            <button
              aria-label="Cerrar menú"
              className="rounded-xl p-2 hover:bg-slate-100"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="px-2 py-2">
            <ul className="space-y-1">
              {/* Inicio */}
              <li>
                <Link
                  href="/"
                  className="block rounded-lg px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100"
                  onClick={() => setMobileOpen(false)}
                >
                  Inicio
                </Link>
              </li>

              {/* Catálogo (acordeón) */}
              <li>
                <button
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-semibold text-slate-800 hover:bg-slate-100"
                  aria-expanded={catalogOpen}
                  onClick={() => setCatalogOpen((s) => !s)}
                >
                  <span>Catálogo</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      catalogOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Contenido del acordeón */}
                <div
                  className={`overflow-hidden transition-[grid-template-rows] ${
                    catalogOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  } grid`}
                >
                  <div className="min-h-0">
                    {NAV.find((n) => n.mega)?.mega?.map((col) => (
                      <div key={col.title} className="px-3 pb-3">
                        <h4 className="mt-2 mb-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                          {col.title}
                        </h4>
                        <ul className="rounded-md border bg-white">
                          {col.items.map((i) => (
                            <li key={i.href}>
                              <Link
                                href={i.href}
                                className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
                                onClick={() => setMobileOpen(false)}
                              >
                                {i.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              {/* Otros links */}
              {NAV.filter((n) => !n.mega && n.href && n.label !== "Inicio").map(
                (n) => (
                  <li key={n.label}>
                    <Link
                      href={n.href!}
                      className="block rounded-lg px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100"
                      onClick={() => setMobileOpen(false)}
                    >
                      {n.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Acciones rápidas abajo */}
          <div className="mt-auto border-t px-3 py-3">
            <div className="flex items-center gap-2">
              <button className="flex-1 rounded-lg border px-3 py-2 text-sm hover:bg-slate-50">
                <div className="flex items-center justify-center gap-2">
                  <Search className="h-4 w-4" />
                  Buscar
                </div>
              </button>
              <button className="flex-1 rounded-lg border px-3 py-2 text-sm hover:bg-slate-50">
                <div className="flex items-center justify-center gap-2">
                  <User className="h-4 w-4" />
                  Cuenta
                </div>
              </button>
              <button className="flex-1 rounded-lg border px-3 py-2 text-sm hover:bg-slate-50">
                <div className="flex items-center justify-center gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Carrito
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
