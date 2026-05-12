/**
 * Productos — Product categories page.
 * Style guard: editorial table-style listing with mono labels and category headers.
 */
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Chromatogram } from "@/components/Chromatogram";

const PRODUCT_GROUPS = [
  {
    title: "Cromatografía Líquida",
    items: [
      { name: "HPLC", note: "Sistemas modulares con detectores UV/DAD" },
      { name: "UPLC", note: "Plataformas ultra-eficientes" },
      { name: "LC-MS / MS", note: "Acoplamiento a espectrometría de masas" },
      { name: "Columnas HPLC", note: "Welch · Dr. Maisch · SMT" },
    ],
  },
  {
    title: "Cromatografía de Gases",
    items: [
      { name: "GC", note: "Cromatógrafos de gases con detectores FID/TCD" },
      { name: "GC-MS", note: "Acoplamiento a espectrometría de masas" },
      { name: "Auto-inyectores", note: "Headspace y líquidos" },
    ],
  },
  {
    title: "Espectroscopía",
    items: [
      { name: "UV-VIS", note: "Espectrofotómetros analíticos" },
      { name: "Absorción Atómica", note: "Llama y horno de grafito" },
      { name: "Lámparas de Deuterio", note: "Repuesto original para detectores" },
    ],
  },
  {
    title: "Pruebas Farmacéuticas",
    items: [
      { name: "Disolutores", note: "Aparatos 1, 2 y de flujo" },
      { name: "Tituladores", note: "Volumétricos y Karl Fischer" },
      { name: "Analizadores de Partículas", note: "Conteo y caracterización" },
    ],
  },
  {
    title: "Equipo Auxiliar",
    items: [
      { name: "Balanzas", note: "Analíticas y de precisión" },
      { name: "Incubadoras", note: "Refrigeradas y de CO₂" },
      { name: "Cámaras de Estabilidad", note: "ICH zonas II/III/IV" },
    ],
  },
  {
    title: "Consumibles y Vidrio",
    items: [
      { name: "Filtros y Membranas", note: "PTFE, PVDF, Nylon" },
      { name: "Viales y Tapones", note: "HPLC y GC" },
      { name: "Vidrio y Plásticos", note: "Material volumétrico y matraces" },
    ],
  },
  {
    title: "Equipo Usado",
    items: [
      { name: "Inventario Calificado", note: "Equipos seleccionados con garantía" },
      { name: "Refurbish", note: "Reacondicionamiento y validación previa" },
    ],
  },
];

export default function Productos() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[color:var(--color-nutermia-cream)] grain overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-24 text-foreground/30 pointer-events-none">
          <Chromatogram variant="divider" animate={false} />
        </div>
        <div className="container relative pt-16 pb-24 lg:pt-24 lg:pb-28">
          <span className="section-tab">Productos · Portafolio</span>
          <h1 className="mt-5 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.04] max-w-4xl">
            Cromatografía, espectroscopía y consumibles para el{" "}
            <em className="italic text-[color:var(--color-nutermia-blue)]">laboratorio moderno</em>.
          </h1>
        </div>
      </section>

      {/* PRODUCT GROUPS */}
      <section className="bg-background">
        <div className="container py-20 lg:py-28 space-y-16">
          {PRODUCT_GROUPS.map((g, gi) => (
            <div key={g.title} className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-28">
                <span className="font-mono text-[11px] tracking-widest text-[color:var(--color-nutermia-green)]">
                  {String(gi + 1).padStart(2, "0")} · CATEGORÍA
                </span>
                <h2 className="mt-2 font-display text-3xl md:text-4xl leading-tight">{g.title}</h2>
              </div>
              <ul className="lg:col-span-8 divide-y divide-border border-t border-border">
                {g.items.map((it) => (
                  <li
                    key={it.name}
                    className="group flex items-baseline justify-between gap-6 py-5 transition-colors hover:bg-[color:var(--color-nutermia-cream)] px-1"
                  >
                    <div>
                      <h3 className="font-display text-xl leading-tight text-foreground">{it.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{it.note}</p>
                    </div>
                    <span className="font-mono text-[11px] tracking-widest text-muted-foreground group-hover:text-[color:var(--color-nutermia-green)] transition-colors">
                      DISPONIBLE
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[color:var(--color-nutermia-ink)] text-[color:var(--color-nutermia-cream)] grain">
        <div className="container py-20 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            ¿Necesita un portafolio específico para su laboratorio?
          </h2>
          <p className="mt-3 text-white/70">
            Compartimos catálogos detallados y fichas técnicas a solicitud.
          </p>
          <Link
            href="/contacto"
            className="btn-press mt-6 inline-flex items-center gap-2 rounded-md bg-[color:var(--color-nutermia-green)] px-6 py-3.5 text-sm font-medium text-white hover:opacity-90"
          >
            Solicitar catálogo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
