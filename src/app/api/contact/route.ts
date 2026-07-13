import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  whatsapp?: string;
  budget?: string;
  problem?: string;
  source?: string;
};

type Lead = ContactPayload & { receivedAt: string };

// Envía un aviso de lead por SMTP. Solo se activa si hay credenciales SMTP.
async function sendLeadEmail(lead: Lead): Promise<boolean> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return false;

  const port = Number(SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const body = [
    `Nombre: ${lead.name}`,
    `Empresa: ${lead.company}`,
    `Email: ${lead.email}`,
    `WhatsApp: ${lead.whatsapp}`,
    `Presupuesto: ${lead.budget}`,
    `Origen: ${lead.source || "web"}`,
    "",
    "Qué quiere resolver:",
    lead.problem || "",
    "",
    `Recibido: ${lead.receivedAt}`,
  ].join("\n");

  await transporter.sendMail({
    from: `Infraestructura IA <${SMTP_USER}>`,
    to: SMTP_TO || SMTP_USER,
    replyTo: lead.email,
    subject: `Nuevo lead: ${lead.company || "—"} (${lead.source || "web"})`,
    text: body,
  });
  return true;
}

export async function POST(request: Request) {
  const data = (await request.json()) as ContactPayload;

  if (
    !data.name ||
    !data.company ||
    !data.email ||
    !data.whatsapp ||
    !data.budget ||
    !data.problem
  ) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 },
    );
  }

  const lead: Lead = { ...data, receivedAt: new Date().toISOString() };

  // Reenvío opcional a n8n / CRM.
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  let forwarded = false;
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      forwarded = res.ok;
    } catch {
      forwarded = false;
    }
  }

  // Aviso por email (no bloquea la respuesta al usuario si falla).
  let emailed = false;
  try {
    emailed = await sendLeadEmail(lead);
  } catch {
    emailed = false;
  }

  return NextResponse.json({
    ok: true,
    forwarded,
    emailed,
    message: "Lead recibido.",
    lead,
  });
}
