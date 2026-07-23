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

GitHub Actions (`.github/workflows/ci.yml`) runs type check, format check, and build on push/PR — it does not deploy to Hostinger.

### Editor review previews — REQUIRED before merging visual changes

The editor (site owner) reviews changes in a browser only — they do not use git or run the project locally. Production (Hostinger) only updates when a PR is **merged into `main`**. Two preview mechanisms exist; use the Netlify one yourself, the Pages one runs automatically.

**1. Netlify Drop link (you MUST provide this).** Whenever you finish changes that the editor should see (any visual/content change), deploy a throwaway preview and give them the link:

```bash
pnpm build
npx netlify-cli deploy --dir=dist --allow-anonymous
```

- This uploads `dist/` anonymously to a random one-off `*.netlify.app` URL (Netlify Drop). The output box shows the **Site URL** and a **Password** (e.g. `My-Drop-Site`) — include both prominently in your final summary (and in the PR description).
- Deploy as the **last step** of your work and share the link right away: unclaimed anonymous deploys expire quickly (Netlify warns they must be claimed within ~60 minutes), so the editor should open the link promptly. If it has expired, just re-run the two commands to get a fresh link.
- The preview is temporary and disposable — it never touches Hostinger production.
- The default `base: "/"` works as-is on the Netlify preview domain — no config changes needed.
- The CLI writes a local `.netlify/` state folder; it is gitignored (and prettier-ignored) — never commit it.

**2. GitHub Pages staging (automatic on every PR).** `.github/workflows/pr-preview.yml` builds each PR with `VITE_BASE=/nutermia-website/` and comments the staging URL on the PR; `.github/workflows/publish-staging.yml` (a `workflow_run` follow-up that must live on `main`, which it does) then deploys it to https://junan300.github.io/nutermia-website/. Staging is shared — the latest successful PR build wins — and never writes to Hostinger. `vite.config.ts` reads `VITE_BASE` for this; Hostinger builds keep `base: "/"`.

Review flow for the editor: open a preview link → check the changes → merge the PR on github.com when happy → Hostinger goes live automatically.

### Gotchas

- **pnpm 11**: The project pins `pnpm@11.16.0` via `packageManager` (Hostinger's build environment runs pnpm 11, which requires Node 22+). pnpm settings live in `pnpm-workspace.yaml` — pnpm 11 no longer reads the `pnpm` field in `package.json`. Build scripts for `@tailwindcss/oxide` and `esbuild` are explicitly allowed there via `allowBuilds`.
- **`pnpm format` writes files**: The `format` script runs `prettier --write .`, which reformats files in place. To check formatting without modifying files, run `npx prettier --check .` instead.
- **Images**: Place image assets in `client/public/images/`. Reference them via `import.meta.env.BASE_URL` (see `ASSETS` in `client/src/lib/nutermia.ts`).
- **Base path**: The site is served from the domain root; `vite.config.ts` sets `base: "/"`. If the site ever moves under a subpath, update `base` — wouter and asset paths follow it automatically.
- **Scroll animations**: Elements with the `nut-reveal` class are animated in by `useScrollReveal` (wired in `PageLayout`) via IntersectionObserver. `nut-delay-1..5` stagger siblings; `prefers-reduced-motion` disables the effect.
- **No tests written**: `vitest` is a dev dependency but no test files exist yet. `pnpm check` (TypeScript) and `npx prettier --check .` are the primary lint/check commands.
- **Patched dependency**: `wouter@3.7.1` has a patch in `patches/`, registered under `patchedDependencies` in `pnpm-workspace.yaml` and applied automatically by pnpm.
