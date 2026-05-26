"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const operationTypes = [
  { value: "", label: "Seleccione tipo de operación" },
  { value: "logistico", label: "Centro logístico / CEDIS" },
  { value: "refrigeracion", label: "Cámara de refrigeración" },
  { value: "manufactura", label: "Manufactura" },
  { value: "nave", label: "Nave industrial" },
  { value: "patio", label: "Patio industrial" },
  { value: "especializado", label: "Proyecto especializado" },
]

const projectStages = [
  { value: "", label: "Seleccione etapa" },
  { value: "anteproyecto", label: "Anteproyecto" },
  { value: "diseno", label: "Diseño" },
  { value: "presupuesto", label: "Presupuesto" },
  { value: "licitacion", label: "Licitación" },
  { value: "construccion", label: "Próximo a construcción" },
]

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombreCargo: "",
    empresa: "",
    whatsapp: "",
    correo: "",
    ciudadEstado: "",
    tipoOperacion: "",
    areaM2: "",
    etapaProyecto: "",
    comentariosTecnicos: "",
  })
  const [toast, setToast] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const emailBody = `Nueva solicitud de evaluación técnica — traxus.mx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DATOS DE CONTACTO
Nombre y cargo: ${formData.nombreCargo}
Empresa: ${formData.empresa}
WhatsApp: ${formData.whatsapp}
Correo: ${formData.correo}

DATOS DEL PROYECTO
Ciudad / Estado: ${formData.ciudadEstado}
Tipo de operación: ${formData.tipoOperacion}
Área aproximada: ${formData.areaM2}
Etapa del proyecto: ${formData.etapaProyecto}

COMENTARIOS TÉCNICOS
${formData.comentariosTecnicos || "Sin comentarios adicionales"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`

    const subject = encodeURIComponent("Evaluación Técnica de Proyecto | TRAXUS")
    const body = encodeURIComponent(emailBody)
    window.location.href = `mailto:hola@traxus.mx?subject=${subject}&body=${body}`
    
    setToast("Se abrió su cliente de correo")
    setIsSubmitting(false)
    setTimeout(() => setToast(""), 4000)
  }

  return (
    <>
      <Navigation />
      <main className="bg-[#0D0D0B]">
        
        {/* Hero */}
        <section className="pt-32 pb-16 border-b border-white/[0.06]">
          <div className="max-w-[1100px] mx-auto px-6">
            <p className="font-[var(--font-ibm-mono)] text-[0.68rem] tracking-[0.2em] uppercase text-[#8A8878] mb-4">
              // Solicitud de proyecto
            </p>
            <h1 className="font-[var(--font-barlow)] text-[clamp(2.2rem,4.5vw,3.4rem)] font-extrabold leading-[1.05] text-[#FAF7F0] mb-4">
              Evaluación técnica<br />de proyecto
            </h1>
            <p className="text-[1rem] text-[#C4C0B0]/70 font-light leading-relaxed max-w-[480px]">
              Comparta la información básica de su operación y revisamos si el sistema aplica para su proyecto.
            </p>
            
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded text-[0.72rem] text-[#C4C0B0]/80 font-[var(--font-ibm-mono)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5EC98A]"></span>
                Respuesta en 48 h hábiles
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded text-[0.72rem] text-[#C4C0B0]/80 font-[var(--font-ibm-mono)]">
                Sin compromiso
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded text-[0.72rem] text-[#C4C0B0]/80 font-[var(--font-ibm-mono)]">
                Información confidencial
              </span>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
              
              {/* Form */}
              <div className="order-2 lg:order-1">
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      label="Nombre y cargo"
                      name="nombreCargo"
                      placeholder="Ing. María García, Dir. Proyectos"
                      value={formData.nombreCargo}
                      onChange={handleChange}
                      required
                    />
                    <InputField
                      label="Empresa"
                      name="empresa"
                      placeholder="Nombre de la empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      label="WhatsApp / Teléfono"
                      name="whatsapp"
                      placeholder="+52 1 55 1234 5678"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                    />
                    <InputField
                      label="Correo"
                      name="correo"
                      type="email"
                      placeholder="correo@empresa.com"
                      value={formData.correo}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <InputField
                    label="Ciudad / Estado"
                    name="ciudadEstado"
                    placeholder="Monterrey, Nuevo León"
                    value={formData.ciudadEstado}
                    onChange={handleChange}
                    required
                  />

                  {/* Project Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <SelectField
                      label="Tipo de operación"
                      name="tipoOperacion"
                      options={operationTypes}
                      value={formData.tipoOperacion}
                      onChange={handleChange}
                      required
                    />
                    <InputField
                      label="Área aproximada (m²)"
                      name="areaM2"
                      placeholder="Ej. 15,000"
                      value={formData.areaM2}
                      onChange={handleChange}
                    />
                  </div>

                  <SelectField
                    label="Etapa del proyecto"
                    name="etapaProyecto"
                    options={projectStages}
                    value={formData.etapaProyecto}
                    onChange={handleChange}
                  />

                  {/* Technical Comments */}
                  <div>
                    <label className="block text-[0.7rem] text-[#8A8878] font-[var(--font-ibm-mono)] tracking-[0.06em] uppercase mb-2">
                      Comentarios técnicos
                    </label>
                    <textarea
                      name="comentariosTecnicos"
                      value={formData.comentariosTecnicos}
                      onChange={handleChange}
                      placeholder="Cargas estimadas, tráfico de montacargas, temperatura de operación, requerimientos de planicidad, layout, automatización o cualquier información técnica relevante."
                      className="w-full bg-transparent border border-white/[0.1] rounded px-4 py-3 text-[0.9rem] text-[#FAF7F0] outline-none focus:border-[#E8A020]/60 transition-colors min-h-[100px] resize-y placeholder:text-[#8A8878]/40 leading-relaxed"
                    />
                  </div>

                  {/* File Upload Note */}
                  <p className="text-[0.72rem] text-[#8A8878]/60 font-[var(--font-ibm-mono)]">
                    Puede adjuntar layouts, planos o especificaciones respondiendo al correo de confirmación.
                  </p>

                  {/* Submit */}
                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#E8A020] hover:bg-[#D4920F] text-[#0D0D0B] font-[var(--font-barlow)] font-bold text-[0.85rem] tracking-[0.1em] uppercase py-4 rounded transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? "Procesando..." : "RECIBIR EVALUACIÓN TÉCNICA"}
                    </button>
                    
                    <a
                      href="https://wa.me/525568047949?text=Hola%2C%20me%20interesa%20una%20evaluaci%C3%B3n%20t%C3%A9cnica%20para%20un%20proyecto%20de%20piso%20industrial."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-transparent border border-[#25D366]/40 hover:border-[#25D366] hover:bg-[#25D366]/10 text-[#25D366] font-[var(--font-barlow)] font-semibold text-[0.85rem] tracking-[0.06em] py-3.5 rounded transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Hablar por WhatsApp
                    </a>
                  </div>
                </form>
              </div>

              {/* Contact Sidebar */}
              <aside className="order-1 lg:order-2">
                <div className="lg:sticky lg:top-28 space-y-6">
                  
                  {/* Direct Contact */}
                  <div>
                    <p className="font-[var(--font-ibm-mono)] text-[0.65rem] tracking-[0.15em] uppercase text-[#8A8878]/60 mb-4">
                      Contacto directo
                    </p>
                    <div className="space-y-2.5">
                      <a href="mailto:hola@traxus.mx" className="block text-[0.9rem] text-[#FAF7F0] hover:text-[#E8A020] transition-colors">
                        hola@traxus.mx
                      </a>
                      <a href="https://wa.me/525568047949" target="_blank" rel="noopener noreferrer" className="block text-[0.9rem] text-[#FAF7F0] hover:text-[#25D366] transition-colors">
                        +52 1 55 6804 7949
                      </a>
                      <p className="text-[0.78rem] text-[#8A8878]/60">
                        Lunes a viernes · 8:00 – 18:00 CST
                      </p>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <a 
                      href="https://www.linkedin.com/company/traxusmx/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-[0.85rem] text-[#C4C0B0]/70 hover:text-[#0A66C2] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      TRAXUS Ingeniería
                    </a>
                  </div>

                  {/* Address */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <p className="text-[0.78rem] text-[#8A8878]/50 leading-relaxed">
                      Perif. Blvd. Manuel Ávila Camacho 5,<br />
                      Lomas de Sotelo, 53390<br />
                      Naucalpan de Juárez, Edo. Méx.
                    </p>
                  </div>

                </div>
              </aside>

            </div>
          </div>
        </section>

      </main>
      <Footer />

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1A1A14] border border-[#E8A020]/30 text-[#FAF7F0] font-[var(--font-ibm-mono)] text-[0.8rem] px-5 py-3 rounded shadow-lg">
          {toast}
        </div>
      )}
    </>
  )
}

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}) {
  return (
    <div>
      <label className="block text-[0.7rem] text-[#8A8878] font-[var(--font-ibm-mono)] tracking-[0.06em] uppercase mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border border-white/[0.1] rounded px-4 py-3 text-[0.9rem] text-[#FAF7F0] outline-none focus:border-[#E8A020]/60 transition-colors placeholder:text-[#8A8878]/40"
      />
    </div>
  )
}

function SelectField({
  label,
  name,
  options,
  value,
  onChange,
  required,
}: {
  label: string
  name: string
  options: { value: string; label: string }[]
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  required?: boolean
}) {
  return (
    <div>
      <label className="block text-[0.7rem] text-[#8A8878] font-[var(--font-ibm-mono)] tracking-[0.06em] uppercase mb-2">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-[#0D0D0B] border border-white/[0.1] rounded px-4 py-3 text-[0.9rem] text-[#FAF7F0] outline-none focus:border-[#E8A020]/60 transition-colors appearance-none cursor-pointer"
        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%238A8878' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.25em 1.25em' }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-[#1A1A14]">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}
