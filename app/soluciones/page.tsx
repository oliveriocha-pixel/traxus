import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SolutionsSection } from "@/components/home/solutions-section"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Soluciones por tipo de operación | TRAXUS - Pisos Industriales",
  description:
    "Tres versiones del sistema Logislab® según su operación: Freeze para cámaras de refrigeración, CEDI para centros de distribución y VNA para pasillos angostos.",
}

export default function SolucionesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#161612] border-b border-white/[0.08]">
          <div className="max-w-[1180px] mx-auto px-8">
            <div className="font-[var(--font-ibm-mono)] text-[0.68rem] tracking-[0.1em] uppercase text-[rgba(240,234,214,0.4)] mb-5 flex items-center gap-2">
              <Link href="/" className="hover:text-[#E8A020]">Inicio</Link>
              <span className="text-[rgba(240,234,214,0.3)]">/</span>
              <span className="text-[rgba(240,234,214,0.6)]">Soluciones</span>
            </div>

            <span className="font-[var(--font-ibm-mono)] text-[0.7rem] tracking-[0.18em] uppercase text-[#E8A020] mb-4 block">
              // Soluciones por tipo de operación
            </span>
            <h1 className="font-[var(--font-barlow)] text-[clamp(2.2rem,4.5vw,3.4rem)] font-extrabold leading-[1.05] text-[#FAF7F0] mb-5 max-w-[820px]">
              El mismo sistema Logislab®,<br />
              <span className="text-[#E8A020]">tres versiones según su operación.</span>
            </h1>
            <p className="text-[1.05rem] text-[rgba(240,234,214,0.65)] font-light leading-relaxed max-w-[640px]">
              Cada operación tiene un punto crítico distinto: el frío, el tráfico intensivo o la planicidad milimétrica. Elija el punto de partida y le mostramos la versión de Logislab® diseñada para resolverlo.
            </p>
          </div>
        </section>

        {/* Reutiliza la sección de soluciones del Home (misma fuente, mismos links) */}
        <SolutionsSection />
      </main>
      <Footer />
    </>
  )
}
