import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      nombreCargo,
      empresa,
      whatsapp,
      correo,
      ciudadEstado,
      tipoOperacion,
      areaM2,
      etapaProyecto,
      comentariosTecnicos,
    } = body

    // Validación básica server-side
    if (!nombreCargo || !empresa || !whatsapp || !correo) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(correo)) {
      return NextResponse.json(
        { error: "Correo electrónico inválido" },
        { status: 400 }
      )
    }

    const emailBody = `Nueva solicitud de evaluación técnica — traxus.mx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DATOS DE CONTACTO
Nombre y cargo: ${nombreCargo}
Empresa: ${empresa}
WhatsApp: ${whatsapp}
Correo: ${correo}

DATOS DEL PROYECTO
Ciudad / Estado: ${ciudadEstado || "No especificado"}
Tipo de operación: ${tipoOperacion || "No especificado"}
Área aproximada: ${areaM2 || "No especificado"}
Etapa del proyecto: ${etapaProyecto || "No especificado"}

COMENTARIOS TÉCNICOS
${comentariosTecnicos || "Sin comentarios adicionales"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Enviado desde: traxus.mx/contacto`

    // ── OPCIÓN A: Resend (recomendado para producción) ──────────────────
    // Instalar: pnpm add resend
    // Configurar: RESEND_API_KEY en .env.local
    //
    // import { Resend } from "resend"
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: "noreply@traxus.mx",
    //   to: "hola@traxus.mx",
    //   replyTo: correo,
    //   subject: `Evaluación Técnica de Proyecto | TRAXUS — ${empresa}`,
    //   text: emailBody,
    // })

    // ── OPCIÓN B: Nodemailer (SMTP propio) ─────────────────────────────
    // Instalar: pnpm add nodemailer @types/nodemailer
    // Configurar variables en .env.local:
    //   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
    //
    // import nodemailer from "nodemailer"
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT),
    //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    // })
    // await transporter.sendMail({
    //   from: `"TRAXUS Web" <${process.env.SMTP_USER}>`,
    //   to: "hola@traxus.mx",
    //   replyTo: correo,
    //   subject: `Evaluación Técnica de Proyecto | TRAXUS — ${empresa}`,
    //   text: emailBody,
    // })

    // ── FALLBACK TEMPORAL: log en servidor (reemplazar con opción A o B) ─
    // Esto permite que el form funcione mientras se configura el proveedor de email
    console.log("=== NUEVA SOLICITUD TRAXUS ===")
    console.log(emailBody)
    console.log("==============================")

    // En producción, con Resend o Nodemailer, el console.log se reemplaza
    // por el envío real. El response al cliente es el mismo en ambos casos.

    return NextResponse.json(
      {
        ok: true,
        message: "Solicitud recibida. Le contactaremos en menos de 48 horas hábiles.",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error en /api/contact:", error)
    return NextResponse.json(
      { error: "Error interno. Por favor contáctenos directamente a hola@traxus.mx" },
      { status: 500 }
    )
  }
}
