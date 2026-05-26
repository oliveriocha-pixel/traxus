"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const processSteps = [
  { num: 1, title: "Revisión técnica en 24 horas", desc: "Un ingeniero de TRAXUS revisa la información de su proyecto en las primeras 24 horas hábiles y determina el sistema correcto." },
  { num: 2, title: "Reunión técnica o videollamada", desc: "Si el proyecto aplica para Logislab®, agendamos una reunión para profundizar en las condiciones reales de la operación." },
  { num: 3, title: "Propuesta técnica en 48 horas", desc: "No solo precio — alcance, metodología y criterios de planicidad. Sin letra pequeña. Sin seguimiento comercial agresivo." },
]

const projectTypes = [
  { value: "", label: "Seleccione el tipo de operación" },
  { value: "freeze", label: "Cámara de refrigeración — Logislab® Freeze" },
  { value: "cedi", label: "Centro de distribución / CEDI" },
  { value: "vna", label: "Almacén VNA — pasillos angostos" },
  { value: "nave", label: "Nave industrial" },
  { value: "racks", label: "Piso para racks de alta densidad" },
  { value: "patio", label: "Patio de maniobra / exterior industrial" },
  { value: "otro", label: "Otro — lo describo abajo" },
]

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombreCargo: "",
    empresa: "",
    tipoProyecto: "",
    superficie: "",
    ciudad: "",
    fechaInicio: "",
    detalleProyecto: "",
  })
  const [toast, setToast] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const emailBody = `Nueva solicitud de evaluación desde traxus.mx

Nombre y cargo: ${formData.nombreCargo}
Empresa: ${formData.empresa}
Tipo de proyecto: ${formData.tipoProyecto}
Superficie aproximada: ${formData.superficie}
Ciudad del proyecto: ${formData.ciudad}
Fecha estimada de inicio: ${formData.fechaInicio}

Detalles adicionales:
${formData.detalleProyecto}`

    const subject = encodeURIComponent("Solicitud de Evaluación Técnica | TRAXUS")
    const body = encodeURIComponent(emailBody)
    window.location.href = `mailto:hola@traxus.mx?subject=${subject}&body=${body}`
    
    setToast("Se abrió su correo. También puede escribir a hola@traxus.mx")
    setIsSubmitting(false)

    setTimeout(() => setToast(""), 5000)
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="py-24 pt-28 bg-[#161612] border-b border-white/[0.08]">
          <div className="max-w-[1180px] mx-auto px-8">
            <h1 className="font-[var(--font-barlow)] text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-none text-[#FAF7F0] mb-5">
              Solicite una<br /><em className="not-italic text-[#E8A020]">evaluación técnica</em>
            </h1>
            <p className="text-[1.05rem] text-[rgba(240,234,214,0.65)] font-light leading-relaxed max-w-[560px]">
              Comparta los datos de su operación y nuestro equipo desarrollará una propuesta técnica específica para su proyecto.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-24 bg-[#1E1E18]">
          <div className="max-w-[1180px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-14 items-start">
              {/* Left - Process Steps */}
              <div>
                <span className="font-[var(--font-ibm-mono)] text-[0.7rem] tracking-[0.18em] uppercase text-[#E8A020] mb-4 block">
                  // Cómo funciona el proceso
                </span>
                <h2 className="font-[var(--font-barlow)] text-[clamp(1.8rem,3.5vw,2.9rem)] font-extrabold leading-tight text-[#FAF7F0] mb-7">
                  Tres pasos.<br /><em className="not-italic text-[#E8A020]">48 horas.</em>
                </h2>
                
                <div className="flex flex-col gap-4">
                  {processSteps.map((step) => (
                    <div key={step.num} className="flex items-start gap-4 p-4 bg-white/[0.025] border border-white/[0.08] rounded">
                      <div className="font-[var(--font-barlow)] text-2xl font-black text-[#E8A020] leading-none shrink-0 w-7 text-center">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="font-[var(--font-barlow)] font-bold text-[0.95rem] text-[#FAF7F0] mb-0.5">
                          {step.title}
                        </h4>
                        <p className="text-[0.82rem] text-[#8A8878] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote Block */}
                <div className="border-l-[3px] border-[#E8A020] pl-5 py-4 pr-5 bg-[rgba(232,160,32,0.05)] rounded-r my-7">
                  <p className="font-[var(--font-barlow)] text-xl font-semibold italic text-[#F5C05A] leading-snug">
                    &ldquo;No pedimos compromiso. Pedimos información técnica básica para darle una respuesta útil — en 48 horas.&rdquo;
                  </p>
                </div>

                <p className="text-[0.85rem] text-[#8A8878] leading-relaxed mb-8">
                  Ingeniería especializada · Sistema Logislab® propio · Operamos en todo México.<br />
                  Hemos trabajado con operadores logísticos, desarrolladores industriales y general contractors. Cada proyecto empieza con una conversación técnica honesta.
                </p>

                <div className="p-5 bg-white/[0.025] border border-white/[0.08] rounded">
                  <p className="font-[var(--font-ibm-mono)] text-[0.72rem] text-[#8A8878] tracking-[0.08em] uppercase mb-3">
                    // Contacto directo
                  </p>
                  <a href="mailto:hola@traxus.mx" className="flex items-center gap-2 text-[0.9rem] text-[#F0EAD6] hover:text-[#E8A020] transition-colors">
                    <svg className="w-4 h-4 text-[#E8A020]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    hola@traxus.mx
                  </a>
                  <p className="text-[0.85rem] text-[#8A8878] mt-2 mb-4">Lunes a viernes · 8:00 – 18:00 CST</p>
                  
                  {/* Telefonos */}
                  <div className="flex flex-col gap-2 mb-4 pt-3 border-t border-white/[0.08]">
                    <a href="tel:+523329324326" className="flex items-center gap-2 text-[0.85rem] text-[#F0EAD6] hover:text-[#E8A020] transition-colors">
                      <svg className="w-4 h-4 text-[#E8A020]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Oficina Guadalajara: +52 1 33 2932 4326</span>
                    </a>
                    <a href="tel:+525568047949" className="flex items-center gap-2 text-[0.85rem] text-[#F0EAD6] hover:text-[#E8A020] transition-colors">
                      <svg className="w-4 h-4 text-[#E8A020]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Oficina CDMX: +52 1 5568047949</span>
                    </a>
                  </div>

                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/company/traxusmx/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-[#0A66C2]/10 border border-[#0A66C2]/30 rounded hover:bg-[#0A66C2]/20 transition-colors group"
                  >
                    <svg className="w-6 h-6 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <div>
                      <p className="text-[0.85rem] text-[#F0EAD6] font-medium group-hover:text-[#0A66C2] transition-colors">TRAXUS Ingeniería y Construcción</p>
                      <p className="text-[0.72rem] text-[#8A8878]">Síguenos en LinkedIn</p>
                    </div>
                  </a>

                  {/* Direccion */}
                  <div className="mt-4 pt-3 border-t border-white/[0.08]">
                    <p className="font-[var(--font-ibm-mono)] text-[0.72rem] text-[#8A8878] tracking-[0.08em] uppercase mb-2">
                      // Dirección
                    </p>
                    <p className="text-[0.85rem] text-[#F0EAD6]/80 leading-relaxed">
                      Perif. Blvd. Manuel Ávila Camacho 5,<br />
                      Lomas de Sotelo, 53390 Naucalpan de Juárez,<br />
                      Estado de México, México.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - Form */}
              <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-7">
                <p className="font-[var(--font-barlow)] text-xl font-bold text-[#FAF7F0] mb-1">
                  Solicitud de Evaluación Técnica
                </p>
                <p className="text-[0.82rem] text-[#8A8878] mb-6">
                  Sin compromiso · Sin seguimiento comercial agresivo · Respuesta en 48 h hábiles
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <FormField
                      label="Nombre y cargo"
                      name="nombreCargo"
                      type="text"
                      placeholder="Ing. Maria Garcia, Dir. Proyectos"
                      value={formData.nombreCargo}
                      onChange={handleChange}
                      required
                    />
                    <FormField
                      label="Empresa"
                      name="empresa"
                      type="text"
                      placeholder="Nombre de la empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="block text-[0.72rem] text-[#8A8878] font-[var(--font-ibm-mono)] tracking-[0.05em] mb-1.5">
                      Tipo de proyecto
                    </label>
                    <select
                      name="tipoProyecto"
                      value={formData.tipoProyecto}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/[0.05] border border-white/[0.12] rounded px-3.5 py-2.5 text-[0.9rem] text-[#FAF7F0] outline-none focus:border-[#E8A020] transition-colors"
                    >
                      {projectTypes.map((type) => (
                        <option key={type.value} value={type.value} className="bg-[#2C2C26]">
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <FormField
                      label="Superficie aproximada (m²)"
                      name="superficie"
                      type="text"
                      placeholder="Ej. 15,000 m²"
                      value={formData.superficie}
                      onChange={handleChange}
                    />
                    <FormField
                      label="Ciudad del proyecto"
                      name="ciudad"
                      type="text"
                      placeholder="Ej. Monterrey, NL"
                      value={formData.ciudad}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <FormField
                    label="Fecha estimada de inicio de obra"
                    name="fechaInicio"
                    type="text"
                    placeholder="Ej. Q3 2025 / Noviembre 2025"
                    value={formData.fechaInicio}
                    onChange={handleChange}
                  />

                  <div className="mb-3">
                    <label className="block text-[0.72rem] text-[#8A8878] font-[var(--font-ibm-mono)] tracking-[0.05em] mb-1.5">
                      ¿Algo más que deberíamos saber?
                    </label>
                    <textarea
                      name="detalleProyecto"
                      value={formData.detalleProyecto}
                      onChange={handleChange}
                      placeholder="Cargas estimadas, sistemas automatizados, temperatura de cámara, requerimientos de planicidad, estado actual del proyecto..."
                      className="w-full bg-white/[0.05] border border-white/[0.12] rounded px-3.5 py-2.5 text-[0.9rem] text-[#FAF7F0] outline-none focus:border-[#E8A020] transition-colors min-h-[80px] resize-y placeholder:text-[#8A8878]/50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#E8A020] hover:bg-[#F5C05A] text-[#161612] font-[var(--font-barlow)] font-extrabold text-[0.95rem] tracking-[0.06em] uppercase py-3.5 rounded transition-colors mt-2 disabled:opacity-50"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Solicitud — Le respondemos en 48 h"}
                  </button>
                  <p className="text-center mt-2.5 text-[0.7rem] text-[#8A8878] font-[var(--font-ibm-mono)]">
                    Sin compromiso de contratación · Evaluación técnica gratuita
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#5EC98A] text-[#042C53] font-[var(--font-barlow)] font-bold text-[0.95rem] tracking-[0.04em] px-6 py-3.5 rounded max-w-xs shadow-lg">
          {toast}
        </div>
      )}
    </>
  )
}

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string
  name: string
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}) {
  return (
    <div className="mb-3">
      <label className="block text-[0.72rem] text-[#8A8878] font-[var(--font-ibm-mono)] tracking-[0.05em] mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white/[0.05] border border-white/[0.12] rounded px-3.5 py-2.5 text-[0.9rem] text-[#FAF7F0] outline-none focus:border-[#E8A020] transition-colors placeholder:text-[#8A8878]/50"
      />
    </div>
  )
}
