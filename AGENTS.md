# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

Nutermia S.A.S. corporate website — a Spanish-language marketing site for a Colombian laboratory equipment company. Built with React 19 + TypeScript + Vite 7 + Tailwind CSS v4. Deployed as a static Vite build on Hostinger. No database, no backend API.

### Key commands

| Task          | Command                                                        |
| ------------- | -------------------------------------------------------------- |
| Install deps  | `pnpm install`                                                 |
| Dev server    | `pnpm dev` (Vite on port 3000)                                 |
| Type check    | `pnpm check`                                                   |
| Format        | `pnpm format` (runs `prettier --write .` — **modifies files**) |
| Build         | `pnpm build` (output in `dist/`)                               |
| Preview build | `pnpm preview`                                                 |

### Deployment

Deployed on **Hostinger** (Web Apps / managed React-Vite hosting). Hostinger connects to this GitHub repository, auto-detects the Vite framework, and redeploys on push to `main`:

- **Build command**: `npm run build` (Hostinger detects pnpm from `pnpm-lock.yaml` and uses it)
- **Output directory**: `dist`
- **Node.js version**: 22.x (pinned via the `engines` field in `package.json`)
- **SPA fallback**: `client/public/.htaccess` is copied into `dist/` and rewrites unknown paths to `index.html` (Apache/LiteSpeed), so wouter deep links work. The same `dist/` output can also be uploaded manually to `public_html` on classic Hostinger shared hosting.

GitHub Actions (`.github/workflows/ci.yml`) runs type check, format check, and build on push/PR — it does not deploy.

### Gotchas

- **pnpm 10 build scripts**: After `pnpm install`, pnpm 10 may warn about ignored build scripts for `@tailwindcss/oxide` and `esbuild`. The Vite dev server still starts and works correctly despite this warning.
- **`pnpm format` writes files**: The `format` script runs `prettier --write .`, which reformats files in place. To check formatting without modifying files, run `npx prettier --check .` instead.
- **Images**: Place image assets in `client/public/images/`. Reference them via `import.meta.env.BASE_URL` (see `ASSETS` in `client/src/lib/nutermia.ts`).
- **Base path**: The site is served from the domain root; `vite.config.ts` sets `base: "/"`. If the site ever moves under a subpath, update `base` — wouter and asset paths follow it automatically.
- **Scroll animations**: Elements with the `nut-reveal` class are animated in by `useScrollReveal` (wired in `PageLayout`) via IntersectionObserver. `nut-delay-1..5` stagger siblings; `prefers-reduced-motion` disables the effect.
- **No tests written**: `vitest` is a dev dependency but no test files exist yet. `pnpm check` (TypeScript) and `npx prettier --check .` are the primary lint/check commands.
- **Patched dependency**: `wouter@3.7.1` has a patch in `patches/` applied automatically by pnpm.
