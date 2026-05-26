import Link from "next/link"

const systemFeatures = [
  {
    label: "// Superplanicidad",
    title: "FF50+ Certificado",
    desc: "Criterios definidos (FF/FL/Fmin). Medido y documentado en obra.",
  },
  {
    label: "// Sin juntas de control",
    title: "Losas 40 × 40 m",
    desc: "Losas de hasta 40 × 40 m sin juntas. Sin puntos de deterioro concentrado.",
  },
  {
    label: "// Alta resistencia",
    title: ">12 t/m² · 10× impacto",
    desc: ">12 t/m² · alta resistencia al impacto. Diseñado para operación continua.",
  },
  {
    label: "// Costo total de operación",
    title: "Cero mantenimiento recurrente",
    desc: "Sin resellados, sin reparación de bordes, sin paros por deterioro del piso.",
  },
]

export function SystemSection() {
  return (
    <section className="py-24 border-t border-white/[0.08] bg-[#161612]">
      <div className="max-w-[1180px] mx-auto px-8">
        <span className="font-[var(--font-ibm-mono)] text-[0.7rem] tracking-[0.18em] uppercase text-[#E8A020] mb-4 block">
          // Sistema Logislab®
        </span>
        <h2 className="font-[var(--font-barlow)] text-[clamp(1.8rem,3.5vw,2.9rem)] font-extrabold leading-tight text-[#FAF7F0] mb-5">
          Un sistema diseñado para eliminar el problema <em className="not-italic text-[#E8A020]">desde el origen</em>
        </h2>
        <p className="text-[1.05rem] text-[rgba(240,234,214,0.65)] font-light leading-relaxed max-w-[680px]">
          Logislab® elimina las juntas de control en zonas operativas críticas y distribuye las tensiones de forma homogénea en toda la losa.
        </p>
        <p className="text-[1.05rem] text-[rgba(240,234,214,0.65)] font-light leading-relaxed max-w-[680px] mt-4">
          Se diseña para cumplir en obra y no generar mantenimiento en operación.
        </p>

        {/* System Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px border-[1.5px] border-white/[0.08] rounded-lg overflow-hidden mt-10 bg-white/[0.08]">
          {systemFeatures.map((feature, i) => (
            <div key={i} className="p-7 bg-white/[0.025] border-[1.5px] border-white/[0.08]">
              <div className="font-[var(--font-ibm-mono)] text-[0.62rem] tracking-[0.2em] uppercase text-[#E8A020] mb-2.5">
                {feature.label}
              </div>
              <h3 className="font-[var(--font-barlow)] text-xl font-bold text-[#FAF7F0] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#8A8878] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/sistema"
            className="inline-block bg-[#E8A020] hover:bg-[#F5C05A] text-[#161612] font-[var(--font-barlow)] font-extrabold text-[0.95rem] tracking-[0.06em] uppercase px-8 py-3.5 rounded transition-all hover:-translate-y-0.5"
          >
            Ver el sistema Logislab® completo
          </Link>
          <Link
            href="/contacto"
            className="inline-block bg-transparent text-[#F0EAD6] font-[var(--font-barlow)] font-bold text-[0.95rem] tracking-[0.06em] uppercase px-8 py-3.5 rounded border border-[rgba(240,234,214,0.25)] hover:border-[rgba(240,234,214,0.5)] hover:bg-white/[0.04] transition-all ml-3"
          >
            Solicitar propuesta técnica
          </Link>
        </div>
      </div>
    </section>
  )
}
