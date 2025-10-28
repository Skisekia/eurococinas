//rutas de la app
import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import FeaturedCategories from "../components/FeaturedCategories";
import Reviews from "../components/Reviews";
import pool from "../lib/db"; 

// esto es una página de servidor (server component)
// por lo que podemos usar código de servidor aquí
// como consultas a la base de datos
export default async function Page() {
  const client = await pool.connect();
  // obtener el slogan del héroe desde la base de datos
  let slogan = "Cocinas que inspiran";

  // consulta segura usando parámetros
  try {
    const { rows } = await client.query(
      "select value from site_settings where key = $1 limit 1",
      ["hero_slogan"]
    );
    if (rows.length > 0) slogan = rows[0].value;
  } finally {
    client.release();
  }

  // renderizamos los componentes de la página
  return (
    <>
      <TopBar />
      <Hero slogan={slogan} />
      <Benefits />
      <FeaturedCategories />
      <Reviews />
      <main className="min-h-[5vh] bg-white" />
    </>
  );
}
