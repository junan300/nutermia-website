/**
 * Nutermia — i18n dictionaries (Spanish primary, English secondary).
 * Keys are flat and namespaced (e.g. "home.hero.title") for easy refactoring.
 *
 * For headlines that include emphasis (<em>), the value is a React node.
 * For body copy that uses inline formatting, use simple string with no markup.
 */
import type { ReactNode } from "react";

export type Lang = "es" | "en";

/** Each entry is either a plain string or a React node (for rich headlines). */
type Value = string | ReactNode;

/** Spanish dictionary defines the full key set; English mirrors it. */
const es = {
  // ── Common / nav ────────────────────────────────────────────────────────────
  "nav.home": "Inicio",
  "nav.equipment": "Equipos",
  "nav.services": "Servicios",
  "nav.products": "Productos",
  "nav.about": "Quiénes Somos",
  "nav.tour": "Tour Virtual",
  "nav.contact": "Contacto",
  "nav.cta": "Cotizar",
  "lang.switch.label": "Idioma",
  "lang.es": "ES",
  "lang.en": "EN",

  // ── Footer ──────────────────────────────────────────────────────────────────
  "footer.tagline":
    "Nutermia S.A.S. ofrece soluciones integrales para laboratorios farmacéuticos y analíticos en Colombia: cromatografía líquida (HPLC), instrumentación, mantenimiento, validación IQ/OQ/PQ y consultoría GMP para gases medicinales.",
  "footer.nav": "NAVEGACIÓN",
  "footer.contact": "CONTACTO",
  "footer.certified": "CERTIFICADO",
  "footer.brands": "MARCAS REPRESENTADAS",
  "footer.rights": "Todos los derechos reservados.",

  // ── Home · Hero ─────────────────────────────────────────────────────────────
  "home.hero.tab": "01 · Nutermia S.A.S.",
  "home.hero.title": (
    <>
      La <em className="italic text-[color:var(--color-nutermia-blue)]">excelencia</em> es un{" "}
      <em className="italic text-[color:var(--color-nutermia-green)]">estilo de vida</em>,
      <br className="hidden sm:block" /> no una coincidencia.
    </>
  ) as ReactNode,
  "home.hero.body":
    "Soluciones integrales en cromatografía líquida (HPLC), instrumentación analítica, mantenimiento y validación IQ/OQ/PQ para la industria farmacéutica colombiana. Soporte técnico local con cobertura nacional.",
  "home.hero.cta.primary": "Conócenos",
  "home.hero.cta.secondary": "Cotizar",
  "home.hero.spec.title": "FICHA · CAPACIDADES",
  "home.hero.spec.row1.k": "Certificación",
  "home.hero.spec.row1.v": "ISO 9001:2015",
  "home.hero.spec.row2.k": "Cumplimiento",
  "home.hero.spec.row2.v": "FDA 21 CFR Part 11",
  "home.hero.spec.row3.k": "Cobertura",
  "home.hero.spec.row3.v": "Nacional · Colombia",
  "home.hero.spec.row4.k": "Servicios",
  "home.hero.spec.row4.v": "Mantenimiento · Validación · GMP",
  "home.hero.spec.row5.k": "Marcas",
  "home.hero.spec.row5.v": "Agilent · Shimadzu · Hanon",
  "home.hero.stat1.n": "+15",
  "home.hero.stat1.l": "Años",
  "home.hero.stat2.n": "ISO",
  "home.hero.stat2.l": "9001:2015",
  "home.hero.stat3.n": "7+",
  "home.hero.stat3.l": "Marcas",

  // ── Home · Capabilities band ────────────────────────────────────────────────
  "home.cap.1": "Cromatografía Líquida (HPLC · UPLC · LC-MS/MS)",
  "home.cap.2": "Mantenimiento Preventivo y Correctivo",
  "home.cap.3": "Validación IQ · OQ · PQ",
  "home.cap.4": "Consultoría GMP — Gases Medicinales",

  // ── Home · HPLC focus ───────────────────────────────────────────────────────
  "home.hplc.tab": "02 · Especialidad",
  "home.hplc.title": (
    <>
      Sistemas <em className="italic text-[color:var(--color-nutermia-blue)]">HPLC</em> de alto
      rendimiento para laboratorios analíticos y de control de calidad.
    </>
  ) as ReactNode,
  "home.hplc.body":
    "Comercializamos e integramos plataformas HPLC modulares —bombas cuaternarias, automuestreadores, hornos de columna, detectores UV y DAD— con opción de acoplamiento a espectrometría de masas. Software de adquisición con audit trail, firma electrónica y cumplimiento FDA 21 CFR Part 11.",
  "home.hplc.f1": "Bombas cuaternarias de alta precisión",
  "home.hplc.f2": "Automuestreador con tecnología de inyección estable",
  "home.hplc.f3": "Horno de columna con control térmico fino",
  "home.hplc.f4": "Detectores UV y arreglo de diodos (DAD)",
  "home.hplc.f5": "Acoplamiento opcional a MS",
  "home.hplc.f6": "Auto-purga y diagnóstico integrado",
  "home.hplc.viewEquip": "Ver equipos",
  "home.hplc.tag.modular": "HPLC · MODULAR",
  "home.hplc.tag.precision": "PRECISIÓN",
  "home.hplc.tag.precision.note": "Reproducibilidad de tiempos de retención típica.",

  // ── Home · Services ─────────────────────────────────────────────────────────
  "home.serv.tab": "03 · Servicios técnicos",
  "home.serv.title": (
    <>
      Soporte experto, validación rigurosa y cumplimiento{" "}
      <em className="italic text-[color:var(--color-nutermia-green-soft)]">regulatorio</em>.
    </>
  ) as ReactNode,
  "home.serv.body":
    "Operamos bajo un sistema de gestión ISO 9001:2015 con técnicos certificados y cobertura nacional. Ofrecemos contratos anuales de mantenimiento y servicios puntuales.",
  "home.serv.viewAll": "Conoce todos los servicios",
  "home.serv.s1.t": "Mantenimiento Preventivo",
  "home.serv.s1.d":
    "Calendarios programados, refacciones originales y reportes técnicos detallados para extender la vida útil del equipo.",
  "home.serv.s2.t": "Mantenimiento Correctivo",
  "home.serv.s2.d":
    "Diagnóstico y reparación en sitio o en taller con tiempos de respuesta acotados a contrato.",
  "home.serv.s3.t": "Validación IQ / OQ / PQ",
  "home.serv.s3.d":
    "Calificación de instalación, operación y desempeño bajo BPM y FDA 21 CFR Part 11.",
  "home.serv.s4.t": "Calibración Metrológica",
  "home.serv.s4.d":
    "Calibración trazable de balanzas, pH-metros, termohigrómetros y otros instrumentos.",
  "home.serv.s5.t": "Validación de Sistemas Computarizados",
  "home.serv.s5.d":
    "CSV para software de adquisición y bases de datos analíticas con audit trail.",
  "home.serv.s6.t": "Gases Medicinales · GMP",
  "home.serv.s6.d":
    "Servicio y consultoría para analizadores de gases medicinales bajo Buenas Prácticas de Manufactura.",

  // ── Home · Process videos ───────────────────────────────────────────────────
  "home.video.tab": "04 · Nuestros procesos",
  "home.video.title": (
    <>
      Operación trazable, del <em className="italic text-[color:var(--color-nutermia-green)]">almacén</em> al{" "}
      <em className="italic text-[color:var(--color-nutermia-blue)]">laboratorio</em>.
    </>
  ) as ReactNode,
  "home.video.body":
    "Cada etapa —almacenamiento, empaque, calibración y servicio técnico— se ejecuta bajo procedimientos documentados que protegen la integridad del instrumento y la trazabilidad del cliente.",

  "video.storage.subtitle": "Trazabilidad y control de inventario",
  "video.storage.title": "Almacenamiento",
  "video.storage.desc":
    "Custodia de reactivos, consumibles y refacciones bajo condiciones controladas, con rotación y trazabilidad lote a lote.",
  "video.packing.subtitle": "Embalaje técnico para equipos de laboratorio",
  "video.packing.title": "Empaque",
  "video.packing.desc":
    "Empaque seguro de instrumentos sensibles y consumibles, garantizando integridad durante el transporte a sitio del cliente.",
  "video.tech.subtitle": "Mantenimiento y validación en sitio",
  "video.tech.title": "Servicio Técnico",
  "video.tech.desc":
    "Técnicos certificados ejecutan mantenimientos preventivos, correctivos y protocolos IQ/OQ/PQ siguiendo BPM y FDA 21 CFR Part 11.",
  "video.calibration.subtitle": "Verificación y calibración metrológica",
  "video.calibration.title": "Calibración",
  "video.calibration.desc":
    "Procedimientos de calibración trazable y verificación de desempeño previa a entrega o post-mantenimiento.",

  // ── Home · Company tour ─────────────────────────────────────────────────────
  "home.tour.tab": "05 · Tour Virtual",
  "home.tour.eyebrow": "Recorrido Completo",
  "home.tour.title": (
    <>
      Conozca a <em className="italic text-[color:var(--color-nutermia-green)]">Nutermia</em> desde adentro.
    </>
  ) as ReactNode,
  "home.tour.body":
    "Un recorrido completo por nuestras instalaciones en Bogotá D.C.: zonas de almacenamiento, taller de servicio técnico, área de validación y empaque. Vea cómo se ejecutan los procesos que respaldan nuestra promesa de excelencia.",
  "home.tour.cta": "Solicitar visita guiada",
  "home.tour.meta.duration": "Duración",
  "home.tour.meta.duration.v": "Video extendido",
  "home.tour.meta.location": "Ubicación",
  "home.tour.meta.location.v": "Bogotá D.C., Colombia",
  "home.tour.meta.lang": "Idioma",
  "home.tour.meta.lang.v": "Español",

  // ── Home · Brands ───────────────────────────────────────────────────────────
  "home.brands.tab": "06 · Marcas representadas",
  "home.brands.title":
    "Trabajamos con los líderes globales de la instrumentación analítica.",
  "home.brands.body":
    "Equipos nuevos, repuestos originales y consumibles cromatográficos de los principales fabricantes del mundo.",

  // ── Home · CTA ──────────────────────────────────────────────────────────────
  "home.cta.badge": "CERTIFICACIÓN ISO 9001:2015",
  "home.cta.title": "¿Listo para una cotización técnica a la medida de su laboratorio?",
  "home.cta.body":
    "Cuéntenos su necesidad y un especialista le contactará en menos de 24 horas hábiles con una propuesta técnica y comercial.",
  "home.cta.primary": "Solicitar cotización",
  "home.cta.callNow": "Llamar ahora",
  "home.cta.panel.title": "CONTACTO DIRECTO",
  "home.cta.panel.tel": "TEL",
  "home.cta.panel.mail": "MAIL",
  "home.cta.panel.addr": "DIR",

  // ── Equipos page ────────────────────────────────────────────────────────────
  "eq.eyebrow": "Equipos · Catálogo",
  "eq.title": (
    <>
      Instrumentación analítica para{" "}
      <em className="italic text-[color:var(--color-nutermia-blue)]">control de calidad</em> y{" "}
      <em className="italic text-[color:var(--color-nutermia-green)]">desarrollo</em> farmacéutico.
    </>
  ) as ReactNode,
  "eq.body":
    "Comercializamos equipos nuevos y seleccionados de segunda generación, con garantía, capacitación y soporte técnico local en Colombia.",
  "eq.feature.tab": "Plataforma HPLC",
  "eq.feature.title": "Arquitectura modular y cumplimiento regulatorio.",
  "eq.feature.body":
    "Bombas cuaternarias, automuestreadores, hornos de columna y detectores UV / DAD, configurables según la matriz analítica. Software de adquisición con auditoría electrónica completa y firma digital.",
  "eq.feature.cta": "Solicitar ficha técnica",
  "eq.feature.tag": "MODELO DESTACADO",
  "eq.feature.modelName": "Hanon K2025 Series",
  "eq.feature.modelDesc":
    "Sistema HPLC modular con software WookingLab y cumplimiento 21 CFR Part 11.",
  "eq.cats.tab": "Categorías",
  "eq.cats.title": "Catálogo de equipos.",
  "eq.cats.body":
    "Cobertura amplia de instrumentación para laboratorios farmacéuticos, analíticos y de control de calidad.",
  "eq.cat.hplc": "HPLC",
  "eq.cat.hplc.d": "Cromatografía Líquida de Alta Eficiencia",
  "eq.cat.uplc": "UPLC",
  "eq.cat.uplc.d": "Cromatografía Líquida Ultra-Eficiente",
  "eq.cat.lcms": "LC-MS / MS",
  "eq.cat.lcms.d": "Cromatografía acoplada a Espectrometría de Masas",
  "eq.cat.gc": "Cromatografía de Gases",
  "eq.cat.gc.d": "GC y GC-MS",
  "eq.cat.uv": "Espectrofotómetros UV-VIS",
  "eq.cat.uv.d": "Análisis cuantitativo y cualitativo",
  "eq.cat.aa": "Absorción Atómica",
  "eq.cat.aa.d": "AA — Análisis elemental",
  "eq.cat.tit": "Tituladores",
  "eq.cat.tit.d": "Volumétricos y Karl Fischer",
  "eq.cat.diss": "Disolutores",
  "eq.cat.diss.d": "Pruebas de disolución farmacéutica",
  "eq.cat.bal": "Balanzas",
  "eq.cat.bal.d": "Analíticas y de precisión",
  "eq.cat.inc": "Incubadoras y Cámaras de Estabilidad",
  "eq.cat.inc.d": "Control climático preciso",
  "eq.cat.filt": "Filtros y Membranas",
  "eq.cat.filt.d": "Consumibles cromatográficos",
  "eq.cat.glass": "Vidrio y Plásticos",
  "eq.cat.glass.d": "Material de laboratorio certificado",
  "eq.cat.col": "Columnas Cromatográficas",
  "eq.cat.col.d": "Welch · Dr. Maisch · SMT",
  "eq.cta.title": "¿No encuentra el equipo que necesita?",
  "eq.cta.body":
    "Solicite una asesoría técnica gratuita y un especialista de Nutermia S.A.S. le ayudará a configurar la plataforma analítica adecuada.",
  "eq.cta.btn": "Hablar con un especialista",

  // ── Servicios page ──────────────────────────────────────────────────────────
  "sv.eyebrow": "Servicios técnicos · ISO 9001:2015",
  "sv.title": (
    <>
      Mantenimiento, validación y{" "}
      <em className="italic text-[color:var(--color-nutermia-green-soft)]">cumplimiento</em>{" "}
      regulatorio para laboratorios.
    </>
  ) as ReactNode,
  "sv.body":
    "Servicio técnico certificado, repuestos originales y protocolos validados —ejecutados por personal calificado bajo nuestro sistema de gestión de calidad.",
  "sv.s1.t": "Mantenimiento Preventivo",
  "sv.s1.d":
    "Programa anual de visitas planeadas con cambio de consumibles críticos, limpieza y verificación funcional. Reduce paradas inesperadas y prolonga la vida útil de los equipos.",
  "sv.s1.b1": "Refacciones originales",
  "sv.s1.b2": "Reportes técnicos firmados",
  "sv.s1.b3": "Calendario por equipo",
  "sv.s2.t": "Mantenimiento Correctivo",
  "sv.s2.d":
    "Diagnóstico, reparación y puesta a punto de instrumentos analíticos con tiempos de respuesta acotados por contrato.",
  "sv.s2.b1": "Atención en sitio",
  "sv.s2.b2": "Taller especializado",
  "sv.s2.b3": "Repuestos OEM",
  "sv.s3.t": "Validación IQ / OQ / PQ",
  "sv.s3.d":
    "Calificación de Instalación, Operación y Desempeño bajo lineamientos GMP, USP, FDA 21 CFR Part 11 e ICH.",
  "sv.s3.b1": "Protocolos y reportes",
  "sv.s3.b2": "Trazabilidad documental",
  "sv.s3.b3": "Acompañamiento en auditoría",
  "sv.s4.t": "Calibración Metrológica",
  "sv.s4.d":
    "Calibración trazable de instrumentos auxiliares: balanzas analíticas, pH-metros, conductímetros y termohigrómetros.",
  "sv.s4.b1": "Patrones trazables",
  "sv.s4.b2": "Certificados oficiales",
  "sv.s4.b3": "Etiquetado y control",
  "sv.s5.t": "Validación de Sistemas Computarizados (CSV)",
  "sv.s5.d":
    "Validación de software de adquisición, bases de datos analíticas y sistemas LIMS bajo GAMP 5 y 21 CFR Part 11.",
  "sv.s5.b1": "Plan maestro de validación",
  "sv.s5.b2": "Audit trail review",
  "sv.s5.b3": "Pruebas de integridad de datos",
  "sv.s6.t": "Analizadores de Gases Medicinales · GMP",
  "sv.s6.d":
    "Servicio técnico y consultoría regulatoria para sistemas de gases medicinales bajo Buenas Prácticas de Manufactura.",
  "sv.s6.b1": "Verificación de pureza",
  "sv.s6.b2": "Documentación BPM",
  "sv.s6.b3": "Reportes para autoridad sanitaria",
  "sv.s7.t": "Contratos Anuales de Mantenimiento",
  "sv.s7.d":
    "Programas integrales que combinan preventivo, correctivo y soporte prioritario con SLA garantizado.",
  "sv.s7.b1": "SLA personalizado",
  "sv.s7.b2": "Tarifas preferenciales",
  "sv.s7.b3": "Reportes de KPIs",
  "sv.s8.t": "Cobertura Nacional",
  "sv.s8.d":
    "Atendemos laboratorios en todo el territorio colombiano con un equipo técnico desplegable desde Bogotá D.C.",
  "sv.s8.b1": "Bogotá · Medellín · Cali",
  "sv.s8.b2": "Costa Atlántica · Eje Cafetero",
  "sv.s8.b3": "Visitas programadas",
  "sv.compl.tab": "Cumplimiento normativo",
  "sv.compl.title":
    "Operamos bajo estándares internacionales de calidad y trazabilidad documental.",
  "sv.compl.body":
    "Nuestros protocolos están alineados con FDA 21 CFR Part 11, GMP/BPM colombiana, USP <1058> y guías ICH Q2(R1) / ICH Q9, lo que asegura integridad de datos y defensibilidad ante auditorías.",
  "sv.cta.title": "¿Necesita un protocolo IQ/OQ/PQ o un contrato anual?",
  "sv.cta.body": "Solicite una propuesta técnica personalizada para su laboratorio.",
  "sv.cta.btn": "Cotizar servicios",

  // ── Productos page ──────────────────────────────────────────────────────────
  "pr.eyebrow": "Productos · Portafolio",
  "pr.title": (
    <>
      Cromatografía, espectroscopía y consumibles para el{" "}
      <em className="italic text-[color:var(--color-nutermia-blue)]">laboratorio moderno</em>.
    </>
  ) as ReactNode,
  "pr.g1.t": "Cromatografía Líquida",
  "pr.g1.i1.n": "HPLC",
  "pr.g1.i1.d": "Sistemas modulares con detectores UV/DAD",
  "pr.g1.i2.n": "UPLC",
  "pr.g1.i2.d": "Plataformas ultra-eficientes",
  "pr.g1.i3.n": "LC-MS / MS",
  "pr.g1.i3.d": "Acoplamiento a espectrometría de masas",
  "pr.g1.i4.n": "Columnas HPLC",
  "pr.g1.i4.d": "Welch · Dr. Maisch · SMT",
  "pr.g2.t": "Cromatografía de Gases",
  "pr.g2.i1.n": "GC",
  "pr.g2.i1.d": "Cromatógrafos de gases con detectores FID/TCD",
  "pr.g2.i2.n": "GC-MS",
  "pr.g2.i2.d": "Acoplamiento a espectrometría de masas",
  "pr.g2.i3.n": "Auto-inyectores",
  "pr.g2.i3.d": "Headspace y líquidos",
  "pr.g3.t": "Espectroscopía",
  "pr.g3.i1.n": "UV-VIS",
  "pr.g3.i1.d": "Espectrofotómetros analíticos",
  "pr.g3.i2.n": "Absorción Atómica",
  "pr.g3.i2.d": "Llama y horno de grafito",
  "pr.g3.i3.n": "Lámparas de Deuterio",
  "pr.g3.i3.d": "Repuesto original para detectores",
  "pr.g4.t": "Pruebas Farmacéuticas",
  "pr.g4.i1.n": "Disolutores",
  "pr.g4.i1.d": "Aparatos 1, 2 y de flujo",
  "pr.g4.i2.n": "Tituladores",
  "pr.g4.i2.d": "Volumétricos y Karl Fischer",
  "pr.g4.i3.n": "Analizadores de Partículas",
  "pr.g4.i3.d": "Conteo y caracterización",
  "pr.g5.t": "Equipo Auxiliar",
  "pr.g5.i1.n": "Balanzas",
  "pr.g5.i1.d": "Analíticas y de precisión",
  "pr.g5.i2.n": "Incubadoras",
  "pr.g5.i2.d": "Refrigeradas y de CO₂",
  "pr.g5.i3.n": "Cámaras de Estabilidad",
  "pr.g5.i3.d": "ICH zonas II/III/IV",
  "pr.g6.t": "Consumibles y Vidrio",
  "pr.g6.i1.n": "Filtros y Membranas",
  "pr.g6.i1.d": "PTFE, PVDF, Nylon",
  "pr.g6.i2.n": "Viales y Tapones",
  "pr.g6.i2.d": "HPLC y GC",
  "pr.g6.i3.n": "Vidrio y Plásticos",
  "pr.g6.i3.d": "Material volumétrico y matraces",
  "pr.g7.t": "Equipo Usado",
  "pr.g7.i1.n": "Inventario Calificado",
  "pr.g7.i1.d": "Equipos seleccionados con garantía",
  "pr.g7.i2.n": "Refurbish",
  "pr.g7.i2.d": "Reacondicionamiento y validación previa",
  "pr.category": "CATEGORÍA",
  "pr.available": "DISPONIBLE",
  "pr.cta.title": "¿Necesita un portafolio específico para su laboratorio?",
  "pr.cta.body": "Compartimos catálogos detallados y fichas técnicas a solicitud.",
  "pr.cta.btn": "Solicitar catálogo",

  // ── Quiénes Somos page ──────────────────────────────────────────────────────
  "ab.eyebrow": "Quiénes Somos",
  "ab.title": (
    <>
      Una compañía colombiana de{" "}
      <em className="italic text-[color:var(--color-nutermia-blue)]">soluciones</em> integrales para
      el laboratorio analítico.
    </>
  ) as ReactNode,
  "ab.body":
    "Nutermia S.A.S. acompaña a laboratorios farmacéuticos, analíticos y de control de calidad con equipos, consumibles, servicio técnico y validación regulatoria — desde Bogotá D.C. hacia toda Colombia.",
  "ab.m.tab": "Manifiesto",
  "ab.m.title": "Excelencia, no coincidencia.",
  "ab.m.quote": "\"La excelencia es un estilo de vida, no una coincidencia.\"",
  "ab.m.p1":
    "Creemos que la calidad analítica se construye en cada gesto: en el almacenamiento trazable de un reactivo, en el empaque cuidadoso de un instrumento, en la firma de un técnico sobre un protocolo de validación. Por eso documentamos, calibramos y certificamos cada proceso bajo ISO 9001:2015.",
  "ab.m.p2":
    "Representamos a fabricantes globales como Agilent, Shimadzu, Hanon Instruments, Welch Materials, Dr. Maisch y SMT — pero nuestra ventaja es local: respuesta rápida, repuestos disponibles y un equipo técnico que entiende la realidad regulatoria colombiana.",
  "ab.v1.t": "Precisión",
  "ab.v1.d": "Repetibilidad y trazabilidad en cada análisis.",
  "ab.v2.t": "Cercanía",
  "ab.v2.d": "Soporte técnico local con tiempos acotados.",
  "ab.v3.t": "Cumplimiento",
  "ab.v3.d": "ISO 9001:2015 · FDA 21 CFR Part 11 · GMP.",
  "ab.v4.t": "Excelencia",
  "ab.v4.d": "Procesos documentados y mejora continua.",
  "ab.cta.title": "Hablemos de su próximo proyecto analítico.",
  "ab.cta.btn": "Contáctenos",

  // ── Tour Virtual page ───────────────────────────────────────────────────────
  "tour.eyebrow": "Tour Virtual · Recorrido completo",
  "tour.title": (
    <>
      Conozca a <em className="italic text-[color:var(--color-nutermia-green)]">Nutermia</em> sin moverse del laboratorio.
    </>
  ) as ReactNode,
  "tour.body":
    "Un recorrido extendido por nuestras instalaciones en Bogotá D.C.: zonas de almacenamiento, taller de servicio técnico, área de validación, empaque y atención al cliente.",
  "tour.cta": "Agendar visita presencial",
  "tour.stops.t": "Lo que verás",
  "tour.stops.1": "Almacén y custodia de consumibles",
  "tour.stops.2": "Taller de servicio técnico y diagnóstico",
  "tour.stops.3": "Área de validación y documentación",
  "tour.stops.4": "Zona de empaque y despacho",
  "tour.stops.5": "Sala de capacitación y atención al cliente",

  // ── Contacto page ───────────────────────────────────────────────────────────
  "ct.eyebrow": "Contacto",
  "ct.title": (
    <>
      Hablemos de su <em className="italic text-[color:var(--color-nutermia-blue)]">laboratorio</em>.
    </>
  ) as ReactNode,
  "ct.body":
    "Un especialista de Nutermia S.A.S. le responderá en menos de 24 horas hábiles con una propuesta técnica y comercial a la medida.",
  "ct.f.name": "Nombre completo",
  "ct.f.name.ph": "Ana María Rodríguez",
  "ct.f.company": "Empresa / Laboratorio",
  "ct.f.company.ph": "Su organización",
  "ct.f.email": "Correo electrónico",
  "ct.f.email.ph": "ana@empresa.com",
  "ct.f.phone": "Teléfono",
  "ct.f.phone.ph": "+57 300 000 0000",
  "ct.f.subject": "Asunto",
  "ct.f.message": "Mensaje",
  "ct.f.message.ph": "Cuéntenos sobre el equipo, servicio o consumible que necesita...",
  "ct.f.privacy":
    "Al enviar, sus datos serán utilizados únicamente para responder a su solicitud comercial.",
  "ct.f.submit": "Enviar solicitud",
  "ct.f.sending": "Enviando…",
  "ct.s.1": "Cotización de equipos (HPLC, GC, UV-VIS, etc.)",
  "ct.s.2": "Mantenimiento preventivo o correctivo",
  "ct.s.3": "Validación IQ / OQ / PQ",
  "ct.s.4": "Consumibles y columnas",
  "ct.s.5": "Servicios para gases medicinales",
  "ct.s.6": "Otro",
  "ct.panel.title": "CANALES DIRECTOS",
  "ct.cert.tab": "CERTIFICACIÓN",
  "ct.cert.body":
    "Sistema de Gestión de la Calidad certificado. Operación bajo BPM y FDA 21 CFR Part 11 para servicios de validación.",
  "ct.toast.success": "Se abrió su cliente de correo con la solicitud lista para enviar.",
  "ct.toast.desc": "También puede escribirnos directamente a",
} as const satisfies Record<string, Value>;

