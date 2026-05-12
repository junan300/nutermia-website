/**
 * Equipos — Equipment categories page (i18n + atmospheric backgrounds).
 * Style guard: Bio-Industrial Editorial. Asymmetric grid, mono labels, lift-cards.
 */
import { Link } from "wouter";
import {
  ArrowRight,
  FlaskConical,
  Beaker,
  Atom,
  Thermometer,
  Scale,
  Wind,
  Sigma,
  Cpu,
  Microscope,
  Filter,
  TestTubes,
  Droplet,
} from "lucide-react";
import { ASSETS, NUTERMIA } from "@/lib/nutermia";
import { Chromatogram } from "@/components/Chromatogram";
import { useI18n } from "@/contexts/I18nContext";
import type { Dict } from "@/i18n/dictionaries";

const CATEGORIES = [
  { Icon: Beaker, k: "hplc" },
  { Icon: Beaker, k: "uplc" },
  { Icon: Atom, k: "lcms" },
  { Icon: Wind, k: "gc" },
  { Icon: Microscope, k: "uv" },
  { Icon: Sigma, k: "aa" },
  { Icon: Droplet, k: "tit" },
  { Icon: TestTubes, k: "diss" },
  { Icon: Scale, k: "bal" },
  { Icon: Thermometer, k: "inc" },
  { Icon: Filter, k: "filt" },
  { Icon: FlaskConical, k: "glass" },
  { Icon: Cpu, k: "col" },
] as const;

export default function Equipos() {
  const { t, s } = useI18n();

  return (
    <>
      {/* HERO */}
      <section className="relative bg-nut-mesh-light grain overflow-hidden">
        <div className="absolute inset-0 bg-grid-faint pointer-events-none" />
        <div className="blob blob-blue h-80 w-80 -top-20 -left-16" />
        <div className="blob blob-green h-80 w-80 bottom-0 right-0 opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-24 text-foreground/30 pointer-events-none">
          <Chromatogram variant="divider" animate={false} />
        </div>
        <div className="container relative pt-16 pb-24 lg:pt-24 lg:pb-32">
          <span className="section-tab">{s("eq.eyebrow")}</span>
          <div className="mt-5 grid lg:grid-cols-12 gap-10 items-end">
            <h1 className="lg:col-span-8 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.04]">
              {t("eq.title")}
            </h1>
            <p className="lg:col-span-4 text-muted-foreground leading-relaxed">{s("eq.body")}</p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTED IMAGES */}
      <section className="relative overflow-hidden bg-nut-mesh-cool">
        <div className="absolute inset-0 bg-grid-faint pointer-events-none" />
        <div className="blob blob-green h-72 w-72 -top-10 -right-20 opacity-60" />

        <div className="container relative py-20 lg:py-28 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 grid grid-cols-5 gap-4">
            <div className="col-span-3 rounded-xl overflow-hidden border border-border aspect-[3/4] bg-white">
              <img
                src={ASSETS.hplcStack}
                alt="HPLC Agilent modular"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-4">
              <div className="rounded-xl overflow-hidden border border-border aspect-square bg-white">
                <img
                  src={ASSETS.labInstrument}
                  alt="Laboratory instrument"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="rounded-xl border border-border bg-white/85 backdrop-blur aspect-square p-5 flex flex-col justify-between">
                <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
                  {s("eq.feature.tag")}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-[color:var(--color-nutermia-blue)] leading-tight">
                    {s("eq.feature.modelName")}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground">{s("eq.feature.modelDesc")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-5">
            <span className="section-tab">{s("eq.feature.tab")}</span>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              {s("eq.feature.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{s("eq.feature.body")}</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-foreground/85">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <li key={i} className="font-mono text-[12px]">
                  › {s(`home.hplc.f${i}` as keyof Dict)}
                </li>
              ))}
            </ul>
            <Link
              href="/contacto"
              className="btn-press inline-flex items-center gap-2 rounded-md bg-[color:var(--color-nutermia-blue)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[color:var(--color-nutermia-blue-deep)]"
            >
              {s("eq.feature.cta")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="relative bg-nut-ink text-[color:var(--color-nutermia-cream)] overflow-hidden grain">
        <div className="absolute inset-0 bg-grid-faint-on-dark pointer-events-none" />
        <div className="blob blob-blue h-96 w-96 -top-20 -left-24 opacity-60" />
        <div className="blob blob-green h-96 w-96 bottom-0 -right-32 opacity-55" />

        <div className="container relative py-20 lg:py-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="section-tab" style={{ color: "var(--color-nutermia-green-soft)" }}>
                {s("eq.cats.tab")}
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
                {s("eq.cats.title")}
              </h2>
            </div>
            <p className="md:max-w-md text-sm text-white/70">{s("eq.cats.body")}</p>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATEGORIES.map(({ Icon, k }) => (
              <li
                key={k}
                className="lift-card group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur p-5"
              >
                <div className="rounded-md bg-[color:var(--color-nutermia-green-soft)]/15 p-2.5">
                  <Icon className="h-5 w-5 text-[color:var(--color-nutermia-green-soft)]" />
                </div>
                <div>
                  <h3 className="font-display text-xl leading-tight">{s(`eq.cat.${k}` as keyof Dict)}</h3>
                  <p className="mt-1 text-sm text-white/65">{s(`eq.cat.${k}.d` as keyof Dict)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-nut-mesh-light relative overflow-hidden">
        <div className="blob blob-blue h-72 w-72 top-0 -left-20 opacity-45" />
        <div className="blob blob-green h-72 w-72 bottom-0 -right-20 opacity-45" />
        <div className="container relative py-20 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl leading-tight">{s("eq.cta.title")}</h2>
          <p className="mt-3 text-muted-foreground">
            {s("eq.cta.body").replace("Nutermia", NUTERMIA.legalName)}
          </p>
          <Link
            href="/contacto"
            className="btn-press mt-6 inline-flex items-center gap-2 rounded-md bg-[color:var(--color-nutermia-blue)] px-6 py-3.5 text-sm font-medium text-white hover:bg-[color:var(--color-nutermia-blue-deep)]"
          >
            {s("eq.cta.btn")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
