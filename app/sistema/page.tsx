import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sistema Logislab® | TRAXUS - Pisos Industriales",
  description: "Logislab® es nuestro sistema de ingeniería de pisos industriales sin juntas. Diseñamos, especificamos y ejecutamos pisos para CEDIS, cámaras de refrigeración y almacenes VNA.",
}

const techSpecs = [
  {
    label: "// Superplanicidad",
    title: "FF50+ Certificado",
    desc: "Criterios definidos (FF/FL/Fmin) para sistemas automatizados. No estimado — medido y documentado al momento de la entrega.",
  },
  {
    label: "// Sin juntas de control",
    title: "Losas 40 × 40 m",
    desc: "La mayor superficie continua sin juntas del mercado mexicano. Sin punto de deterioro concentrado, sin ciclo de mantenimiento recurrente.",
  },
  {
    label: "// Alta resistencia",
    title: ">12 t/m² · 10× impacto",
    desc: "Hasta 10× más resistencia al impacto que el piso de concreto convencional. Diseñado para racks de alta densidad en operación continua.",
  },
  {
    label: "// Costo total de operación",
    title: "Cero mantenimiento recurrente",
    desc: "Sin resellados, sin reparaciones de bordes, sin paros por deterioro de piso. La diferencia está en los primeros 5 años de operación.",
  },
]

const differences = [
  {
    conventional: "Paneles de 4–6 m con junta de control cada 4–5 m",
    logislab: "Losas de hasta 40 × 40 m sin junta de control",
  },
  {
    conventional: "FF25–35 (valor típico de obra convencional)",
    logislab: "FF50+ medido y certificado en 100% de la superficie",
  },
  {
    conventional: "Criterio de espesor: regla de pulgar o norma mínima",
    logislab: "Diseño estructural a partir de carga puntual máxima real",
  },
  {
    conventional: "Sellado de junta con vida útil 12–24 meses",
    logislab: "Sin junta de control = sin sellado recurrente",
  },
  {
    conventional: "Reparaciones frecuentes en bordes de junta bajo tráfico",
    logislab: "Superficie continua sin bordes expuestos a impacto",
  },
  {
    conventional: "Planicidad inicial que se pierde con el curado y el uso",
    logislab: "Curado controlado y refuerzo que mantiene planicidad en el tiempo",
  },
]

const segments = [
  {
    badge: "★★ Producto Estrella",
    badgeType: "blue",
    title: "Logislab® Freeze",
    desc: "El único sistema de piso industrial sin juntas diseñado específicamente para cámaras de refrigeración en México.",
    specs: [
      "Hasta −30°C en operación continua",
      "Sin juntas de control — losa térmica continua",
      "Sectores: alimentario, farmacéutico, logística en frío",
    ],
    featured: true,
    href: "/freeze",
    cta: "Ver Logislab® Freeze",
  },
  {
    badge: "★ Segmento principal",
    badgeType: "amber",
    title: "Logislab® CEDI",
    desc: "Para operaciones logísticas con tráfico aleatorio, automatización y alta densidad de almacenamiento.",
    specs: [
      "Losas hasta 40 × 40 m sin juntas",
      "FF50/FL50+ certificado y medido",
      "Compatible con AutoStore, Geek+, AMR, AGV",
    ],
    featured: false,
    href: "/cedi",
    cta: "Ver Logislab® CEDI",
  },
  {
    badge: "Nicho técnico",
    badgeType: "amber",
    title: "Logislab® VNA",
    desc: "Criterios Fmin certificados. Porque en pasillos angostos un milímetro define si el sistema funciona o no.",
    specs: [
      "Criterios Fmin certificados por pasillo",
      "Tramos continuos hasta 60 m sin juntas",
      "Compatible con trilaterales y transelevadores",
    ],
    featured: false,
    href: "/vna",
    cta: "Ver Logislab® VNA",
  },
]

const processSteps = [
  {
    num: "// 01 · DIAGNÓSTICO",
    title: "Reunión técnica + revisión de proyecto",
    desc: "Entendemos su operación, cargas, tráfico y equipos. Sin esto no hay manera de especificar correctamente.",
  },
  {
    num: "// 02 · INGENIERÍA",
    title: "Diseño estructural y de planicidad",
    desc: "Especificación de espesor, dosificación, refuerzo, planicidad objetivo y procedimiento de colado.",
  },
  {
    num: "// 03 · EJECUCIÓN",
    title: "Obra con supervisión de ingeniería",
    desc: "Nuestro equipo supervisa cada colado. Medición de planicidad inmediata. Sin sorpresas.",
  },
  {
    num: "// 04 · CERTIFICACIÓN",
    title: "Entrega documentada",
    desc: "Informe de planicidad real, registros de obra, garantía escrita. Usted sabe exactamente qué recibió.",
  },
]

