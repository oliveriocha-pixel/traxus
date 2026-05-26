import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Empresa | TRAXUS - Ingeniería y ejecución de pisos industriales de alto desempeño",
  description:
    "TRAXUS nació del convencimiento de que el piso de concreto en una nave industrial es la infraestructura más crítica y menos atendida de la cadena de suministro en México.",
}

const stats = [
  { value: "80+", title: "Proyectos", desc: "Instalaciones en México y LATAM" },
  { value: "15", title: "Años", desc: "De experiencia especializada" },
  {
    value: "100%",
    title: "Garantía",
    desc: "Con contrato en todos los proyectos",
  },
  { value: "24h", title: "Respuesta", desc: "Soporte técnico ante emergencias" },
]

const team = [
  {
    initials: "CR",
    name: "Carlos Reyes",
    role: "Director General · Ing. Civil UNAM",
  },
  { initials: "MA", name: "Mariana Aguilar", role: "Directora de Proyectos" },
  { initials: "JV", name: "Jorge Vázquez", role: "Jefe de Ingeniería Freeze" },
  { initials: "LP", name: "Laura Pérez", role: "Ingeniería de Calidad" },
]

const certifications = [
  {
    title: "NMX-C-083 · Concreto",
    desc: "Todos nuestros materiales cumplen la norma mexicana de concreto para pisos industriales.",
  },
  {
    title: "ACI 302.1R",
    desc: "Guía americana para construcción de pisos y losas. Referencia técnica en todos nuestros proyectos.",
  },
  {
    title: "FSMA · BRC Global Standards",
    desc: "Sistemas Logislab® Freeze compatibles con requisitos de inocuidad para almacenes de alimentos.",
  },
]

export default function EmpresaPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="py-24 pt-32 bg-background">
          <div className="max-w-[1180px] mx-auto px-8">
            <span className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-primary mb-4 block">
              Quiénes somos
            </span>
            <h1 className="font-sans text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-none text-foreground mb-5">
Ingeniería de pisos con enfoque en{" "}
            <em className="not-italic text-primary">obra y operación</em>
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-[680px]">
              TRAXUS nació del convencimiento de que el piso industrial es la
              infraestructura más crítica y menos atendida de la cadena de
              suministro en México.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 border-t border-border bg-card">
          <div className="max-w-[1180px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <span className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-primary mb-4 block">
                Misión
              </span>
              <h2 className="font-sans text-[clamp(1.8rem,3.5vw,2.9rem)] font-extrabold leading-tight text-foreground mb-5">
Construir pisos de alta especialidad que cumplan en obra y{" "}
            <em className="not-italic text-primary">no fallen en operación</em>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                Diseñamos y ejecutamos pisos industriales de concreto para proyectos donde el programa, la planicidad y la durabilidad no son negociables. Nuestro trabajo es asegurar que el piso cumpla en obra y no genere problemas en operación.
              </p>

              {/* Quote Block */}
              <div className="border-l-[3px] border-primary pl-5 py-4 pr-5 bg-primary/5 rounded-r">
                <p className="font-sans text-xl font-semibold italic text-accent leading-snug">
                  &quot;Diseñamos y entregamos el desempeño del piso en obra y en operación.&quot;
                </p>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-card-foreground/[0.03] border border-border rounded-lg p-5 hover:border-primary/20 transition-colors"
                  >
                    <div className="font-mono text-lg text-primary mb-2.5">
                      {stat.value}
                    </div>
                    <h3 className="font-sans text-base font-bold text-foreground mb-1">
                      {stat.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 border-t border-border bg-background">
          <div className="max-w-[1180px] mx-auto px-8">
            <span className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-primary mb-4 block">
              Equipo
            </span>
            <h2 className="font-sans text-[clamp(1.8rem,3.5vw,2.9rem)] font-extrabold leading-tight text-foreground mb-5">
              Los ingenieros detrás de{" "}
              <em className="not-italic text-primary">cada proyecto</em>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {team.map((member, i) => (
                <div
                  key={i}
                  className="bg-card-foreground/[0.025] border border-border rounded-lg p-5 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1A1A1A] to-[#222222] mx-auto mb-4 flex items-center justify-center font-sans text-xl font-bold text-primary border-2 border-primary/10">
                    {member.initials}
                  </div>
                  <h4 className="font-sans text-base font-bold text-foreground mb-1">
                    {member.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 border-t border-border bg-card">
          <div className="max-w-[1180px] mx-auto px-8">
            <span className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-primary mb-4 block">
              Certificaciones y estándares
            </span>
            <h2 className="font-sans text-[clamp(1.8rem,3.5vw,2.9rem)] font-extrabold leading-tight text-foreground mb-5">
              Cumplimiento normativo en{" "}
              <em className="not-italic text-primary">cada instalación</em>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="bg-card-foreground/[0.025] border border-border rounded-lg p-5"
                >
                  <h4 className="font-sans text-[0.95rem] font-bold text-foreground mb-1.5">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Link
                href="/contacto"
                className="inline-block bg-primary hover:bg-accent text-primary-foreground font-sans font-extrabold text-[0.95rem] tracking-[0.06em] uppercase px-8 py-3.5 rounded transition-all hover:-translate-y-0.5"
              >
                Trabajemos juntos
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
