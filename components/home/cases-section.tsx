import Link from "next/link"

const cases = [
  {
    type: "Cámara de Refrigeración",
    title: "Operador de logística alimentaria — Noreste",
    desc: "Cámara de −22 °C, 8,400 m², Logislab® Freeze. Eliminación total del ciclo de resellados que el operador realizaba dos veces por año.",
    stats: [
      { value: "8,400", label: "m² construidos" },
      { value: "0", label: "Juntas de control" },
      { value: "−22 °C", label: "Temperatura operación" },
    ],
    color: "blue",
    href: "/casos",
  },
  {
    type: "Centro de Distribución",
    title: "Desarrollador logístico — Bajío",
    desc: "CEDI 18,000 m² con sistema AutoStore integrado. FF54 certificado en toda la superficie. Entrega en 11 semanas.",
    stats: [
      { value: "18,000", label: "m² construidos" },
      { value: "FF54", label: "Planicidad medida" },
      { value: "11 sem", label: "Plazo de entrega" },
    ],
    color: "amber",
    href: "/casos",
  },
  {
    type: "Almacén VNA",
    title: "Operador 3PL — ZMCDMX",
    desc: "Almacén VNA 6,200 m² con trilaterales a 14 m de altura. Criterios Fmin certificados por pasillo en 72 horas post-colado.",
    stats: [
      { value: "6,200", label: "m² construidos" },
      { value: "14 m", label: "Altura de rack" },
      { value: "Fmin", label: "Certificado por pasillo" },
    ],
    color: "dark",
    href: "/casos",
  },
]

export function CasesSection() {
  return (
    <section className="py-24 border-t border-white/[0.08] bg-[#1E1E18]">
      <div className="max-w-[1180px] mx-auto px-8">
        <span className="font-[var(--font-ibm-mono)] text-[0.7rem] tracking-[0.18em] uppercase text-[#E8A020] mb-4 block">
          // Casos de éxito
        </span>
        <h2 className="font-[var(--font-barlow)] text-[clamp(1.8rem,3.5vw,2.9rem)] font-extrabold leading-tight text-[#FAF7F0] mb-5">
          Casos de <em className="not-italic text-[#E8A020]">éxito</em>
        </h2>
        <p className="text-[1.05rem] text-[rgba(240,234,214,0.65)] font-light leading-relaxed max-w-[680px]">
          Proyectos ejecutados en operaciones reales donde el piso no podía fallar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {cases.map((c, i) => (
            <Link
              key={i}
              href={c.href}
              className="group bg-white/[0.025] border border-white/[0.08] rounded-lg overflow-hidden transition-all hover:border-[rgba(232,160,32,0.3)] hover:-translate-y-0.5"
            >
              {/* Header */}
              <div
                className={`h-36 flex items-end p-5 ${
                  c.color === "blue"
                    ? "bg-gradient-to-br from-[#062F4A] to-[#0B4A72]"
                    : c.color === "amber"
                    ? "bg-gradient-to-br from-[#1E1800] to-[#3D2E00]"
                    : "bg-gradient-to-br from-[#1A1A14] to-[#2C2C22]"
                }`}
              >
                <span className="font-[var(--font-ibm-mono)] text-[0.65rem] tracking-[0.15em] uppercase text-white/50 px-2.5 py-1 bg-white/[0.08] rounded-sm">
                  {c.type}
                </span>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="font-[var(--font-barlow)] text-lg font-bold text-[#FAF7F0] mb-2 leading-tight">
                  {c.title}
                </h3>
                <p className="text-sm text-[#8A8878] leading-relaxed">
                  {c.desc}
                </p>

                {/* Stats */}
                <div className="flex gap-5 mt-4 pt-4 border-t border-white/[0.08]">
                  {c.stats.map((stat, j) => (
                    <div key={j}>
                      <div className="font-[var(--font-barlow)] text-2xl font-black text-[#E8A020]">
                        {stat.value}
                      </div>
                      <div className="text-[0.72rem] text-[#8A8878] font-[var(--font-ibm-mono)]">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/casos"
            className="inline-block bg-transparent text-[#F0EAD6] font-[var(--font-barlow)] font-bold text-[0.95rem] tracking-[0.06em] uppercase px-8 py-3.5 rounded border border-[rgba(240,234,214,0.25)] hover:border-[rgba(240,234,214,0.5)] hover:bg-white/[0.04] transition-all"
          >
            Ver todos los proyectos
          </Link>
        </div>
      </div>
    </section>
  )
}
