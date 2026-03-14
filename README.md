# Trevor Mann Website

Personal website for [trevormann.org](https://trevormann.org) and [no1mann.com](https://no1mann.com), built as a React single-page app and deployed to Cloudflare Workers.

## What This Project Includes

- Responsive personal site with light/dark theme support
- Routing for About, Work, Blog, and Conversations pages
- Content-driven sections powered by a centralized data file
- Static asset deployment to Cloudflare with SPA route fallback

## Tech Stack

- React + TypeScript
- Vite
- React Router
- Tailwind CSS
- Cloudflare Workers (`wrangler`)
- GitHub Actions (CI/CD deployment)

## Getting Started

### Prerequisites

- Node.js LTS
- npm

### Install and run locally

```bash
npm install
npm run dev
```

Local dev server starts on Vite's default port (usually `5173`).

## Available Scripts

- `npm run dev` - start local development server
- `npm run build` - type-check and produce production build in `dist/`
- `npm run preview` - preview the production build locally
- `npm run deploy` - deploy the build to Cloudflare Workers via Wrangler

## Content and Routing

- App routes are defined in `src/App.tsx`
- Main site content (bio, projects, blog metadata, conversations, socials) is in `src/data.ts`
- Client-side routing is configured with a fallback to `index.html` using:
  - `assets.not_found_handling: "single-page-application"` in `wrangler.jsonc`

## Deployment

### Manual deployment

```bash
npm run build
npm run deploy
```

### Automated deployment with GitHub Actions

Workflow: `.github/workflows/deploy-worker.yml`

- Runs on pushes to `main`
- Supports manual runs via `workflow_dispatch`
- Builds with Node LTS and deploys with `cloudflare/wrangler-action`

Required repository secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## Notes

- This project deploys static assets from `dist/` using Wrangler's assets config.
- Keep `wrangler.jsonc` and GitHub workflow secrets in sync when changing deployment settings.
