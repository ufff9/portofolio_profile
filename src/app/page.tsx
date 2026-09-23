import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* SEMENTARA: hapus di Tahap 5 saat section Experience ada */}
        <div className="h-[100vh]" />
      </main>
    </>
  );
}