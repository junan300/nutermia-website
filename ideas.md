# Nutermia — Ideas de Diseño

<response>
<text>
**Idea 1 — "Laboratorio de Precisión Editorial" (Swiss-Pharma Editorial)**

- **Design Movement**: Swiss International Style mezclado con editorial pharma moderno (referentes: publicaciones científicas como Nature Methods, sitios de Roche y Sartorius). Sobrio, técnico, con rigor tipográfico.
- **Core Principles**: (1) Jerarquía tipográfica fuerte y silenciosa, (2) Cuadrícula asimétrica de 12 columnas con muchísimo whitespace, (3) Datos y especificaciones como protagonistas visuales, (4) Color usado como acento, no como decoración.
- **Color Philosophy**: Blanco roto (#FAFAF7) como base, tinta antracita (#0F1722) para texto, **Nutermia Deep Blue (#0A3E78)** y **Nutermia Verde Cromatograma (#2FA56A)** extraídos del logo, con un dorado tenue (#B8975A) para sellos de certificación. La paleta evoca laboratorio limpio, ISO, y confianza farmacéutica.
- **Layout Paradigm**: Hero de pantalla completa dividido en dos columnas asimétricas (40/60). A la izquierda: tipografía display grande con eslogan; a la derecha: una "ficha técnica" con datos clave (años de servicio, certificación ISO, marcas representadas). El resto del sitio usa secciones tipo "papel científico" con numeración de sección (01, 02, 03) en el margen.
- **Signature Elements**: (1) Curva de cromatograma sutil dibujada en SVG como divisor entre secciones, (2) Numeración de sección a la izquierda estilo revista, (3) Etiquetas tipo "spec sheet" con líneas finas separando atributos.
- **Interaction Philosophy**: Interacciones discretas y precisas. Hover sobre tarjetas revela una línea fina verde abajo (subrayado de bisturí). Sin micro-animaciones decorativas: cada movimiento confirma una acción.
- **Animation**: Entradas con fade + 8px de translateY a 180ms ease-out. Stagger de 60ms entre items. La curva de cromatograma del fondo del hero se dibuja con stroke-dashoffset en 1200ms al cargar. Sin parallax pesado.
- **Typography System**: **Fraunces** (display serif, peso 600-700) para titulares — transmite rigor científico/editorial. **Inter Tight** (400/500/600) para cuerpo y UI. **JetBrains Mono** para datos técnicos, números de modelo y specs. Escala tipo 1.250 (Major Third).
  </text>
  <probability>0.06</probability>
  </response>

<response>
<text>
**Idea 2 — "Sala Limpia Cinemática" (Clinical Cinematic)**

- **Design Movement**: Dark-mode tecnológico inspirado en interfaces de instrumentación moderna (Agilent OpenLab, Waters Empower, sitios de Illumina). Estética de "sala limpia" con vidrio esmerilado y luz cenital.
- **Core Principles**: (1) Profundidad y capas mediante glassmorphism sutil, (2) Imágenes de equipos como héroes visuales con iluminación cinemática, (3) Datos como overlays luminiscentes, (4) Movimiento contenido que sugiere precisión.
- **Color Philosophy**: Fondo carbón frío (#0B1220) con superficies vidriadas (#16213A con 80% opacidad y backdrop-blur). Acento principal **Nutermia Cyan-Blue (#2FAEDC)** (saturado para destacar contra oscuro), acento secundario **Verde Cromatograma (#2FE39C)** para "señal activa". Texto blanco humo (#E6EDF5). Evoca laboratorio nocturno, monitor de equipo, alta tecnología.
- **Layout Paradigm**: Hero a pantalla completa con fotografía del HPLC Agilent como protagonista, overlay oscuro con eslogan superpuesto. Secciones siguientes en bandas horizontales con "luz" lateral. Cards de servicios flotan sobre el fondo con bordes apenas visibles. Videos integrados como "monitores" embebidos con cromo metálico alrededor.
- **Signature Elements**: (1) Línea fina luminosa que separa secciones, simulando un LED, (2) Halo radial detrás de imágenes clave, (3) Etiquetas tipo HUD (heads-up display) con corchetes en las esquinas.
- **Interaction Philosophy**: Cada interacción tiene un "glow" sutil que aparece y desaparece. Botones brillan ligeramente al hover. Sensación de instrumento encendido.
- **Animation**: Fade + scale 0.97→1 en 220ms cubic-bezier(0.23, 1, 0.32, 1). Pulso muy lento (3s) en indicadores de "estado activo". Parallax leve en imágenes de hero (translateY 8px en scroll).
- **Typography System**: **Space Grotesk** (500/700) para titulares — moderno, geométrico, técnico. **Inter** (400/500) para cuerpo. **JetBrains Mono** para badges y números. Escala 1.333 (Perfect Fourth).
  </text>
  <probability>0.04</probability>
  </response>

<response>
<text>
**Idea 3 — "Cromatograma Vivo" (Bio-Industrial Editorial)**

- **Design Movement**: Híbrido entre brutalismo suave editorial (Stripe Press, Linear) y branding bio-industrial (Ginkgo Bioworks, Recursion). Profesional pero con personalidad y movimiento controlado.
- **Core Principles**: (1) El cromatograma como motivo gráfico recurrente, (2) Composiciones asimétricas que rompen la cuadrícula tradicional, (3) Tarjetas con bordes "engineered" (radius pequeño, sombra suave, borde tinta), (4) Color verde-azul del logo como protagonista absoluto.
- **Color Philosophy**: Base crema clínica (#F6F4EE) que aleja del blanco hospitalario genérico. Tinta profunda (#0E1B2C). **Nutermia Blue (#13497F)** (versión saturada del azul del logo) como acción primaria. **Nutermia Green (#2F9F6E)** como acento de "señal/precisión". Coral suave (#E07A57) muy puntual para CTAs urgentes. Evoca un papel científico moderno con identidad de marca clara.
- **Layout Paradigm**: Hero "split-shifted": titular grande a la izquierda, en la derecha un panel verde-azul con el logo grande y el eslogan secundario. Las secciones siguientes alternan entre fondo crema y bandas oscuras (tinta) con tipografía blanca, creando ritmo. Cards de servicios en cuadrícula 3-2-3 (asimétrica). Los videos van en una "galería de procesos" con miniaturas grandes y descripción al lado.
- **Signature Elements**: (1) Una curva de cromatograma fina en SVG (verde→azul gradient) que serpentea como divisor entre secciones, (2) Tarjetas con un pequeño "tab" superior con número de sección, (3) Badge ISO 9001 con sello circular tipo lacre, (4) Pequeños chips de marca (Agilent, Shimadzu...) con borde sutil.
- **Interaction Philosophy**: Las interacciones tienen presencia pero no son ruidosas. Los botones presionados hacen scale(0.97). Las tarjetas levantan 2px y revelan un borde verde lateral al hover. La curva del cromatograma se anima sutilmente al entrar en viewport.
- **Animation**: Entradas con fade + translateY 16px en 240ms ease-out, stagger de 70ms. La curva SVG del cromatograma usa stroke-dashoffset para "dibujarse" en 1400ms al primer scroll. Hover de tarjeta: borde verde aparece en 160ms.
- **Typography System**: **Instrument Serif** (regular/italic) para titulares grandes — sofisticación editorial con un toque humano. **Inter** (400/500/600) para cuerpo y nav. **JetBrains Mono** (400/500) para números técnicos, codes y stats. Escala 1.250 (Major Third). Italic se usa intencionalmente en palabras clave del eslogan ("excelencia", "estilo de vida").
  </text>
  <probability>0.08</probability>
  </response>

---

## Decisión

**Elijo la Idea 3 — "Cromatograma Vivo" (Bio-Industrial Editorial)**.

Razones:

1. Toma directamente los colores del logo (azul + verde cromatograma) y los convierte en sistema, manteniendo coherencia de marca.
2. El cromatograma como motivo gráfico recurrente es relevante semánticamente para una empresa de HPLC.
3. Mezcla rigor farmacéutico (ISO, compliance, datos) con personalidad editorial moderna — evita el "WordPress genérico" que el spec menciona como problema.
4. Layout asimétrico evita el centrado plano de AI-slop.
5. Funciona perfectamente para imágenes de equipos de laboratorio (fondo crema realza el blanco del Agilent HPLC).
