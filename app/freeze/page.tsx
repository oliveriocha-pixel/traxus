import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Logislab® Freeze | TRAXUS - Pisos para Cámaras de Refrigeración",
  description: "El único sistema de piso sin juntas diseñado para cámaras de refrigeración en México. Hasta -30°C en operación continua. Evaluación gratuita.",
}

const cycleSteps = [
  { num: "// 01 · AÑO 0–1", desc: "La junta funciona como fue diseñada. El sellado está intacto. Todo parece bien — pero el ciclo ya comenzó.", solution: false },
  { num: "// 02 · AÑO 1–3", desc: "El sellado trabaja en su límite de deformación. Se degrada en 12–18 meses. Los bordes empiezan a desconcharse bajo el impacto del tráfico en frío.", solution: false },
  { num: "// 03 · AÑO 3–5", desc: "Primer resellado — costo directo + paro. La junta abierta permite migración de humedad. El suelo se congela. La losa pierde planicidad.", solution: false },
  { num: "// 04 · AÑO 5–8", desc: "Los montacargas golpean irregularidades. Se acelera el deterioro. Aparecen grietas. En entornos alimentarios o farmacéuticos: ya es una auditoría.", solution: false },
  { num: "// 05 · DIAGNÓSTICO", desc: "Este ciclo no es mala ejecución. Es la consecuencia predecible del diseño convencional aplicado a un entorno para el que no fue pensado.", solution: false },
  { num: "// FREEZE — SOLUCIÓN", desc: "Logislab® Freeze no mejora el sellado. Elimina las juntas de control. Losa continua que distribuye tensiones térmicas sin puntos débiles. Hasta −30°C.", solution: true },
]

const systemFeatures = [
  "Dosificación especial de concreto con baja retracción para entornos de temperatura variable",
  "Refuerzo con fibras de alto desempeño que controlan la microfisuración de la losa",
  "Colado en grandes paneles continuos — sin junta de control en zonas operativas críticas",
  "Curado controlado que minimiza la retracción inicial y el curling de bordes",
  "Coordinación con el sistema de aislamiento térmico del piso para garantizar compatibilidad total",
]

const benefits = [
  {
    title: "Impacto operativo",
    items: [
      "Cero paros por deterioro de juntas o resellado",
      "Montacargas operan sin vibraciones por irregularidades",
      "Planicidad sostenida durante toda la vida útil",
      "Temperatura de cámara estable — sin filtraciones",
    ],
  },
  {
    title: "Impacto financiero",
    items: [
      "Eliminación del costo de resellado anual (80–150 MXN/ml/año)",
      "Sin costo de reparación de bordes desconchos",
      "Sin paros de operación por mantenimiento de piso",
      "Costo total de operación a 10 años significativamente menor",
    ],
  },
]

const useCases = [
  "La cámara opera por debajo de −5°C de manera continua o en ciclos frecuentes",
  "El tráfico de montacargas en frío es intensivo — más de un turno por día",
  "La operación no puede tolerar interrupciones por mantenimiento de piso",
  "El piso está especificado para estándares de higiene (alimentaria, farmacéutica)",
  "El proyecto incluye sistemas automatizados en entorno de temperatura controlada",
  "El cliente ya tuvo problemas con juntas en una cámara anterior",
]

const faqs = [
  { q: "¿Cuál es la temperatura mínima de operación?", a: "El sistema fue diseñado para entornos de hasta −30°C con ciclos de variación térmica frecuentes. Las especificaciones exactas se definen durante el proceso de diseño de ingeniería." },
  { q: "¿Cómo se coordina con el sistema de calefacción de suelo?", a: "El diseño de la losa se desarrolla en coordinación con el sistema de gestión térmica del suelo — ya sea calefacción eléctrica o por fluido. Nuestro equipo trabaja junto al diseñador de la cámara para garantizar compatibilidad." },
  { q: "¿Logislab® Freeze tiene juntas de construcción?", a: "Sí. Logislab® Freeze elimina las juntas de control. Las juntas de construcción existen, pero se diseñan y ubican en posiciones donde el impacto operativo es mínimo." },
  { q: "¿Cuánto tiempo adicional tiene el proceso?", a: "El proceso de diseño e ingeniería requiere 1–2 semanas adicionales. En obra, los tiempos son similares. Este tiempo se recupera en la primera temporada de operación al eliminar el primer mantenimiento de juntas." },
]

