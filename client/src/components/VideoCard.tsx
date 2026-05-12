/**
 * VideoCard — Lazy-loaded YouTube embed.
 * Uses YouTube thumbnail as poster until clicked to reduce initial load.
 * Style: framed in cream card with ink type, mono labels.
 */
import { useState } from "react";
import { Play } from "lucide-react";

interface VideoCardProps {
  videoId: string;
  title: string;
  subtitle: string;
  description: string;
  index: number;
}

export function VideoCard({ videoId, title, subtitle, description, index }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <article className="lift-card group rounded-xl bg-card border border-border overflow-hidden">
      <div className="relative aspect-video bg-[color:var(--color-nutermia-ink)] overflow-hidden">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 group/btn"
            aria-label={`Reproducir ${title}`}
          >
            <img
              src={thumb}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover/btn:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-nutermia-ink)]/70 via-transparent to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-[color:var(--color-nutermia-blue)] shadow-lg transition-transform duration-200 group-hover/btn:scale-105">
                <Play className="h-6 w-6 ml-0.5" fill="currentColor" />
              </span>
            </span>
            <span className="absolute top-3 left-3 font-mono text-[10px] tracking-widest text-white/80 bg-black/30 backdrop-blur px-2 py-1 rounded">
              [{String(index + 1).padStart(2, "0")}]
            </span>
          </button>
        )}
      </div>
      <div className="p-6 space-y-2">
        <p className="font-mono text-[11px] tracking-widest text-[color:var(--color-nutermia-green)]">
          {subtitle}
        </p>
        <h3 className="font-display text-2xl text-foreground leading-tight">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </article>
  );
}