const en = {
  // Common / nav
  "nav.home": "Home",
  "nav.equipment": "Equipment",
  "nav.services": "Services",
  "nav.products": "Products",
  "nav.about": "About",
  "nav.tour": "Virtual Tour",
  "nav.contact": "Contact",
  "nav.cta": "Get a Quote",
  "lang.switch.label": "Language",
  "lang.es": "ES",
  "lang.en": "EN",

  // Footer
  "footer.tagline":
    "Nutermia S.A.S. delivers integrated solutions for pharmaceutical and analytical laboratories in Colombia: liquid chromatography (HPLC), instrumentation, maintenance, IQ/OQ/PQ validation, and GMP consulting for medical gases.",
  "footer.nav": "NAVIGATION",
  "footer.contact": "CONTACT",
  "footer.certified": "CERTIFIED",
  "footer.brands": "REPRESENTED BRANDS",
  "footer.rights": "All rights reserved.",

  // Home · Hero
  "home.hero.tab": "01 · Nutermia S.A.S.",
  "home.hero.title": (
    <>
      <em className="italic text-[color:var(--color-nutermia-blue)]">Excellence</em> is a{" "}
      <em className="italic text-[color:var(--color-nutermia-green)]">way of life</em>,
      <br className="hidden sm:block" /> not a coincidence.
    </>
  ) as ReactNode,
  "home.hero.body":
    "Integrated solutions in liquid chromatography (HPLC), analytical instrumentation, maintenance, and IQ/OQ/PQ validation for Colombia's pharmaceutical industry. Local technical support with nationwide coverage.",
  "home.hero.cta.primary": "About Us",
  "home.hero.cta.secondary": "Request a Quote",
  "home.hero.spec.title": "SPEC · CAPABILITIES",
  "home.hero.spec.row1.k": "Certification",
  "home.hero.spec.row1.v": "ISO 9001:2015",
  "home.hero.spec.row2.k": "Compliance",
  "home.hero.spec.row2.v": "FDA 21 CFR Part 11",
  "home.hero.spec.row3.k": "Coverage",
  "home.hero.spec.row3.v": "Nationwide · Colombia",
  "home.hero.spec.row4.k": "Services",
  "home.hero.spec.row4.v": "Maintenance · Validation · GMP",
  "home.hero.spec.row5.k": "Brands",
  "home.hero.spec.row5.v": "Agilent · Shimadzu · Hanon",
  "home.hero.stat1.n": "+15",
  "home.hero.stat1.l": "Years",
  "home.hero.stat2.n": "ISO",
  "home.hero.stat2.l": "9001:2015",
  "home.hero.stat3.n": "7+",
  "home.hero.stat3.l": "Brands",

  // Home · Capabilities
  "home.cap.1": "Liquid Chromatography (HPLC · UPLC · LC-MS/MS)",
  "home.cap.2": "Preventive & Corrective Maintenance",
  "home.cap.3": "IQ · OQ · PQ Validation",
  "home.cap.4": "GMP Consulting — Medical Gases",

  // Home · HPLC
  "home.hplc.tab": "02 · Specialty",
  "home.hplc.title": (
    <>
      High-performance <em className="italic text-[color:var(--color-nutermia-blue)]">HPLC</em>{" "}
      systems for analytical and QC laboratories.
    </>
  ) as ReactNode,
  "home.hplc.body":
    "We supply and integrate modular HPLC platforms —quaternary pumps, autosamplers, column ovens, UV and DAD detectors— with optional mass spectrometry coupling. Acquisition software with audit trail, e-signatures, and FDA 21 CFR Part 11 compliance.",
  "home.hplc.f1": "High-precision quaternary pumps",
  "home.hplc.f2": "Autosampler with stable injection technology",
  "home.hplc.f3": "Column oven with fine thermal control",
  "home.hplc.f4": "UV and Diode Array (DAD) detectors",
  "home.hplc.f5": "Optional MS coupling",
  "home.hplc.f6": "Auto-purge and integrated diagnostics",
  "home.hplc.viewEquip": "View equipment",
  "home.hplc.tag.modular": "HPLC · MODULAR",
  "home.hplc.tag.precision": "PRECISION",
  "home.hplc.tag.precision.note": "Typical retention time reproducibility.",

  // Home · Services
  "home.serv.tab": "03 · Technical services",
  "home.serv.title": (
    <>
      Expert support, rigorous validation, and{" "}
      <em className="italic text-[color:var(--color-nutermia-green-soft)]">regulatory</em>{" "}
      compliance.
    </>
  ) as ReactNode,
  "home.serv.body":
    "We operate under an ISO 9001:2015 management system with certified technicians and nationwide coverage. We offer annual maintenance contracts and on-demand services.",
  "home.serv.viewAll": "Explore all services",
  "home.serv.s1.t": "Preventive Maintenance",
  "home.serv.s1.d":
    "Scheduled visits, OEM parts and detailed technical reports to extend the useful life of your equipment.",
  "home.serv.s2.t": "Corrective Maintenance",
  "home.serv.s2.d":
    "On-site or workshop diagnostics and repairs with response times bound by SLA.",
  "home.serv.s3.t": "IQ / OQ / PQ Validation",
  "home.serv.s3.d":
    "Installation, Operational and Performance qualification under GMP and FDA 21 CFR Part 11.",
  "home.serv.s4.t": "Metrological Calibration",
  "home.serv.s4.d":
    "Traceable calibration of balances, pH meters, thermohygrometers and other instruments.",
  "home.serv.s5.t": "Computerized System Validation",
  "home.serv.s5.d":
    "CSV for acquisition software and analytical databases with audit trail.",
  "home.serv.s6.t": "Medical Gases · GMP",
  "home.serv.s6.d":
    "Service and consulting for medical-gas analyzers under Good Manufacturing Practices.",

  // Home · Videos
  "home.video.tab": "04 · Our processes",
  "home.video.title": (
    <>
      Traceable operations, from the{" "}
      <em className="italic text-[color:var(--color-nutermia-green)]">warehouse</em> to the{" "}
      <em className="italic text-[color:var(--color-nutermia-blue)]">laboratory</em>.
    </>
  ) as ReactNode,
  "home.video.body":
    "Every stage —storage, packing, calibration, and field service— follows documented procedures that protect instrument integrity and end-to-end traceability.",

  "video.storage.subtitle": "Inventory traceability and control",
  "video.storage.title": "Storage",
  "video.storage.desc":
    "Custody of reagents, consumables and spare parts under controlled conditions, with lot-by-lot rotation and traceability.",
  "video.packing.subtitle": "Technical packaging for lab equipment",
  "video.packing.title": "Packing",
  "video.packing.desc":
    "Safe packaging of sensitive instruments and consumables, ensuring integrity during transport to the customer site.",
  "video.tech.subtitle": "On-site maintenance and validation",
  "video.tech.title": "Field Service",
  "video.tech.desc":
    "Certified technicians perform preventive and corrective maintenance, plus IQ/OQ/PQ protocols, following GMP and FDA 21 CFR Part 11.",
  "video.calibration.subtitle": "Metrological verification and calibration",
  "video.calibration.title": "Calibration",
  "video.calibration.desc":
    "Traceable calibration and performance verification before delivery or after maintenance.",

  // Home · Tour
  "home.tour.tab": "05 · Virtual Tour",
  "home.tour.eyebrow": "Full Walk-through",
  "home.tour.title": (
    <>
      Meet <em className="italic text-[color:var(--color-nutermia-green)]">Nutermia</em> from the inside.
    </>
  ) as ReactNode,
  "home.tour.body":
    "A complete walk-through of our facilities in Bogotá D.C.: storage areas, service workshop, validation zone, and packing. See how the processes that back our promise of excellence are actually run.",
  "home.tour.cta": "Request a guided visit",
  "home.tour.meta.duration": "Duration",
  "home.tour.meta.duration.v": "Extended video",
  "home.tour.meta.location": "Location",
  "home.tour.meta.location.v": "Bogotá D.C., Colombia",
  "home.tour.meta.lang": "Language",
  "home.tour.meta.lang.v": "Spanish",

  // Home · Brands
  "home.brands.tab": "06 · Represented brands",
  "home.brands.title":
    "We work with the global leaders of analytical instrumentation.",
  "home.brands.body":
    "New equipment, OEM spare parts, and chromatography consumables from the world's top manufacturers.",

  // Home · CTA
  "home.cta.badge": "ISO 9001:2015 CERTIFICATION",
  "home.cta.title": "Ready for a tailored technical quotation for your lab?",
  "home.cta.body":
    "Tell us your needs and a specialist will contact you within 24 business hours with a technical and commercial proposal.",
  "home.cta.primary": "Request a quotation",
  "home.cta.callNow": "Call now",
  "home.cta.panel.title": "DIRECT CHANNELS",
  "home.cta.panel.tel": "TEL",
  "home.cta.panel.mail": "MAIL",
  "home.cta.panel.addr": "ADDR",

  // Equipos page
  "eq.eyebrow": "Equipment · Catalog",
  "eq.title": (
    <>
      Analytical instrumentation for{" "}
      <em className="italic text-[color:var(--color-nutermia-blue)]">quality control</em> and{" "}
      <em className="italic text-[color:var(--color-nutermia-green)]">pharmaceutical development</em>.
    </>
  ) as ReactNode,
  "eq.body":
    "We supply new and curated second-generation equipment, with warranty, training, and local technical support in Colombia.",
  "eq.feature.tab": "HPLC Platform",
  "eq.feature.title": "Modular architecture and regulatory compliance.",
  "eq.feature.body":
    "Quaternary pumps, autosamplers, column ovens, and UV/DAD detectors, configurable by analytical matrix. Acquisition software with full electronic audit trail and digital signature.",
  "eq.feature.cta": "Request datasheet",
  "eq.feature.tag": "FEATURED MODEL",
  "eq.feature.modelName": "Hanon K2025 Series",
  "eq.feature.modelDesc":
    "Modular HPLC system with WookingLab software and 21 CFR Part 11 compliance.",
  "eq.cats.tab": "Categories",
  "eq.cats.title": "Equipment catalog.",
  "eq.cats.body":
    "Broad instrumentation coverage for pharmaceutical, analytical, and QC laboratories.",
  "eq.cat.hplc": "HPLC",
  "eq.cat.hplc.d": "High-Performance Liquid Chromatography",
  "eq.cat.uplc": "UPLC",
  "eq.cat.uplc.d": "Ultra-Performance Liquid Chromatography",
  "eq.cat.lcms": "LC-MS / MS",
  "eq.cat.lcms.d": "LC coupled to Mass Spectrometry",
  "eq.cat.gc": "Gas Chromatography",
  "eq.cat.gc.d": "GC and GC-MS",
  "eq.cat.uv": "UV-VIS Spectrophotometers",
  "eq.cat.uv.d": "Quantitative and qualitative analysis",
  "eq.cat.aa": "Atomic Absorption",
  "eq.cat.aa.d": "AA — elemental analysis",
  "eq.cat.tit": "Titrators",
  "eq.cat.tit.d": "Volumetric and Karl Fischer",
  "eq.cat.diss": "Dissolution Testers",
  "eq.cat.diss.d": "Pharmaceutical dissolution testing",
  "eq.cat.bal": "Balances",
  "eq.cat.bal.d": "Analytical and precision",
  "eq.cat.inc": "Incubators & Stability Chambers",
  "eq.cat.inc.d": "Precise climate control",
  "eq.cat.filt": "Filters & Membranes",
  "eq.cat.filt.d": "Chromatography consumables",
  "eq.cat.glass": "Glassware & Plastics",
  "eq.cat.glass.d": "Certified laboratory materials",
  "eq.cat.col": "Chromatography Columns",
  "eq.cat.col.d": "Welch · Dr. Maisch · SMT",
  "eq.cta.title": "Can't find the equipment you need?",
  "eq.cta.body":
    "Request a free technical consultation and a Nutermia specialist will help you configure the right analytical platform.",
  "eq.cta.btn": "Talk to a specialist",

  // Servicios page
  "sv.eyebrow": "Technical services · ISO 9001:2015",
  "sv.title": (
    <>
      Maintenance, validation, and regulatory{" "}
      <em className="italic text-[color:var(--color-nutermia-green-soft)]">compliance</em> for
      laboratories.
    </>
  ) as ReactNode,
  "sv.body":
    "Certified technical service, OEM parts, and validated protocols —executed by qualified personnel under our quality management system.",
  "sv.s1.t": "Preventive Maintenance",
  "sv.s1.d":
    "Annual planned visits with replacement of critical consumables, cleaning, and functional verification. Reduces downtime and extends equipment life.",
  "sv.s1.b1": "OEM spare parts",
  "sv.s1.b2": "Signed technical reports",
  "sv.s1.b3": "Per-equipment calendar",
  "sv.s2.t": "Corrective Maintenance",
  "sv.s2.d":
    "Diagnostics, repair, and tuning of analytical instruments with SLA-bound response times.",
  "sv.s2.b1": "On-site service",
  "sv.s2.b2": "Specialized workshop",
  "sv.s2.b3": "OEM parts",
  "sv.s3.t": "IQ / OQ / PQ Validation",
  "sv.s3.d":
    "Installation, Operational, and Performance qualification under GMP, USP, FDA 21 CFR Part 11, and ICH.",
  "sv.s3.b1": "Protocols and reports",
  "sv.s3.b2": "Document traceability",
  "sv.s3.b3": "Audit support",
  "sv.s4.t": "Metrological Calibration",
  "sv.s4.d":
    "Traceable calibration of auxiliary instruments: analytical balances, pH meters, conductivity meters, and thermohygrometers.",
  "sv.s4.b1": "Traceable standards",
  "sv.s4.b2": "Official certificates",
  "sv.s4.b3": "Labeling and control",
  "sv.s5.t": "Computerized System Validation (CSV)",
  "sv.s5.d":
    "Validation of acquisition software, analytical databases, and LIMS systems under GAMP 5 and 21 CFR Part 11.",
  "sv.s5.b1": "Master validation plan",
  "sv.s5.b2": "Audit trail review",
  "sv.s5.b3": "Data integrity testing",
  "sv.s6.t": "Medical Gas Analyzers · GMP",
  "sv.s6.d":
    "Technical service and regulatory consulting for medical-gas systems under Good Manufacturing Practices.",
  "sv.s6.b1": "Purity verification",
  "sv.s6.b2": "GMP documentation",
  "sv.s6.b3": "Reports for health authority",
  "sv.s7.t": "Annual Maintenance Contracts",
  "sv.s7.d":
    "Comprehensive programs combining preventive, corrective, and priority support with guaranteed SLA.",
  "sv.s7.b1": "Custom SLA",
  "sv.s7.b2": "Preferred rates",
  "sv.s7.b3": "KPI reporting",
  "sv.s8.t": "Nationwide Coverage",
  "sv.s8.d":
    "We serve laboratories across Colombia with a technical team deployable from Bogotá D.C.",
  "sv.s8.b1": "Bogotá · Medellín · Cali",
  "sv.s8.b2": "Caribbean Coast · Coffee Region",
  "sv.s8.b3": "Scheduled visits",
  "sv.compl.tab": "Regulatory compliance",
  "sv.compl.title":
    "We operate under international quality and document-traceability standards.",
  "sv.compl.body":
    "Our protocols align with FDA 21 CFR Part 11, Colombian GMP, USP <1058>, and ICH Q2(R1) / ICH Q9 guidelines, ensuring data integrity and audit defensibility.",
  "sv.cta.title": "Need an IQ/OQ/PQ protocol or an annual contract?",
  "sv.cta.body": "Request a tailored technical proposal for your laboratory.",
  "sv.cta.btn": "Quote services",

  // Productos
  "pr.eyebrow": "Products · Portfolio",
  "pr.title": (
    <>
      Chromatography, spectroscopy, and consumables for the{" "}
      <em className="italic text-[color:var(--color-nutermia-blue)]">modern laboratory</em>.
    </>
  ) as ReactNode,
  "pr.g1.t": "Liquid Chromatography",
  "pr.g1.i1.n": "HPLC",
  "pr.g1.i1.d": "Modular systems with UV/DAD detectors",
  "pr.g1.i2.n": "UPLC",
  "pr.g1.i2.d": "Ultra-performance platforms",
  "pr.g1.i3.n": "LC-MS / MS",
  "pr.g1.i3.d": "Coupling to mass spectrometry",
  "pr.g1.i4.n": "HPLC Columns",
  "pr.g1.i4.d": "Welch · Dr. Maisch · SMT",
  "pr.g2.t": "Gas Chromatography",
  "pr.g2.i1.n": "GC",
  "pr.g2.i1.d": "Gas chromatographs with FID/TCD detectors",
  "pr.g2.i2.n": "GC-MS",
  "pr.g2.i2.d": "Coupling to mass spectrometry",
  "pr.g2.i3.n": "Auto-injectors",
  "pr.g2.i3.d": "Headspace and liquids",
  "pr.g3.t": "Spectroscopy",
  "pr.g3.i1.n": "UV-VIS",
  "pr.g3.i1.d": "Analytical spectrophotometers",
  "pr.g3.i2.n": "Atomic Absorption",
  "pr.g3.i2.d": "Flame and graphite furnace",
  "pr.g3.i3.n": "Deuterium Lamps",
  "pr.g3.i3.d": "OEM replacement for detectors",
  "pr.g4.t": "Pharmaceutical Testing",
  "pr.g4.i1.n": "Dissolution Testers",
  "pr.g4.i1.d": "Apparatus 1, 2 and flow-through",
  "pr.g4.i2.n": "Titrators",
  "pr.g4.i2.d": "Volumetric and Karl Fischer",
  "pr.g4.i3.n": "Particle Analyzers",
  "pr.g4.i3.d": "Counting and characterization",
  "pr.g5.t": "Auxiliary Equipment",
  "pr.g5.i1.n": "Balances",
  "pr.g5.i1.d": "Analytical and precision",
  "pr.g5.i2.n": "Incubators",
  "pr.g5.i2.d": "Refrigerated and CO₂",
  "pr.g5.i3.n": "Stability Chambers",
  "pr.g5.i3.d": "ICH zones II/III/IV",
  "pr.g6.t": "Consumables & Glassware",
  "pr.g6.i1.n": "Filters & Membranes",
  "pr.g6.i1.d": "PTFE, PVDF, Nylon",
  "pr.g6.i2.n": "Vials & Caps",
  "pr.g6.i2.d": "HPLC and GC",
  "pr.g6.i3.n": "Glassware & Plastics",
  "pr.g6.i3.d": "Volumetric and flasks",
  "pr.g7.t": "Used Equipment",
  "pr.g7.i1.n": "Qualified Inventory",
  "pr.g7.i1.d": "Curated equipment with warranty",
  "pr.g7.i2.n": "Refurbish",
  "pr.g7.i2.d": "Reconditioning and prior validation",
  "pr.category": "CATEGORY",
  "pr.available": "AVAILABLE",
  "pr.cta.title": "Need a specific portfolio for your laboratory?",
  "pr.cta.body": "We share detailed catalogs and datasheets upon request.",
  "pr.cta.btn": "Request catalog",

  // About
  "ab.eyebrow": "About Us",
  "ab.title": (
    <>
      A Colombian company delivering integrated{" "}
      <em className="italic text-[color:var(--color-nutermia-blue)]">solutions</em> for the
      analytical laboratory.
    </>
  ) as ReactNode,
  "ab.body":
    "Nutermia S.A.S. supports pharmaceutical, analytical, and QC laboratories with equipment, consumables, technical service, and regulatory validation — from Bogotá D.C. across Colombia.",
  "ab.m.tab": "Manifesto",
  "ab.m.title": "Excellence, not coincidence.",
  "ab.m.quote": "\"Excellence is a way of life, not a coincidence.\"",
  "ab.m.p1":
    "We believe analytical quality is built in every gesture: in the traceable storage of a reagent, in the careful packaging of an instrument, in a technician's signature on a validation protocol. That's why we document, calibrate, and certify each process under ISO 9001:2015.",
  "ab.m.p2":
    "We represent global manufacturers such as Agilent, Shimadzu, Hanon Instruments, Welch Materials, Dr. Maisch, and SMT — but our edge is local: fast response, available parts, and a technical team that understands Colombian regulatory reality.",
  "ab.v1.t": "Precision",
  "ab.v1.d": "Repeatability and traceability in every analysis.",
  "ab.v2.t": "Proximity",
  "ab.v2.d": "Local technical support with tight response times.",
  "ab.v3.t": "Compliance",
  "ab.v3.d": "ISO 9001:2015 · FDA 21 CFR Part 11 · GMP.",
  "ab.v4.t": "Excellence",
  "ab.v4.d": "Documented processes and continuous improvement.",
  "ab.cta.title": "Let's talk about your next analytical project.",
  "ab.cta.btn": "Contact us",

  // Tour page
  "tour.eyebrow": "Virtual Tour · Full walk-through",
  "tour.title": (
    <>
      Meet <em className="italic text-[color:var(--color-nutermia-green)]">Nutermia</em> without leaving the lab.
    </>
  ) as ReactNode,
  "tour.body":
    "An extended walk-through of our facilities in Bogotá D.C.: storage, service workshop, validation area, packing, and customer support.",
  "tour.cta": "Schedule an on-site visit",
  "tour.stops.t": "What you'll see",
  "tour.stops.1": "Warehouse and consumables custody",
  "tour.stops.2": "Service workshop and diagnostics",
  "tour.stops.3": "Validation and documentation area",
  "tour.stops.4": "Packing and shipping zone",
  "tour.stops.5": "Training and customer-support room",

  // Contact
  "ct.eyebrow": "Contact",
  "ct.title": (
    <>
      Let's talk about your{" "}
      <em className="italic text-[color:var(--color-nutermia-blue)]">laboratory</em>.
    </>
  ) as ReactNode,
  "ct.body":
    "A Nutermia specialist will get back to you within 24 business hours with a tailored technical and commercial proposal.",
  "ct.f.name": "Full name",
  "ct.f.name.ph": "Jane Doe",
  "ct.f.company": "Company / Lab",
  "ct.f.company.ph": "Your organization",
  "ct.f.email": "Email",
  "ct.f.email.ph": "jane@company.com",
  "ct.f.phone": "Phone",
  "ct.f.phone.ph": "+57 300 000 0000",
  "ct.f.subject": "Subject",
  "ct.f.message": "Message",
  "ct.f.message.ph": "Tell us about the equipment, service, or consumable you need...",
  "ct.f.privacy":
    "By submitting, your data will only be used to respond to your commercial request.",
  "ct.f.submit": "Send request",
  "ct.f.sending": "Sending…",
  "ct.s.1": "Equipment quotation (HPLC, GC, UV-VIS, etc.)",
  "ct.s.2": "Preventive or corrective maintenance",
  "ct.s.3": "IQ / OQ / PQ validation",
  "ct.s.4": "Consumables and columns",
  "ct.s.5": "Medical-gas services",
  "ct.s.6": "Other",
  "ct.panel.title": "DIRECT CHANNELS",
  "ct.cert.tab": "CERTIFICATION",
  "ct.cert.body":
    "Certified Quality Management System. Operations under GMP and FDA 21 CFR Part 11 for validation services.",
  "ct.toast.success": "Your email client opened with the request ready to send.",
  "ct.toast.desc": "You can also email us directly at",
} as const satisfies Record<keyof typeof es, Value>;

export type Dict = typeof es;
export const dictionaries: Record<Lang, Dict> = {
  es,
  en: en as unknown as Dict,
};
