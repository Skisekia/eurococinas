// components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t bg-neutral-50">
      <div className="mx-auto max-w-[1400px] px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Marca */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Eurococinas"
                width={180}
                height={72}
                className="h-12 w-auto"
                priority={false}
              />
            </Link>
            <p className="mt-4 text-sm text-slate-600">
              Diseñamos y fabricamos cocinas, baños y mobiliario a la medida con
              materiales de alta calidad.
            </p>
          </div>

          {/* Catálogo */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">
              Catálogo
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li><Link href="/cocinas/integrales" className="hover:underline">Cocinas integrales</Link></li>
              <li><Link href="/banos/muebles-para-bano" className="hover:underline">Muebles para baño</Link></li>
              <li><Link href="/recamaras/closets" className="hover:underline">Closets</Link></li>
              <li><Link href="/accesorios" className="hover:underline">Accesorios</Link></li>
              <li><Link href="/promociones" className="hover:underline">Promociones</Link></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">
              Empresa
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li><Link href="/sucursales" className="hover:underline">Sucursales</Link></li>
              <li><Link href="/contacto" className="hover:underline">Contacto</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
              <li><Link href="https://www.facebook.com/EurococinasLaguna/reviews" target="_blank" className="hover:underline">Reseñas en Facebook</Link></li>
            </ul>
          </div>

          {/* Área de empleados / Intranet */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">
              Área de empleados
            </h3>

            <p className="mt-4 text-sm text-slate-600">
              Accede a la intranet para ver pedidos, materiales y agenda.
            </p>

            {/* Variante simple: botón a /intranet (página protegida) */}
            <Link
              href="/intranet"
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg border bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Entrar a la Intranet
            </Link>

            {/* Variante con formulario básico (si quieres credenciales locales) */}
            {/* 
            <form action="/api/auth/login" method="post" className="mt-4 space-y-3">
              <input
                type="email"
                name="email"
                placeholder="correo@empresa.com"
                className="w-full rounded-lg border px-3 py-2 text-sm"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full rounded-lg border px-3 py-2 text-sm"
                required
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Iniciar sesión
              </button>
            </form>
            */}
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-6 py-5 text-center text-xs text-slate-500 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Eurococinas. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="/aviso-de-privacidad" className="hover:underline">Aviso de privacidad</Link>
            <Link href="/terminos" className="hover:underline">Términos y condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
