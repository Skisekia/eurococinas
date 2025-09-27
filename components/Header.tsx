"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Search, User, ShoppingCart, Menu, X } from "lucide-react";

type Item = { label: string; href: string };
type Group = { title: string; items: Item[] };

const CATALOG: Group[] = [
  {
    title: "Recámara",
    items: [
      { label: "Closets", href: "/recamaras/closets" },
      { label: "Vestidores", href: "/recamaras/vestidores" },
      { label: "Tocadores", href: "/recamaras/tocadores" },
    ],
  },
  {
    title: "Baños",
    items: [
      { label: "Lavabos", href: "/banos/lavabos" },
      { label: "Muebles para baño", href: "/banos/muebles-para-bano" },
      { label: "Repisas", href: "/banos/repisas" },
    ],
  },
  {
    title: "Cocinas integrales",
    items: [
      { label: "Mesas", href: "/cocinas/mesas" },
      { label: "Sillas", href: "/cocinas/sillas" },
      { label: "Bancos", href: "/cocinas/bancos" },
    ],
  },
];

const LINKS: Item[] = [
  { label: "Inicio", href: "/" },
  { label: "Accesorios", href: "/accesorios" },
  { label: "Promociones", href: "/promociones" },
  { label: "Contacto", href: "/contacto" },
  { label: "Sucursales", href: "/sucursales" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false); // acordeón móvil
  const drawerRef = useRef<HTMLDivElement>(null);

  // Esc para cerrar
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  // bloquear scroll al abrir drawer
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b bg-neutral-100/90 backdrop-blur">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex h-20 items-center justify-between gap-6">
          {/* Izquierda: botón móvil + logo (medidas originales) */}
          <div className="flex items-center gap-2">
            <button
              aria-label="Abrir menú"
              className="lg:hidden rounded-xl p-2 hover:bg-white"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>

            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image src="/logo.png" alt="Eurococinas" width={220} height={90} className="h-50 w-auto" priority />
            </Link>
          </div>

          {/* Menú desktop centrado */}
          <nav className="hidden lg:block flex-1">
            <ul className="m-0 flex list-none items-center justify-center gap-7 p-0">
              {/* Inicio */}
              <li>
                <Link href="/" className="text-sm font-semibold text-slate-800 hover:text-slate-900">
                  Inicio
                </Link>
              </li>

              {/* Botón Catálogo */}
              <li className="relative group">
                <button className="inline-flex items-center gap-1 text-sm font-semibold text-slate-800 hover:text-slate-900">
                  Catálogo
                  <ChevronDown className="h-4 w-4" />
                </button>
                {/* Dropdown (mantengo medidas del dropdown original: w-64, tipografías) */}
                <div className="invisible absolute left-1/2 -translate-x-1/2 top-full mt-3 w-64 overflow-hidden rounded-xl border bg-white shadow-lg opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <ul className="m-0 list-none p-2">
                    {CATALOG.map((g) => (
                      <li key={g.title} className="px-3 py-2">
                        <div className="mb-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">
                          {g.title}
                        </div>
                        <ul className="space-y-1">
                          {g.items.map((c) => (
                            <li key={c.href}>
                              <Link href={c.href} className="block rounded-md px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-100">
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              {/* Resto de links */}
              {LINKS.filter((l) => l.label !== "Inicio").map((l) => (
                <li key={l.href}>
                  <Link href={l.href!} className="text-sm font-semibold text-slate-800 hover:text-slate-900">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Drawer móvil (mismas tipografías y proporciones) */}
      <div className={`lg:hidden fixed inset-0 z-50 transition ${mobileOpen ? "visible" : "invisible"}`} aria-hidden={!mobileOpen}>
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)}
        />
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
              <Image src="/logo.png" alt="Eurococinas" width={160} height={64} className="h-10 w-auto" />
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

              {/* Catálogo (acordeón móvil) */}
              <li>
                <button
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-semibold text-slate-800 hover:bg-slate-100"
                  aria-expanded={catalogOpen}
                  onClick={() => setCatalogOpen((s) => !s)}
                >
                  <span>Catálogo</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${catalogOpen ? "rotate-180" : ""}`} />
                </button>

                <div className={`overflow-hidden transition-[grid-template-rows] ${catalogOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} grid`}>
                  <div className="min-h-0">
                    {CATALOG.map((g) => (
                      <div key={g.title} className="px-3 pb-2">
                        <div className="mt-2 mb-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">{g.title}</div>
                        <ul className="rounded-md border bg-white">
                          {g.items.map((i) => (
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

              {/* Resto de links */}
              {LINKS.filter((l) => l.label !== "Inicio").map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href!}
                    className="block rounded-lg px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
