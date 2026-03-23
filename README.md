# Final Year Project Mentorship (Landing Page)

A modern, clean, single-page website to showcase **final year project mentorship** offerings and convert visitors into leads via **email contact**.

## Tech stack

- **React** + **TypeScript**
- **Vite**
- **Tailwind CSS** (v4 via PostCSS)

## Features

- Sticky navbar + smooth scrolling navigation
- Hero section with gradient + code-style visual
- Project domains cards
- Demo projects grid with:
  - Project description + tech stack badges
  - **View Demo**: opens an image gallery modal (screenshots)
  - **View Details**: opens an explanation modal (summary + tech stack + explanation)
- How it works / Why choose us / Testimonials
- Final CTA + footer contact (email)

## Run locally

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Then open `http://localhost:5173/`.

### Node version note

Vite may warn if your Node version is slightly behind. Recommended:
- Node **20.19+** or **22.12+**

## Where to edit content

- **Page sections + project cards**: `src/pages/HomePage.tsx`
- **Reusable UI components**: `src/components/`
  - `Navbar.tsx`, `Button.tsx`, `Cards.tsx`, `Footer.tsx`, `Modal.tsx`

## Demo screenshots (View Demo)

All demo screenshots are served from `public/demo/...` so they load reliably in the browser:

- `public/demo/ai-chatbot/`
- `public/demo/anpr/`
- `public/demo/doctor-assistant/`
- `public/demo/resume-builder/`

If you want to swap images, replace files in these folders (keep the same names) or update the paths in `src/pages/HomePage.tsx`.

## Contact email

The site uses:

- `mailto:sriven425551@gmail.com`

You can change it in `src/pages/HomePage.tsx` (search for `contactEmail`) and in `src/components/Footer.tsx`.
