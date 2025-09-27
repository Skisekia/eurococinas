// components/FeaturedCategoriesClean.tsx
import Image from "next/image";
import Link from "next/link";

type Cat = { title: string; subtitle?: string; href: string; img: string };
const CATS: Cat[] = [
  { title: "Cocinas Integrales", subtitle: "Diseño a medida", href: "/cocinas/integrales", img: "/categories/cocinas.jpg" },
  { title: "Baños", subtitle: "Muebles y lavabos", href: "/banos/muebles", img: "/categories/banos.jpg" },
  { title: "Recámaras", subtitle: "Closets y vestidores", href: "/recamaras/closets", img: "/categories/recamaras.jpg" },
  { title: "Accesorios", subtitle: "Herrajes, luz y orden", href: "/accesorios/herrajes", img: "/categories/accesorios.jpg" },
];

export default function FeaturedCategoriesClean() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-12">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Categorías</h2>
        <p className="text-sm text-slate-600">Encuentra lo que necesitas</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CATS.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group rounded-2xl border bg-white p-2 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src={c.img}
                alt={c.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div className="p-3">
              <h3 className="text-base font-semibold">{c.title}</h3>
              {c.subtitle && <p className="text-xs text-slate-600">{c.subtitle}</p>}
              <span className="mt-3 inline-block rounded-full border px-3 py-1 text-xs text-slate-700 group-hover:bg-slate-50">
                Ver categoría →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
