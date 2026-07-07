import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { cases } from "@/lib/cases-data"

export const metadata: Metadata = {
  title: "Proyectos | TRAXUS - Pisos Industriales de Alto Desempeño",
  description: "Pisos industriales para centros logísticos, manufactura, cold storage y operación industrial. Proyectos ejecutados en México.",
}

export default function CasosPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="py-32 pt-40 bg-[#0D0D0B] relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,#0D0D0B_100%)]" />
          <div className="max-w-[1180px] mx-auto px-8 relative z-10">
            <span className="font-[var(--font-ibm-mono)] text-[0.7rem] tracking-[0.18em] uppercase text-[#E8A020] mb-4 block">
              // Proyectos ejecutados
            </span>
            <h1 className="font-[var(--font-barlow)] text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold leading-[0.95] text-[#FAF7F0] mb-6 max-w-[800px]">
              Infraestructura de piso para{" "}
              <em className="not-italic text-[#E8A020]">operación industrial</em>
            </h1>
            <p className="text-[1.1rem] text-[rgba(240,234,214,0.6)] font-light leading-relaxed max-w-[620px]">
              Pisos industriales diseñados para cumplir en obra y funcionar en operación. Cada proyecto responde a condiciones reales de carga, tráfico, temperatura y tipo de operación.
            </p>
          </div>
        </section>

        {/* Cases Grid - Premium Industrial */}
        <section className="bg-[#0D0D0B]">
          {cases.map((c, i) => (
            <article
              key={i}
              className={`border-t border-white/[0.06] ${i % 2 === 0 ? 'bg-[#0D0D0B]' : 'bg-[#111110]'}`}
            >
              <div className="max-w-[1400px] mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[600px] ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-[400px] lg:h-auto ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Image
                      src={c.image}
                      alt={c.alt}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 ${
                      c.color === "freeze"
                        ? "bg-gradient-to-br from-[#062F4A]/60 to-[#0B4A72]/40"
                        : c.color === "amber"
                        ? "bg-gradient-to-br from-[#1A1400]/60 to-[#2D2200]/40"
                        : "bg-gradient-to-br from-[#0D0D0B]/60 to-[#1A1A14]/40"
                    }`} />
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col justify-center p-10 lg:p-16 ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <span className="font-[var(--font-ibm-mono)] text-[0.65rem] tracking-[0.18em] uppercase text-[#8A8878] mb-3 block">
                      {c.subtitle}
                    </span>
                    <h2 className="font-[var(--font-barlow)] text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold leading-[1.1] text-[#FAF7F0] mb-5">
                      {c.name}
                    </h2>
                    <p className="text-[1rem] text-[rgba(240,234,214,0.55)] font-light leading-[1.75] mb-8 max-w-[500px]">
                      {c.text}
                    </p>

                    {/* Applications */}
                    <div className="flex flex-wrap gap-2">
                      {c.applications.map((app, j) => (
                        <span
                          key={j}
                          className="font-[var(--font-ibm-mono)] text-[0.65rem] tracking-[0.08em] text-[#8A8878] px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#161612] border-t border-white/[0.08]">
          <div className="max-w-[800px] mx-auto px-8 text-center">
            <h2 className="font-[var(--font-barlow)] text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold leading-tight text-[#FAF7F0] mb-4">
              ¿Su operación necesita un piso que funcione?
            </h2>
            <p className="text-[1rem] text-[rgba(240,234,214,0.55)] font-light leading-relaxed mb-8 max-w-[500px] mx-auto">
              Comparta los datos de su proyecto y desarrollamos una propuesta técnica específica.
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-[#E8A020] hover:bg-[#F5C05A] text-[#161612] font-[var(--font-barlow)] font-extrabold text-[0.95rem] tracking-[0.06em] uppercase px-10 py-4 rounded transition-all hover:-translate-y-0.5"
            >
              Solicitar evaluación técnica
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
