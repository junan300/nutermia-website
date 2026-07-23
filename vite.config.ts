import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

const plugins = [react(), tailwindcss()];

/** Hostinger serves from `/`. Staging previews set `VITE_BASE` (path, `./`, or absolute URL). */
function normalizeBase(raw: string | undefined): string {
  if (!raw || raw === "/") return "/";
  // Relative base for CDN staging — keep as-is (do not turn "./" into "/./").
  if (raw === "./" || raw === ".") return "./";
  // Absolute CDN / Pages URLs must keep their scheme (don't prefix "/").
  if (/^https?:\/\//i.test(raw)) {
    return raw.endsWith("/") ? raw : `${raw}/`;
  }
  const withLeading = raw.startsWith("/") ? raw : `/${raw}`;
  return withLeading.endsWith("/") ? withLeading : `${withLeading}/`;
}

export default defineConfig({
  // Deployed at the domain root on Hostinger (e.g. https://nutermia.com.co/).
  // Override with VITE_BASE for GitHub Pages staging previews.
  base: normalizeBase(process.env.VITE_BASE),
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
  },
});
