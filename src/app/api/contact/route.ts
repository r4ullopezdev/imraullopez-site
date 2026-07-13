import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  whatsapp?: string;
  budget?: string;
  problem?: string;
  source?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (!body.name || !body.company || !body.email || !body.whatsapp || !body.budget || !body.problem) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 },
    );
  }

  const lead = {
    ...body,
    receivedAt: new Date().toISOString(),
  };

  // Reenvío opcional a n8n / CRM. Solo se activa si CONTACT_WEBHOOK_URL está definida.
  // Si falla o no está configurada, el lead igual se acepta (no bloquea al usuario).
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

  return NextResponse.json({
    ok: true,
    forwarded,
    message: forwarded
      ? "Lead recibido y enviado a la automatización configurada."
      : "Lead recibido. Configura CONTACT_WEBHOOK_URL para enviarlo automáticamente a n8n, CRM o email.",
    lead,
  });
}
