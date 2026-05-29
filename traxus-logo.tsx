import Link from "next/link"

export function FreezeBanner() {
  return (
    <section className="bg-[#062F4A] relative overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,rgba(13,133,196,0.18)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-[1180px] mx-auto px-8 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[rgba(11,111,164,0.25)] border border-[rgba(13,133,196,0.5)] rounded-sm px-4 py-1.5 font-[var(--font-ibm-mono)] text-[0.68rem] tracking-[0.15em] text-[#7CC8F0] uppercase mb-5">
              Logislab® Freeze
            </div>
            
            <h2 className="font-[var(--font-barlow)] text-[clamp(1.8rem,3.5vw,2.9rem)] font-extrabold leading-tight text-[#E0F2FF] mb-5">
              En frío, las juntas fallan <em className="not-italic text-[#0D85C4]">más rápido</em>
            </h2>
            
            <p className="text-base font-light text-[rgba(224,242,255,0.65)] leading-relaxed max-w-[620px] mb-4">
              Cada ciclo térmico somete a la losa a movimientos que ningún sellado resiste indefinidamente. El resultado es deterioro acelerado, infiltraciones y afectaciones directas a la operación.
            </p>
            
            <p className="text-base font-light text-[rgba(224,242,255,0.65)] leading-relaxed max-w-[620px] mb-7">
              Logislab® Freeze elimina ese comportamiento desde el diseño.
            </p>
            
            <Link
              href="/freeze"
              className="inline-block bg-[#0D85C4] hover:bg-[#1a95d4] text-[#E0F2FF] font-[var(--font-barlow)] font-extrabold text-[0.95rem] tracking-[0.06em] uppercase px-8 py-3.5 rounded transition-colors"
            >
              Ver sistema Logislab® Freeze
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <StatBox value="−30 °C" label="Temperatura mínima de operación" />
            <StatBox value="0" label="Juntas de control en la losa" />
            <StatBox value="48h" label="Propuesta técnica gratuita" />
            <StatBox value="FF50+" label="Superplanicidad certificada en frío" />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-[rgba(6,47,74,0.7)] border border-[rgba(13,133,196,0.25)] rounded-lg p-5 text-center">
      <div className="font-[var(--font-barlow)] text-4xl font-black text-[#7CC8F0] leading-none">
        {value}
      </div>
      <div className="text-[0.78rem] text-[rgba(224,242,255,0.55)] mt-2">{label}</div>
    </div>
  )
}
