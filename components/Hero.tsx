// components/Hero.tsx
import Image from "next/image";

type Props = {
  src?: string;
  title?: string;
  subtitle?: string;
  slogan?: string;   // 👈 nuevo
  showText?: boolean;
  height?: string;
};

export default function Hero({
  src = "/categories/kitchen-hero-img.jpg",
  title = "Eurococinas",
  subtitle = "Diseños modernos · Funcionalidad · Estilo",
  slogan = "Transforma tu cocina, transforma tu vida", // 👈 slogan por defecto
  showText = true,
  height = "h-[480px]",
}: Props) {
  return (
    <section className={`relative w-full ${height}`}>
      <Image
        src={src}
        alt="Portada Eurococinas"
        fill
        priority
        className="object-cover object-center"
      />

      {/* capa oscura opcional */}
      {showText && <div className="absolute inset-0 bg-black/40" />}

      {showText && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">{title}</h1>
          <p className="mt-2 text-xl md:text-2xl font-light italic drop-shadow">
            {slogan}
          </p>
          <p className="mt-2 text-lg md:text-xl font-light drop-shadow">{subtitle}</p>
         
        </div>
      )}
    </section>
  );
}
