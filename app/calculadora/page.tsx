"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function CalculadoraPage() {
  const [sup, setSup] = useState(20000)
  const [jun, setJun] = useState(1000)
  const [res, setRes] = useState(110)
  const [mon, setMon] = useState(10)
  const [par, setPar] = useState(6)
  const [cop, setCop] = useState(80000)

  const [total, setTotal] = useState(0)
  const [breakEven, setBreakEven] = useState(0)

  useEffect(() => {
    const costoResellado10 = jun * res * 3
    const costoReparacionBordes10 = jun * 95 * 2 * 10
    const costoParos10 = par * cop * 10
    const costoDesgasteEquipos10 = mon * 8000 * 10
    const totalCalc =
      costoResellado10 +
      costoReparacionBordes10 +
      costoParos10 +
      costoDesgasteEquipos10
    const sobrecostoLogislab = sup * 180
    const breakEvenCalc =
      totalCalc > 0 ? sobrecostoLogislab / (totalCalc / 10) : 0

    setTotal(totalCalc)
    setBreakEven(Math.min(breakEvenCalc, 9.9))
  }, [sup, jun, res, mon, par, cop])

  const formatCurrency = (value: number) => {
    return `$${Math.round(value).toLocaleString("es-MX")}`
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="py-24 pt-32 bg-background">
          <div className="max-w-[1180px] mx-auto px-8">
            <span className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-primary mb-4 block">
              Calculadora de costo total de operación
            </span>
            <h1 className="font-sans text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-none text-foreground mb-5">
              Cuantifique el costo real de su{" "}
              <em className="not-italic text-primary">piso actual</em>
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-[680px]">
              Ingrese los datos de su operación y estime el costo total de operación a 10 años.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-24 border-t border-border bg-card">
          <div className="max-w-[1180px] mx-auto px-8">
            <div className="bg-card-foreground/[0.025] border border-border rounded-lg overflow-hidden">
              <div className="bg-primary/10 border-b border-primary/10 px-7 py-4">
                <span className="font-mono text-[0.7rem] tracking-[0.15em] text-primary uppercase">
                  Análisis de costo total de operación — Comparativo a 10 años
                </span>
              </div>

              <div className="p-7 grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Inputs */}
                <div className="flex flex-col gap-5">
                  <h3 className="font-sans text-base font-bold text-foreground mb-4">
                    Datos de su operación
                  </h3>

                  <CalcInput
                    label="Superficie total (m²)"
                    value={sup}
                    onChange={setSup}
                    min={1000}
                    max={100000}
                    step={1000}
                    display={`${sup.toLocaleString("es-MX")} m²`}
                  />
                  <CalcInput
                    label="Metros lineales de juntas"
                    value={jun}
                    onChange={setJun}
                    min={100}
                    max={10000}
                    step={100}
                    display={`${jun.toLocaleString("es-MX")} ml`}
                  />
                  <CalcInput
                    label="Costo de resellado actual ($/ml)"
                    value={res}
                    onChange={setRes}
                    min={50}
                    max={300}
                    step={10}
                    display={`${formatCurrency(res)}/ml`}
                  />
                  <CalcInput
                    label="Montacargas en operación"
                    value={mon}
                    onChange={setMon}
                    min={1}
                    max={100}
                    step={1}
                    display={`${mon} equipos`}
                  />
                  <CalcInput
                    label="Paros no planeados por junta (días/año)"
                    value={par}
                    onChange={setPar}
                    min={0}
                    max={30}
                    step={1}
                    display={`${par} días/año`}
                  />
                  <CalcInput
                    label="Costo de paro por día (MXN)"
                    value={cop}
                    onChange={setCop}
                    min={10000}
                    max={500000}
                    step={5000}
                    display={`${formatCurrency(cop)}/día`}
                  />
                </div>

                {/* Results */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-sans text-base font-bold text-foreground mb-2">
                    Resultados a 10 años
                  </h3>

                  <div className="p-4 rounded bg-card-foreground/[0.025] border border-border">
                    <div className="text-[0.72rem] text-muted-foreground font-mono mb-1">
                      Costo acumulado sistema convencional
                    </div>
                    <div className="font-sans text-3xl font-black text-destructive">
                      {formatCurrency(total)}
                    </div>
                    <div className="text-[0.7rem] text-muted-foreground mt-1">
                      Resellado + reparación bordes + paros + desgaste equipo
                    </div>
                  </div>

                  <div className="p-4 rounded bg-card-foreground/[0.025] border border-border">
                    <div className="text-[0.72rem] text-muted-foreground font-mono mb-1">
                      Costo TRAXUS a 10 años
                    </div>
                    <div className="font-sans text-3xl font-black text-success">
                      {formatCurrency(0)}
                    </div>
                    <div className="text-[0.7rem] text-muted-foreground mt-1">
                      Instalación única, sin resellado, sin paros por junta
                    </div>
                  </div>

                  <div className="bg-success/10 border border-success/25 rounded p-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1">
                      Ahorro neto estimado a 10 años
                    </p>
                    <div className="font-sans text-4xl font-black text-success leading-none">
                      {formatCurrency(total)}
                    </div>
                  </div>

                  <div className="p-4 rounded bg-card-foreground/[0.025] border border-border">
                    <div className="text-[0.72rem] text-muted-foreground font-mono mb-1">
                      Punto de equilibrio estimado
                    </div>
                    <div className="font-sans text-3xl font-black text-primary">
                      {breakEven.toFixed(1)} años
                    </div>
                    <div className="text-[0.7rem] text-muted-foreground mt-1">
                      A partir de este punto, TRAXUS genera ahorro neto
                    </div>
                  </div>

                  <Link
                    href="/contacto"
                    className="block text-center mt-2 bg-primary hover:bg-accent text-primary-foreground font-sans font-extrabold text-[0.95rem] tracking-[0.06em] uppercase px-8 py-3.5 rounded transition-colors"
                  >
                    Solicitar propuesta formal con estos datos
                  </Link>
                  <p className="text-[0.7rem] text-muted-foreground font-mono text-center mt-2">
                    Los resultados son estimados. La propuesta formal incluye
                    análisis técnico personalizado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function CalcInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
  display,
}: {
  label: string
  value: number
  onChange: (v: number) => void
  min: number
  max: number
  step: number
  display: string
}) {
  return (
    <div>
      <label className="block text-xs text-muted-foreground font-mono tracking-[0.05em] mb-2">
        {label}
      </label>
      <input
        type="range"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        step={step}
        className="w-full accent-primary"
      />
      <span className="font-sans text-lg font-bold text-primary">{display}</span>
    </div>
  )
}
