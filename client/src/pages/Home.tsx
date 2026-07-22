/**
 * Home — Nutermia landing page (i18n + atmospheric backgrounds v2).
 * Style guard: "Cromatograma Vivo" — Instrument Serif display + Inter body + JetBrains Mono data.
 * Sections: Hero · Capabilities · HPLC Focus · Services · Process Videos (4) · Tour preview · Brands · ISO CTA
 */
import { Link } from "wouter";
import {
  ArrowRight,
  ShieldCheck,
  Activity,
  Beaker,
  Wrench,
  FlaskConical,
  Cpu,
  Microscope,
  Gauge,
  CircleCheck,
  PlayCircle,
  MapPin,
  Languages,
  Clock,
} from "lucide-react";
import { Chromatogram } from "@/components/Chromatogram";
import { VideoCard } from "@/components/VideoCard";
import {
  ASSETS,
  BRANDS,
  NUTERMIA,
  TOUR_VIDEO_ID,
  VIDEOS,
} from "@/lib/nutermia";
import { useI18n } from "@/contexts/I18nContext";
import type { Dict } from "@/i18n/dictionaries";

const SERVICE_ICONS = [Wrench, Activity, ShieldCheck, Gauge, Cpu, FlaskConical];

export default function Home() {
  const { t, s } = useI18n();

  const services = [1, 2, 3, 4, 5, 6].map(i => ({
    Icon: SERVICE_ICONS[i - 1],
    title: s(`home.serv.s${i}.t` as keyof Dict),
    desc: s(`home.serv.s${i}.d` as keyof Dict),
  }));

  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden bg-nut-mesh-light grain">
        <div className="absolute inset-0 bg-grid-faint pointer-events-none" />
        <div className="blob blob-blue h-96 w-96 -top-24 -left-20" />
        <div className="blob blob-green h-96 w-96 top-1/4 -right-24" />
        <div className="absolute inset-x-0 bottom-0 h-[220px] text-foreground/30 pointer-events-none">
          <Chromatogram variant="hero" className="h-full" />
        </div>

        <div className="container relative pt-16 pb-28 lg:pt-24 lg:pb-40">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 space-y-7">
              <span className="section-tab nut-reveal">
                {s("home.hero.tab")}
              </span>
              <h1 className="font-display text-[40px] leading-[1.05] sm:text-6xl lg:text-[78px] text-foreground nut-reveal nut-delay-1">
                {t("home.hero.title")}
              </h1>
              <p className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed nut-reveal nut-delay-2">
                {s("home.hero.body")}
              </p>
              <div className="flex flex-wrap gap-3 nut-reveal nut-delay-3">
                <Link
                  href="/quienes-somos"
                  className="btn-press inline-flex items-center gap-2 rounded-md bg-[color:var(--color-nutermia-blue)] px-6 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[color:var(--color-nutermia-blue-deep)]"
                >
                  {s("home.hero.cta.primary")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contacto"
                  className="btn-press inline-flex items-center gap-2 rounded-md border border-foreground/15 bg-white px-6 py-3.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-[color:var(--color-nutermia-green)] hover:text-[color:var(--color-nutermia-green)]"
                >
                  {s("home.hero.cta.secondary")}
                </Link>
              </div>
            </div>

            {/* Right spec card */}
            <div className="lg:col-span-5 nut-reveal nut-delay-4">
              <div className="rounded-2xl border border-foreground/10 bg-white/95 backdrop-blur p-6 lg:p-8 shadow-[0_24px_60px_-32px_rgba(14,27,44,0.25)]">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
                    {s("home.hero.spec.title")}
                  </span>
                  <ShieldCheck className="h-4 w-4 text-[color:var(--color-nutermia-green)]" />
                </div>
                <dl className="divide-y divide-border">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div
                      key={i}
                      className="flex items-baseline justify-between py-3 gap-4"
                    >
                      <dt className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase shrink-0">
                        {s(`home.hero.spec.row${i}.k` as keyof Dict)}
                      </dt>
                      <dd className="text-right text-[13px] font-medium text-foreground">
                        {s(`home.hero.spec.row${i}.v` as keyof Dict)}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                  {[1, 2, 3].map(i => (
                    <div
                      key={i}
                      className="rounded-md bg-[color:var(--color-nutermia-cream)] py-3"
                    >
                      <div className="font-display text-2xl text-[color:var(--color-nutermia-blue)] leading-none">
                        {s(`home.hero.stat${i}.n` as keyof Dict)}
                      </div>
                      <div className="mt-1 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                        {s(`home.hero.stat${i}.l` as keyof Dict)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CAPABILITIES BAND ============== */}
      <section className="bg-[color:var(--color-nutermia-cream-deep)] border-y border-border">
        <div className="container py-8 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-8">
          {[Beaker, Wrench, ShieldCheck, Activity].map((Icon, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 nut-reveal nut-delay-${(i % 5) + 1}`}
            >
              <Icon className="h-5 w-5 text-[color:var(--color-nutermia-green)] mt-0.5 shrink-0" />
              <p className="text-sm text-foreground/85 leading-snug">
                {s(`home.cap.${i + 1}` as keyof Dict)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============== HPLC FOCUS ============== */}
      <section className="relative overflow-hidden bg-nut-mesh-cool">
        <div className="absolute inset-0 bg-grid-faint pointer-events-none" />
        <div className="blob blob-blue h-80 w-80 top-1/3 -left-24" />
        <div className="blob blob-green h-80 w-80 bottom-0 right-0" />

        <div className="container relative py-24 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 nut-reveal">
            <span className="section-tab">{s("home.hplc.tab")}</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              {t("home.hplc.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {s("home.hplc.body")}
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <li key={i} className="flex items-start gap-2.5 text-sm">
                  <CircleCheck className="h-4 w-4 mt-0.5 text-[color:var(--color-nutermia-green)] shrink-0" />
                  <span className="text-foreground/85">
                    {s(`home.hplc.f${i}` as keyof Dict)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/equipos"
                className="btn-press inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-nutermia-blue)] hover:text-[color:var(--color-nutermia-blue-deep)]"
              >
                {s("home.hplc.viewEquip")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative nut-reveal nut-delay-2">
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-3 relative rounded-xl overflow-hidden bg-white border border-border aspect-[3/4]">
                <img
                  src={ASSETS.hplcStack}
                  alt="HPLC Agilent stack"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute top-3 left-3 font-mono text-[10px] tracking-widest text-white bg-[color:var(--color-nutermia-ink)]/80 backdrop-blur px-2 py-1 rounded">
                  {s("home.hplc.tag.modular")}
                </div>
              </div>
              <div className="col-span-2 flex flex-col gap-4">
                <div className="relative rounded-xl overflow-hidden bg-white border border-border aspect-square">
                  <img
                    src={ASSETS.labInstrument}
                    alt="Laboratory instrument"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="rounded-xl border border-border bg-white/85 backdrop-blur p-5 flex flex-col justify-between aspect-square">
                  <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
                    {s("home.hplc.tag.precision")}
                  </span>
                  <div>
                    <div className="font-display text-4xl text-[color:var(--color-nutermia-blue)] leading-none">
                      &lt; 0.1%
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {s("home.hplc.tag.precision.note")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== SERVICES ============== */}
      <section className="relative overflow-hidden bg-nut-ink text-[color:var(--color-nutermia-cream)] grain">
        <div className="absolute inset-0 bg-grid-faint-on-dark pointer-events-none" />
        <div className="blob blob-blue h-[420px] w-[420px] -top-32 -left-32 opacity-70" />
        <div className="blob blob-green h-[360px] w-[360px] bottom-[-120px] right-[-80px] opacity-60" />

        <div className="container relative py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
            <div className="lg:col-span-7 nut-reveal">
              <span
                className="section-tab"
                style={{ color: "var(--color-nutermia-green-soft)" }}
              >
                {s("home.serv.tab")}
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                {t("home.serv.title")}
              </h2>
            </div>
            <p className="lg:col-span-5 text-white/70 leading-relaxed nut-reveal nut-delay-2">
              {s("home.serv.body")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((sv, i) => (
              <div
                key={sv.title}
                className={`lift-card group rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur p-6 nut-reveal nut-delay-${(i % 5) + 1}`}
              >
                <sv.Icon className="h-6 w-6 text-[color:var(--color-nutermia-green-soft)]" />
                <h3 className="mt-4 font-display text-xl leading-tight">
                  {sv.title}
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  {sv.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/servicios"
              className="btn-press inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-nutermia-green-soft)] hover:text-white"
            >
              {s("home.serv.viewAll")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============== PROCESS VIDEOS (4 — symmetric grid) ============== */}
      <section className="relative bg-nut-mesh-light overflow-hidden">
        <div className="absolute inset-0 bg-grid-faint pointer-events-none" />
        <div className="blob blob-green h-72 w-72 top-12 -left-16 opacity-60" />
        <div className="blob blob-blue h-72 w-72 bottom-20 -right-16 opacity-60" />

        <div className="container relative py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
            <div className="lg:col-span-7 nut-reveal">
              <span className="section-tab">{s("home.video.tab")}</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                {t("home.video.title")}
              </h2>
            </div>
            <p className="lg:col-span-5 text-muted-foreground leading-relaxed nut-reveal nut-delay-2">
              {s("home.video.body")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VIDEOS.map((v, i) => (
              <VideoCard
                key={v.id}
                videoId={v.id}
                title={s(`video.${v.key}.title` as keyof Dict)}
                subtitle={s(`video.${v.key}.subtitle` as keyof Dict)}
                description={s(`video.${v.key}.desc` as keyof Dict)}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============== COMPANY TOUR (featured video) ============== */}
      <section className="relative overflow-hidden bg-nut-band-split grain">
        <div className="absolute inset-0 bg-grid-faint pointer-events-none opacity-60" />

        <div className="container relative py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6 nut-reveal">
              <span className="section-tab">{s("home.tour.tab")}</span>
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-nutermia-green)]/40 bg-white/70 backdrop-blur px-3 py-1.5 font-mono text-[11px] tracking-widest text-[color:var(--color-nutermia-green)]">
                <PlayCircle className="h-3.5 w-3.5" />
                {s("home.tour.eyebrow")}
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                {t("home.tour.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {s("home.tour.body")}
              </p>

              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 text-sm">
                  <Clock className="h-4 w-4 text-[color:var(--color-nutermia-green)]" />
                  <span className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase w-24">
                    {s("home.tour.meta.duration")}
                  </span>
                  <span className="text-foreground/85">
                    {s("home.tour.meta.duration.v")}
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-[color:var(--color-nutermia-green)]" />
                  <span className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase w-24">
                    {s("home.tour.meta.location")}
                  </span>
                  <span className="text-foreground/85">
                    {s("home.tour.meta.location.v")}
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Languages className="h-4 w-4 text-[color:var(--color-nutermia-green)]" />
                  <span className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase w-24">
                    {s("home.tour.meta.lang")}
                  </span>
                  <span className="text-foreground/85">
                    {s("home.tour.meta.lang.v")}
                  </span>
                </li>
              </ul>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  href="/tour"
                  className="btn-press inline-flex items-center gap-2 rounded-md bg-[color:var(--color-nutermia-green)] px-6 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[color:var(--color-nutermia-blue)]"
                >
                  {s("nav.tour")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contacto"
                  className="btn-press inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 backdrop-blur px-6 py-3.5 text-sm font-medium text-white hover:bg-white/20"
                >
                  {s("home.tour.cta")}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 nut-reveal nut-delay-2">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)] bg-black">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${TOUR_VIDEO_ID}?rel=0&modestbranding=1`}
                    title="Nutermia — Company Tour"
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== BRANDS ============== */}
      <section className="bg-[color:var(--color-nutermia-cream-deep)] border-y border-border">
        <div className="container py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 nut-reveal">
            <div>
              <span className="section-tab">{s("home.brands.tab")}</span>
              <h3 className="mt-3 font-display text-3xl md:text-4xl leading-tight">
                {s("home.brands.title")}
              </h3>
            </div>
            <p className="md:max-w-sm text-sm text-muted-foreground">
              {s("home.brands.body")}
            </p>
          </div>
          <ul className="brand-grid grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-3">
            {BRANDS.map((b, i) => {
              const cardClass =
                "brand-card relative flex h-full items-center justify-center rounded-md border border-border bg-white py-5 px-3 text-center";
              const content = (
                <>
                  <span className="font-display text-lg text-foreground">
                    {b.name}
                  </span>
                  {"isNew" in b && b.isNew && (
                    <span className="brand-new-badge">
                      {s("home.brands.new")}
                    </span>
                  )}
                </>
              );
              return (
                <li
                  key={b.name}
                  className={`nut-reveal nut-delay-${(i % 4) + 1}`}
                >
                  {"href" in b && b.href ? (
                    <a
                      href={b.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClass}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className={cardClass}>{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ============== ISO BANNER + CTA ============== */}
      <section className="relative bg-nut-mesh-light overflow-hidden">
        <div className="blob blob-blue h-80 w-80 top-0 -left-20 opacity-50" />
        <div className="blob blob-green h-80 w-80 bottom-0 -right-20 opacity-50" />

        <div className="container relative py-24 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 items-center rounded-2xl border border-border bg-card/95 backdrop-blur p-8 lg:p-14 shadow-[0_30px_60px_-40px_rgba(14,27,44,0.25)] nut-reveal">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-3 rounded-full border border-[color:var(--color-nutermia-green)]/30 bg-[color:var(--color-nutermia-green)]/8 px-4 py-1.5">
                <Microscope className="h-4 w-4 text-[color:var(--color-nutermia-green)]" />
                <span className="font-mono text-[11px] tracking-widest text-[color:var(--color-nutermia-green)]">
                  {s("home.cta.badge")}
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
                {s("home.cta.title")}
              </h2>
              <p className="text-muted-foreground max-w-xl">
                {s("home.cta.body")}
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/contacto"
                  className="btn-press inline-flex items-center gap-2 rounded-md bg-[color:var(--color-nutermia-blue)] px-6 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[color:var(--color-nutermia-blue-deep)]"
                >
                  {s("home.cta.primary")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${NUTERMIA.phones[0].replace(/\s/g, "")}`}
                  className="btn-press inline-flex items-center gap-2 rounded-md border border-foreground/15 bg-background px-6 py-3.5 text-sm font-medium text-foreground hover:border-[color:var(--color-nutermia-green)] hover:text-[color:var(--color-nutermia-green)]"
                >
                  {s("home.cta.callNow")} · {NUTERMIA.phones[0]}
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-[color:var(--color-nutermia-ink)] text-white p-6 space-y-4">
                <span className="font-mono text-[11px] tracking-widest text-[color:var(--color-nutermia-green-soft)]">
                  {s("home.cta.panel.title")}
                </span>
                <ul className="space-y-3 text-sm">
                  {NUTERMIA.phones.map(p => (
                    <li
                      key={p}
                      className="flex items-center justify-between border-b border-white/10 pb-3"
                    >
                      <span className="text-white/60 font-mono text-[11px] tracking-widest">
                        {s("home.cta.panel.tel")}
                      </span>
                      <a
                        href={`tel:${p.replace(/\s/g, "")}`}
                        className="hover:text-[color:var(--color-nutermia-green-soft)]"
                      >
                        {p}
                      </a>
                    </li>
                  ))}
                  {NUTERMIA.emails.map(e => (
                    <li
                      key={e}
                      className="flex items-center justify-between border-b border-white/10 pb-3"
                    >
                      <span className="text-white/60 font-mono text-[11px] tracking-widest">
                        {s("home.cta.panel.mail")}
                      </span>
                      <a
                        href={`mailto:${e}`}
                        className="hover:text-[color:var(--color-nutermia-green-soft)] break-all text-right"
                      >
                        {e}
                      </a>
                    </li>
                  ))}
                  <li className="flex items-start justify-between gap-4">
                    <span className="text-white/60 font-mono text-[11px] tracking-widest shrink-0">
                      {s("home.cta.panel.addr")}
                    </span>
                    <span className="text-right text-white/90">
                      {NUTERMIA.address}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
