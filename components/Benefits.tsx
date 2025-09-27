import { Ruler, MessageCircle, CreditCard, Truck, Wrench, ShieldCheck } from "lucide-react";

type Benefit = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

const BENEFITS: Benefit[] = [
  {
    icon: <Ruler className="h-6 w-6" />,
    title: "Diseño a medida",
    desc: "Proyectos personalizados para tu espacio y presupuesto.",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Asesoría experta",
    desc: "Te guiamos por WhatsApp o en sucursal durante todo el proceso.",
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Varios métodos de pago",
    desc: "Tarjeta, transferencias y meses sin intereses participantes.",
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: "Envío e instalación",
    desc: "Cobertura local con instalación profesional incluida.",
  },
  // si quieres 6 items, descomenta estos:
  // {
  //   icon: <Wrench className="h-6 w-6" />,
  //   title: "Fabricación y acabados",
  //   desc: "Materiales de alta calidad y herrajes de marca.",
  // },
  // {
  //   icon: <ShieldCheck className="h-6 w-6" />,
  //   title: "Garantía y soporte",
  //   desc: "Garantía en estructura y seguimiento post-venta.",
  // },
];

export default function Benefits() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-10 md:py-14">
        <h2 className="text-center text-2xl md:text-3xl font-semibold">
          Conoce los beneficios de comprar en Eurococinas
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Todo lo que necesitas para tu cocina, baño o recámara en un solo lugar
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-2xl border bg-white p-6 text-center shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-900">
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
