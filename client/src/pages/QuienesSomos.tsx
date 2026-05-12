/**
 * QuienesSomos — About page (i18n + atmospheric backgrounds).
 * Editorial layout: side numbering, large display headings, asymmetric image block.
 */
import { Link } from "wouter";
import { ArrowRight, Target, Compass, Sparkles, ShieldCheck } from "lucide-react";
import { Chromatogram } from "@/components/Chromatogram";
import { ASSETS } from "@/lib/nutermia";
import { useI18n } from "@/contexts/I18nContext";
import type { Dict } from "@/i18n/dictionaries";

const VALUE_ICONS = [Target, Compass, ShieldCheck, Sparkles];

export default function QuienesSomos() {
  const { t, s } = useI18n();

  return (
    <>
      {/* HERO */}
      <section className="relative bg-nut-mesh-light grain overflow-hidden">
        <div className="absolute inset-0 bg-grid-faint pointer-events-none" />
        <div className="blob blob-blue h-80 w-80 -top-20 -left-16 opacity-55" />
        <div className="blob blob-green h-80 w-80 bottom-10 right-0 opacity-55" />
        <div className="absolute inset-x-0 bottom-0 h-24 text-foreground/30 pointer-events-none">
          <Chromatogram variant="divider" animate={false} />
        </div>
        <div className="container relative pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 space-y-6">
            <span className="section-tab">{s("ab.eyebrow")}</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.04]">
              {t("ab.title")}
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-xl">{s("ab.body")}</p>
          </div>
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-border aspect-[3/4] bg-white">
                <img src={ASSETS.hplcStack} alt="HPLC Agilent" className="h-full w-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden border border-border aspect-[3/4] bg-white mt-10">
                <img
                  src={ASSETS.labInstrument}
                  alt="Laboratory instrument"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="relative bg-nut-mesh-cool overflow-hidden">
        <div className="absolute inset-0 bg-grid-faint pointer-events-none" />
        <div className="blob blob-green h-72 w-72 -top-12 -right-16 opacity-55" />
        <div className="container relative py-20 lg:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="section-tab">{s("ab.m.tab")}</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl leading-tight">
              {s("ab.m.title")}
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-foreground/85 leading-relaxed text-lg">
            <p className="font-display text-2xl italic text-foreground">{s("ab.m.quote")}</p>
            <p>{s("ab.m.p1")}</p>
            <p>{s("ab.m.p2")}</p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative bg-nut-ink text-[color:var(--color-nutermia-cream)] grain overflow-hidden">
        <div className="absolute inset-0 bg-grid-faint-on-dark pointer-events-none" />
        <div className="blob blob-blue h-96 w-96 -top-20 -left-24 opacity-55" />
        <div className="blob blob-green h-96 w-96 bottom-0 -right-32 opacity-50" />
        <div className="container relative py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUE_ICONS.map((Icon, i) => (
            <div
              key={i}
              className="lift-card rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur p-6"
            >
              <Icon className="h-6 w-6 text-[color:var(--color-nutermia-green-soft)]" />
              <h3 className="mt-4 font-display text-2xl leading-tight">
                {s(`ab.v${i + 1}.t` as keyof Dict)}
              </h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">
                {s(`ab.v${i + 1}.d` as keyof Dict)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-nut-mesh-light overflow-hidden">
        <div className="blob blob-blue h-72 w-72 top-0 -left-20 opacity-45" />
        <div className="blob blob-green h-72 w-72 bottom-0 -right-20 opacity-45" />
        <div className="container relative py-20 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl leading-tight">{s("ab.cta.title")}</h2>
          <Link
            href="/contacto"
            className="btn-press mt-6 inline-flex items-center gap-2 rounded-md bg-[color:var(--color-nutermia-blue)] px-6 py-3.5 text-sm font-medium text-white hover:bg-[color:var(--color-nutermia-blue-deep)]"
          >
            {s("ab.cta.btn")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
