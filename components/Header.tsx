"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Search, User, ShoppingCart } from "lucide-react";

type Item = { label: string; href: string };
type Nav = { label: string; href?: string; children?: Item[] };

const NAV: Nav[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Recamara",
    children: [
      { label: "Closets", href: "/recamaras/closets" },
      { label: "Vestidores", href: "/recamaras/vestidores" },
      { label: "Tocadores", href: "/recamaras/tocadores" },
    ],
  },
  {
    label: "Baños",
    children: [
      { label: "Lavabos", href: "/banos/lavabos" },
      { label: "Muebles para baño", href: "/banos/muebles-para-bano" },
      { label: "Repisas", href: "/banos/repisas" },
    ],
  },
  {
    label: "Cocinas Integrales",
    children: [
      { label: "Mesas", href: "/cocinas/mesas" },
      { label: "Sillas", href: "/cocinas/sillas" },
      { label: "Bancos", href: "/cocinas/bancos" },
    ],
  },
  { label: "Accesorios", href: "/accesorios" },
  { label: "Promociones", href: "/promociones" },
  { label: "Contacto", href: "/contacto" },
  { label: "Sucursales", href: "/sucursales" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-neutral-100/90 backdrop-blur">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex h-20 items-center justify-between gap-6">
          {/* Logo + nombre */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            {/* /public/logo.svg (o .png) */}
            <Image src="/logo.png" alt="Eurococinas" width={220} height={90} className="h-50 w-auto" priority />
          </Link>

          {/* Menú horizontal */}
          <nav className="flex-1">
            <ul className="m-0 flex list-none items-center justify-start gap-7 p-0">
              {NAV.map((item) =>
                item.children ? (
                  <li key={item.label} className="relative group">
                    <button className="inline-flex items-center gap-1 text-sm font-semibold text-slate-800 hover:text-slate-900">
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {/* Dropdown */}
                    <div className="invisible absolute left-0 top-full mt-3 w-64 overflow-hidden rounded-xl border bg-white shadow-lg opacity-0 transition group-hover:visible group-hover:opacity-100">
                      <ul className="m-0 list-none p-2">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      href={item.href!}
                      className="text-sm font-semibold text-slate-800 hover:text-slate-900"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Iconos a la derecha */}
          <div className="flex items-center gap-5">
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
    </header>
  );
}