export default function FreezePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-[#062F4A] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,rgba(13,133,196,0.18)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative z-10 py-24 pt-28 border-b border-white/[0.08]">
            <div className="max-w-[1180px] mx-auto px-8">
              {/* Breadcrumb */}
              <div className="font-[var(--font-ibm-mono)] text-[0.68rem] tracking-[0.1em] uppercase text-[rgba(224,242,255,0.4)] mb-5 flex items-center gap-2">
                <Link href="/" className="hover:text-[#E8A020]">Inicio</Link>
                <span className="text-[rgba(224,242,255,0.3)]">/</span>
                <Link href="/#soluciones" className="hover:text-[#E8A020]">Soluciones</Link>
                <span className="text-[rgba(224,242,255,0.3)]">/</span>
                <span className="text-[rgba(224,242,255,0.6)]">Logislab® Freeze</span>
              </div>

              <div className="inline-flex items-center gap-2 bg-[rgba(11,111,164,0.25)] border border-[rgba(13,133,196,0.5)] rounded-sm px-4 py-1.5 font-[var(--font-ibm-mono)] text-[0.68rem] tracking-[0.15em] text-[#7CC8F0] uppercase mb-5">
                ★★ Producto Estrella — Logislab® Freeze
              </div>
              
              <h1 className="font-[var(--font-barlow)] text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-none text-[#E0F2FF] mb-5">
                En frío, las juntas<br />no se deterioran<br />lentamente.<br /><em className="not-italic text-[#0D85C4]">Se deterioran rápido.</em>
              </h1>
              
              <p className="text-base font-light text-[rgba(224,242,255,0.65)] leading-relaxed max-w-[620px] mb-4">
                Cada ciclo de congelamiento y descongelamiento somete las juntas de control a movimientos que ningún sellado resiste indefinidamente. El suelo se congela bajo la losa. La planicidad se pierde. Los montacargas operan con impacto y la operación se vuelve inestable.
              </p>
              <p className="text-base font-light text-[rgba(224,242,255,0.65)] leading-relaxed max-w-[620px] mb-7">
                Logislab® Freeze fue diseñado para eliminar ese ciclo desde su origen. No para gestionarlo — para que <strong className="text-[#E0F2FF]">no exista.</strong>
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contacto"
                  className="inline-block bg-[#0D85C4] hover:bg-[#1a95d4] text-[#E0F2FF] font-[var(--font-barlow)] font-extrabold text-[0.95rem] tracking-[0.06em] uppercase px-8 py-3.5 rounded transition-colors"
                >
                  Solicitar Ingeniería para tu Cámara de Refrigeración
                </Link>
                <span className="text-[0.75rem] text-[rgba(124,200,240,0.6)] font-[var(--font-ibm-mono)]">
                  Evaluación técnica gratuita · 48 h
                </span>
              </div>
            </div>
          </div>

          {/* Cycle Section */}
          <div className="relative z-10 py-20 border-b border-white/[0.08]">
            <div className="max-w-[1180px] mx-auto px-8">
              <h3 className="font-[var(--font-barlow)] text-xl font-bold text-[#E0F2FF] mb-6">
                El ciclo destructivo que Logislab® Freeze interrumpe
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-lg overflow-hidden">
                {cycleSteps.map((step, i) => (
                  <div
                    key={i}
                    className={`p-5 ${
                      step.solution
                        ? "bg-[rgba(13,133,196,0.12)] border border-[rgba(13,133,196,0.25)]"
                        : "bg-[rgba(6,47,74,0.6)]"
                    }`}
                  >
                    <div className={`font-[var(--font-ibm-mono)] text-[0.62rem] tracking-[0.2em] uppercase mb-2 ${step.solution ? "text-[#7CC8F0]" : "text-[#0D85C4]"}`}>
                      {step.num}
                    </div>
                    <p className={`text-[0.85rem] leading-relaxed ${step.solution ? "text-[rgba(224,242,255,0.9)]" : "text-[rgba(224,242,255,0.65)]"}`}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How it Works */}
          <div className="relative z-10 py-20 border-b border-white/[0.08]">
            <div className="max-w-[1180px] mx-auto px-8">
              <h3 className="font-[var(--font-barlow)] text-2xl font-extrabold text-[#E0F2FF] mb-6">
                Cómo funciona el sistema
              </h3>
              <p className="text-base font-light text-[rgba(224,242,255,0.65)] leading-relaxed max-w-[620px] mb-7">
                Logislab® Freeze no mejora el sellado de las juntas. Elimina las juntas de control. La losa actúa como una superficie continua que distribuye las tensiones térmicas de manera homogénea, sin puntos débiles concentrados.
              </p>

              <div className="flex flex-col gap-3 mb-10">
                {systemFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-[rgba(6,47,74,0.6)] border border-[rgba(13,133,196,0.2)] rounded">
                    <span className="text-[#0D85C4] shrink-0">&rarr;</span>
                    <p className="text-[0.9rem] text-[rgba(224,242,255,0.75)]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {benefits.map((b, i) => (
                  <div key={i} className="bg-[rgba(6,47,74,0.6)] border border-[rgba(13,133,196,0.25)] rounded-lg p-5">
                    <h4 className="font-[var(--font-barlow)] font-bold text-sm tracking-[0.1em] uppercase text-[#7CC8F0] mb-4">
                      {b.title}
                    </h4>
                    <ul className="list-none">
                      {b.items.map((item, j) => (
                        <li key={j} className="text-sm text-[rgba(224,242,255,0.75)] py-1.5 flex items-start gap-2">
                          <span className="text-[#0D85C4] shrink-0">&rarr;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Use Cases & FAQs */}
          <div className="relative z-10 py-20">
            <div className="max-w-[1180px] mx-auto px-8">
              <h3 className="font-[var(--font-barlow)] text-xl font-bold text-[#E0F2FF] mb-6">
                Logislab® Freeze es la solución correcta cuando:
              </h3>
              <ul className="list-none max-w-[680px] mb-10">
                {useCases.map((uc, i) => (
                  <li key={i} className="text-sm text-[rgba(224,242,255,0.75)] py-1.5 flex items-start gap-2">
                    <span className="text-[#0D85C4] shrink-0">&rarr;</span>
                    {uc}
                  </li>
                ))}
              </ul>

              <h3 className="font-[var(--font-barlow)] text-xl font-bold text-[#E0F2FF] mb-5">
                Preguntas técnicas frecuentes
              </h3>
              {faqs.map((faq, i) => (
                <div key={i} className="border-t border-white/[0.08] py-5">
                  <h4 className="font-[var(--font-barlow)] font-bold text-base text-[#B8DFFF] mb-2">
                    {faq.q}
                  </h4>
                  <p className="text-sm text-[rgba(224,242,255,0.6)] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}

              {/* CTA Box */}
              <div className="p-7 bg-[rgba(6,47,74,0.7)] border border-[rgba(13,133,196,0.4)] rounded-lg max-w-[640px] mt-10">
                <p className="text-[0.95rem] text-[rgba(224,242,255,0.7)] mb-2.5 leading-relaxed">
                  ¿Tiene un proyecto de cámara de refrigeración en evaluación? Compártanos los datos básicos — superficie, temperatura de operación, tipo de tráfico y fecha estimada de inicio. Nuestro equipo de ingeniería revisará su caso y le entregará una propuesta técnica en 48 horas.
                </p>
                <p className="text-[0.72rem] text-[rgba(124,200,240,0.7)] font-[var(--font-ibm-mono)] mb-4">
                  Evaluación técnica gratuita · Sin compromiso de contratación
                </p>
                <Link
                  href="/contacto"
                  className="inline-block bg-[#0D85C4] hover:bg-[#1a95d4] text-[#E0F2FF] font-[var(--font-barlow)] font-extrabold text-[0.95rem] tracking-[0.06em] uppercase px-8 py-3.5 rounded transition-colors"
                >
                  Solicitar Propuesta Técnica Freeze →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
