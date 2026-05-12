# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

Nutermia S.A.S. corporate website — a Spanish-language marketing site for a Colombian laboratory equipment company. Built with React 19 + TypeScript + Vite 7 + Tailwind CSS v4. No database, no backend API in dev mode; the Express server (`server/index.ts`) is only used for production static file serving.

### Key commands

| Task | Command |
|---|---|
| Install deps | `pnpm install` |
| Dev server | `pnpm dev` (Vite on port 3000) |
| Type check | `pnpm check` |
| Format | `pnpm format` (runs `prettier --write .` — **modifies files**) |
| Build | `pnpm build` |
| Prod server | `pnpm start` (requires build first) |

### Gotchas

- **pnpm 10 build scripts**: After `pnpm install`, pnpm 10 may warn about ignored build scripts for `@tailwindcss/oxide` and `esbuild`. The Vite dev server still starts and works correctly despite this warning — no manual rebuild is needed for development.
- **`pnpm format` writes files**: The `format` script runs `prettier --write .`, which reformats files in place. To check formatting without modifying files, run `npx prettier --check .` instead.
- **Optional env vars**: `VITE_ANALYTICS_ENDPOINT`, `VITE_ANALYTICS_WEBSITE_ID`, `BUILT_IN_FORGE_API_URL`, `BUILT_IN_FORGE_API_KEY`, `VITE_FRONTEND_FORGE_API_KEY`, `VITE_FRONTEND_FORGE_API_URL` are all optional. The site works fully without them (some images may be missing and analytics/maps won't load).
- **No tests written**: `vitest` is a dev dependency but no test files exist yet. `pnpm check` (TypeScript) and `npx prettier --check .` are the primary lint/check commands.
- **Patched dependency**: `wouter@3.7.1` has a patch in `patches/` applied automatically by pnpm.
