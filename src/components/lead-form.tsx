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
      setError("No se pudo enviar el formulario. Inténtalo otra vez o escríbeme por WhatsApp.");
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
        "space-y-4 rounded-[28px] border border-white/10 bg-[#091321]/90 p-6 shadow-[0_18px_80px_rgba(0,0,0,0.28)]",
        compact ? "p-5" : "p-7",
      )}
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
          Diagnóstico IA
        </p>
        <h3 className="text-2xl font-semibold text-white">
          Cuéntame qué quieres automatizar
        </h3>
        <p className="text-sm leading-7 text-slate-300">
          Trabajo con empresas que quieren implementar sistemas reales, no solo explorar ideas sin ejecución.
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
          onChange={(value) => setForm((current) => ({ ...current, company: value }))}
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
          onChange={(value) => setForm((current) => ({ ...current, whatsapp: value }))}
          required
        />
      </div>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-slate-200">Presupuesto estimado</span>
        <select
          value={form.budget}
          onChange={(event) =>
            setForm((current) => ({ ...current, budget: event.target.value }))
          }
          required
          className="w-full rounded-2xl border border-white/10 bg-[#0c1725] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/50"
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
        <span className="text-sm font-medium text-slate-200">Problema principal</span>
        <textarea
          value={form.problem}
          onChange={(event) =>
            setForm((current) => ({ ...current, problem: event.target.value }))
          }
          required
          rows={compact ? 4 : 6}
          className="w-full rounded-2xl border border-white/10 bg-[#0c1725] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/50"
          placeholder="Describe qué proceso manual, comercial o administrativo quieres resolver."
        />
      </label>

      {error ? <p className="text-sm text-rose-300">{error}</p> : null}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center rounded-full border border-cyan-200/70 bg-[#f3fbff] px-5 py-3 text-sm font-semibold text-[#06111c] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Enviando..." : "Agendar diagnóstico IA"}
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
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        className="w-full rounded-2xl border border-white/10 bg-[#0c1725] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/50"
      />
    </label>
  );
}
