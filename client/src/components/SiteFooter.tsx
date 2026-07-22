/**
 * SiteFooter — Global footer for Nutermia.
 * Dark ink band with cream type. Includes contact, address, ISO badge.
 * Localized via I18nContext.
 */
import { Link } from "wouter";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ASSETS, BRANDS, NAV_LINKS, NUTERMIA } from "@/lib/nutermia";
import { Chromatogram } from "./Chromatogram";
import { useI18n } from "@/contexts/I18nContext";
import type { Dict } from "@/i18n/dictionaries";

export function SiteFooter() {
  const { s } = useI18n();

  return (
    <footer className="relative bg-nut-ink text-[color:var(--color-nutermia-cream)] grain">
      <div className="absolute inset-x-0 -top-px text-[color:var(--color-nutermia-cream)]/15">
        <Chromatogram variant="divider" animate={false} className="h-20" />
      </div>

      <div className="container relative pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-6">
            <div className="bg-white/95 inline-flex rounded-md p-3">
              <img
                src={ASSETS.logo}
                alt="Nutermia"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-white/70 max-w-md">
              {s("footer.tagline")}
            </p>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 px-4 py-2">
              <span className="font-mono text-[11px] tracking-widest text-[color:var(--color-nutermia-green-soft)]">
                {s("footer.certified")}
              </span>
              <span className="font-display text-lg leading-none">
                {NUTERMIA.iso}
              </span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-[11px] tracking-widest text-white/50">
              {s("footer.nav")}
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(l => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {s(l.labelKey as keyof Dict)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-[11px] tracking-widest text-white/50">
              {s("footer.contact")}
            </h4>
            <ul className="space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-[color:var(--color-nutermia-green-soft)] shrink-0" />
                <span>{NUTERMIA.address}</span>
              </li>
              {NUTERMIA.phones.map(p => (
                <li key={p} className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[color:var(--color-nutermia-green-soft)] shrink-0" />
                  <a
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="hover:text-white"
                  >
                    {p}
                  </a>
                </li>
              ))}
              {NUTERMIA.emails.map(e => (
                <li key={e} className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[color:var(--color-nutermia-green-soft)] shrink-0" />
                  <a
                    href={`mailto:${e}`}
                    className="hover:text-white break-all"
                  >
                    {e}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-[color:var(--color-nutermia-green-soft)] shrink-0" />
                <span>{NUTERMIA.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-wrap gap-x-6 gap-y-3 items-center">
          <span className="font-mono text-[11px] tracking-widest text-white/40">
            {s("footer.brands")}
          </span>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {BRANDS.map(b =>
              "href" in b && b.href ? (
                <a
                  key={b.name}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/70 underline-offset-2 hover:text-white hover:underline transition-colors"
                >
                  {b.name}
                </a>
              ) : (
                <span key={b.name} className="text-xs text-white/70">
                  {b.name}
                </span>
              )
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-between gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} {NUTERMIA.legalName}.{" "}
            {s("footer.rights")}
          </p>
          <p className="font-mono">Bogotá D.C. · Colombia</p>
        </div>
      </div>
    </footer>
  );
}
