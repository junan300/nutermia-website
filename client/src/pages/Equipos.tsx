/**
 * Equipos — Equipment categories page.
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

const CATEGORIES = [
  { Icon: Beaker, name: "HPLC", detail: "Cromatografía Líquida de Alta Eficiencia" },
  { Icon: Beaker, name: "UPLC", detail: "Cromatografía Líquida Ultra-Eficiente" },
  { Icon: Atom, name: "LC-MS / MS", detail: "Cromatografía acoplada a Espectrometría de Masas" },
  { Icon: Wind, name: "Cromatografía de Gases", detail: "GC y GC-MS" },
  { Icon: Microscope, name: "Espectrofotómetros UV-VIS", detail: "Análisis cuantitativo y cualitativo" },
  { Icon: Sigma, name: "Absorción Atómica", detail: "AA — Análisis elemental" },
  { Icon: Droplet, name: "Tituladores", detail: "Volumétricos y Karl Fischer" },
  { Icon: TestTubes, name: "Disolutores", detail: "Pruebas de disolución farmacéutica" },
  { Icon: Scale, name: "Balanzas", detail: "Analíticas y de precisión" },
  { Icon: Thermometer, name: "Incubadoras y Cámaras de Estabilidad", detail: "Control climático preciso" },
  { Icon: Filter, name: "Filtros y Membranas", detail: "Consumibles cromatográficos" },
  { Icon: FlaskConical, name: "Vidrio y Plásticos", detail: "Material de laboratorio certificado" },
  { Icon: Cpu, name: "Columnas Cromatográficas", detail: "Welch · Dr. Maisch · SMT" },
];

export default function Equipos() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[color:var(--color-nutermia-cream)] grain overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-24 text-foreground/30 pointer-events-none">
          <Chromatogram variant="divider" animate={false} />
        </div>
        <div className="container relative pt-16 pb-24 lg:pt-24 lg:pb-32">
          <span className="section-tab">Equipos · Catálogo</span>
          <div className="mt-5 grid lg:grid-cols-12 gap-10 items-end">
            <h1 className="lg:col-span-8 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.04]">
              Instrumentación analítica para{" "}
              <em className="italic text-[color:var(--color-nutermia-blue)]">control de calidad</em> y{" "}
              <em className="italic text-[color:var(--color-nutermia-green)]">desarrollo</em>{" "}
              farmacéutico.
            </h1>
            <p className="lg:col-span-4 text-muted-foreground leading-relaxed">
              Comercializamos equipos nuevos y seleccionados de segunda generación, con garantía,
              capacitación y soporte técnico local en Colombia.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTED IMAGES */}
      <section className="bg-background">
        <div className="container py-20 lg:py-28 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 grid grid-cols-5 gap-4">
            <div className="col-span-3 rounded-xl overflow-hidden border border-border aspect-[3/4] bg-white">
              <img src={ASSETS.hplcStack} alt="HPLC Agilent modular" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-2 flex flex-col gap-4">
              <div className="rounded-xl overflow-hidden border border-border aspect-square bg-white">
                <img src={ASSETS.labInstrument} alt="Instrumento analítico" className="h-full w-full object-cover" />
              </div>
              <div className="rounded-xl border border-border bg-[color:var(--color-nutermia-cream)] aspect-square p-5 flex flex-col justify-between">
                <span className="font-mono text-[11px] tracking-widest text-muted-foreground">MODELO DESTACADO</span>
                <div>
                  <h3 className="font-display text-2xl text-[color:var(--color-nutermia-blue)] leading-tight">
                    Hanon K2025 Series
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Sistema HPLC modular con software WookingLab y cumplimiento 21 CFR Part 11.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-5">
            <span className="section-tab">Plataforma HPLC</span>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Arquitectura modular y cumplimiento regulatorio.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Bombas cuaternarias, automuestreadores, hornos de columna y detectores UV / DAD,
              configurables según la matriz analítica. Software de adquisición con auditoría
              electrónica completa y firma digital.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-foreground/85">
              <li className="font-mono text-[12px]">› Bomba cuaternaria</li>
              <li className="font-mono text-[12px]">› Automuestreador</li>
              <li className="font-mono text-[12px]">› Horno de columna</li>
              <li className="font-mono text-[12px]">› Detector UV</li>
              <li className="font-mono text-[12px]">› Detector DAD</li>
              <li className="font-mono text-[12px]">› Acoplamiento MS opcional</li>
            </ul>
            <Link
              href="/contacto"
              className="btn-press inline-flex items-center gap-2 rounded-md bg-[color:var(--color-nutermia-blue)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[color:var(--color-nutermia-blue-deep)]"
            >
              Solicitar ficha técnica
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="bg-[color:var(--color-nutermia-cream-deep)] border-y border-border">
        <div className="container py-20 lg:py-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="section-tab">Categorías</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
                Catálogo de equipos.
              </h2>
            </div>
            <p className="md:max-w-md text-sm text-muted-foreground">
              Cobertura amplia de instrumentación para laboratorios farmacéuticos, analíticos y de
              control de calidad.
            </p>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATEGORIES.map(({ Icon, name, detail }) => (
              <li
                key={name}
                className="lift-card group flex items-start gap-4 rounded-xl border border-border bg-card p-5"
              >
                <div className="rounded-md bg-[color:var(--color-nutermia-blue)]/8 p-2.5">
                  <Icon className="h-5 w-5 text-[color:var(--color-nutermia-blue)]" />
                </div>
                <div>
                  <h3 className="font-display text-xl leading-tight">{name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="container py-20 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            ¿No encuentra el equipo que necesita?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Solicite una asesoría técnica gratuita y un especialista de {NUTERMIA.legalName} le ayudará
            a configurar la plataforma analítica adecuada.
          </p>
          <Link
            href="/contacto"
            className="btn-press mt-6 inline-flex items-center gap-2 rounded-md bg-[color:var(--color-nutermia-blue)] px-6 py-3.5 text-sm font-medium text-white hover:bg-[color:var(--color-nutermia-blue-deep)]"
          >
            Hablar con un especialista
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
