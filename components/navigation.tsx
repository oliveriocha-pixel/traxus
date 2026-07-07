"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { TraxusLogo } from "@/components/traxus-logo"

const navLinks = [
  { href: "/sistema", label: "Pisos Industriales" },
  { href: "/freeze", label: "Freeze" },
  { href: "/soluciones", label: "Soluciones" },
  { href: "/casos", label: "Proyectos" },
  { href: "/calculadora", label: "Calculadora" },
  { href: "/empresa", label: "Empresa" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[rgba(22,22,18,0.97)] backdrop-blur-xl border-b border-white/[0.08] px-8 flex items-center justify-between h-[60px]">
        <Link href="/" className="flex items-center">
          <TraxusLogo className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-7 items-center list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-[var(--font-barlow)] font-semibold text-[0.82rem] tracking-[0.1em] uppercase text-[#8A8878] hover:text-[#FAF7F0] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contacto"
              className="bg-[#E8A020] hover:bg-[#F5C05A] text-[#161612] px-4 py-2 rounded font-[var(--font-barlow)] font-bold text-[0.82rem] tracking-[0.1em] uppercase transition-colors"
            >
              Evalúa tu Proyecto
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-[5px] p-1 bg-transparent border-0"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6 text-[#F0EAD6]" /> : <Menu className="w-6 h-6 text-[#F0EAD6]" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-[60px] left-0 right-0 bottom-0 bg-[rgba(22,22,18,0.98)] z-40 p-8 flex flex-col gap-6 lg:hidden">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-[var(--font-barlow)] font-bold text-2xl tracking-[0.08em] uppercase text-[#F0EAD6] border-b border-white/[0.08] pb-4"
          >
            Inicio
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-[var(--font-barlow)] font-bold text-2xl tracking-[0.08em] uppercase text-[#F0EAD6] border-b border-white/[0.08] pb-4"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setIsOpen(false)}
            className="font-[var(--font-barlow)] font-bold text-2xl tracking-[0.08em] uppercase text-[#E8A020]"
          >
            Evalúa tu Proyecto →
          </Link>
        </div>
      )}
    </>
  )
}
