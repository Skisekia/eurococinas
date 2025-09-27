"use client";

const MESSAGES = [
  "Aceptamos Pagos con Tarjetas de Crédito y/o Débito",
  "Financiamiento hasta 12 meses sin intereses con tarjetas participantes",
  "Cotiza tu proyecto sin costo",
  "Envío e instalación gratis",
  "Pago Seguro a través de Mercado Pago",
  "Diseños personalizados",
];

function Items({ withSeparators = true }: { withSeparators?: boolean }) {
  return (
    <>
      {MESSAGES.map((t, i) => (
        <li key={`${t}-${i}`} className="flex items-center gap-2 whitespace-nowrap">
          <span>{t}</span>
          {withSeparators && i < MESSAGES.length - 1 && (
            <span className="opacity-40">•</span>
          )}
        </li>
      ))}
    </>
  );
}

export default function TopBar() {
  return (
    <div className="bg-black text-white">
      <div className="topbar-marquee px-4 py-2">
        {/* Un solo <ul> con el contenido duplicado */}
        <ul className="topbar-track text-xs text-white" aria-hidden="false">
          {/* 1ª mitad */}
          <Items />
          {/* 2ª mitad idéntica, SIN punto final para que embone perfecto */}
          <Items withSeparators={false} />
        </ul>
      </div>
    </div>
  );
}
