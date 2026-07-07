import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Logislab® VNA | TRAXUS - Pisos para Pasillos Angostos",
  description:
    "Pisos industriales con planicidad crítica para almacenes VNA de pasillos angostos. Criterios Fmin certificados por pasillo, tramos continuos hasta 60 m. Evaluación técnica gratuita.",
}

const problems = [
  {
    num: "// 01 · TOLERANCIA MÍNIMA",
    desc: "En un pasillo angosto el equipo trilateral trabaja a más de 12 m de altura. Un milímetro de desnivel en el piso se amplifica a centímetros en la horquilla superior.",
  },
  {
    num: "// 02 · Fmin, NO FF/FL",
    desc: "Los almacenes VNA se rigen por criterios Fmin definidos punto a punto en la ruta de la rueda. No basta un promedio de planicidad: cada pasillo debe cumplir.",
  },
  {
    num: "// 03 · RIESGO OPERATIVO",
    desc: "Un pasillo fuera de tolerancia obliga a bajar la velocidad del equipo, reduce la altura útil de almacenamiento y compromete la seguridad de la operación.",
  },
  {
    num: "// VNA — SOLUCIÓN",
    desc: "Logislab® VNA diseña y certifica la planicidad Fmin pasillo por pasillo, con tramos continuos de hasta 60 m sin junta bajo la ruta crítica de la rueda.",
    solution: true,
  },
]

const systemFeatures = [
  "Criterios Fmin definidos y certificados de forma individual por cada pasillo",
  "Tramos continuos de hasta 60 m sin junta de control bajo la ruta de la rueda",
  "Diseño de planicidad compatible con equipos trilaterales y transelevadores",
  "Medición topográfica documentada punto a punto sobre la ruta crítica",
  "Coordinación con el layout de racking antes del colado para alinear tolerancias",
]

const benefits = [
  {
    title: "Impacto operativo",
    items: [
      "Equipo trilateral opera a velocidad nominal sin restricciones",
      "Aprovechamiento total de la altura de almacenamiento",
      "Sin correcciones de piso posteriores al montaje de racks",
      "Operación segura a gran altura con planicidad garantizada",
    ],
  },
  {
    title: "Impacto financiero",
    items: [
      "Se evita el retrabajo de nivelación tras instalar el racking",
      "Mayor densidad de almacenamiento por metro cuadrado construido",
      "Sin pérdida de productividad por equipos operando a baja velocidad",
      "Certificación que respalda la garantía del proveedor de equipo",
    ],
  },
]

const useCases = [
  "El almacén usa equipos trilaterales o transelevadores en pasillos angostos",
  "La operación exige aprovechar la altura máxima con racks de gran elevación",
  "El proveedor del equipo solicita certificación de planicidad Fmin por pasillo",
  "El proyecto no admite retrabajos de nivelación una vez montado el racking",
  "La seguridad a gran altura depende directamente de la planicidad del piso",
]

