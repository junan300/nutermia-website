/**
 * Nutermia — Shared brand, contact and asset constants.
 * Style guard: Bio-Industrial Editorial. Use Nutermia palette tokens & motion utilities defined in index.css.
 *
 * NOTE: Display strings for videos and nav are resolved at render time via the i18n
 *       context using the `key` field. This file stays language-agnostic for IDs.
 */

export const NUTERMIA = {
  legalName: "Nutermia S.A.S.",
  tagline: "Soluciones Integrales para Laboratorio",
  slogan: "La excelencia es un estilo de vida, no una coincidencia.",
  city: "Bogotá D.C., Colombia",
  address: "Carrera 73 BIS #49A-21, Bogotá D.C., Colombia",
  phones: ["+57 315 740 5411", "+57 1 309 9460"],
  emails: ["info@nutermia.com.co", "nutermia@gmail.com"],
  hours: "Lunes a Viernes · 8:00 a.m. – 5:30 p.m.",
  iso: "ISO 9001:2015",
  yearsOfService: 15,
} as const;

/** Public image paths (respect Vite `base` so assets resolve wherever the site is hosted). */
const asset = (file: string) => `${import.meta.env.BASE_URL}images/${file}`;

export const ASSETS = {
  logo: asset("logo-nutermia.webp"),
  hplcStack: asset("HPLC-AGILENT.jpeg"),
  labInstrument: asset("LAB-EQUIPMENT.jpeg"),
} as const;

/** Process gallery — 4 videos for symmetric 2×2 / 4-col grid. `key` resolves to dictionary entries. */
export const VIDEOS = [
  { id: "vJunNv3E_1I", key: "storage" },
  { id: "KQjklH0EXyw", key: "packing" },
  { id: "L1xHZQT3zXo", key: "tech" },
  { id: "ofQb525kTV4", key: "calibration" },
] as const;

/** Long-form company tour video (full walk-through). */
export const TOUR_VIDEO_ID = "RUYnMYmLT3o";

/** Represented brands. `href` renders the card as an external link; `isNew` shows the "new partnership" badge on hover. */
export const BRANDS = [
  { name: "Agilent" },
  { name: "Shimadzu" },
  { name: "Merck Hitachi" },
  { name: "Hanon Instruments" },
  { name: "Welch Materials" },
  { name: "Dr. Maisch" },
  { name: "SMT" },
  { name: "Brookfield" },
  {
    name: "Bareiss",
    href: "https://www.bareiss-testing.com/pharmaceutical-testing-equipment/",
    isNew: true,
  },
] as const;

/** Routes for navigation. Labels are looked up via i18n keys. */
export const NAV_LINKS = [
  { href: "/", labelKey: "nav.home" },
  { href: "/equipos", labelKey: "nav.equipment" },
  { href: "/servicios", labelKey: "nav.services" },
  { href: "/productos", labelKey: "nav.products" },
  { href: "/quienes-somos", labelKey: "nav.about" },
  { href: "/tour", labelKey: "nav.tour" },
  { href: "/contacto", labelKey: "nav.contact" },
] as const;
