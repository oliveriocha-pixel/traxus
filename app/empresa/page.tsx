import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Empresa | TRAXUS - Ingeniería y ejecución de pisos industriales",
  description:
    "TRAXUS es una empresa mexicana especializada en la ejecución de pisos industriales de precisión para centros logísticos, cámaras de refrigeración y operaciones industriales.",
}

const comoTrabajamos = [
  "Asesoría técnica para definición del sistema de piso",
  "Capacitación a equipos de obra",
  "Supervisión de instalación",
  "Mano de obra especializada",
  "Control de planicidad, juntas y secuencia de colados",
  "Coordinación técnica durante construcción",
]

const capacidades = [
  "Empresa formalmente constituida desde 2022",
  "Cumplimiento fiscal y administrativo",
  "Registro para prestación de servicios especializados",
  "Personal capacitado para obra industrial",
  "Mano de obra especializada en pisos industriales",
  "Maquinaria propia",
  "Proveedores técnicos para insumos de pisos de concreto",
]

export default function EmpresaPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0D0D0B]">
        
        {/* QUIÉNES SOMOS */}
        <section className="pt-32 pb-24">
          <div className="max-w-[1100px] mx-auto px-8">
            <p className="font-[var(--font-ibm-mono)] text-[0.7rem] tracking-[0.2em] uppercase text-[#8A8878] mb-6">
              // Quiénes somos
            </p>
            <h1 className="font-[var(--font-barlow)] text-[clamp(2.2rem,4.5vw,3.4rem)] font-extrabold leading-[1.05] text-[#FAF7F0] mb-8">
              Ingeniería y ejecución especializada<br />
              <span className="text-[#E8A020]">en pisos industriales</span>
            </h1>
            <div className="max-w-[760px]">
              <p className="text-[1.1rem] text-[#C4C0B0] font-light leading-[1.7] mb-6">
                TRAXUS es una empresa mexicana especializada en la ejecución de pisos industriales de precisión para centros logísticos, cámaras de refrigeración y operaciones industriales.
              </p>
              <p className="text-[1.05rem] text-[#9A968A] font-light leading-[1.7]">
                Nuestro enfoque combina ingeniería, constructabilidad y ejecución en obra para entregar pisos industriales bien construidos, durables y preparados para operar bajo condiciones reales de carga, tráfico y operación continua.
              </p>
            </div>
          </div>
        </section>

        {/* Imagen de obra 1 */}
        <section className="pb-24">
          <div className="max-w-[1100px] mx-auto px-8">
            <div className="relative aspect-[21/9] bg-[#161612] overflow-hidden">
              <Image
                src="/images/casos/manufactura-aeroespacial.jpg"
                alt="Colado de piso industrial en nave de manufactura - TRAXUS"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* CÓMO TRABAJAMOS */}
        <section className="py-24 border-t border-white/[0.06]">
          <div className="max-w-[1100px] mx-auto px-8">
            <p className="font-[var(--font-ibm-mono)] text-[0.7rem] tracking-[0.2em] uppercase text-[#8A8878] mb-6">
              // Cómo trabajamos
            </p>
            <h2 className="font-[var(--font-barlow)] text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold leading-[1.1] text-[#FAF7F0] mb-6">
              Control técnico desde el diseño<br />
              <span className="text-[#E8A020]">hasta la instalación</span>
            </h2>
            <p className="text-[1.05rem] text-[#9A968A] font-light leading-[1.7] max-w-[700px] mb-12">
              Participamos desde la definición del sistema de piso hasta la ejecución en obra, cuidando los puntos que más impactan el resultado final:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
              {comoTrabajamos.map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-3 border-b border-white/[0.04]">
                  <span className="font-[var(--font-ibm-mono)] text-[0.7rem] text-[#E8A020] mt-0.5">0{i + 1}</span>
                  <p className="text-[0.95rem] text-[#C4C0B0]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Imagen de obra 2 */}
        <section className="pb-24">
          <div className="max-w-[1100px] mx-auto px-8">
            <div className="relative aspect-[21/9] bg-[#161612] overflow-hidden">
              <Image
                src="/images/casos/centro-distribucion-guadalajara.jpg"
                alt="Verificación de planicidad en piso industrial - TRAXUS"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* RESPALDO OPERATIVO */}
        <section className="py-24 border-t border-white/[0.06]">
          <div className="max-w-[1100px] mx-auto px-8">
            <p className="font-[var(--font-ibm-mono)] text-[0.7rem] tracking-[0.2em] uppercase text-[#8A8878] mb-6">
              // Respaldo operativo
            </p>
            <h2 className="font-[var(--font-barlow)] text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold leading-[1.1] text-[#FAF7F0] mb-6">
              Capacidad real para<br />
              <span className="text-[#E8A020]">ejecutar en obra</span>
            </h2>
            <div className="max-w-[760px] mb-12">
              <p className="text-[1.05rem] text-[#9A968A] font-light leading-[1.7] mb-6">
                TRAXUS cuenta con la estructura administrativa, fiscal y laboral necesaria para participar en proyectos industriales de alto nivel, cumpliendo con los requerimientos documentales y operativos solicitados por desarrolladores, contratistas generales y áreas de compras.
              </p>
              <p className="text-[1.05rem] text-[#9A968A] font-light leading-[1.7]">
                Esto nos permite integrarnos de forma ordenada a procesos de obra, alta de proveedor, control de acceso, seguridad industrial y ejecución en sitio.
              </p>
            </div>

            <div className="bg-[#161612] border border-white/[0.06] p-8">
              <p className="font-[var(--font-ibm-mono)] text-[0.65rem] tracking-[0.2em] uppercase text-[#6A665A] mb-6">
                Capacidades de respaldo
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3">
                {capacidades.map((cap, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#E8A020] rounded-full flex-shrink-0" />
                    <p className="text-[0.9rem] text-[#C4C0B0]">{cap}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Imagen de obra 3 */}
        <section className="pb-24">
          <div className="max-w-[1100px] mx-auto px-8">
            <div className="relative aspect-[21/9] bg-[#161612] overflow-hidden">
              <Image
                src="/images/casos/almacenamiento-especializado.jpg"
                alt="Nave industrial con estructura metálica y piso de concreto - TRAXUS"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* CIERRE */}
        <section className="py-24 border-t border-white/[0.06]">
          <div className="max-w-[1100px] mx-auto px-8 text-center">
            <h2 className="font-[var(--font-barlow)] text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold leading-[1.1] text-[#FAF7F0] mb-4">
              Pisos industriales de <span className="text-[#E8A020]">precisión</span>
            </h2>
            <p className="text-[1.1rem] text-[#9A968A] font-light mb-10">
              Ingeniería y ejecución para centros logísticos e industriales.
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-[#E8A020] hover:bg-[#D4920E] text-[#0D0D0B] font-[var(--font-barlow)] font-bold text-[0.85rem] tracking-[0.08em] uppercase px-10 py-4 transition-all hover:-translate-y-0.5"
            >
              Solicitar evaluación técnica
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
