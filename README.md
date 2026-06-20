# SAARMedTec — Website

Marketing site for **SAARMedTec**, Iraq's healthcare-infrastructure partner since 1984.
A single-page React app (8 sections/pages) with client-side navigation, built with Vite.

## Quick start

```bash
npm install      # once
npm run dev      # dev server with hot reload  → http://localhost:4173
npm run build    # production build             → dist/
npm run preview  # preview the production build → http://localhost:4173
```

Node 18+ required. Deploy the contents of `dist/` to any static host
(Netlify, Vercel, GitHub Pages, S3, nginx…).

## Routing & URLs

Pages use **react-router** with clean URLs — each is shareable and deep-linkable,
browser back/forward works, and the document `<title>` updates per page:

| URL | Page | | URL | Page |
|-----|------|-|-----|------|
| `/` | Home | | `/service` | Service Center |
| `/about` | About | | `/support` | Customer Support |
| `/expertise` | Expertise | | `/careers` | Careers |
| `/turnkey` | Turnkey | | `/contact` | Contact |

The id↔path↔title map lives in `src/routes.js` (the single place to edit URLs).
Components still call `setPage('contact')` — in `App.jsx` that's wired to
`navigate(...)`, so page code didn't need to change.

**Deploy note (SPA fallback):** because routes are client-side, the host must
serve `index.html` for unknown paths or a refresh on `/about` 404s.
`public/_redirects` covers Netlify; for Vercel add a rewrite to `/index.html`,
for nginx use `try_files $uri /index.html;`.

## Images

Photography is handled by `src/components/Figure.jsx` — a fixed-aspect media box.
Until real photos exist it shows an on-brand **placeholder** (gradient + icon +
label), so layouts look intentional. To use a real image, pass `src`:

```jsx
<Figure src="/assets/img/hero.jpg" alt="…" ratio="16 / 6" eager />
```

Drop files into `public/assets/img/` and reference them as `/assets/img/<file>`.

The site is intentionally **typography-led** (light on photography). The one
placeholdered photo spot is the **About → Our Story** portrait. `Figure`
(`src/components/Figure.jsx`) is the image box used there; pass `src` to drop in a
real photo. It also supports `tone="deep" | "light" | "red"` and a `fill` mode.

Two earlier components remain in `src/components/` but are **not used on the
homepage** (kept available): `HeroVisual.jsx` (animated SVG "bridge" motif) and
`BrandChevron.jsx` (twin-peak "M" mark).

## Brand & design direction

Tuned to feel like **Siemens Healthineers × IBM × Apple** — minimal, confident,
typography-led, high whitespace, structured not decorative. Tokens in
`src/index.css` `:root`:
- **Vivid brand red** `--red #e2231a`, used **sparingly** as an accent (eyebrows,
  the primary CTA, small markers) — not for containers, backgrounds, or glows.
- **Charcoal headings** `--head` (applied to `.display`), white surfaces, calm
  dark `--deep` "authority" sections (`.deep-surface`, one faint light wash only).
- Motion is restrained: subtle scroll reveals + hover micro-interactions only.

**Logo:** `Logo.jsx` renders the brand logo from `public/assets/`. Add the files:
- `public/assets/logo-saarmedtec.png` — color logo (transparent PNG) for light
  backgrounds (nav).
- `public/assets/logo-saarmedtec-light.png` — white version for the dark footer.

Until those exist, `Logo` falls back to a clean mark + "SAARMedTec" wordmark, so
nothing looks broken.

## Project structure

