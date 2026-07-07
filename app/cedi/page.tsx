import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Logislab® CEDI | TRAXUS - Pisos para Centros de Distribución",
  description:
    "Pisos industriales sin juntas para centros de distribución con tráfico intensivo y automatización. Losas hasta 40 × 40 m, FF50/FL50+ certificado. Evaluación técnica gratuita.",
}

const problems = [
  {
    num: "// 01 · TRÁFICO ALEATORIO",
    desc: "En un CEDI el montacargas no sigue un pasillo fijo. Cruza juntas en todas direcciones, todo el día. Cada cruce es un impacto sobre el borde de la junta.",
  },
  {
    num: "// 02 · DETERIORO DE BORDES",
    desc: "Las juntas de control se desconchan bajo tráfico intensivo. El borde se rompe, el sellado se sale y el montacargas empieza a golpear en cada paso.",
  },
  {
    num: "// 03 · PARO OPERATIVO",
    desc: "Reparar una junta en un CEDI activo significa cerrar un pasillo, desviar el flujo y perder horas de operación en la temporada de mayor demanda.",
  },
  {
    num: "// CEDI — SOLUCIÓN",
    desc: "Logislab® CEDI elimina las juntas de control en las zonas operativas. Losas continuas de hasta 40 × 40 m: sin bordes expuestos, sin ciclo de reparación.",
    solution: true,
  },
]

const systemFeatures = [
  "Losas continuas de hasta 40 × 40 m sin junta de control en zonas de tráfico",
  "Planicidad FF50/FL50+ medida y certificada en el 100% de la superficie",
  "Diseño estructural a partir de la carga puntual real de racks y montacargas",
  "Superficie compatible con AutoStore, Geek+, AMR y AGV sin ajustes correctivos",
  "Acabado de alta resistencia a la abrasión para operación de múltiples turnos",
]

const benefits = [
  {
    title: "Impacto operativo",
    items: [
      "Sin paros por reparación de juntas en temporada alta",
      "Montacargas operan a velocidad sin frenar en cada junta",
      "Planicidad estable para sistemas automatizados",
      "Superficie continua fácil de limpiar y mantener",
    ],
  },
  {
    title: "Impacto financiero",
    items: [
      "Eliminación del ciclo de resellado y reparación de bordes",
      "Menor desgaste de ruedas y equipo de manejo de materiales",
      "Sin pérdida de productividad por pasillos cerrados",
      "Costo total de operación a 10 años significativamente menor",
    ],
  },
]

const useCases = [
  "El centro opera con tráfico intensivo de montacargas en múltiples turnos",
  "Hay racks selectivos de alta densidad o sistemas de almacenamiento automatizado",
  "El flujo de la operación no puede detenerse para dar mantenimiento al piso",
  "Se planea instalar AutoStore, Geek+, AMR o AGV que exigen planicidad certificada",
  "La operación anterior ya presentó deterioro de juntas bajo tráfico continuo",
]

export default function CediPage() {
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
              <span className="text-[rgba(240,234,214,0.6)]">Logislab® CEDI</span>
            </div>

            <span className="inline-flex items-center gap-2 bg-[rgba(232,160,32,0.12)] border border-[rgba(232,160,32,0.3)] rounded-sm px-3 py-1.5 font-[var(--font-ibm-mono)] text-[0.67rem] tracking-[0.15em] text-[#E8A020] uppercase mb-5">
              ★ Segmento principal — Logislab® CEDI
            </span>

            <h1 className="font-[var(--font-barlow)] text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-none text-[#FAF7F0] mb-5">
              En un CEDI, el piso<br />no falla por la carga.<br /><em className="not-italic text-[#E8A020]">Falla en las juntas.</em>
            </h1>

            <p className="text-[1.05rem] text-[rgba(240,234,214,0.65)] font-light leading-relaxed max-w-[620px] mb-4">
              El tráfico de un centro de distribución es aleatorio e intensivo. Los montacargas cruzan juntas en todas direcciones, todo el día. Cada cruce desgasta el borde, hasta que la junta se rompe y la operación empieza a golpear en cada paso.
            </p>
            <p className="text-[1.05rem] text-[rgba(240,234,214,0.65)] font-light leading-relaxed max-w-[620px] mb-7">
              Logislab® CEDI elimina las juntas de control en las zonas operativas. Losas continuas de hasta 40 × 40 m, con planicidad certificada para <strong className="text-[#F0EAD6]">automatización de alta densidad.</strong>
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contacto"
                className="inline-block bg-[#E8A020] hover:bg-[#F5C05A] text-[#161612] font-[var(--font-barlow)] font-extrabold text-[0.95rem] tracking-[0.06em] uppercase px-8 py-3.5 rounded transition-all hover:-translate-y-0.5"
              >
                Cotizar mi Centro de Distribución
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
                src="/images/casos/centro-distribucion.jpg"
                alt="Centro de distribución con racks selectivos de alta densidad sobre piso industrial continuo Logislab CEDI"
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
              Por qué las juntas fallan primero en un CEDI
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
              Logislab® CEDI diseña el piso a partir de las cargas reales de su operación — no de una regla estándar. La losa continua distribuye el tráfico sin bordes expuestos, y la planicidad se certifica para que la automatización funcione desde el primer día.
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
              Logislab® CEDI es la solución correcta cuando:
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
                ¿Tiene un centro de distribución en planeación o ampliación? Compártanos superficie, tipo de racks, equipos de manejo y nivel de automatización. Le entregamos una propuesta técnica de piso en 48 horas.
              </p>
              <p className="text-[0.72rem] text-[#8A8878] font-[var(--font-ibm-mono)] mb-4">
                Evaluación técnica gratuita · Respuesta en 48 h hábiles
              </p>
              <Link
                href="/contacto"
                className="inline-block bg-[#E8A020] hover:bg-[#F5C05A] text-[#161612] font-[var(--font-barlow)] font-extrabold text-[0.95rem] tracking-[0.06em] uppercase px-8 py-3.5 rounded transition-all hover:-translate-y-0.5"
              >
                Cotizar mi Centro de Distribución →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
