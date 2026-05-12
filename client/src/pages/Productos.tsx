/**
 * Productos — Product categories page (i18n + atmospheric backgrounds).
 * Style guard: editorial table-style listing with mono labels and category headers.
 */
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Chromatogram } from "@/components/Chromatogram";
import { useI18n } from "@/contexts/I18nContext";
import type { Dict } from "@/i18n/dictionaries";

// Each group key maps to dictionary keys: pr.g{N}.t (title) and pr.g{N}.i{M}.n / .d (item name/desc).
const GROUPS = [
  { g: 1, itemCount: 4 },
  { g: 2, itemCount: 3 },
  { g: 3, itemCount: 3 },
  { g: 4, itemCount: 3 },
  { g: 5, itemCount: 3 },
  { g: 6, itemCount: 3 },
  { g: 7, itemCount: 2 },
] as const;

export default function Productos() {
  const { t, s } = useI18n();

  return (
    <>
      {/* HERO */}
      <section className="relative bg-nut-mesh-light grain overflow-hidden">
        <div className="absolute inset-0 bg-grid-faint pointer-events-none" />
        <div className="blob blob-blue h-80 w-80 -top-20 -left-16 opacity-60" />
        <div className="blob blob-green h-80 w-80 top-1/2 -right-20 opacity-55" />
        <div className="absolute inset-x-0 bottom-0 h-24 text-foreground/30 pointer-events-none">
          <Chromatogram variant="divider" animate={false} />
        </div>
        <div className="container relative pt-16 pb-24 lg:pt-24 lg:pb-28">
          <span className="section-tab">{s("pr.eyebrow")}</span>
          <h1 className="mt-5 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.04] max-w-4xl">
            {t("pr.title")}
          </h1>
        </div>
      </section>

      {/* PRODUCT GROUPS */}
      <section className="relative bg-nut-mesh-cool overflow-hidden">
        <div className="absolute inset-0 bg-grid-faint pointer-events-none opacity-70" />
        <div className="container relative py-20 lg:py-28 space-y-16">
          {GROUPS.map(({ g, itemCount }, gi) => (
            <div key={g} className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-28">
                <span className="font-mono text-[11px] tracking-widest text-[color:var(--color-nutermia-green)]">
                  {String(gi + 1).padStart(2, "0")} · {s("pr.category")}
                </span>
                <h2 className="mt-2 font-display text-3xl md:text-4xl leading-tight">
                  {s(`pr.g${g}.t` as keyof Dict)}
                </h2>
              </div>
              <ul className="lg:col-span-8 divide-y divide-border border-t border-border">
                {Array.from({ length: itemCount }).map((_, idx) => {
                  const i = idx + 1;
                  return (
                    <li
                      key={i}
                      className="group flex items-baseline justify-between gap-6 py-5 transition-colors hover:bg-white/70 px-1"
                    >
                      <div>
                        <h3 className="font-display text-xl leading-tight text-foreground">
                          {s(`pr.g${g}.i${i}.n` as keyof Dict)}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {s(`pr.g${g}.i${i}.d` as keyof Dict)}
                        </p>
                      </div>
                      <span className="font-mono text-[11px] tracking-widest text-muted-foreground group-hover:text-[color:var(--color-nutermia-green)] transition-colors">
                        {s("pr.available")}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-nut-ink text-[color:var(--color-nutermia-cream)] grain overflow-hidden">
        <div className="absolute inset-0 bg-grid-faint-on-dark pointer-events-none" />
        <div className="blob blob-blue h-80 w-80 -top-20 -left-24 opacity-55" />
        <div className="blob blob-green h-80 w-80 bottom-0 -right-24 opacity-55" />
        <div className="container relative py-20 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl leading-tight">{s("pr.cta.title")}</h2>
          <p className="mt-3 text-white/70">{s("pr.cta.body")}</p>
          <Link
            href="/contacto"
            className="btn-press mt-6 inline-flex items-center gap-2 rounded-md bg-[color:var(--color-nutermia-green)] px-6 py-3.5 text-sm font-medium text-white hover:opacity-90"
          >
            {s("pr.cta.btn")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
