import Link from "next/link"
import Image from "next/image"

const solutions = [
  {
    badge: "Producto Estrella",
    badgeType: "blue",
    title: "Logislab® Freeze",
    desc: "Piso sin juntas para cámaras de refrigeración. Elimina el ciclo de deterioro que el frío provoca en las juntas de control.",
    image: "/images/casos/cold-storage-toluca.jpg",
    alt: "Interior de cámara de refrigeración con piso industrial continuo Logislab Freeze",
    specs: [
      "Hasta −30 °C en operación continua",
      "Sin juntas de control — losa térmica continua",
      "Sectores: alimentario, farmacéutico, logística en frío",
    ],
    cta: "Ver Logislab® Freeze",
    ctaType: "blue",
    href: "/freeze",
    featured: true,
  },
  {
    badge: "Segmento principal",
    badgeType: "amber",
    title: "Logislab® CEDI",
    desc: "Piso para centros de distribución con tráfico aleatorio intensivo y automatización de alta densidad.",
    image: "/images/casos/centro-distribucion.jpg",
    alt: "Centro de distribución con racks selectivos sobre piso industrial Logislab CEDI",
    specs: [
      "Losas hasta 40 × 40 m sin juntas",
      "FF50/FL50+ certificado y medido",
      "Compatible con AutoStore, Geek+, AMR, AGV",
    ],
    cta: "Ver Logislab® CEDI",
    ctaType: "amber",
    href: "/cedi",
    featured: false,
  },
  {
    badge: "Nicho técnico",
    badgeType: "amber",
    title: "Logislab® VNA",
    desc: "Piso de planicidad crítica para pasillos angostos, donde un milímetro define si el equipo trilateral funciona.",
    image: "/images/casos/logistico-jalisco.jpg",
    alt: "Pasillo angosto con racks de gran altura sobre piso de planicidad certificada Logislab VNA",
    specs: [
      "Criterios Fmin certificados por pasillo",
      "Tramos continuos hasta 60 m sin juntas",
      "Compatible con trilaterales y transelevadores",
    ],
    cta: "Ver Logislab® VNA",
    ctaType: "amber",
    href: "/vna",
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
              className={`group flex flex-col rounded-lg border overflow-hidden transition-all hover:-translate-y-1 ${
                sol.featured
                  ? "border-[rgba(13,133,196,0.5)] bg-[rgba(6,47,74,0.4)] hover:border-[rgba(13,133,196,0.85)]"
                  : "border-white/[0.08] bg-white/[0.025] hover:border-[rgba(232,160,32,0.35)]"
              }`}
            >
              {/* Photo */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={sol.image}
                  alt={sol.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 ${
                    sol.featured
                      ? "bg-gradient-to-t from-[rgba(6,47,74,0.85)] to-transparent"
                      : "bg-gradient-to-t from-[rgba(26,26,20,0.85)] to-transparent"
                  }`}
                />
                <span
                  className={`absolute top-3 left-3 font-[var(--font-ibm-mono)] text-[0.62rem] tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm ${
                    sol.badgeType === "blue"
                      ? "bg-[rgba(13,133,196,0.9)] text-[#E0F2FF]"
                      : "bg-[rgba(232,160,32,0.9)] text-[#161612]"
                  }`}
                >
                  {sol.badge}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-7">
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
