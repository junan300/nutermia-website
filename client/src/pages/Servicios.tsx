/**
 * Servicios — Service offerings page (i18n + atmospheric backgrounds).
 * Style guard: alternating bands (cream / ink), section numbering, lift-cards.
 */
import { Link } from "wouter";
import {
  ArrowRight,
  Wrench,
  Activity,
  ShieldCheck,
  Gauge,
  Cpu,
  FlaskConical,
  CalendarClock,
  Map as MapIcon,
} from "lucide-react";
import { Chromatogram } from "@/components/Chromatogram";
import { useI18n } from "@/contexts/I18nContext";
import type { Dict } from "@/i18n/dictionaries";

const SERVICE_ICONS = [
  Wrench,
  Activity,
  ShieldCheck,
  Gauge,
  Cpu,
  FlaskConical,
  CalendarClock,
  MapIcon,
];

const COMPLIANCE = [
  "ISO 9001:2015",
  "FDA 21 CFR Part 11",
  "GMP / BPM",
  "USP <1058>",
  "ICH Q2(R1)",
  "GAMP 5",
];

export default function Servicios() {
  const { t, s } = useI18n();
  const services = SERVICE_ICONS.map((Icon, i) => ({
    Icon,
    title: s(`sv.s${i + 1}.t` as keyof Dict),
    desc: s(`sv.s${i + 1}.d` as keyof Dict),
    bullets: [
      s(`sv.s${i + 1}.b1` as keyof Dict),
      s(`sv.s${i + 1}.b2` as keyof Dict),
      s(`sv.s${i + 1}.b3` as keyof Dict),
    ],
  }));

  return (
    <>
      {/* HERO */}
      <section className="relative bg-nut-ink text-[color:var(--color-nutermia-cream)] grain overflow-hidden">
        <div className="absolute inset-0 bg-grid-faint-on-dark pointer-events-none" />
        <div className="blob blob-blue h-[420px] w-[420px] -top-24 -left-24 opacity-65" />
        <div className="blob blob-green h-[360px] w-[360px] bottom-0 -right-32 opacity-55" />
        <div className="absolute inset-x-0 bottom-0 h-24 text-white/15 pointer-events-none">
          <Chromatogram variant="divider" animate={false} />
        </div>
        <div className="container relative pt-16 pb-24 lg:pt-24 lg:pb-32">
          <span
            className="section-tab nut-reveal"
            style={{ color: "var(--color-nutermia-green-soft)" }}
          >
            {s("sv.eyebrow")}
          </span>
          <div className="mt-5 grid lg:grid-cols-12 gap-10 items-end">
            <h1 className="lg:col-span-8 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.04] nut-reveal nut-delay-1">
              {t("sv.title")}
            </h1>
            <p className="lg:col-span-4 text-white/70 leading-relaxed nut-reveal nut-delay-2">
              {s("sv.body")}
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative bg-nut-mesh-light overflow-hidden">
        <div className="absolute inset-0 bg-grid-faint pointer-events-none" />
        <div className="blob blob-blue h-72 w-72 top-12 -left-16 opacity-50" />
        <div className="blob blob-green h-72 w-72 bottom-20 -right-16 opacity-50" />
        <div className="container relative py-20 lg:py-28">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((sv, i) => (
              <article
                key={sv.title}
                className={`lift-card relative rounded-xl border border-border bg-card/95 backdrop-blur p-6 nut-reveal nut-delay-${(i % 3) + 1}`}
              >
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <sv.Icon className="mt-3 h-6 w-6 text-[color:var(--color-nutermia-green)]" />
                <h3 className="mt-4 font-display text-2xl leading-tight">
                  {sv.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {sv.desc}
                </p>
                <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
                  {sv.bullets.map(b => (
                    <li
                      key={b}
                      className="font-mono text-[12px] text-foreground/75"
                    >
                      › {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE BANNER */}
      <section className="bg-nut-mesh-cool border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-faint pointer-events-none" />
        <div className="blob blob-blue h-80 w-80 -top-10 -left-20 opacity-50" />
        <div className="container relative py-20 lg:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5 nut-reveal">
            <span className="section-tab">{s("sv.compl.tab")}</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
              {s("sv.compl.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              {s("sv.compl.body")}
            </p>
          </div>
          <ul className="lg:col-span-5 grid grid-cols-2 gap-3 nut-reveal nut-delay-2">
            {COMPLIANCE.map(b => (
              <li
                key={b}
                className="rounded-md border border-border bg-white px-4 py-3 text-center font-mono text-[12px] text-foreground"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-nut-mesh-light overflow-hidden">
        <div className="blob blob-blue h-72 w-72 top-0 -left-20 opacity-45" />
        <div className="blob blob-green h-72 w-72 bottom-0 -right-20 opacity-45" />
        <div className="container relative py-20 text-center max-w-2xl nut-reveal">
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            {s("sv.cta.title")}
          </h2>
          <p className="mt-3 text-muted-foreground">{s("sv.cta.body")}</p>
          <Link
            href="/contacto"
            className="btn-press mt-6 inline-flex items-center gap-2 rounded-md bg-[color:var(--color-nutermia-blue)] px-6 py-3.5 text-sm font-medium text-white hover:bg-[color:var(--color-nutermia-blue-deep)]"
          >
            {s("sv.cta.btn")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
