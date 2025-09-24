import TopBar from "../components/TopBar";
import Header from "../components/Header";

export default function Page() {
  return (
    <>
      <TopBar />
      <Header />
      {/* espacio temporal para ver el header pegado */}
    
      <main className="h-[140vh] bg-white" />
    </>
  );
}
