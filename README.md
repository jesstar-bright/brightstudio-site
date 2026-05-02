# Bright Studio Site

Marketing site for Bright Studio LLC. Lives at [brightstudio.build](https://brightstudio.build).

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4** with custom brand palette
- **Geist** for sans + mono fonts
- **Vercel** for hosting

## Brand Palette

Defined as CSS custom properties in `src/app/globals.css`:

- Yellow: `#FFD60A` (accent, color blocks)
- Black: `#0A0A0A` (text, borders)
- Cream: `#FAF8F3` (page background)
- Cobalt: `#1A4FE0` (link/button accent)
- Coral: `#FF6B6B` (secondary accent)

Tailwind utilities: `bg-yellow`, `text-black`, `bg-cream`, `bg-cobalt`, `bg-coral`.

## Local Development

```bash
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Brand Brief

The full design brief lives at `~/Documents/Bright Studio LLC/Brand/website-brief.md`. That file is the source of truth for positioning, services, manifesto copy, and visual direction.

## Deployment

Push to `main` on GitHub → Vercel auto-deploys.
