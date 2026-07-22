# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

Nutermia S.A.S. corporate website — a Spanish-language marketing site for a Colombian laboratory equipment company. Built with React 19 + TypeScript + Vite 7 + Tailwind CSS v4. Hosted as a static site on GitHub Pages. No database, no backend API.

### Key commands

| Task | Command |
|---|---|
| Install deps | `pnpm install` |
| Dev server | `pnpm dev` (Vite on port 3000) |
| Type check | `pnpm check` |
| Format | `pnpm format` (runs `prettier --write .` — **modifies files**) |
| Build | `pnpm build` (output in `dist/`) |
| Preview build | `pnpm preview` |

### Deployment

Deployed automatically via GitHub Actions (`.github/workflows/deploy.yml`) on push to `main`. The workflow builds the Vite project and deploys the `dist/` output to GitHub Pages.

### Gotchas

- **pnpm 10 build scripts**: After `pnpm install`, pnpm 10 may warn about ignored build scripts for `@tailwindcss/oxide` and `esbuild`. The Vite dev server still starts and works correctly despite this warning.
- **`pnpm format` writes files**: The `format` script runs `prettier --write .`, which reformats files in place. To check formatting without modifying files, run `npx prettier --check .` instead.
- **Images**: Place image assets in `client/public/images/`. They're served at `/images/...` in both dev and production.
- **SPA routing on GitHub Pages**: `client/public/404.html` handles the redirect trick so that client-side routes (wouter) work on GitHub Pages.
- **No tests written**: `vitest` is a dev dependency but no test files exist yet. `pnpm check` (TypeScript) and `npx prettier --check .` are the primary lint/check commands.
- **Patched dependency**: `wouter@3.7.1` has a patch in `patches/` applied automatically by pnpm.
