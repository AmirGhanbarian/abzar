# Abzar — Pro-Grade Power Tools

A mobile-first storefront for a fictional professional power-tools brand, built
with **React + Vite + TypeScript + Tailwind CSS**. Designed to look sharp and
convert: a cinematic hero, shop-by-trade categories, a filterable product grid,
quick-view modals, a slide-in cart drawer with free-shipping progress, a deal
banner, value props, and a newsletter capture.

> "Abzar" (ابزار) means **tool** in Persian.

## What's inside

- **Landing + shop flow** — hero, category strip, product grid with client-side
  category filtering, quick-view modal, cart drawer, deal-of-the-week banner,
  value props, newsletter, footer. No real payment / checkout backend.
- **13 products** across 6 categories (drills, saws, grinders, sanders,
  multi-tools, combo kits) with realistic specs, ratings, and pricing.
- **Persistent cart** — items survive a page refresh via `localStorage`.
- **Mobile-first** — base styles target phones; layouts enhance at `sm`/`lg`.
  Touch-friendly 44px targets, horizontal-scroll category strip, full-width
  drawer and modal on small screens.
- **Accessible** — semantic landmarks, ARIA labels on icon buttons, focusable
  controls, Esc-to-close on the modal, `prefers-reduced-motion` respected.
- **Modern slate identity** — deep slate surfaces with an industrial amber
  accent, Space Grotesk display + Inter body type.

## Tech stack

| Layer        | Choice                          |
| ------------ | ------------------------------- |
| Framework    | React 18                        |
| Build tool   | Vite 5                          |
| Language     | TypeScript (strict)             |
| Styling      | Tailwind CSS 3                  |
| Icons        | lucide-react                    |
| State        | React Context + `useReducer`    |

No backend, no router — a single self-contained page. Images are referenced by
URL from a CDN and are not committed as binaries, keeping the repo lightweight.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

Requires Node 18+ (developed on Node 24).

## Project structure

```
abzar/
├── index.html
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx              # entry + CartProvider
    ├── App.tsx               # page composition + state
    ├── index.css             # Tailwind layers + design tokens
    ├── types/index.ts        # Product / Category / CartItem types
    ├── context/CartContext.tsx   # cart reducer + persistence
    ├── hooks/useCart.ts      # ergonomic cart hook
    ├── data/
    │   ├── categories.ts     # 6 categories + lucide icon names
    │   └── products.ts       # 13 products + image URLs + price helper
    └── components/
        ├── Header.tsx        # sticky header + mobile menu + announcement bar
        ├── Hero.tsx          # full-bleed hero with trust badges
        ├── CategoryStrip.tsx # shop-by-trade tiles (filter the grid)
        ├── ProductGrid.tsx   # filter chips + responsive product grid
        ├── ProductCard.tsx   # card with badges, rating, add-to-cart
        ├── QuickViewModal.tsx# full details + specs + qty selector
        ├── CartDrawer.tsx    # slide-in cart + free-shipping progress
        ├── FeaturedBanner.tsx# deal-of-the-week combo kit
        ├── ValueProps.tsx    # why-Abzar value columns
        ├── Newsletter.tsx    # email capture with success state
        ├── Footer.tsx        # link columns + social + payment row
        └── Rating.tsx        # star rating helper
```

## Notes

- All product data, brand names, prices, and reviews are **fictional** and for
  demonstration only.
- Product photography is sourced from public web results and re-hosted on a CDN;
  the URLs live in `src/data/products.ts`. Swap them for your own assets as
  needed.
- The cart, checkout, and newsletter are front-end only — wiring them to a real
  backend (Shopify, Stripe, an email service) is the natural next step.

## Pushing to the remote

This repository is prepared for the `AmirGhanbarian/abzar` remote. After
installing dependencies locally, commit and push:

```bash
git init -b main
git add .
git commit -m "Initial commit: Abzar power-tools storefront"
git remote add origin https://github.com/AmirGhanbarian/abzar.git
git push -u origin main
```

GitHub will prompt for a Personal Access Token (scope: `repo`) at push time.
