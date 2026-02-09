# Deployment & User Delivery Guide

This document describes how to build, verify, and deliver the Accessible Tarot app for production and end users.

---

## Prerequisites

- **Node.js** 18 or higher
- **npm** (comes with Node)

---

## 1. Pre-release verification

Run these commands before releasing or deploying:

```bash
# Install dependencies
npm install

# Lint (must pass with 0 errors, 0 warnings)
npm run lint

# Production build (output in dist/)
npm run build

# Optional: run tests (Chromium; ~1 min)
npm run ci

# Optional: preview production build locally
npm run preview
```

If all steps pass, the app is ready for deployment.

---

## 2. Build for production

```bash
npm run build
```

- **Output:** `dist/` directory containing:
  - `index.html` (entry)
  - `assets/` (hashed JS, CSS, images)
- **Deploy:** Upload the entire `dist/` folder to your hosting provider (do not deploy `src/` or config files).

---

## 3. Deploy to a static host

The app is a **static SPA**. Serve the contents of `dist/` with:

- **HTTPS** (recommended)
- **SPA fallback:** All routes must serve `index.html` so client-side routing works.

### Netlify

- **Option A:** Drag and drop the `dist` folder in the Netlify dashboard.
- **Option B:** Connect the Git repo; set build command `npm run build`, publish directory `dist`.
- SPA routing is handled by `public/_redirects` (copied into `dist` during build).

### Vercel

- Connect the repo; build command: `npm run build`, output directory: `dist`.
- SPA routing is in `vercel.json`.

### GitHub Pages

1. In `vite.config.ts`, set `base: '/your-repo-name/'` (e.g. `base: '/accessible-tarot-app/'`).
2. Run `npm run build`.
3. Deploy the `dist/` contents to the `gh-pages` branch or via GitHub Actions (e.g. `peaceiris/actions-gh-pages`).

### Other hosts (e.g. AWS S3, Firebase, Cloudflare Pages)

- Upload `dist/` and configure the server so all paths fall back to `index.html` (e.g. 404 → `index.html`).
- Ensure static assets are served with long cache (e.g. `Cache-Control` for `assets/*`).

---

## 4. Environment variables (optional)

- Copy `.env.example` to `.env` if you need to override defaults.
- Only `VITE_*` variables are exposed to the client; set these in your host’s environment or build settings if required.
- The app runs without any env vars; use them only for base path or similar overrides.

---

## 5. User delivery checklist

Before announcing or sharing the app with users:

- [ ] Production build runs without errors (`npm run build`).
- [ ] App works in the browser (run `npm run preview` and test main flows).
- [ ] HTTPS is enabled on the live URL.
- [ ] SPA routing works (e.g. open `/library`, `/settings` directly and refresh).
- [ ] No sensitive data or debug logs in the built output.
- [ ] README (and optional DEPLOYMENT.md) are up to date with the live URL if you mention it.

---

## 6. Post-deploy

- Share the production URL with users.
- Monitor errors (e.g. host analytics, error reporting) if you add them later.
- For updates: rebuild (`npm run build`), then redeploy the new `dist/` contents.
