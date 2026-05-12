/**
 * Home — Nutermia landing page.
 * Style guard: "Cromatograma Vivo" — Instrument Serif display + Inter body + JetBrains Mono data.
 * Sections: Hero · Capabilities · HPLC Focus · Services · Process Videos · Brands · ISO · CTA
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
} from "lucide-react";
import { Chromatogram } from "@/components/Chromatogram";
import { VideoCard } from "@/components/VideoCard";
import { ASSETS, BRANDS, NUTERMIA, VIDEOS } from "@/lib/nutermia";

export default function Home() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden bg-[color:var(--color-nutermia-cream)] grain">
        <div className="absolute inset-x-0 bottom-0 h-[220px] text-foreground/40 pointer-events-none">
          <Chromatogram variant="hero" className="h-full" />
        </div>
        <div className="container relative pt-16 pb-28 lg:pt-24 lg:pb-40">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 space-y-7">
              <span className="section-tab nut-reveal">01 · Nutermia S.A.S.</span>
              <h1 className="font-display text-[40px] leading-[1.05] sm:text-6xl lg:text-[78px] text-foreground nut-reveal nut-delay-1">
                La <em className="italic text-[color:var(--color-nutermia-blue)]">excelencia</em> es un{" "}
                <em className="italic text-[color:var(--color-nutermia-green)]">estilo de vida</em>,
                <br className="hidden sm:block" /> no una coincidencia.
              </h1>
              <p className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed nut-reveal nut-delay-2">
                Soluciones integrales en cromatografía líquida (HPLC), instrumentación analítica,
                mantenimiento y validación IQ/OQ/PQ para la industria farmacéutica colombiana.
                Soporte técnico local con cobertura nacional.
              </p>
              <div className="flex flex-wrap gap-3 nut-reveal nut-delay-3">
                <Link
                  href="/quienes-somos"
                  className="btn-press inline-flex items-center gap-2 rounded-md bg-[color:var(--color-nutermia-blue)] px-6 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[color:var(--color-nutermia-blue-deep)]"
                >
                  Conócenos
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contacto"
                  className="btn-press inline-flex items-center gap-2 rounded-md border border-foreground/15 bg-white px-6 py-3.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-[color:var(--color-nutermia-green)] hover:text-[color:var(--color-nutermia-green)]"
                >
                  Cotizar
                </Link>
              </div>
            </div>

            {/* Right spec card */}
            <div className="lg:col-span-5 nut-reveal nut-delay-4">
              <div className="rounded-2xl border border-foreground/10 bg-white p-6 lg:p-8 shadow-[0_24px_60px_-32px_rgba(14,27,44,0.25)]">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
                    FICHA · CAPACIDADES
                  </span>
                  <ShieldCheck className="h-4 w-4 text-[color:var(--color-nutermia-green)]" />
                </div>
                <dl className="divide-y divide-border">
                  {[
                    { k: "Certificación", v: NUTERMIA.iso },
                    { k: "Cumplimiento", v: "FDA 21 CFR Part 11" },
                    { k: "Cobertura", v: "Nacional · Colombia" },
                    { k: "Servicios", v: "Mantenimiento · Validación · GMP" },
                    { k: "Marcas", v: "Agilent · Shimadzu · Hanon" },
                  ].map((row) => (
                    <div key={row.k} className="flex items-baseline justify-between py-3 gap-4">
                      <dt className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase shrink-0">
                        {row.k}
                      </dt>
                      <dd className="text-right text-[13px] font-medium text-foreground">{row.v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                  {[
                    { n: "+15", l: "Años" },
                    { n: "ISO", l: "9001:2015" },
                    { n: "7+", l: "Marcas" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-md bg-[color:var(--color-nutermia-cream)] py-3">
                      <div className="font-display text-2xl text-[color:var(--color-nutermia-blue)] leading-none">
                        {s.n}
                      </div>
                      <div className="mt-1 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                        {s.l}
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
          {[
            { Icon: Beaker, label: "Cromatografía Líquida (HPLC · UPLC · LC-MS/MS)" },
            { Icon: Wrench, label: "Mantenimiento Preventivo y Correctivo" },
            { Icon: ShieldCheck, label: "Validación IQ · OQ · PQ" },
            { Icon: Activity, label: "Consultoría GMP — Gases Medicinales" },
          ].map(({ Icon, label }, i) => (
            <div key={label} className={`flex items-start gap-3 nut-reveal nut-delay-${(i % 5) + 1}`}>
              <Icon className="h-5 w-5 text-[color:var(--color-nutermia-green)] mt-0.5 shrink-0" />
              <p className="text-sm text-foreground/85 leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============== HPLC FOCUS ============== */}
      <section className="relative">
        <div className="container py-24 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="section-tab">02 · Especialidad</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Sistemas <em className="italic text-[color:var(--color-nutermia-blue)]">HPLC</em> de
              alto rendimiento para laboratorios analíticos y de control de calidad.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Comercializamos e integramos plataformas HPLC modulares —bombas cuaternarias,
              automuestreadores, hornos de columna, detectores UV y DAD— con opción de acoplamiento a
              espectrometría de masas. Software de adquisición con audit trail, firma electrónica y
              cumplimiento <span className="font-mono text-[12px]">FDA 21 CFR Part 11</span>.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Bombas cuaternarias de alta precisión",
                "Automuestreador con tecnología de inyección estable",
                "Horno de columna con control térmico fino",
                "Detectores UV y arreglo de diodos (DAD)",
                "Acoplamiento opcional a MS",
                "Auto-purga y diagnóstico integrado",
              ].map((feat) => (
                <li key={feat} className="flex items-start gap-2.5 text-sm">
                  <CircleCheck className="h-4 w-4 mt-0.5 text-[color:var(--color-nutermia-green)] shrink-0" />
                  <span className="text-foreground/85">{feat}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/equipos"
                className="btn-press inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-nutermia-blue)] hover:text-[color:var(--color-nutermia-blue-deep)]"
              >
                Ver equipos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-3 relative rounded-xl overflow-hidden bg-white border border-border aspect-[3/4]">
                <img
                  src={ASSETS.hplcStack}
                  alt="Sistema HPLC Agilent modular instalado en laboratorio"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute top-3 left-3 font-mono text-[10px] tracking-widest text-white bg-[color:var(--color-nutermia-ink)]/80 backdrop-blur px-2 py-1 rounded">
                  HPLC · MODULAR
                </div>
              </div>
              <div className="col-span-2 flex flex-col gap-4">
                <div className="relative rounded-xl overflow-hidden bg-white border border-border aspect-square">
                  <img
                    src={ASSETS.labInstrument}
                    alt="Instrumento analítico de laboratorio"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="rounded-xl border border-border bg-[color:var(--color-nutermia-cream)] p-5 flex flex-col justify-between aspect-square">
                  <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
                    PRECISIÓN
                  </span>
                  <div>
                    <div className="font-display text-4xl text-[color:var(--color-nutermia-blue)] leading-none">
                      &lt; 0.1%
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Reproducibilidad de tiempos de retención típica.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== SERVICES ============== */}
      <section className="bg-[color:var(--color-nutermia-ink)] text-[color:var(--color-nutermia-cream)] relative grain">
        <div className="container py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
            <div className="lg:col-span-7">
              <span className="section-tab" style={{ color: "var(--color-nutermia-green-soft)" }}>
                03 · Servicios técnicos
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                Soporte experto, validación rigurosa y cumplimiento{" "}
                <em className="italic text-[color:var(--color-nutermia-green-soft)]">regulatorio</em>.
              </h2>
            </div>
            <p className="lg:col-span-5 text-white/70 leading-relaxed">
              Operamos bajo un sistema de gestión {NUTERMIA.iso} con técnicos certificados y
              cobertura nacional. Ofrecemos contratos anuales de mantenimiento y servicios puntuales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                Icon: Wrench,
                title: "Mantenimiento Preventivo",
                desc: "Calendarios programados, refacciones originales y reportes técnicos detallados para extender la vida útil del equipo.",
              },
              {
                Icon: Activity,
                title: "Mantenimiento Correctivo",
                desc: "Diagnóstico y reparación en sitio o en taller con tiempos de respuesta acotados a contrato.",
              },
              {
                Icon: ShieldCheck,
                title: "Validación IQ / OQ / PQ",
                desc: "Calificación de instalación, operación y desempeño bajo BPM y FDA 21 CFR Part 11.",
              },
              {
                Icon: Gauge,
                title: "Calibración Metrológica",
                desc: "Calibración trazable de balanzas, pH-metros, termohigrómetros y otros instrumentos.",
              },
              {
                Icon: Cpu,
                title: "Validación de Sistemas Computarizados",
                desc: "CSV para software de adquisición y bases de datos analíticas con audit trail.",
              },
              {
                Icon: FlaskConical,
                title: "Gases Medicinales · GMP",
                desc: "Servicio y consultoría para analizadores de gases medicinales bajo Buenas Prácticas de Manufactura.",
              },
            ].map((s, i) => (
              <div
                key={s.title}
                className={`lift-card group rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur p-6 nut-reveal nut-delay-${(i % 5) + 1}`}
              >
                <s.Icon className="h-6 w-6 text-[color:var(--color-nutermia-green-soft)]" />
                <h3 className="mt-4 font-display text-xl leading-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/servicios"
              className="btn-press inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-nutermia-green-soft)] hover:text-white"
            >
              Conoce todos los servicios
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============== PROCESS VIDEOS ============== */}
      <section className="bg-background">
        <div className="container py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
            <div className="lg:col-span-7">
              <span className="section-tab">04 · Nuestros procesos</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                Operación trazable, del{" "}
                <em className="italic text-[color:var(--color-nutermia-green)]">almacén</em> al{" "}
                <em className="italic text-[color:var(--color-nutermia-blue)]">laboratorio</em>.
              </h2>
            </div>
            <p className="lg:col-span-5 text-muted-foreground leading-relaxed">
              Cada etapa —almacenamiento, empaque y servicio técnico— se ejecuta bajo
              procedimientos documentados que protegen la integridad del instrumento y la trazabilidad
              del cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VIDEOS.map((v, i) => (
              <VideoCard
                key={v.id}
                videoId={v.id}
                title={v.title}
                subtitle={v.subtitle}
                description={v.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============== BRANDS ============== */}
      <section className="bg-[color:var(--color-nutermia-cream-deep)] border-y border-border">
        <div className="container py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="section-tab">05 · Marcas representadas</span>
              <h3 className="mt-3 font-display text-3xl md:text-4xl leading-tight">
                Trabajamos con los líderes globales de la instrumentación analítica.
              </h3>
            </div>
            <p className="md:max-w-sm text-sm text-muted-foreground">
              Equipos nuevos, repuestos originales y consumibles cromatográficos de los principales
              fabricantes del mundo.
            </p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {BRANDS.map((b) => (
              <li
                key={b}
                className="lift-card flex items-center justify-center rounded-md border border-border bg-white py-5 px-3 text-center"
              >
                <span className="font-display text-lg text-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============== ISO BANNER + CTA ============== */}
      <section className="relative">
        <div className="container py-24 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 items-center rounded-2xl border border-border bg-card p-8 lg:p-14 shadow-[0_30px_60px_-40px_rgba(14,27,44,0.25)]">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-3 rounded-full border border-[color:var(--color-nutermia-green)]/30 bg-[color:var(--color-nutermia-green)]/8 px-4 py-1.5">
                <Microscope className="h-4 w-4 text-[color:var(--color-nutermia-green)]" />
                <span className="font-mono text-[11px] tracking-widest text-[color:var(--color-nutermia-green)]">
                  CERTIFICACIÓN {NUTERMIA.iso}
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
                ¿Listo para una cotización técnica a la medida de su laboratorio?
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Cuéntenos su necesidad y un especialista le contactará en menos de 24 horas hábiles
                con una propuesta técnica y comercial.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/contacto"
                  className="btn-press inline-flex items-center gap-2 rounded-md bg-[color:var(--color-nutermia-blue)] px-6 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[color:var(--color-nutermia-blue-deep)]"
                >
                  Solicitar cotización
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${NUTERMIA.phones[0].replace(/\s/g, "")}`}
                  className="btn-press inline-flex items-center gap-2 rounded-md border border-foreground/15 bg-background px-6 py-3.5 text-sm font-medium text-foreground hover:border-[color:var(--color-nutermia-green)] hover:text-[color:var(--color-nutermia-green)]"
                >
                  Llamar ahora · {NUTERMIA.phones[0]}
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-[color:var(--color-nutermia-ink)] text-white p-6 space-y-4">
                <span className="font-mono text-[11px] tracking-widest text-[color:var(--color-nutermia-green-soft)]">
                  CONTACTO DIRECTO
                </span>
                <ul className="space-y-3 text-sm">
                  {NUTERMIA.phones.map((p) => (
                    <li key={p} className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-white/60 font-mono text-[11px] tracking-widest">TEL</span>
                      <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-[color:var(--color-nutermia-green-soft)]">
                        {p}
                      </a>
                    </li>
                  ))}
                  {NUTERMIA.emails.map((e) => (
                    <li key={e} className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-white/60 font-mono text-[11px] tracking-widest">MAIL</span>
                      <a href={`mailto:${e}`} className="hover:text-[color:var(--color-nutermia-green-soft)] break-all text-right">
                        {e}
                      </a>
                    </li>
                  ))}
                  <li className="flex items-start justify-between gap-4">
                    <span className="text-white/60 font-mono text-[11px] tracking-widest shrink-0">DIR</span>
                    <span className="text-right text-white/90">{NUTERMIA.address}</span>
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
