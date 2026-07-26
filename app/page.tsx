import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Valores from "@/components/sections/Valores";
import Diferencial from "@/components/sections/Diferencial";
import Capacidades from "@/components/sections/Capacidades";
import Projetos from "@/components/sections/Projetos";
import Engenharia from "@/components/sections/Engenharia";
import Processo from "@/components/sections/Processo";
import Contato from "@/components/sections/Contato";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Manifesto />
        <Valores />
        <Diferencial />
        <Capacidades />
        <Projetos />
        <Engenharia />
        <Processo />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
