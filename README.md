# SVMS Constructions

> Marketing website for SVMS Constructions — a construction company. Single-page site with a project portfolio, chairman's note, awards, testimonials, and an enquiry form.

Access : https://svms-constructions.vercel.app/ 

## What it does

A premium-feel marketing site for a construction firm: hero with word-by-word blur-to-sharp reveal, animated stats bar, featured-projects grid that links into per-project detail pages (`/project/:id`), a timeline, "why us" section, chairman's message, awards, testimonials, an enquiry form (front-end validation, no backend wired), a sticky WhatsApp CTA button, and a footer.

Initially scaffolded by Lovable (`vite_react_shadcn_ts` template with `lovable-tagger` in dev deps) and then heavily customised — the original Lovable stub README is replaced by this one.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 18.3 + TypeScript |
| Bundler | Vite 5 (`@vitejs/plugin-react-swc`) |
| Styling | Tailwind CSS 3.4 + `tailwindcss-animate` + custom theme tokens |
| Components | shadcn/ui on Radix primitives |
| Routing | `react-router-dom` v6 (`/`, `/project/:id`, `*`) |
| Motion | `framer-motion` (page transitions, scroll reveals, word-by-word hero) |
| State | `@tanstack/react-query` (provider in place, no fetches yet) |
| Forms | `react-hook-form` + `zod` + `@hookform/resolvers` |
| Notifications | `sonner` + shadcn `toaster` |
| Extras | `@splinetool/react-spline`, `lottie-react`, `embla-carousel`, `recharts`, `vaul` |
| Tests | Vitest + Testing Library + Playwright |
| Package manager | Bun (`bun.lock` + `bun.lockb` checked in alongside `package-lock.json`) |

## Notable techniques

- **Word-by-word hero reveal** (`src/components/HeroSection.tsx:7-30`) — `WordReveal` splits headline copy on spaces and animates each word with `framer-motion`, applying `opacity 0→1`, `filter blur(8px)→blur(0)`, and a 14px y-translate, with a 0.12s stagger and a custom `[0.25, 0.46, 0.45, 0.94]` cubic-bezier ease. Cheap to render, looks expensive.
- **AnimatePresence-based page transitions** (`src/App.tsx:13-25`) — `AnimatedRoutes` reads `useLocation()` and keys the `<Routes>` block on `pathname` inside `<AnimatePresence mode="wait">`, so each page can declare its own enter/exit animation via `<PageTransition>` and the previous page finishes exiting before the next mounts.
- **Inline SVG noise textures** — sections like the enquiry form embed a tiny gold-tinted plus-pattern SVG as a `data:image/svg+xml` background (`EnquiryForm.tsx:32-33`). No image asset, no extra request, themable by hex.
- **Splash of premium primitives** — Spline 3D runtime, Lottie, and Vaul drawer are all wired in despite this being a marketing site. Reasonable headroom for "wow" moments without restructuring later.

## How to run

```bash
bun install            # or npm install
bun run dev            # vite dev server
bun run build          # production build → dist/
bun run preview        # serve dist/ locally
bun run lint           # eslint
bun run test           # vitest run
```

## What I'd do differently today

- **Wire the enquiry form to a real backend** — currently the form just toasts "thank you" and clears state (`EnquiryForm.tsx:14-22`). For a client site this should hit a serverless function (Vercel/Cloudflare) and forward to email or a CRM, with rate limiting and a hCaptcha-style check.
- **Drop one of the lockfiles.** `bun.lock`, `bun.lockb`, *and* `package-lock.json` are all committed. Pick one (Bun is what the team is using) and delete the rest to stop dependency drift.
- **Lazy-load the heavy bits** — Spline runtime, Lottie, and Recharts pull a lot of JS. They should be `React.lazy` + `Suspense` so the initial paint isn't paying for sections most visitors won't scroll to.
- **Add image optimisation.** Hero/project photos are imported as raw assets; switch to a Vite image plugin (or a CDN) for responsive `srcset` + AVIF/WebP.
