// components/Benefits.tsx
import { Ruler, MessageCircle, CreditCard, Truck } from "lucide-react";

type Benefit = { icon: React.ReactNode; title: string; desc: string; };

const BENEFITS: Benefit[] = [
  { icon: <Ruler className="h-6 w-6" />, title: "Diseño a medida", desc: "Proyectos personalizados para tu espacio y presupuesto." },
  { icon: <MessageCircle className="h-6 w-6" />, title: "Asesoría experta", desc: "Te guiamos por WhatsApp o en sucursal durante todo el proceso." },
  { icon: <CreditCard className="h-6 w-6" />, title: "Varios métodos de pago", desc: "Tarjeta, transferencias y meses sin intereses participantes." },
  { icon: <Truck className="h-6 w-6" />, title: "Envío e instalación", desc: "Cobertura local con instalación profesional incluida." },
];

export default function Benefits() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-8 md:py-10">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-1">
          Conoce los beneficios de comprar en Eurococinas
        </h2>
        <p className="text-center text-sm text-slate-600">
          Todo lo que necesitas para tu cocina, baño o recámara en un solo lugar
        </p>

        <div className="mt-6 grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <div key={i} className="flex flex-col items-center rounded-2xl border bg-white p-5 text-center shadow-sm">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-900">
                {b.icon}
              </div>
              <h3 className="text-base font-semibold">{b.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
