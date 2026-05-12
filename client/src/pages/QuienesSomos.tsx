/**
 * QuienesSomos — About page.
 * Editorial layout: side numbering, large display headings, asymmetric image block.
 */
import { Link } from "wouter";
import { ArrowRight, Target, Compass, Sparkles, ShieldCheck } from "lucide-react";
import { Chromatogram } from "@/components/Chromatogram";
import { ASSETS, NUTERMIA } from "@/lib/nutermia";

export default function QuienesSomos() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[color:var(--color-nutermia-cream)] grain overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-24 text-foreground/30 pointer-events-none">
          <Chromatogram variant="divider" animate={false} />
        </div>
        <div className="container relative pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 space-y-6">
            <span className="section-tab">Quiénes Somos</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.04]">
              Una compañía colombiana de{" "}
              <em className="italic text-[color:var(--color-nutermia-blue)]">soluciones</em> integrales
              para el laboratorio analítico.
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              {NUTERMIA.legalName} acompaña a laboratorios farmacéuticos, analíticos y de control de
              calidad con equipos, consumibles, servicio técnico y validación regulatoria — desde
              Bogotá D.C. hacia toda Colombia.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-border aspect-[3/4] bg-white">
                <img src={ASSETS.hplcStack} alt="HPLC Agilent" className="h-full w-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden border border-border aspect-[3/4] bg-white mt-10">
                <img src={ASSETS.labInstrument} alt="Instrumento analítico" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-background">
        <div className="container py-20 lg:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="section-tab">Manifiesto</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl leading-tight">
              Excelencia, no coincidencia.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-foreground/85 leading-relaxed text-lg">
            <p className="font-display text-2xl italic text-foreground">
              "La excelencia es un estilo de vida, no una coincidencia."
            </p>
            <p>
              Creemos que la calidad analítica se construye en cada gesto: en el almacenamiento
              trazable de un reactivo, en el empaque cuidadoso de un instrumento, en la firma de un
              técnico sobre un protocolo de validación. Por eso documentamos, calibramos y
              certificamos cada proceso bajo {NUTERMIA.iso}.
            </p>
            <p>
              Representamos a fabricantes globales como Agilent, Shimadzu, Hanon Instruments, Welch
              Materials, Dr. Maisch y SMT — pero nuestra ventaja es local: respuesta rápida,
              repuestos disponibles y un equipo técnico que entiende la realidad regulatoria
              colombiana.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[color:var(--color-nutermia-cream-deep)] border-y border-border">
        <div className="container py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { Icon: Target, t: "Precisión", d: "Repetibilidad y trazabilidad en cada análisis." },
            { Icon: Compass, t: "Cercanía", d: "Soporte técnico local con tiempos acotados." },
            { Icon: ShieldCheck, t: "Cumplimiento", d: "ISO 9001:2015 · FDA 21 CFR Part 11 · GMP." },
            { Icon: Sparkles, t: "Excelencia", d: "Procesos documentados y mejora continua." },
          ].map((v) => (
            <div key={v.t} className="lift-card rounded-xl border border-border bg-card p-6">
              <v.Icon className="h-6 w-6 text-[color:var(--color-nutermia-green)]" />
              <h3 className="mt-4 font-display text-2xl leading-tight">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="container py-20 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            Hablemos de su próximo proyecto analítico.
          </h2>
          <Link
            href="/contacto"
            className="btn-press mt-6 inline-flex items-center gap-2 rounded-md bg-[color:var(--color-nutermia-blue)] px-6 py-3.5 text-sm font-medium text-white hover:bg-[color:var(--color-nutermia-blue-deep)]"
          >
            Contáctenos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
