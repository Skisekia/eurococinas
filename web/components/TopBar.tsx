export default function TopBar() {
  const items = [
    "Pago Seguro a través de Mercado Pago", "Diseños personalizados",
    "Aceptamos Pagos con Tarjetas de Crédito y/o Débito",
    "Financiamiento hasta 12 meses sin intereses con tarjetas participantes",
    "Cotiza tu proyecto sin costo", "Envío e instalación gratis ",
  ];

  const Track = ({ hidden = false }: { hidden?: boolean }) => (
    <ul aria-hidden={hidden} className="marquee__track text-xs text-white">
      {items.map((t, i) => (
        <li key={i} className="whitespace-nowrap flex items-center gap-2">
          <span>{t}</span>
          <span className={`opacity-40 ${i === items.length - 1 ? "hidden" : ""}`}>•</span>
        </li>
      ))}
    </ul>
  );

  return (
    // Fondo negro + texto blanco a todo lo ancho
    <div className="bg-black text-white">
      {/* El contenedor marquee hace el scroll infinito */}
      <div className="marquee px-4 py-2">
        <Track />
        {/* Duplicado para continuidad del scroll */}
        <Track hidden />
      </div>
    </div>
  );
}
