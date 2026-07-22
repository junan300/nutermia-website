/**
 * Chromatogram — Signature visual motif (Bio-Industrial Editorial).
 * Used as a section divider and as a decorative element in hero.
 * Colors: blue→green gradient referencing Nutermia logo curve.
 */
import { cn } from "@/lib/utils";

interface ChromatogramProps {
  className?: string;
  animate?: boolean;
  variant?: "divider" | "hero";
}

export function Chromatogram({
  className,
  animate = true,
  variant = "divider",
}: ChromatogramProps) {
  // A smooth path that simulates an HPLC chromatogram (a few peaks of different heights)
  const path =
    variant === "hero"
      ? "M0,160 C80,158 120,156 180,150 C220,146 240,144 270,142 C300,140 320,138 340,134 C355,128 360,118 365,90 C370,55 380,30 395,28 C412,28 420,55 425,90 C432,135 440,142 460,144 C500,148 540,150 600,150 C660,148 700,142 730,128 C760,110 775,70 790,60 C810,55 820,90 830,118 C842,142 860,150 900,152 C960,156 1020,158 1100,158 C1180,158 1260,160 1400,162"
      : "M0,40 C60,38 120,36 180,32 C220,30 250,28 280,22 C300,16 308,6 320,4 C335,4 342,18 350,38 C360,58 372,62 400,60 C440,58 470,52 510,38 C540,28 552,14 568,12 C586,12 592,28 600,42 C612,58 640,62 700,60 C780,58 860,56 980,54 C1100,52 1240,50 1440,48";

  return (
    <svg
      viewBox={variant === "hero" ? "0 0 1400 220" : "0 0 1440 80"}
      preserveAspectRatio="none"
      className={cn("block w-full", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="nut-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#13497F" />
          <stop offset="55%" stopColor="#1F7CA8" />
          <stop offset="100%" stopColor="#2F9F6E" />
        </linearGradient>
      </defs>
      {/* baseline */}
      <line
        x1="0"
        y1={variant === "hero" ? 200 : 60}
        x2={variant === "hero" ? 1400 : 1440}
        y2={variant === "hero" ? 200 : 60}
        stroke="currentColor"
        strokeOpacity="0.12"
        strokeWidth="1"
      />
      <path
        d={path}
        fill="none"
        stroke="url(#nut-grad)"
        strokeWidth={variant === "hero" ? 2.5 : 1.75}
        strokeLinecap="round"
        className={animate ? "nut-draw" : undefined}
      />
    </svg>
  );
}
