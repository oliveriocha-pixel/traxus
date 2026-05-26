import Link from "next/link"
import Image from "next/image"

const cases = [
  {
    name: "Centro Refrigerado Bajío",
    subtitle: "Cadena fría — Toluca",
    text: "Piso industrial para exposición continua a humedad, bajas temperaturas y tráfico intensivo en áreas de refrigeración y congelación.",
    applications: ["Cold storage", "Cámaras de refrigeración", "Cadena fría"],
    image: "/images/casos/cold-storage-toluca.jpg",
    alt: "Piso industrial para operación refrigerada y almacenamiento cold storage",
    color: "freeze",
  },
  {
    name: "Centro Logístico Norte",
    subtitle: "Alta densidad — Estado de México",
    text: "Superficie industrial para almacenamiento de alta densidad, tráfico repetitivo de montacargas y operación logística continua.",
    applications: ["Centros logísticos", "Fulfillment", "Distribución"],
    image: "/images/casos/centro-distribucion.jpg",
    alt: "Piso industrial logístico para centro de distribución de alta densidad",
    color: "dark",
  },
  {
    name: "Plataforma Aeroindustrial Bajío",
    subtitle: "Manufactura — Querétaro",
    text: "Superficie industrial estable para procesos de manufactura continua y operación de alta precisión.",
    applications: ["Manufactura industrial", "Producción continua", "Alta precisión"],
    image: "/images/casos/manufactura-aeroespacial.jpg",
    alt: "Piso industrial para manufactura aeroespacial y operación continua",
    color: "amber",
  },
]

export function CasesSection() {
  return (
    <section className="py-24 border-t border-white/[0.08] bg-[#0D0D0B]">
      <div className="max-w-[1180px] mx-auto px-8">
        <span className="font-[var(--font-ibm-mono)] text-[0.7rem] tracking-[0.18em] uppercase text-[#E8A020] mb-4 block">
          // Proyectos ejecutados
        </span>
        <h2 className="font-[var(--font-barlow)] text-[clamp(1.8rem,3.5vw,2.9rem)] font-extrabold leading-tight text-[#FAF7F0] mb-5">
          Infraestructura de piso para{" "}
          <em className="not-italic text-[#E8A020]">operación industrial</em>
        </h2>
        <p className="text-[1.05rem] text-[rgba(240,234,214,0.55)] font-light leading-relaxed max-w-[620px] mb-12">
          Proyectos ejecutados en operaciones reales donde el piso no podía fallar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <article
              key={i}
              className="group"
            >
              {/* Image */}
              <div className="h-56 mb-5 rounded overflow-hidden relative">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 ${
                  c.color === "freeze"
                    ? "bg-gradient-to-br from-[#062F4A]/50 to-[#0B4A72]/30"
                    : c.color === "amber"
                    ? "bg-gradient-to-br from-[#1A1400]/50 to-[#2D2200]/30"
                    : "bg-gradient-to-br from-[#1A1A14]/50 to-[#2C2C22]/30"
                }`} />
              </div>

              {/* Content */}
              <span className="font-[var(--font-ibm-mono)] text-[0.65rem] tracking-[0.15em] uppercase text-[#8A8878] mb-2 block">
                {c.subtitle}
              </span>
              <h3 className="font-[var(--font-barlow)] text-xl font-bold text-[#FAF7F0] mb-3 leading-tight">
                {c.name}
              </h3>
              <p className="text-[0.9rem] text-[rgba(240,234,214,0.5)] leading-relaxed mb-4">
                {c.text}
              </p>

              {/* Applications */}
              <div className="flex flex-wrap gap-1.5">
                {c.applications.map((app, j) => (
                  <span
                    key={j}
                    className="font-[var(--font-ibm-mono)] text-[0.6rem] tracking-[0.06em] text-[#8A8878] px-2 py-1 bg-white/[0.04] border border-white/[0.06] rounded"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/casos"
            className="inline-block bg-transparent text-[#F0EAD6] font-[var(--font-barlow)] font-bold text-[0.95rem] tracking-[0.06em] uppercase px-8 py-3.5 rounded border border-[rgba(240,234,214,0.2)] hover:border-[rgba(240,234,214,0.4)] hover:bg-white/[0.03] transition-all"
          >
            Ver todos los proyectos
          </Link>
        </div>
      </div>
    </section>
  )
}