```
index.html              App entry (loads fonts + /src/main.jsx)
vite.config.js          Vite + React plugin config (dev/preview on port 4173)
public/
  _redirects            SPA fallback for static hosts (Netlify format)
  assets/
    logo-moh.png        Iraqi Ministry of Health logo  (Coverage section)
    logo-kimadia.png    KIMADIA logo                   (Coverage section)
    img/                (add real photos here → /assets/img/<file>)
src/
  main.jsx              React root render (wraps App in BrowserRouter)
  App.jsx               Routes + navigation helper + per-page title/transition
  routes.js             Page id ↔ URL path ↔ title map
  index.css             Design system: CSS variables in :root + base styles
  data.js               All site copy/content (edit text here)
  hooks.js              useReveal (scroll reveals) + useCounter (count-up stats)
  components/
    Icon.jsx            Inline SVG icon set
    Figure.jsx          Image box w/ placeholder; tone deep|light|red, fill mode
    HeroVisual.jsx      Animated SVG "bridge" motif (available; unused on home)
    BrandChevron.jsx    Twin-peak "M" brand mark (available; unused on home)
    primitives.jsx      Reveal, Eyebrow, Counter, Button
    SaarLogomark.jsx    Generated cross mark (logo fallback only)
    Logo.jsx            Real brand logo (img; falls back to mark+wordmark)
    Section.jsx         Section wrapper (supports .deep-surface className)
    Nav.jsx             Sticky header + mobile menu
    Footer.jsx          Footer
  pages/
    PageHead.jsx        Shared inner-page header
    forms.jsx           inputStyle, FieldLabel, FormFields
    HomePage.jsx        Hero (typographic), StatStrip, WhoWeAre, Partners,
                        Standards, Capabilities, Achievements, Testimonial,
                        Coverage, SupplyChain, Perspectives, HomeCTA
    AboutPage.jsx       Vision/Mission, Story, Values, Leadership, Credentials
    ServicesPage.jsx    14 clinical specialties
    TurnkeyPage.jsx     Turnkey process + landmark installations
    ServiceCenterPage.jsx
    CustomerSupportPage.jsx   FAQ + service request form
    CareersPage.jsx     Open roles + application form
    ContactPage.jsx     Offices + contact form
```

## Homepage section order

`Hero → StatStrip → WhoWeAre → Partners → Standards → Capabilities →
Achievements → Testimonial → Coverage → SupplyChain (SAAR360) → Perspectives →
HomeCTA`

Covers the required structure (Hero, Who We Are, Global Partners, Capabilities,
Achievements, Coverage & Clients, Supply Chain, CTA) plus restrained credibility
sections (stats, standards, testimonial, perspectives). Design cues: Siemens/GE
(industry tone), IBM/Accenture (structure + authority), Stripe (spacing), Apple
(motion restraint) — minimal, typography-led, controlled red.

## Editing guide

- **Content** (specialties, partners, milestones, clients, nav): `src/data.js`.
  Page-specific copy (FAQs, jobs, team, offices, the Expertise care-pathway)
  lives in the relevant `src/pages/*.jsx` file as plain `const` arrays.
- **Placeholders to replace before launch** (all in `src/data.js`):
  - `TESTIMONIALS` — illustrative quote with a role-only, non-named attribution.
    Swap in **real, attributed** client quotes (with permission).
  - `PERSPECTIVES` — the three article cards link nowhere yet; wire them to real
    articles/a CMS, or remove the section.
- **Dark-section depth:** the `.deep-surface` class in `src/index.css` adds the
  subtle gradient. Apply it (with `backgroundColor: var(--deep)`) to any new dark
  block; don't set the `background` shorthand or it wipes the gradient.
- **Colours / spacing / fonts:** the CSS variables in `src/index.css` `:root`
  (e.g. `--red`, `--deep`, `--ink`, `--maxw`).
- **Navigation:** `NAV_ITEMS` in `src/data.js` + the `pages` map in `src/App.jsx`.
- **Logos / images:** drop files in `public/assets/` and reference as
  `/assets/<file>` (the leading slash is required).

## Notes

- Navigation is in-app state (no URL routing). If you later need shareable URLs
  per page, add `react-router-dom` and map routes to the same page components.
- Fonts (IBM Plex Sans / Mono / Serif) load from Google Fonts via `index.html`.
- The contact / support / careers forms are front-end only — wire them to a
  backend or form service (Formspree, a serverless function, etc.) before launch.
