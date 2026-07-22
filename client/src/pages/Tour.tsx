/**
 * Tour — Standalone "Virtual Tour" page featuring the long company-walkthrough video.
 * Style guard: Bio-Industrial Editorial — mixed light/dark background, blue+green blooms,
 * editorial typography, mono labels.
 */
import { Link } from "wouter";
import {
  ArrowRight,
  MapPin,
  Clock,
  Languages,
  PlayCircle,
  ShieldCheck,
} from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import { TOUR_VIDEO_ID, NUTERMIA } from "@/lib/nutermia";
import { Chromatogram } from "@/components/Chromatogram";

export default function Tour() {
  const { t, s, lang } = useI18n();
  const stops = [
    "tour.stops.1",
    "tour.stops.2",
    "tour.stops.3",
    "tour.stops.4",
    "tour.stops.5",
  ] as const;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-nut-mesh-light grain">
        <div className="absolute inset-0 bg-grid-faint pointer-events-none" />
        <div className="blob blob-blue h-72 w-72 -top-12 -left-12" />
        <div className="blob blob-green h-72 w-72 top-1/3 -right-16" />

        <div className="container relative pt-20 pb-16 lg:pt-28 lg:pb-20">
          <span className="section-tab nut-reveal">{s("tour.eyebrow")}</span>
          <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl nut-reveal nut-delay-1">
            {t("tour.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed nut-reveal nut-delay-2">
            {s("tour.body")}
          </p>
        </div>
      </section>

      {/* VIDEO + META */}
      <section className="relative overflow-hidden bg-nut-ink text-[color:var(--color-nutermia-cream)] grain">
        <div className="absolute inset-0 bg-grid-faint-on-dark pointer-events-none" />
        <div className="blob blob-blue h-[420px] w-[420px] -top-32 -left-32 opacity-70" />
        <div className="blob blob-green h-[360px] w-[360px] bottom-[-120px] right-[-80px] opacity-60" />

        <div className="container relative py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 nut-reveal">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)] bg-black">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${TOUR_VIDEO_ID}?rel=0&modestbranding=1`}
                    title={s("tour.title")}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[11px] tracking-widest text-white/75">
                  <PlayCircle className="h-3.5 w-3.5" />{" "}
                  {s("home.tour.eyebrow")}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[11px] tracking-widest text-white/75">
                  <ShieldCheck className="h-3.5 w-3.5 text-[color:var(--color-nutermia-green-soft)]" />{" "}
                  {NUTERMIA.iso}
                </span>
              </div>
            </div>

            <aside className="lg:col-span-4 nut-reveal nut-delay-2 space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-6">
                <h3 className="font-mono text-[11px] tracking-widest text-[color:var(--color-nutermia-green-soft)]">
                  {s("tour.stops.t")}
                </h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {stops.map((k, i) => (
                    <li key={k} className="flex items-start gap-3">
                      <span className="font-mono text-[10px] tracking-widest text-white/40 mt-0.5">
                        [{String(i + 1).padStart(2, "0")}]
                      </span>
                      <span className="text-white/85">{s(k)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 mt-0.5 text-[color:var(--color-nutermia-green-soft)]" />
                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-white/50">
                      {s("home.tour.meta.duration")}
                    </p>
                    <p className="text-sm">{s("home.tour.meta.duration.v")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-[color:var(--color-nutermia-green-soft)]" />
                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-white/50">
                      {s("home.tour.meta.location")}
                    </p>
                    <p className="text-sm">{NUTERMIA.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Languages className="h-4 w-4 mt-0.5 text-[color:var(--color-nutermia-green-soft)]" />
                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-white/50">
                      {s("home.tour.meta.lang")}
                    </p>
                    <p className="text-sm">
                      {lang === "es"
                        ? "Español"
                        : "Spanish (subtitles available)"}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/contacto"
                className="btn-press inline-flex w-full items-center justify-center gap-2 rounded-md bg-[color:var(--color-nutermia-green)] px-6 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[color:var(--color-nutermia-blue)]"
              >
                {s("tour.cta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </aside>
          </div>
        </div>

        <div className="absolute inset-x-0 -bottom-px text-white/10 pointer-events-none">
          <Chromatogram variant="divider" animate={false} className="h-16" />
        </div>
      </section>
    </>
  );
}
