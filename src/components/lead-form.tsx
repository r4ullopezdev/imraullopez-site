"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { leadBudgetOptions } from "@/content/site";
import { cn } from "@/lib/utils";

type LeadFormProps = {
  source: string;
  compact?: boolean;
};

type FormState = {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  budget: string;
  problem: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  budget: "",
  problem: "",
};

export function LeadForm({ source, compact = false }: LeadFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...form, source }),
    });

    if (!response.ok) {
      setLoading(false);
      setError(
        "No se pudo enviar el formulario. Intentalo otra vez o escribeme por WhatsApp.",
      );
      return;
    }

    const params = new URLSearchParams({
      nombre: form.name,
      empresa: form.company,
      origen: source,
    });

    router.push(`/gracias?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "space-y-4 rounded-[28px] border border-[#d9dfe7] bg-white p-6 shadow-[0_20px_70px_rgba(22,34,55,0.12)]",
        compact ? "p-5" : "p-7",
      )}
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a5320]">
          Diagnostico IA
        </p>
        <h3 className="text-2xl font-semibold text-[#102033]">
          Cuentame que quieres automatizar
        </h3>
        <p className="text-sm leading-7 text-[#5a6472]">
          Trabajo con empresas que quieren implementar sistemas reales, no solo
          explorar ideas sin ejecucion.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Nombre"
          value={form.name}
          onChange={(value) => setForm((current) => ({ ...current, name: value }))}
          required
        />
        <Field
          label="Empresa"
          value={form.company}
          onChange={(value) =>
            setForm((current) => ({ ...current, company: value }))
          }
          required
        />
        <Field
          label="Email"
          type="email"
          value={form.email}
          onChange={(value) => setForm((current) => ({ ...current, email: value }))}
          required
        />
        <Field
          label="WhatsApp"
          value={form.whatsapp}
          onChange={(value) =>
            setForm((current) => ({ ...current, whatsapp: value }))
          }
          required
        />
      </div>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-[#233447]">
          Presupuesto estimado
        </span>
        <select
          value={form.budget}
          onChange={(event) =>
            setForm((current) => ({ ...current, budget: event.target.value }))
          }
          required
          className="w-full rounded-2xl border border-[#d5dce5] bg-[#fcfdff] px-4 py-3 text-sm text-[#102033] outline-none transition focus:border-[#7ca3c8]"
        >
          <option value="">Selecciona un rango</option>
          {leadBudgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-[#233447]">
          Problema principal
        </span>
        <textarea
          value={form.problem}
          onChange={(event) =>
            setForm((current) => ({ ...current, problem: event.target.value }))
          }
          required
          rows={compact ? 4 : 6}
          className="w-full rounded-2xl border border-[#d5dce5] bg-[#fcfdff] px-4 py-3 text-sm text-[#102033] outline-none transition focus:border-[#7ca3c8]"
          placeholder="Describe que proceso manual, comercial o administrativo quieres resolver."
        />
      </label>

      {error ? <p className="text-sm text-rose-500">{error}</p> : null}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center rounded-full border border-[#102c46] bg-[#102c46] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2439] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Enviando..." : "Agendar diagnostico IA"}
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: string;
};

function Field({
  label,
  value,
  onChange,
  required = false,
  type = "text",
}: FieldProps) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-[#233447]">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        className="w-full rounded-2xl border border-[#d5dce5] bg-[#fcfdff] px-4 py-3 text-sm text-[#102033] outline-none transition focus:border-[#7ca3c8]"
      />
    </label>
  );
}
