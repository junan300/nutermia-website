/**
 * Nutermia — Shared brand, contact and asset constants.
 * Style guard: Bio-Industrial Editorial. Use Nutermia palette tokens & motion utilities defined in index.css.
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

export const ASSETS = {
  logo: "/manus-storage/nutermia-logo_a510d83f.webp",
  hplcStack: "/manus-storage/agilent-hplc-stack_3dea8d96.jpeg",
  labInstrument: "/manus-storage/lab-instrument_a2ee3703.jpeg",
} as const;

export const VIDEOS = [
  {
    id: "vJunNv3E_1I",
    title: "Almacenamiento",
    subtitle: "Trazabilidad y control de inventario",
    description:
      "Custodia de reactivos, consumibles y refacciones bajo condiciones controladas, con rotación y trazabilidad lote a lote.",
  },
  {
    id: "KQjklH0EXyw",
    title: "Empaque",
    subtitle: "Embalaje técnico para equipos de laboratorio",
    description:
      "Empaque seguro de instrumentos sensibles y consumibles, garantizando integridad durante el transporte a sitio del cliente.",
  },
  {
    id: "L1xHZQT3zXo",
    title: "Servicio Técnico",
    subtitle: "Mantenimiento y validación en sitio",
    description:
      "Técnicos certificados ejecutan mantenimientos preventivos, correctivos y protocolos IQ/OQ/PQ siguiendo BPM y FDA 21 CFR Part 11.",
  },
] as const;

export const BRANDS = [
  "Agilent",
  "Shimadzu",
  "Merck Hitachi",
  "Hanon Instruments",
  "Welch Materials",
  "Dr. Maisch",
  "SMT",
  "Brookfield",
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/equipos", label: "Equipos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/productos", label: "Productos" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/contacto", label: "Contacto" },
] as const;
