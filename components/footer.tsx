import Link from "next/link"
import { TraxusLogo } from "@/components/traxus-logo"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0F0F0C] border-t border-white/[0.08] py-14 pb-6">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="block mb-4">
              <TraxusLogo className="h-7 w-auto" />
            </Link>
            <p className="text-sm text-[#8A8878] leading-relaxed max-w-[270px]">
              Ingeniería y construcción de pisos industriales de concreto para centros de distribución, cámaras de refrigeración y operaciones logísticas de alta exigencia.
            </p>
            <div className="mt-4 font-[var(--font-ibm-mono)] text-xs text-[#8A8878]/60">
              <div>hola@traxus.mx</div>
              <div>Lunes a viernes · 8:00–18:00 CST</div>
              <div className="mt-2 leading-relaxed">Perif. Blvd. Manuel Ávila Camacho 5,<br />Lomas de Sotelo, 53390 Naucalpan de Juárez,<br />Estado de México, México.</div>
            </div>
          </div>

          {/* Soluciones */}
          <div>
            <h4 className="font-[var(--font-barlow)] font-bold text-xs tracking-[0.15em] uppercase text-[#8A8878] mb-4">
              Pisos Industriales
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/sistema" className="text-sm text-[#F0EAD6]/45 hover:text-[#FAF7F0] transition-colors">
                  Sistema Logislab®
                </Link>
              </li>
              <li>
                <Link href="/freeze" className="text-sm text-[#F0EAD6]/45 hover:text-[#FAF7F0] transition-colors">
                  Logislab® Freeze
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-[#F0EAD6]/45 hover:text-[#FAF7F0] transition-colors">
                  Logislab® CEDI
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-[#F0EAD6]/45 hover:text-[#FAF7F0] transition-colors">
                  Logislab® VNA
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-[var(--font-barlow)] font-bold text-xs tracking-[0.15em] uppercase text-[#8A8878] mb-4">
              Empresa
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/empresa" className="text-sm text-[#F0EAD6]/45 hover:text-[#FAF7F0] transition-colors">
                  Quiénes somos
                </Link>
              </li>
              <li>
                <Link href="/casos" className="text-sm text-[#F0EAD6]/45 hover:text-[#FAF7F0] transition-colors">
                  Casos de éxito
                </Link>
              </li>
              <li>
                <Link href="/sistema" className="text-sm text-[#F0EAD6]/45 hover:text-[#FAF7F0] transition-colors">
                  Sistema Logislab®
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-[var(--font-barlow)] font-bold text-xs tracking-[0.15em] uppercase text-[#8A8878] mb-4">
              Contacto
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/contacto" className="text-sm text-[#F0EAD6]/45 hover:text-[#FAF7F0] transition-colors">
                  Solicitar evaluación técnica
                </Link>
              </li>
              <li>
                <a href="mailto:hola@traxus.mx" className="text-sm text-[#F0EAD6]/45 hover:text-[#FAF7F0] transition-colors">
                  hola@traxus.mx
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-[#8A8878]/40 font-[var(--font-ibm-mono)]">
            &copy; {currentYear} TRAXUS. Ingeniería de pisos industriales.
          </p>
          <p className="text-xs text-[#8A8878]/40 font-[var(--font-ibm-mono)]">
            Sistema Logislab® &middot; México
          </p>
        </div>
      </div>
    </footer>
  )
}
