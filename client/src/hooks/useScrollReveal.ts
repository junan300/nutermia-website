/**
 * useScrollReveal — Drives the `.nut-reveal` entry animations.
 *
 * Observes every element carrying `.nut-reveal` and adds `.nut-in` the first
 * time it enters the viewport, letting the CSS transition play exactly when
 * the visitor scrolls to it (instead of all at once on mount). Re-runs on
 * route changes so newly mounted pages get observed too.
 */
import { useEffect } from "react";

export function useScrollReveal(watch: unknown) {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".nut-reveal:not(.nut-in)")
    );
    if (elements.length === 0) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      for (const el of elements) el.classList.add("nut-in");
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("nut-in");
            observer.unobserve(entry.target);
          }
        }
      },
      // Fire slightly before the element is fully in view for a natural feel.
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [watch]);
}
