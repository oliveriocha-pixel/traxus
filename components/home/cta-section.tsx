import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 border-t border-white/[0.08] bg-[#161612]">
      <div className="max-w-[700px] mx-auto px-8 text-center">
        <span className="font-[var(--font-ibm-mono)] text-[0.7rem] tracking-[0.18em] uppercase text-[#E8A020] mb-4 block">
          // Evaluación técnica gratuita
        </span>
        <h2 className="font-[var(--font-barlow)] text-[clamp(1.8rem,3.5vw,2.9rem)] font-extrabold leading-tight text-[#FAF7F0] mb-5">
          Solicite una <em className="not-italic text-[#E8A020]">evaluación técnica</em>
        </h2>
        <p className="text-[1.05rem] font-light text-[rgba(240,234,214,0.65)] leading-relaxed mb-8">
          Analizamos su operación y entregamos una propuesta técnica en menos de 48 horas.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contacto"
            className="inline-block bg-[#E8A020] hover:bg-[#F5C05A] text-[#161612] font-[var(--font-barlow)] font-extrabold text-[0.95rem] tracking-[0.06em] uppercase px-8 py-3.5 rounded transition-all hover:-translate-y-0.5"
          >
            Solicitar evaluación técnica
          </Link>
          <Link
            href="/empresa"
            className="inline-block bg-transparent text-[#F0EAD6] font-[var(--font-barlow)] font-bold text-[0.95rem] tracking-[0.06em] uppercase px-8 py-3.5 rounded border border-[rgba(240,234,214,0.25)] hover:border-[rgba(240,234,214,0.5)] hover:bg-white/[0.04] transition-all"
          >
            Conocer a TRAXUS
          </Link>
        </div>
      </div>
    </section>
  )
}
