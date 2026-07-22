/**
 * PageLayout — Wraps every public page with SiteHeader + main + SiteFooter.
 * Scrolls to top on route change and activates scroll-triggered reveals.
 */
import { useEffect, type ReactNode } from "react";
import { useLocation } from "wouter";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function PageLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);
  useScrollReveal(location);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
