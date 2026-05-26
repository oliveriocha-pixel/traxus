import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Casos de Éxito | TRAXUS - Pisos Industriales",
  description: "Más de 80 instalaciones en México y Latinoamérica. Casos con métricas verificables de ahorro, reducción de paros y vida útil.",
}

const cases = [
  {
    type: "e-Commerce · CDMX",
    title: "CEDIS 52,000 m² · Operación 24/7",
    desc: "Reducción de 18 paros no planeados anuales a cero en 24 meses. Ahorro en mantenimiento y downtime documentado.",
    stats: [
      { value: "$2.1M", label: "Ahorro documentado" },
      { value: "18 → 0", label: "Paros/año" },
    ],
    color: "blue",
  },
  {
    type: "Automotriz · Monterrey",
    title: "Planta manufactura 22,000 m²",
    desc: "Extensión del ciclo de mantenimiento de montacargas de 800 a 1,400 horas. Reducción de incidentes en pasillos.",
    stats: [
      { value: "+74%", label: "Vida útil llantas" },
      { value: "-61%", label: "Costo mantenimiento" },
    ],
    color: "amber",
  },
  {
    type: "Alimentos · Guadalajara",
    title: "Bodega refrigerada -28°C · 8,000 m²",
    desc: "Logislab® Freeze. Eliminación de infiltraciones y daños a mástiles de montacargas en zona de congelación profunda.",
    stats: [
      { value: "-28°C", label: "Temperatura" },
      { value: "15 años", label: "Garantía" },
    ],
    color: "freeze",
  },
  {
    type: "Retail · Guadalajara",
    title: "Centro de distribución 38,000 m²",
    desc: "Intervención en fases sin paro total de operaciones. 12 días de downtime eliminados en el primer año post-instalación.",
    stats: [
      { value: "-$1.4M", label: "Ahorro 3 años" },
      { value: "0", label: "Paros 18 meses" },
    ],
    color: "blue",
  },
  {
    type: "Farmacéutico · CDMX",
    title: "Almacén controlado 11,000 m²",
    desc: "Cumplimiento normativo GDP y BRC. Juntas sanitarias sin acumulación de patógenos. Documentación para auditorías.",
    stats: [
      { value: "100%", label: "Auditorías aprobadas" },
      { value: "GDP", label: "Cumplimiento normativo" },
    ],
    color: "amber",
  },
  {
    type: "Logística · Querétaro",
    title: "Parque logístico 65,000 m²",
    desc: "Proyecto en fases para 6 naves. Coordinación con operador logístico para intervención con cero impacto en clientes.",
    stats: [
      { value: "6 naves", label: "Sin paro total" },
      { value: "-55%", label: "Mantenimiento piso" },
    ],
    color: "dark",
  },
]

export default function CasosPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="py-24 pt-32 bg-background">
          <div className="max-w-[1180px] mx-auto px-8">
            <span className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-primary mb-4 block">
              Casos de éxito
            </span>
            <h1 className="font-sans text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-none text-foreground mb-5">
              Resultados reales en{" "}
              <em className="not-italic text-primary">operación industrial</em>
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-[680px]">
              Más de 80 instalaciones en México y Latinoamérica. Todos los casos
              incluyen métricas verificables de ahorro, reducción de paros y
              vida útil.
            </p>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="py-24 border-t border-border bg-card">
          <div className="max-w-[1180px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cases.map((c, i) => (
                <article
                  key={i}
                  className="bg-card-foreground/[0.025] border border-border rounded-lg overflow-hidden transition-all hover:border-primary/20 hover:-translate-y-0.5"
                >
                  {/* Header */}
                  <div
                    className={`h-36 flex items-end p-5 ${
                      c.color === "blue"
                        ? "bg-gradient-to-br from-[#0A1F2E] to-[#0E3550]"
                        : c.color === "freeze"
                          ? "bg-gradient-to-br from-[#0A2535] to-[#0D85C4]/30"
                          : c.color === "amber"
                            ? "bg-gradient-to-br from-[#161616] to-[#222218]"
                            : "bg-gradient-to-br from-[#1A1A14] to-[#2C2C22]"
                    }`}
                  >
                    <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-white/50 px-2.5 py-1 bg-white/[0.08] rounded-sm">
                      {c.type}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <h3 className="font-sans text-lg font-bold text-foreground mb-2 leading-tight">
                      {c.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {c.desc}
                    </p>

                    {/* Stats */}
                    <div className="flex gap-5 mt-4 pt-4 border-t border-border">
                      {c.stats.map((stat, j) => (
                        <div key={j}>
                          <div className="font-sans text-2xl font-black text-primary">
                            {stat.value}
                          </div>
                          <div className="text-[0.72rem] text-muted-foreground font-mono">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contacto"
                className="inline-block bg-primary hover:bg-accent text-primary-foreground font-sans font-extrabold text-[0.95rem] tracking-[0.06em] uppercase px-8 py-3.5 rounded transition-all hover:-translate-y-0.5"
              >
                ¿Su operación necesita esto? Solicitar evaluación
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
