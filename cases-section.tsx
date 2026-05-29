import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen px-8 py-24 flex items-center bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(232,160,32,0.06)_0%,transparent_60%),linear-gradient(180deg,#161612_0%,#1E1E18_100%)] relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255,255,255,0.015) 80px, rgba(255,255,255,0.015) 81px),
                           repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,255,255,0.015) 80px, rgba(255,255,255,0.015) 81px)`
        }}
      />
      
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 items-center relative z-10">
        {/* Left Content */}
        <div>
          <span className="inline-flex items-center gap-2 bg-[rgba(232,160,32,0.12)] border border-[rgba(232,160,32,0.3)] rounded-sm px-3 py-1.5 font-[var(--font-ibm-mono)] text-[0.67rem] tracking-[0.15em] text-[#E8A020] uppercase mb-5">
            Ingeniería y ejecución de pisos industriales de alto desempeño
          </span>
          
          <h1 className="font-[var(--font-barlow)] text-[clamp(2.6rem,5.5vw,4.6rem)] font-extrabold leading-none text-[#FAF7F0] mb-5">
            Ingeniería y ejecución de pisos industriales que no fallan <em className="not-italic text-[#E8A020]">en operación</em>
          </h1>
          
          <p className="text-[1.05rem] font-light text-[rgba(240,234,214,0.7)] leading-relaxed max-w-[540px] mb-4">
            Diseñamos y construimos pisos industriales de concreto para centros de distribución, cámaras de refrigeración y operaciones logísticas donde el piso no puede ser un punto de falla.
          </p>
          
          <p className="text-[1.05rem] font-light text-[rgba(240,234,214,0.7)] leading-relaxed max-w-[540px] mb-8">
            Cumplimos en obra y entregamos un piso que funciona en operación.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contacto"
              className="inline-block bg-[#E8A020] hover:bg-[#F5C05A] text-[#161612] font-[var(--font-barlow)] font-extrabold text-[0.95rem] tracking-[0.06em] uppercase px-8 py-3.5 rounded transition-all hover:-translate-y-0.5"
            >
              Solicitar evaluación técnica
            </Link>
            <Link
              href="/sistema"
              className="inline-block bg-transparent text-[#F0EAD6] font-[var(--font-barlow)] font-bold text-[0.95rem] tracking-[0.06em] uppercase px-8 py-3.5 rounded border border-[rgba(240,234,214,0.25)] hover:border-[rgba(240,234,214,0.5)] hover:bg-white/[0.04] transition-all"
            >
              Ver sistema Logislab®
            </Link>
          </div>
        </div>

        {/* Right Card */}
        <aside className="hidden lg:block bg-white/[0.04] border border-white/[0.08] rounded-lg p-6">
          <p className="font-[var(--font-barlow)] font-bold text-xs tracking-[0.12em] uppercase text-[#8A8878] mb-5">
            // Sistema Logislab® — Capacidades
          </p>
          
          <div className="flex flex-col gap-4">
            <StatItem value="40 × 40 m" label="Losas continuas sin juntas de control" />
            <StatItem value="FF50+" label="Superplanicidad certificada y medida" />
            <StatItem value=">12 t/m²" label="Cargas de diseño superiores" />
            <StatItem value="10×" label="Resistencia al impacto vs. concreto estándar" />
          </div>
          
          {/* Freeze Pill */}
          <div className="flex items-center gap-2 bg-[rgba(11,111,164,0.15)] border border-[rgba(11,111,164,0.4)] rounded px-3 py-2.5 mt-4">
            <div className="w-2 h-2 rounded-full bg-[#0D85C4] shrink-0" />
            <span className="font-[var(--font-ibm-mono)] text-[0.67rem] tracking-[0.08em] text-[#7CC8F0]">
              Logislab® Freeze — Cámaras frías hasta −30 °C
            </span>
          </div>
        </aside>
      </div>
    </section>
  )
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l-[3px] border-[#E8A020] pl-4">
      <div className="font-[var(--font-barlow)] font-black text-3xl text-[#FAF7F0] leading-none">
        {value}
      </div>
      <div className="text-xs text-[#8A8878] mt-1">{label}</div>
    </div>
  )
}
