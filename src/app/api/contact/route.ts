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

  return NextResponse.json({
    ok: true,
    message:
      "Lead recibido. Este endpoint está listo para conectarse a email, CRM o automatización externa.",
    lead: {
      ...body,
      receivedAt: new Date().toISOString(),
    },
  });
}
