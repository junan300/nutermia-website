/**
 * Servicios — Service offerings page.
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
  Map,
} from "lucide-react";
import { Chromatogram } from "@/components/Chromatogram";

const SERVICES = [
  {
    Icon: Wrench,
    title: "Mantenimiento Preventivo",
    desc: "Programa anual de visitas planeadas con cambio de consumibles críticos, limpieza y verificación funcional. Reduce paradas inesperadas y prolonga la vida útil de los equipos.",
    bullets: ["Refacciones originales", "Reportes técnicos firmados", "Calendario por equipo"],
  },
  {
    Icon: Activity,
    title: "Mantenimiento Correctivo",
    desc: "Diagnóstico, reparación y puesta a punto de instrumentos analíticos con tiempos de respuesta acotados por contrato.",
    bullets: ["Atención en sitio", "Taller especializado", "Repuestos OEM"],
  },
  {
    Icon: ShieldCheck,
    title: "Validación IQ / OQ / PQ",
    desc: "Calificación de Instalación, Operación y Desempeño bajo lineamientos GMP, USP, FDA 21 CFR Part 11 e ICH.",
    bullets: ["Protocolos y reportes", "Trazabilidad documental", "Acompañamiento en auditoría"],
  },
  {
    Icon: Gauge,
    title: "Calibración Metrológica",
    desc: "Calibración trazable de instrumentos auxiliares: balanzas analíticas, pH-metros, conductímetros y termohigrómetros.",
    bullets: ["Patrones trazables", "Certificados oficiales", "Etiquetado y control"],
  },
  {
    Icon: Cpu,
    title: "Validación de Sistemas Computarizados (CSV)",
    desc: "Validación de software de adquisición, bases de datos analíticas y sistemas LIMS bajo GAMP 5 y 21 CFR Part 11.",
    bullets: ["Plan maestro de validación", "Audit trail review", "Pruebas de integridad de datos"],
  },
  {
    Icon: FlaskConical,
    title: "Analizadores de Gases Medicinales · GMP",
    desc: "Servicio técnico y consultoría regulatoria para sistemas de gases medicinales bajo Buenas Prácticas de Manufactura.",
    bullets: ["Verificación de pureza", "Documentación BPM", "Reportes para autoridad sanitaria"],
  },
  {
    Icon: CalendarClock,
    title: "Contratos Anuales de Mantenimiento",
    desc: "Programas integrales que combinan preventivo, correctivo y soporte prioritario con SLA garantizado.",
    bullets: ["SLA personalizado", "Tarifas preferenciales", "Reportes de KPIs"],
  },
  {
    Icon: Map,
    title: "Cobertura Nacional",
    desc: "Atendemos laboratorios en todo el territorio colombiano con un equipo técnico desplegable desde Bogotá D.C.",
    bullets: ["Bogotá · Medellín · Cali", "Costa Atlántica · Eje Cafetero", "Visitas programadas"],
  },
];

export default function Servicios() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[color:var(--color-nutermia-ink)] text-[color:var(--color-nutermia-cream)] grain overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-24 text-white/15 pointer-events-none">
          <Chromatogram variant="divider" animate={false} />
        </div>
        <div className="container relative pt-16 pb-24 lg:pt-24 lg:pb-32">
          <span className="section-tab" style={{ color: "var(--color-nutermia-green-soft)" }}>
            Servicios técnicos · ISO 9001:2015
          </span>
          <div className="mt-5 grid lg:grid-cols-12 gap-10 items-end">
            <h1 className="lg:col-span-8 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.04]">
              Mantenimiento, validación y{" "}
              <em className="italic text-[color:var(--color-nutermia-green-soft)]">cumplimiento</em>{" "}
              regulatorio para laboratorios.
            </h1>
            <p className="lg:col-span-4 text-white/70 leading-relaxed">
              Servicio técnico certificado, repuestos originales y protocolos validados —ejecutados
              por personal calificado bajo nuestro sistema de gestión de calidad.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-background">
        <div className="container py-20 lg:py-28">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <article
                key={s.title}
                className="lift-card relative rounded-xl border border-border bg-card p-6"
              >
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <s.Icon className="mt-3 h-6 w-6 text-[color:var(--color-nutermia-green)]" />
                <h3 className="mt-4 font-display text-2xl leading-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
                  {s.bullets.map((b) => (
                    <li key={b} className="font-mono text-[12px] text-foreground/75">
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
      <section className="bg-[color:var(--color-nutermia-cream-deep)] border-y border-border">
        <div className="container py-20 lg:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="section-tab">Cumplimiento normativo</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
              Operamos bajo estándares internacionales de calidad y trazabilidad documental.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              Nuestros protocolos están alineados con FDA 21 CFR Part 11, GMP/BPM colombiana, USP
              &lt;1058&gt; y guías ICH Q2(R1) / ICH Q9, lo que asegura integridad de datos y
              defensibilidad ante auditorías.
            </p>
          </div>
          <ul className="lg:col-span-5 grid grid-cols-2 gap-3">
            {["ISO 9001:2015", "FDA 21 CFR Part 11", "GMP / BPM", "USP <1058>", "ICH Q2(R1)", "GAMP 5"].map((b) => (
              <li
                key={b}
                className="rounded-md border border-border bg-card px-4 py-3 text-center font-mono text-[12px] text-foreground"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="container py-20 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            ¿Necesita un protocolo IQ/OQ/PQ o un contrato anual?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Solicite una propuesta técnica personalizada para su laboratorio.
          </p>
          <Link
            href="/contacto"
            className="btn-press mt-6 inline-flex items-center gap-2 rounded-md bg-[color:var(--color-nutermia-blue)] px-6 py-3.5 text-sm font-medium text-white hover:bg-[color:var(--color-nutermia-blue-deep)]"
          >
            Cotizar servicios
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
