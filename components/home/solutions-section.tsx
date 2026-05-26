import Link from "next/link"

const solutions = [
  {
    badge: "Producto Estrella",
    badgeType: "blue",
    title: "Logislab® Freeze",
    desc: "Solución especializada para cámaras de refrigeración basada en el sistema Logislab®.",
    specs: [
      "Hasta −30 °C en operación continua",
      "Sin juntas de control — losa térmica continua",
      "Sectores: alimentario, farmacéutico, logística en frío",
    ],
    cta: "Solicitar ingeniería Freeze",
    ctaType: "blue",
    href: "/freeze",
    featured: true,
  },
  {
    badge: "Segmento principal",
    badgeType: "amber",
    title: "Logislab® CEDI",
    desc: "Para centros de distribución con tráfico intensivo y automatización.",
    specs: [
      "Losas hasta 40 × 40 m sin juntas",
      "FF50/FL50+ certificado y medido",
      "Compatible con AutoStore, Geek+, AMR, AGV",
    ],
    cta: "Cotizar mi centro de distribución",
    ctaType: "amber",
    href: "/contacto",
    featured: false,
  },
  {
    badge: "Nicho técnico",
    badgeType: "amber",
    title: "Logislab® VNA",
    desc: "Para pasillos angostos con requerimientos críticos de planicidad.",
    specs: [
      "Criterios Fmin certificados por pasillo",
      "Tramos continuos hasta 60 m sin juntas",
      "Compatible con trilaterales y transelevadores",
    ],
    cta: "Diseñar mi almacén VNA",
    ctaType: "amber",
    href: "/contacto",
    featured: false,
  },
]

export function SolutionsSection() {
  return (
    <section id="soluciones" className="py-24 border-t border-white/[0.08] bg-[#1A1A14] scroll-mt-16">
      <div className="max-w-[1180px] mx-auto px-8">
        <span className="font-[var(--font-ibm-mono)] text-[0.7rem] tracking-[0.18em] uppercase text-[#E8A020] mb-4 block">
          // Soluciones por tipo de operación
        </span>
        <h2 className="font-[var(--font-barlow)] text-[clamp(1.8rem,3.5vw,2.9rem)] font-extrabold leading-tight text-[#FAF7F0] mb-5">
          Soluciones por tipo de <em className="not-italic text-[#E8A020]">operación</em>
        </h2>
        <p className="text-[1.05rem] text-[rgba(240,234,214,0.65)] font-light leading-relaxed max-w-[680px] mb-10">
          Cada piso se diseña para cumplir en obra y funcionar en operación, según las condiciones reales de carga, tráfico, temperatura y tipo de operación.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {solutions.map((sol, i) => (
            <Link
              key={i}
              href={sol.href}
              className={`group flex flex-col p-7 rounded-lg border transition-all hover:-translate-y-1 ${
                sol.featured
                  ? "border-[rgba(13,133,196,0.5)] bg-[rgba(6,47,74,0.4)] hover:border-[rgba(13,133,196,0.85)]"
                  : "border-white/[0.08] bg-white/[0.025] hover:border-[rgba(232,160,32,0.35)]"
              }`}
            >
              <span
                className={`self-start font-[var(--font-ibm-mono)] text-[0.62rem] tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm mb-4 ${
                  sol.badgeType === "blue"
                    ? "bg-[rgba(13,133,196,0.2)] text-[#7CC8F0]"
                    : "bg-[rgba(232,160,32,0.15)] text-[#E8A020]"
                }`}
              >
                {sol.badge}
              </span>

              <h3 className="font-[var(--font-barlow)] text-2xl font-bold text-[#FAF7F0] mb-3 leading-tight">
                {sol.title}
              </h3>
              <p className="text-sm text-[#8A8878] leading-relaxed flex-1">
                {sol.desc}
              </p>

              <ul className="list-none my-4 flex flex-col">
                {sol.specs.map((spec, j) => (
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
                  sol.ctaType === "blue" ? "text-[#7CC8F0]" : "text-[#E8A020]"
                }`}
              >
                {sol.cta} →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
