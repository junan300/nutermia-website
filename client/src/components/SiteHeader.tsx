/**
 * SiteHeader — Global header for Nutermia.
 * Style guard: Bio-Industrial Editorial — cream/glass surface, ink type, mono nav labels with green underline.
 * Now includes ES/EN language switch (pill) and the new "Virtual Tour" route.
 */
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { ASSETS, NAV_LINKS, NUTERMIA } from "@/lib/nutermia";
import { cn } from "@/lib/utils";
import { useI18n } from "@/contexts/I18nContext";
import type { Dict } from "@/i18n/dictionaries";

function LangPill() {
  const { lang, setLang } = useI18n();
  return (
    <div className="lang-pill" role="group" aria-label="Language switch">
      <button
        type="button"
        data-active={lang === "es"}
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
      >
        ES
      </button>
      <button
        type="button"
        data-active={lang === "en"}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}

export function SiteHeader() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { s } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/70"
          : "bg-background/60 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img
            src={ASSETS.logo}
            alt="Nutermia"
            className="h-12 w-auto md:h-14 object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => {
            const active =
              location === link.href ||
              (link.href !== "/" && location.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-[13px] font-medium tracking-wide transition-colors whitespace-nowrap",
                  active
                    ? "text-[color:var(--color-nutermia-blue)]"
                    : "text-foreground/75 hover:text-foreground"
                )}
              >
                <span>{s(link.labelKey as keyof Dict)}</span>
                <span
                  className={cn(
                    "absolute left-3 right-3 -bottom-0.5 h-px bg-[color:var(--color-nutermia-green)] transition-transform duration-200",
                    active ? "scale-x-100" : "scale-x-0 origin-left"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LangPill />
          <a
            href={`tel:${NUTERMIA.phones[0].replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 font-mono text-[12px] text-foreground/75 hover:text-foreground"
          >
            <Phone className="h-3.5 w-3.5" />
            {NUTERMIA.phones[0]}
          </a>
          <Link
            href="/contacto"
            className="btn-press inline-flex items-center justify-center rounded-md bg-[color:var(--color-nutermia-blue)] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-[color:var(--color-nutermia-blue-deep)]"
          >
            {s("nav.cta")}
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <LangPill />
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md border border-border bg-card/60 p-2 text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-2 py-3 text-base font-medium border-b border-border/60 last:border-b-0",
                    active
                      ? "text-[color:var(--color-nutermia-blue)]"
                      : "text-foreground/80"
                  )}
                >
                  {s(link.labelKey as keyof Dict)}
                </Link>
              );
            })}
            <Link
              href="/contacto"
              className="mt-3 inline-flex items-center justify-center rounded-md bg-[color:var(--color-nutermia-blue)] px-4 py-3 text-sm font-medium text-white"
            >
              {s("nav.cta")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
