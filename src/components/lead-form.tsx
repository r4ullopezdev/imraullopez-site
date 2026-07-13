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

const fieldClass =
  "w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-copy outline-none transition placeholder:text-faint focus:border-accent/70 focus:ring-2 focus:ring-accent/20";

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
        "No se pudo enviar el formulario. Inténtalo otra vez o escríbenos por WhatsApp.",
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
        "space-y-4 rounded-[24px] border border-line bg-surface shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03),0_30px_80px_-40px_rgba(0,0,0,0.9)]",
        compact ? "p-5" : "p-7",
      )}
    >
      <div className="space-y-2">
        <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
          Diagnóstico · $149
        </p>
        <h3 className="text-2xl font-semibold text-copy">
          Solicita tu diagnóstico
        </h3>
        <p className="text-sm leading-7 text-muted">
          Cuéntanos tu empresa y te enviamos el enlace para agendar. Trabajamos
          con negocios que quieren implementar, no solo explorar.
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
        <span className="text-sm font-medium text-copy/85">
          Presupuesto estimado
        </span>
        <select
          value={form.budget}
          onChange={(event) =>
            setForm((current) => ({ ...current, budget: event.target.value }))
          }
          required
          className={fieldClass}
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
        <span className="text-sm font-medium text-copy/85">
          ¿Qué quieres resolver?
        </span>
        <textarea
          value={form.problem}
          onChange={(event) =>
            setForm((current) => ({ ...current, problem: event.target.value }))
          }
          required
          rows={compact ? 4 : 5}
          className={fieldClass}
          placeholder="Describe el proceso comercial u operativo que quieres mejorar."
        />
      </label>

      {error ? <p className="text-sm text-rose-400">{error}</p> : null}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(45,212,191,0.6)] transition hover:bg-accent-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Enviando..." : "Solicitar diagnóstico"}
      </button>
      <p className="text-center text-xs text-faint">
        Respondemos en horas hábiles. Sin compromiso.
      </p>
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
      <span className="text-sm font-medium text-copy/85">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        className="w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-copy outline-none transition placeholder:text-faint focus:border-accent/70 focus:ring-2 focus:ring-accent/20"
      />
    </label>
  );
}
