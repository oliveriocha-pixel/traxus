import Link from "next/link"

export function ProblemSection() {
  return (
    <section className="py-24 border-t border-white/[0.08] bg-[#1E1E18]">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <span className="font-[var(--font-ibm-mono)] text-[0.7rem] tracking-[0.18em] uppercase text-[#E8A020] mb-4 block">
              // El problema
            </span>
            <h2 className="font-[var(--font-barlow)] text-[clamp(1.8rem,3.5vw,2.9rem)] font-extrabold leading-tight text-[#FAF7F0] mb-5">
              Las juntas de piso le están costando más de lo que <em className="not-italic text-[#E8A020]">imagina</em>
            </h2>
            <p className="text-[1.05rem] text-[rgba(240,234,214,0.65)] font-light leading-relaxed max-w-[680px]">
              El sellado se degrada en 12–18 meses. La junta abierta permite la migración de humedad. Los bordes se deterioran progresivamente por impacto y fatiga local.
            </p>
            
            <p className="text-[1.05rem] text-[rgba(240,234,214,0.65)] font-light leading-relaxed max-w-[680px] mt-4">
              El ciclo se repite. El costo se acumula.
            </p>
            
            {/* Quote Block */}
            <div className="border-l-[3px] border-[#E8A020] pl-5 py-4 pr-5 bg-[rgba(232,160,32,0.05)] rounded-r my-7">
              <p className="font-[var(--font-barlow)] text-xl font-semibold italic text-[#F5C05A] leading-snug">
                &ldquo;El problema no está en el mantenimiento. Está en el diseño.&rdquo;
              </p>
            </div>
            
            <Link
              href="/contacto"
              className="inline-block bg-[#E8A020] hover:bg-[#F5C05A] text-[#161612] font-[var(--font-barlow)] font-extrabold text-[0.95rem] tracking-[0.06em] uppercase px-8 py-3.5 rounded transition-all hover:-translate-y-0.5 mt-7"
            >
              Habla con un especialista
            </Link>
          </div>
          
          <div className="flex flex-col gap-4">
            <FeatureCard 
              title="Juntas de control: el punto de falla programado"
              description="El sellado se degrada en 12–18 meses. La junta abierta permite migración de humedad. Los bordes se deterioran y pierden estabilidad. El ciclo se reinicia y el costo se acumula."
            />
            <FeatureCard 
              title="La automatización exige más de lo que da el concreto convencional"
              description="AGV, AutoStore y Geek+ requieren FF50+ mínimo. Una pérdida progresiva de planicidad genera errores de operación medibles por hora de paro."
            />
            <FeatureCard 
              title="Costo invisible del piso de concreto en el presupuesto de construcción"
              description="El costo aparece en resellados, reparaciones, daño en ruedas de montacargas y paros. En 10 años supera el diferencial de haberlo hecho bien desde el inicio."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-5 transition-colors hover:border-[rgba(232,160,32,0.3)]">
      <div className="font-[var(--font-ibm-mono)] text-lg text-[#E8A020] mb-2">&#9670;</div>
      <h3 className="font-[var(--font-barlow)] font-bold text-base text-[#FAF7F0] mb-2">{title}</h3>
      <p className="text-sm text-[#8A8878] leading-relaxed">{description}</p>
    </div>
  )
}
