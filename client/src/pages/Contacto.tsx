/**
 * Contacto — Contact page with quotation form (i18n + atmospheric backgrounds).
 * Form opens a pre-filled mailto and shows a toast.
 */
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from "lucide-react";
import { toast } from "sonner";
import { NUTERMIA } from "@/lib/nutermia";
import { Chromatogram } from "@/components/Chromatogram";
import { useI18n } from "@/contexts/I18nContext";
import type { Dict } from "@/i18n/dictionaries";

export default function Contacto() {
  const { t, s } = useI18n();
  const [submitting, setSubmitting] = useState(false);

  const subjects = [1, 2, 3, 4, 5, 6].map(i => s(`ct.s.${i}` as keyof Dict));

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const company = String(fd.get("company") || "");
    const email = String(fd.get("email") || "");
    const phone = String(fd.get("phone") || "");
    const subject = String(fd.get("subject") || subjects[0]);
    const message = String(fd.get("message") || "");

    const body = encodeURIComponent(
      `Name / Nombre: ${name}\nCompany / Empresa: ${company}\nPhone: ${phone}\nEmail: ${email}\n\nSubject: ${subject}\n\nMessage:\n${message}\n`
    );
    const mailto = `mailto:${NUTERMIA.emails[0]}?subject=${encodeURIComponent(
      "[Web] " + subject
    )}&body=${body}`;
    window.location.href = mailto;

    setTimeout(() => {
      toast.success(s("ct.toast.success"), {
        description: `${s("ct.toast.desc")} ${NUTERMIA.emails[0]}`,
      });
      setSubmitting(false);
    }, 400);
  }

  return (
    <>
      <section className="relative bg-nut-mesh-light grain overflow-hidden">
        <div className="absolute inset-0 bg-grid-faint pointer-events-none" />
        <div className="blob blob-blue h-80 w-80 -top-16 -left-20 opacity-55" />
        <div className="blob blob-green h-80 w-80 bottom-0 right-0 opacity-55" />
        <div className="absolute inset-x-0 bottom-0 h-24 text-foreground/30 pointer-events-none">
          <Chromatogram variant="divider" animate={false} />
        </div>
        <div className="container relative pt-16 pb-16 lg:pt-24 lg:pb-20">
          <span className="section-tab nut-reveal">{s("ct.eyebrow")}</span>
          <div className="mt-5 grid lg:grid-cols-12 gap-10 items-end">
            <h1 className="lg:col-span-8 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.04] nut-reveal nut-delay-1">
              {t("ct.title")}
            </h1>
            <p className="lg:col-span-4 text-muted-foreground leading-relaxed nut-reveal nut-delay-2">
              {s("ct.body")}
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-nut-mesh-cool overflow-hidden">
        <div className="absolute inset-0 bg-grid-faint pointer-events-none opacity-70" />
        <div className="blob blob-blue h-72 w-72 top-20 -right-20 opacity-45" />
        <div className="container relative py-16 lg:py-20 grid lg:grid-cols-12 gap-10">
          {/* FORM */}
          <div className="lg:col-span-7 nut-reveal">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card/95 backdrop-blur p-6 lg:p-10 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label={s("ct.f.name")}
                  name="name"
                  required
                  placeholder={s("ct.f.name.ph")}
                />
                <Field
                  label={s("ct.f.company")}
                  name="company"
                  required
                  placeholder={s("ct.f.company.ph")}
                />
                <Field
                  label={s("ct.f.email")}
                  name="email"
                  type="email"
                  required
                  placeholder={s("ct.f.email.ph")}
                />
                <Field
                  label={s("ct.f.phone")}
                  name="phone"
                  type="tel"
                  required
                  placeholder={s("ct.f.phone.ph")}
                />
              </div>

              <div>
                <label className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                  {s("ct.f.subject")}
                </label>
                <select
                  name="subject"
                  required
                  defaultValue={subjects[0]}
                  className="mt-2 w-full rounded-md border border-input bg-background px-3.5 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[color:var(--color-nutermia-green)]/40 focus:border-[color:var(--color-nutermia-green)]"
                >
                  {subjects.map(label => (
                    <option key={label} value={label}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                  {s("ct.f.message")}
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder={s("ct.f.message.ph")}
                  className="mt-2 w-full rounded-md border border-input bg-background px-3.5 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-nutermia-green)]/40 focus:border-[color:var(--color-nutermia-green)]"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <p className="text-xs text-muted-foreground max-w-sm">
                  {s("ct.f.privacy")}
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-press inline-flex items-center gap-2 rounded-md bg-[color:var(--color-nutermia-blue)] px-6 py-3.5 text-sm font-medium text-white hover:bg-[color:var(--color-nutermia-blue-deep)] disabled:opacity-60"
                >
                  {submitting ? s("ct.f.sending") : s("ct.f.submit")}
                  {submitting ? (
                    <Send className="h-4 w-4 animate-pulse" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* INFO PANEL */}
          <aside className="lg:col-span-5 space-y-5 nut-reveal nut-delay-2">
            <div className="rounded-2xl bg-nut-ink text-[color:var(--color-nutermia-cream)] p-6 lg:p-8 relative overflow-hidden">
              <div className="blob blob-green h-48 w-48 -top-10 -right-10 opacity-40" />
              <span className="relative font-mono text-[11px] tracking-widest text-[color:var(--color-nutermia-green-soft)]">
                {s("ct.panel.title")}
              </span>
              <ul className="relative mt-5 space-y-4 text-sm">
                {NUTERMIA.phones.map(p => (
                  <li key={p} className="flex items-start gap-3">
                    <Phone className="h-4 w-4 mt-0.5 text-[color:var(--color-nutermia-green-soft)] shrink-0" />
                    <a
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="hover:text-white"
                    >
                      {p}
                    </a>
                  </li>
                ))}
                {NUTERMIA.emails.map(e => (
                  <li key={e} className="flex items-start gap-3">
                    <Mail className="h-4 w-4 mt-0.5 text-[color:var(--color-nutermia-green-soft)] shrink-0" />
                    <a
                      href={`mailto:${e}`}
                      className="hover:text-white break-all"
                    >
                      {e}
                    </a>
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

            <div className="rounded-2xl border border-border bg-card/95 backdrop-blur p-6 lg:p-8">
              <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
                {s("ct.cert.tab")}
              </span>
              <h3 className="mt-2 font-display text-2xl leading-tight">
                {NUTERMIA.iso}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {s("ct.cert.body")}
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
