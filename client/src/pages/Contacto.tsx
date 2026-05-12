/**
 * Contacto — Contact page with quotation form.
 * Form submission is a placeholder that opens a pre-filled mailto and shows a toast.
 * Style: split layout (form left, info right), cream base, ink dark accents.
 */
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from "lucide-react";
import { toast } from "sonner";
import { NUTERMIA } from "@/lib/nutermia";
import { Chromatogram } from "@/components/Chromatogram";

const SUBJECTS = [
  "Cotización de equipos (HPLC, GC, UV-VIS, etc.)",
  "Mantenimiento preventivo o correctivo",
  "Validación IQ / OQ / PQ",
  "Consumibles y columnas",
  "Servicios para gases medicinales",
  "Otro",
];

export default function Contacto() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const company = String(fd.get("company") || "");
    const email = String(fd.get("email") || "");
    const phone = String(fd.get("phone") || "");
    const subject = String(fd.get("subject") || "Consulta general");
    const message = String(fd.get("message") || "");

    const body = encodeURIComponent(
      `Nombre: ${name}\nEmpresa: ${company}\nTeléfono: ${phone}\nCorreo: ${email}\n\nAsunto: ${subject}\n\nMensaje:\n${message}\n`
    );
    const mailto = `mailto:${NUTERMIA.emails[0]}?subject=${encodeURIComponent(
      "[Web] " + subject
    )}&body=${body}`;
    window.location.href = mailto;

    setTimeout(() => {
      toast.success("Se abrió su cliente de correo con la solicitud lista para enviar.", {
        description: `También puede escribirnos directamente a ${NUTERMIA.emails[0]}`,
      });
      setSubmitting(false);
    }, 400);
  }

  return (
    <>
      <section className="relative bg-[color:var(--color-nutermia-cream)] grain overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-24 text-foreground/30 pointer-events-none">
          <Chromatogram variant="divider" animate={false} />
        </div>
        <div className="container relative pt-16 pb-16 lg:pt-24 lg:pb-20">
          <span className="section-tab">Contacto</span>
          <div className="mt-5 grid lg:grid-cols-12 gap-10 items-end">
            <h1 className="lg:col-span-8 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.04]">
              Hablemos de su <em className="italic text-[color:var(--color-nutermia-blue)]">laboratorio</em>.
            </h1>
            <p className="lg:col-span-4 text-muted-foreground leading-relaxed">
              Un especialista de {NUTERMIA.legalName} le responderá en menos de 24 horas hábiles con
              una propuesta técnica y comercial a la medida.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container py-16 lg:py-20 grid lg:grid-cols-12 gap-10">
          {/* FORM */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-6 lg:p-10 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Nombre completo" name="name" required placeholder="Ana María Rodríguez" />
                <Field label="Empresa / Laboratorio" name="company" required placeholder="Su organización" />
                <Field label="Correo electrónico" name="email" type="email" required placeholder="ana@empresa.com" />
                <Field label="Teléfono" name="phone" type="tel" required placeholder="+57 300 000 0000" />
              </div>

              <div>
                <label className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                  Asunto
                </label>
                <select
                  name="subject"
                  required
                  defaultValue={SUBJECTS[0]}
                  className="mt-2 w-full rounded-md border border-input bg-background px-3.5 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[color:var(--color-nutermia-green)]/40 focus:border-[color:var(--color-nutermia-green)]"
                >
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Cuéntenos sobre el equipo, servicio o consumible que necesita..."
                  className="mt-2 w-full rounded-md border border-input bg-background px-3.5 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-nutermia-green)]/40 focus:border-[color:var(--color-nutermia-green)]"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <p className="text-xs text-muted-foreground max-w-sm">
                  Al enviar, sus datos serán utilizados únicamente para responder a su solicitud
                  comercial.
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-press inline-flex items-center gap-2 rounded-md bg-[color:var(--color-nutermia-blue)] px-6 py-3.5 text-sm font-medium text-white hover:bg-[color:var(--color-nutermia-blue-deep)] disabled:opacity-60"
                >
                  {submitting ? "Enviando…" : "Enviar solicitud"}
                  {submitting ? <Send className="h-4 w-4 animate-pulse" /> : <ArrowRight className="h-4 w-4" />}
                </button>
              </div>
            </form>
          </div>

          {/* INFO PANEL */}
          <aside className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl bg-[color:var(--color-nutermia-ink)] text-[color:var(--color-nutermia-cream)] p-6 lg:p-8">
              <span className="font-mono text-[11px] tracking-widest text-[color:var(--color-nutermia-green-soft)]">
                CANALES DIRECTOS
              </span>
              <ul className="mt-5 space-y-4 text-sm">
                {NUTERMIA.phones.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <Phone className="h-4 w-4 mt-0.5 text-[color:var(--color-nutermia-green-soft)] shrink-0" />
                    <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-white">{p}</a>
                  </li>
                ))}
                {NUTERMIA.emails.map((e) => (
                  <li key={e} className="flex items-start gap-3">
                    <Mail className="h-4 w-4 mt-0.5 text-[color:var(--color-nutermia-green-soft)] shrink-0" />
                    <a href={`mailto:${e}`} className="hover:text-white break-all">{e}</a>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-[color:var(--color-nutermia-green-soft)] shrink-0" />
                  <span>{NUTERMIA.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-4 w-4 mt-0.5 text-[color:var(--color-nutermia-green-soft)] shrink-0" />
                  <span>{NUTERMIA.hours}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
              <span className="font-mono text-[11px] tracking-widest text-muted-foreground">CERTIFICACIÓN</span>
              <h3 className="mt-2 font-display text-2xl leading-tight">{NUTERMIA.iso}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Sistema de Gestión de la Calidad certificado. Operación bajo BPM y FDA 21 CFR Part 11
                para servicios de validación.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-input bg-background px-3.5 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-nutermia-green)]/40 focus:border-[color:var(--color-nutermia-green)]"
      />
    </div>
  );
}