export default function VnaPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="py-24 pt-28 bg-[#161612] border-b border-white/[0.08]">
          <div className="max-w-[1180px] mx-auto px-8">
            {/* Breadcrumb */}
            <div className="font-[var(--font-ibm-mono)] text-[0.68rem] tracking-[0.1em] uppercase text-[rgba(240,234,214,0.4)] mb-5 flex items-center gap-2">
              <Link href="/" className="hover:text-[#E8A020]">Inicio</Link>
              <span className="text-[rgba(240,234,214,0.3)]">/</span>
              <Link href="/#soluciones" className="hover:text-[#E8A020]">Soluciones</Link>
              <span className="text-[rgba(240,234,214,0.3)]">/</span>
              <span className="text-[rgba(240,234,214,0.6)]">Logislab® VNA</span>
            </div>

            <span className="inline-flex items-center gap-2 bg-[rgba(232,160,32,0.12)] border border-[rgba(232,160,32,0.3)] rounded-sm px-3 py-1.5 font-[var(--font-ibm-mono)] text-[0.67rem] tracking-[0.15em] text-[#E8A020] uppercase mb-5">
              Nicho técnico — Logislab® VNA
            </span>

            <h1 className="font-[var(--font-barlow)] text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-none text-[#FAF7F0] mb-5">
              En pasillos angostos,<br />un milímetro define<br /><em className="not-italic text-[#E8A020]">si el sistema funciona.</em>
            </h1>

            <p className="text-[1.05rem] text-[rgba(240,234,214,0.65)] font-light leading-relaxed max-w-[620px] mb-4">
              A más de 12 metros de altura, el equipo trilateral amplifica cualquier desnivel del piso. Lo que en la losa es un milímetro, en la horquilla superior son centímetros. Por eso un almacén VNA no se rige por un promedio de planicidad, sino por criterios Fmin punto a punto.
            </p>
            <p className="text-[1.05rem] text-[rgba(240,234,214,0.65)] font-light leading-relaxed max-w-[620px] mb-7">
              Logislab® VNA diseña y certifica la planicidad <strong className="text-[#F0EAD6]">pasillo por pasillo</strong>, con tramos continuos de hasta 60 m sin junta bajo la ruta crítica de la rueda.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contacto"
                className="inline-block bg-[#E8A020] hover:bg-[#F5C05A] text-[#161612] font-[var(--font-barlow)] font-extrabold text-[0.95rem] tracking-[0.06em] uppercase px-8 py-3.5 rounded transition-all hover:-translate-y-0.5"
              >
                Diseñar mi Almacén VNA
              </Link>
              <span className="text-[0.75rem] text-[#8A8878] font-[var(--font-ibm-mono)]">
                Evaluación técnica gratuita · 48 h
              </span>
            </div>
          </div>
        </section>

        {/* Image */}
        <section className="bg-[#161612] border-b border-white/[0.08]">
          <div className="max-w-[1180px] mx-auto px-8 py-12">
            <div className="relative w-full h-[420px] rounded-lg overflow-hidden border border-white/[0.08]">
              <Image
                src="/images/casos/logistico-jalisco.jpg"
                alt="Almacén de pasillos angostos con racks de gran altura sobre piso industrial de planicidad certificada Logislab VNA"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161612]/70 to-transparent" />
            </div>
          </div>
        </section>

        {/* Problem Cycle */}
        <section className="py-20 bg-[#1E1E18] border-b border-white/[0.08]">
          <div className="max-w-[1180px] mx-auto px-8">
            <h3 className="font-[var(--font-barlow)] text-xl font-bold text-[#FAF7F0] mb-6">
              Por qué la planicidad es crítica en VNA
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.08] border border-white/[0.08] rounded-lg overflow-hidden">
              {problems.map((step, i) => (
                <div
                  key={i}
                  className={`p-6 ${step.solution ? "bg-[rgba(232,160,32,0.1)] border border-[rgba(232,160,32,0.25)]" : "bg-white/[0.025]"}`}
                >
                  <div className={`font-[var(--font-ibm-mono)] text-[0.62rem] tracking-[0.2em] uppercase mb-2 ${step.solution ? "text-[#E8A020]" : "text-[#8A8878]"}`}>
                    {step.num}
                  </div>
                  <p className={`text-[0.9rem] leading-relaxed ${step.solution ? "text-[#F0EAD6]" : "text-[rgba(240,234,214,0.65)]"}`}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20 bg-[#161612] border-b border-white/[0.08]">
          <div className="max-w-[1180px] mx-auto px-8">
            <h3 className="font-[var(--font-barlow)] text-2xl font-extrabold text-[#FAF7F0] mb-6">
              Cómo funciona el sistema
            </h3>
            <p className="text-base font-light text-[rgba(240,234,214,0.65)] leading-relaxed max-w-[620px] mb-7">
              Logislab® VNA parte del layout de racking y de los criterios Fmin del equipo. Diseñamos la planicidad sobre la ruta exacta de la rueda, colamos en tramos continuos y certificamos cada pasillo con medición topográfica documentada.
            </p>

            <div className="flex flex-col gap-3 mb-10">
              {systemFeatures.map((feature, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white/[0.025] border border-[rgba(232,160,32,0.2)] rounded">
                  <span className="text-[#E8A020] shrink-0">&rarr;</span>
                  <p className="text-[0.9rem] text-[rgba(240,234,214,0.75)]">{feature}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {benefits.map((b, i) => (
                <div key={i} className="bg-white/[0.025] border border-[rgba(232,160,32,0.25)] rounded-lg p-5">
                  <h4 className="font-[var(--font-barlow)] font-bold text-sm tracking-[0.1em] uppercase text-[#E8A020] mb-4">
                    {b.title}
                  </h4>
                  <ul className="list-none">
                    {b.items.map((item, j) => (
                      <li key={j} className="text-sm text-[rgba(240,234,214,0.75)] py-1.5 flex items-start gap-2">
                        <span className="text-[#E8A020] shrink-0">&rarr;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases + CTA */}
        <section className="py-20 bg-[#161612]">
          <div className="max-w-[1180px] mx-auto px-8">
            <h3 className="font-[var(--font-barlow)] text-xl font-bold text-[#FAF7F0] mb-6">
              Logislab® VNA es la solución correcta cuando:
            </h3>
            <ul className="list-none max-w-[680px] mb-10">
              {useCases.map((uc, i) => (
                <li key={i} className="text-sm text-[rgba(240,234,214,0.75)] py-1.5 flex items-start gap-2">
                  <span className="text-[#E8A020] shrink-0">&rarr;</span>
                  {uc}
                </li>
              ))}
            </ul>

            <div className="p-7 bg-white/[0.025] border border-[rgba(232,160,32,0.4)] rounded-lg max-w-[640px]">
              <p className="text-[0.95rem] text-[rgba(240,234,214,0.7)] mb-2.5 leading-relaxed">
                ¿Tiene un proyecto de almacén VNA en diseño? Compártanos el layout de racking, el equipo trilateral previsto y los criterios Fmin requeridos. Le entregamos una propuesta técnica de piso en 48 horas.
              </p>
              <p className="text-[0.72rem] text-[#8A8878] font-[var(--font-ibm-mono)] mb-4">
                Evaluación técnica gratuita · Respuesta en 48 h hábiles
              </p>
              <Link
                href="/contacto"
                className="inline-block bg-[#E8A020] hover:bg-[#F5C05A] text-[#161612] font-[var(--font-barlow)] font-extrabold text-[0.95rem] tracking-[0.06em] uppercase px-8 py-3.5 rounded transition-all hover:-translate-y-0.5"
              >
                Diseñar mi Almacén VNA →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