export default function SistemaPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="py-24 pt-28 bg-[#161612] border-b border-white/[0.08]">
          <div className="max-w-[1180px] mx-auto px-8">
            {/* Breadcrumb */}
            <div className="font-[var(--font-ibm-mono)] text-[0.68rem] tracking-[0.1em] uppercase text-[rgba(240,234,214,0.4)] mb-5 flex items-center gap-2">
              <Link href="/" className="hover:text-[#E8A020]">Inicio</Link>
              <span className="text-[rgba(240,234,214,0.3)]">/</span>
              <span className="text-[rgba(240,234,214,0.6)]">Sistema Logislab®</span>
            </div>

            <span className="inline-flex items-center gap-2 bg-[rgba(232,160,32,0.12)] border border-[rgba(232,160,32,0.3)] rounded-sm px-3 py-1.5 font-[var(--font-ibm-mono)] text-[0.67rem] tracking-[0.15em] text-[#E8A020] uppercase mb-5">
              ★ Sistema de ingeniería propietario
            </span>
            
            <h1 className="font-[var(--font-barlow)] text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-none text-[#FAF7F0] mb-5">
              Logislab® elimina<br />el punto de falla que<br />ningún piso convencional<br /><em className="not-italic text-[#E8A020]">puede evitar.</em>
            </h1>
            
            <p className="text-[1.05rem] text-[rgba(240,234,214,0.65)] font-light leading-relaxed max-w-[620px] mb-4">
              Las juntas de control existen porque el concreto se agrieta. Pero esas juntas concentran el deterioro, el mantenimiento y el costo. Logislab® es un sistema de ingeniería de piso que elimina las juntas de control — sin que la losa falle.
            </p>
            <p className="text-[1.05rem] text-[rgba(240,234,214,0.65)] font-light leading-relaxed max-w-[620px] mb-7">
              No es una tecnología licenciada. Es nuestro sistema de diseño, materiales y ejecución desarrollado para operaciones de alta exigencia.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contacto"
                className="inline-block bg-[#E8A020] hover:bg-[#F5C05A] text-[#161612] font-[var(--font-barlow)] font-extrabold text-[0.95rem] tracking-[0.06em] uppercase px-8 py-3.5 rounded transition-all hover:-translate-y-0.5"
              >
                Solicitar Propuesta Técnica
              </Link>
              <span className="text-[0.75rem] text-[#8A8878] font-[var(--font-ibm-mono)]">
                Evaluación gratuita · 48 h
              </span>
            </div>
          </div>
        </section>

        {/* Tech Specs Grid */}
        <section className="py-24 bg-[#1E1E18] border-b border-white/[0.08]">
          <div className="max-w-[1180px] mx-auto px-8">
            <span className="font-[var(--font-ibm-mono)] text-[0.7rem] tracking-[0.18em] uppercase text-[#E8A020] mb-4 block">
              // Capacidades técnicas
            </span>
            <h2 className="font-[var(--font-barlow)] text-[clamp(1.8rem,3.5vw,2.9rem)] font-extrabold leading-tight text-[#FAF7F0] mb-10">
              Lo que hace <em className="not-italic text-[#E8A020]">diferente</em> a Logislab®
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px border-[1.5px] border-white/[0.08] rounded-lg overflow-hidden bg-white/[0.08]">
              {techSpecs.map((spec, i) => (
                <div key={i} className="p-7 bg-white/[0.025] border-[1.5px] border-white/[0.08]">
                  <div className="font-[var(--font-ibm-mono)] text-[0.62rem] tracking-[0.2em] uppercase text-[#E8A020] mb-2.5">
                    {spec.label}
                  </div>
                  <h3 className="font-[var(--font-barlow)] text-xl font-bold text-[#FAF7F0] mb-2">
                    {spec.title}
                  </h3>
                  <p className="text-sm text-[#8A8878] leading-relaxed">
                    {spec.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 bg-[#161612] border-b border-white/[0.08]">
          <div className="max-w-[1180px] mx-auto px-8">
            <span className="font-[var(--font-ibm-mono)] text-[0.7rem] tracking-[0.18em] uppercase text-[#E8A020] mb-4 block">
              // Comparativa
            </span>
            <h2 className="font-[var(--font-barlow)] text-[clamp(1.8rem,3.5vw,2.9rem)] font-extrabold leading-tight text-[#FAF7F0] mb-10">
              Piso convencional vs <em className="not-italic text-[#E8A020]">Logislab®</em>
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[600px]">
                <thead>
                  <tr>
                    <th className="text-left font-[var(--font-ibm-mono)] text-[0.72rem] tracking-[0.15em] uppercase text-[#8A8878] pb-4 border-b border-white/[0.08]">
                      Piso convencional
                    </th>
                    <th className="text-left font-[var(--font-ibm-mono)] text-[0.72rem] tracking-[0.15em] uppercase text-[#E8A020] pb-4 border-b border-white/[0.08]">
                      Logislab®
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {differences.map((diff, i) => (
                    <tr key={i}>
                      <td className="py-4 pr-6 text-sm text-[rgba(240,234,214,0.5)] border-b border-white/[0.08]">
                        {diff.conventional}
                      </td>
                      <td className="py-4 text-sm text-[#F0EAD6] border-b border-white/[0.08] font-medium">
                        {diff.logislab}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Segments */}
        <section className="py-24 bg-[#1A1A14] border-b border-white/[0.08]">
          <div className="max-w-[1180px] mx-auto px-8">
            <span className="font-[var(--font-ibm-mono)] text-[0.7rem] tracking-[0.18em] uppercase text-[#E8A020] mb-4 block">
              // Versiones por segmento
            </span>
            <h2 className="font-[var(--font-barlow)] text-[clamp(1.8rem,3.5vw,2.9rem)] font-extrabold leading-tight text-[#FAF7F0] mb-10">
              Tres versiones.<br />Un mismo nivel de <em className="not-italic text-[#E8A020]">exigencia.</em>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {segments.map((seg, i) => (
                <Link
                  key={i}
                  href={seg.href}
                  className={`group flex flex-col p-7 rounded-lg border transition-all hover:-translate-y-1 ${
                    seg.featured
                      ? "border-[rgba(13,133,196,0.5)] bg-[rgba(6,47,74,0.4)] hover:border-[rgba(13,133,196,0.85)]"
                      : "border-white/[0.08] bg-white/[0.025] hover:border-[rgba(232,160,32,0.35)]"
                  }`}
                >
                  <span
                    className={`self-start font-[var(--font-ibm-mono)] text-[0.62rem] tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm mb-4 ${
                      seg.badgeType === "blue"
                        ? "bg-[rgba(13,133,196,0.2)] text-[#7CC8F0]"
                        : "bg-[rgba(232,160,32,0.15)] text-[#E8A020]"
                    }`}
                  >
                    {seg.badge}
                  </span>

                  <h3 className="font-[var(--font-barlow)] text-2xl font-bold text-[#FAF7F0] mb-3 leading-tight">
                    {seg.title}
                  </h3>
                  <p className="text-sm text-[#8A8878] leading-relaxed flex-1">
                    {seg.desc}
                  </p>

                  <ul className="list-none my-4 flex flex-col">
                    {seg.specs.map((spec, j) => (
                      <li
                        key={j}
                        className="font-[var(--font-ibm-mono)] text-[0.72rem] text-[rgba(240,234,214,0.45)] py-1.5 border-b border-white/[0.08] last:border-b-0"
                      >
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`mt-auto font-[var(--font-barlow)] font-bold text-sm tracking-[0.06em] uppercase ${
                      seg.badgeType === "blue" ? "text-[#7CC8F0]" : "text-[#E8A020]"
                    }`}
                  >
                    {seg.cta} →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-[#161612]">
          <div className="max-w-[1180px] mx-auto px-8">
            <span className="font-[var(--font-ibm-mono)] text-[0.7rem] tracking-[0.18em] uppercase text-[#E8A020] mb-4 block">
              // Proceso de trabajo
            </span>
            <h2 className="font-[var(--font-barlow)] text-[clamp(1.8rem,3.5vw,2.9rem)] font-extrabold leading-tight text-[#FAF7F0] mb-10">
              Desde el diseño<br />hasta la <em className="not-italic text-[#E8A020]">certificación</em>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {processSteps.map((step, i) => (
                <div key={i} className="p-5 bg-white/[0.025] border border-white/[0.08] rounded-lg">
                  <div className="font-[var(--font-ibm-mono)] text-[0.62rem] tracking-[0.2em] uppercase text-[#E8A020] mb-2.5">
                    {step.num}
                  </div>
                  <h3 className="font-[var(--font-barlow)] text-xl font-bold text-[#FAF7F0] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#8A8878] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/contacto"
                className="inline-block bg-[#E8A020] hover:bg-[#F5C05A] text-[#161612] font-[var(--font-barlow)] font-extrabold text-[0.95rem] tracking-[0.06em] uppercase px-8 py-3.5 rounded transition-all hover:-translate-y-0.5"
              >
                Solicitar Propuesta Técnica
              </Link>
              <p className="mt-3 text-[0.75rem] text-[#8A8878] font-[var(--font-ibm-mono)]">
                Evaluación técnica gratuita · Respuesta en 48 h hábiles
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
