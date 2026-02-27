<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

## FinCRM Marketing Site

A modern React + Vite + Tailwind marketing site for the FinCRM platform, with rich product pages, feature overviews, and integrations.

## Run Locally

- **Prerequisites**: Node.js (LTS), npm

### Setup

1. Install dependencies:
   `npm install`
2. (Optional) Create a `.env.local` based on `.env.example` if you plan to use Gemini-based features and set `GEMINI_API_KEY`.
3. Run the dev server:
   `npm run dev`

## Quality Tooling

- **Linting**: `npm run lint` (ESLint over `src/**/*.{ts,tsx}`)
- **Type checking**: `npm run typecheck` (TypeScript `--noEmit`)
- **Tests**: `npm test` (Vitest + React Testing Library)

## Project Structure

- `src/App.tsx` – application shell and route rendering
- `src/routes/config.tsx` – central route definitions
- `src/components/layout/` – layout elements like `navbar` and `footer`
- `src/components/sections/` – home/landing sections including `hero` and `cta`
- `src/components/cards/` – reusable card components (e.g. `FeatureCard`)
- `src/pages/` – individual pages for products, features, integrations, and company
- `src/data/nav.ts` – shared navigation data for the navbar

### Adding New Pages

1. Create a new page component under `src/pages/...`.
2. Register the route in `src/routes/config.tsx`.
3. If needed, add navigation links using the shared data in `src/data/nav.ts` and/or the footer component.

## CI

GitHub Actions runs on each push/PR to `main`:

- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run build`
