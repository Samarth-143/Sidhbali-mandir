# Shri Sidhbali Baba Dham — Website

A modern, fully responsive, bilingual (Hindi/English) website for the Shri Sidhbali Baba Dham temple, Kotdwar, Uttarakhand.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** — devotional saffron/cream/maroon theme
- **Framer Motion** — micro-animations, scroll reveals, page transitions
- **Custom i18n** — Hindi/English toggle persisted in localStorage (`locales/en.json`, `locales/hi.json`)

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/` — routes (home, location, arti-sangrah, photo-gallery, download, contact-us, category/[slug], post/[slug])
- `components/` — global UI (header, footer, sidebar, lightbox) and page content
- `data/` — posts (aarti/chalisa/bhajan) and site content (history, travel, facilities, attractions)
- `locales/` — bilingual UI dictionaries
