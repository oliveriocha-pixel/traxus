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

  const [costoConvencional, setCostoConvencional] = useState(0)
  const [costoTraxus, setCostoTraxus] = useState(0)
  const [ahorroNeto, setAhorroNeto] = useState(0)
  const [breakEven, setBreakEven] = useState(0)

  useEffect(() => {
    // Costo sistema convencional a 10 años
    const costoResellado10 = jun * res * 3
    const costoReparacionBordes10 = jun * 95 * 2 * 10
    const costoParos10 = par * cop * 10
    const costoDesgasteEquipos10 = mon * 8000 * 10
    const totalConvencional =
      costoResellado10 + costoReparacionBordes10 + costoParos10 + costoDesgasteEquipos10

    // Costo TRAXUS = sobrecosto de instalación (diferencial vs. convencional)
    const sobrecosto = sup * 180

    // Ahorro neto a 10 años
    const ahorro = totalConvencional - sobrecosto

    // Punto de equilibrio (años)
    const costoAnualConvencional = totalConvencional / 10
    const be = costoAnualConvencional > 0 ? sobrecosto / costoAnualConvencional : 0

    setCostoConvencional(totalConvencional)
    setCostoTraxus(sobrecosto)
    setAhorroNeto(ahorro)
    setBreakEven(Math.min(be, 9.9))
  }, [sup, jun, res, mon, par, cop])

  const fmt = (value: number) =>
    `$${Math.round(Math.abs(value)).toLocaleString("es-MX")}`

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="py-24 pt-32 bg-[#0D0D0B]">
          <div className="max-w-[1180px] mx-auto px-8">
            <span className="font-[var(--font-ibm-mono)] text-[0.7rem] tracking-[0.18em] uppercase text-[#E8A020] mb-4 block">
              // Calculadora de costo total de operación
            </span>
            <h1 className="font-[var(--font-barlow)] text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-none text-[#FAF7F0] mb-5">
              Cuantifique el costo real de su{" "}
              <em className="not-italic text-[#E8A020]">piso actual</em>
            </h1>
            <p className="text-[1.05rem] text-[rgba(240,234,214,0.65)] font-light leading-relaxed max-w-[680px]">
              Ingrese los datos de su operación y estime el costo total de operación a 10 años.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-24 border-t border-white/[0.08] bg-[#161612]">
          <div className="max-w-[1180px] mx-auto px-8">
            <div className="bg-white/[0.025] border border-white/[0.08] rounded-lg overflow-hidden">
              <div className="bg-[rgba(232,160,32,0.08)] border-b border-[rgba(232,160,32,0.12)] px-7 py-4">
                <span className="font-[var(--font-ibm-mono)] text-[0.7rem] tracking-[0.15em] text-[#E8A020] uppercase">
                  // Análisis de costo total de operación — Comparativo a 10 años
                </span>
              </div>

              <div className="p-7 grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Inputs */}
                <div className="flex flex-col gap-5">
                  <h3 className="font-[var(--font-barlow)] text-base font-bold text-[#FAF7F0] mb-4">
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
                    display={`${fmt(res)}/ml`}
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
                    display={`${fmt(cop)}/día`}
                  />
                </div>

                {/* Results */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-[var(--font-barlow)] text-base font-bold text-[#FAF7F0] mb-2">
                    Resultados a 10 años
                  </h3>

                  {/* Costo convencional */}
                  <div className="p-4 rounded bg-white/[0.025] border border-white/[0.08]">
                    <div className="font-[var(--font-ibm-mono)] text-[0.72rem] text-[#8A8878] mb-1">
                      // Costo acumulado sistema convencional
                    </div>
                    <div className="font-[var(--font-barlow)] text-3xl font-black text-[#E05050]">
                      {fmt(costoConvencional)}
                    </div>
                    <div className="font-[var(--font-ibm-mono)] text-[0.7rem] text-[#8A8878] mt-1">
                      Resellado + reparación bordes + paros + desgaste equipo
                    </div>
                  </div>

                  {/* Inversión TRAXUS */}
                  <div className="p-4 rounded bg-white/[0.025] border border-white/[0.08]">
                    <div className="font-[var(--font-ibm-mono)] text-[0.72rem] text-[#8A8878] mb-1">
                      // Inversión TRAXUS (sobrecosto de instalación)
                    </div>
                    <div className="font-[var(--font-barlow)] text-3xl font-black text-[#FAF7F0]">
                      {fmt(costoTraxus)}
                    </div>
                    <div className="font-[var(--font-ibm-mono)] text-[0.7rem] text-[#8A8878] mt-1">
                      Diferencial vs. piso convencional · Sin costo de mantenimiento
                    </div>
                  </div>

                  {/* Ahorro neto */}
                  <div
                    className={`rounded p-4 text-center border ${
                      ahorroNeto >= 0
                        ? "bg-[#5EC98A]/10 border-[#5EC98A]/25"
                        : "bg-[#E05050]/10 border-[#E05050]/25"
                    }`}
                  >
                    <p className="font-[var(--font-ibm-mono)] text-[0.7rem] text-[#8A8878] mb-1">
                      // Ahorro neto estimado a 10 años
                    </p>
                    <div
                      className={`font-[var(--font-barlow)] text-4xl font-black leading-none ${
                        ahorroNeto >= 0 ? "text-[#5EC98A]" : "text-[#E05050]"
                      }`}
                    >
                      {ahorroNeto >= 0 ? fmt(ahorroNeto) : `–${fmt(ahorroNeto)}`}
                    </div>
                    {ahorroNeto < 0 && (
                      <p className="font-[var(--font-ibm-mono)] text-[0.65rem] text-[#8A8878] mt-2">
                        En este escenario el volumen de juntas es bajo. Considere ajustar los parámetros.
                      </p>
                    )}
                  </div>

                  {/* Punto de equilibrio */}
                  <div className="p-4 rounded bg-white/[0.025] border border-white/[0.08]">
                    <div className="font-[var(--font-ibm-mono)] text-[0.72rem] text-[#8A8878] mb-1">
                      // Punto de equilibrio estimado
                    </div>
                    <div className="font-[var(--font-barlow)] text-3xl font-black text-[#E8A020]">
                      {breakEven.toFixed(1)} años
                    </div>
                    <div className="font-[var(--font-ibm-mono)] text-[0.7rem] text-[#8A8878] mt-1">
                      A partir de este punto, TRAXUS genera ahorro neto
                    </div>
                  </div>

                  <Link
                    href="/contacto"
                    className="block text-center mt-2 bg-[#E8A020] hover:bg-[#F5C05A] text-[#161612] font-[var(--font-barlow)] font-extrabold text-[0.95rem] tracking-[0.06em] uppercase px-8 py-3.5 rounded transition-all hover:-translate-y-0.5"
                  >
                    Solicitar propuesta formal con estos datos
                  </Link>
                  <p className="font-[var(--font-ibm-mono)] text-[0.7rem] text-[#8A8878] text-center mt-2">
                    Los resultados son estimados. La propuesta formal incluye análisis técnico personalizado.
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
      <label className="block font-[var(--font-ibm-mono)] text-[0.68rem] tracking-[0.06em] uppercase text-[#8A8878] mb-2">
        {label}
      </label>
      <input
        type="range"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        step={step}
        className="w-full accent-[#E8A020]"
        aria-label={label}
      />
      <span className="font-[var(--font-barlow)] text-lg font-bold text-[#E8A020]">{display}</span>
    </div>
  )
}
