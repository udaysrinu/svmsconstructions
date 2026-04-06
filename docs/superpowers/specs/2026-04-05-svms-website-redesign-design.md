# SVMS Constructions Website — Full Spectacle Redesign

## Overview

Complete redesign of the SVMS Constructions & Developers website into an immersive, cinematic, lead-generating experience. Combines dark-to-light narrative arc, 3D Spline hero, liquid glass effects, scroll-triggered storytelling, and AI-generated imagery.

**Priority:** Lead generation first, brand prestige second.
**Content:** Retain all 3 existing projects + company data. Add new cinematic sections.

## Visual Language

| Element         | Value                                           |
| --------------- | ----------------------------------------------- |
| Dark BG         | `#0A0E1A` (hero, awards, footer)                |
| Light BG        | `#FAF8F3` (cream, main content)                 |
| Gold accent     | `#CA8A04` (CTAs, accents, highlights)            |
| Gold shimmer    | `#D4AF37` (particles, shimmers)                  |
| Text on light   | `#0C0A09`                                        |
| Text on dark    | `#FAFAF9`                                        |
| Headings font   | Cinzel 400–700                                   |
| Body font       | Josefin Sans 300–600                             |
| Border radius   | 12–16px (cards), 9999px (pill buttons)           |
| Transitions     | 300–500ms ease-out (Framer Motion)               |
| Glass effect    | `backdrop-blur-xl` + `bg-white/10` or `bg-white/80` |

## Tech Stack

| Tool                          | Purpose                              |
| ----------------------------- | ------------------------------------ |
| React 18 + TypeScript         | Core framework (existing)            |
| Vite + SWC                    | Build tooling (existing)             |
| Tailwind CSS                  | Styling (existing)                   |
| Framer Motion                 | All animations, scroll triggers, page transitions (existing) |
| shadcn/ui                     | Base UI components (existing)        |
| `@splinetool/react-spline`   | 3D hero scene                        |
| `lottie-react`                | Micro-animation icons                |
| Stitch MCP                    | High-fidelity screen design          |
| Nano-Banana MCP               | AI-generated architectural renders   |

## Fonts

```
Cinzel: wght@400;500;600;700
Josefin Sans: wght@300;400;500;600;700
```

Google Fonts import replaces current Playfair Display + Inter.

## Pages & Routes

| Route           | Page                 |
| --------------- | -------------------- |
| `/`             | Homepage             |
| `/project/:id`  | Project Detail Page  |
| `*`             | 404 Page             |

No new routes. Existing routing structure preserved.

## Section-by-Section Design

### S1: Liquid Glass Floating Navbar

- Floats 16px from top, rounded corners, `backdrop-blur-xl`
- Adaptive: white text on dark sections, dark text on light sections (scroll-driven)
- Gold SVMS logo wordmark in Cinzel
- Desktop: horizontal nav links in Josefin Sans + gold "Enquire Now" CTA (subtle pulse on idle)
- Mobile: hamburger opens full-screen overlay with staggered Framer Motion entry
- Sticky — always visible, always one click from conversion

### S2: Hero — 3D Spline Scene (Dark, `#0A0E1A`)

- Full viewport height (`100vh`)
- Center: 3D Spline building model, slowly rotating, gold-tinted ambient light, user can drag to rotate
- Gold particle effects drifting upward (Framer Motion animated divs)
- Typography: "Luxury Living, Redefined" in Cinzel, letter-by-letter reveal with gold shimmer
- Subtitle: "Building Dreams Since 2005" fades in 0.5s delayed
- Two CTAs: "Explore Projects" (gold filled) + "Book a Site Visit" (gold outline), slide-up animation
- Scroll indicator: animated bouncing chevron at bottom
- Mobile fallback: static AI-generated architectural render with parallax depth (no Spline)

### S3: Stats Bar — Dark-to-Light Gradient Bridge

- Background gradient: `#0A0E1A` to `#FAF8F3`
- 4 stats: 19+ Years | 45+ Projects | 12,000+ Families | 6 Cities
- Numbers count up from zero on scroll into view (Framer Motion `useInView`)
- Numbers in Cinzel (large), labels in Josefin Sans (light)
- Gold accent line under each stat
- Staggered entry: 150ms delay between each stat

### S4: Featured Projects — Cinematic Reveal Cards (Light, `#FAF8F3`)

- Section headline: "Our Signature Projects" in Cinzel + thin gold line accent
- 3 project cards, grid layout
- Each card: "curtain lift" clip animation on scroll reveal (image clips upward 0% to 100%)
- Card content: project image (parallax shift), name (Cinzel), location with gold pin icon, specs row (BHK | SqFt | Price), status badge (color-coded + pulse), "View Details" with expanding gold underline on hover
- Cursor spotlight: radial light follows cursor on card hover
- Each card links to `/project/:id`

### S5: Horizontal Scroll Timeline — "Building Dreams Since 2005" (Light BG)

- On scroll entry: page locks vertically, scrolls horizontally
- Timeline chapters: year, milestone text, image/illustration
- Milestones: founding (2005), first project delivered, 1000th family, city expansions, major awards
- Animated SVG gold thread connecting chapters (draws itself as you scroll)
- Progress bar at bottom fills as you scroll
- Mobile: vertical stacked timeline (no horizontal lock)

### S6: Why Choose SVMS — Interactive Feature Cards (Light BG)

- 2x2 grid of feature cards
- RERA Registered | On-Time Delivery | Quality Construction | 24/7 Support
- Each card: Lottie micro-animation icon (plays on hover), liquid glass background, soft shadow
- Hover: `translateY(-8px)` + shadow deepens + icon plays
- Staggered scroll-reveal entry

### S7: Chairman's Message — Cinematic Split Screen (Warm gradient BG)

- Left: chairman portrait with parallax depth
- Right: quote in Cinzel italic, oversized gold decorative `"` mark
- Quote reveals line-by-line on scroll (typewriter-style)
- Name + title appear last with gold underline animation

### S8: Awards & Recognition — Floating Badge Grid (Dark, `#0A0E1A`)

- Dark section for visual rhythm
- "Recognized Excellence" headline in Cinzel
- Masonry grid of award badges
- Each badge floats with subtle sine-wave oscillation (2–3px `translateY`)
- Gold glow on hover

### S9: Testimonials — Immersive Carousel (Light, `#FAF8F3`)

- Large quote cards: customer photo, name, project name
- Framer Motion drag-gesture swipeable carousel
- Star ratings animate in gold sequentially
- Auto-advance every 6s, pause on hover/touch
- Dot + arrow navigation

### S10: Enquiry Form — Conversion Closer (Light, cream + blueprint pattern)

- Split layout: left = compelling headline + gold-accented illustration, right = form
- Fields: Name, Phone, Email, Project (dropdown), Message
- Gold bottom-border on each field, animates to full width on focus
- Submit button: gold filled, morphs to spinner on submit, then checkmark on success
- Trust signals row below form: RERA badge, "100% Spam Free", phone number
- Sonner toast on success (gold-accented)
- Low-opacity architectural blueprint pattern in background

### S11: Footer (Dark, `#0A0E1A`)

- Bookends site with the hero's dark theme
- SVMS gold logo
- 3 columns: Quick Links | Projects | Contact Info
- RERA numbers displayed prominently
- Social icons with gold hover
- Gold gradient line at top edge
- Copyright bar at bottom

### S12: Floating Elements (Global)

- WhatsApp button: bottom-right, green, pulse animation, "Chat with us" tooltip on hover
- Scroll-to-top: appears after hero, gold circle + chevron
- Mobile sticky CTA bar: fixed bottom bar with "Call Now" + "Enquire" (appears after hero)

## Project Detail Page (`/project/:id`)

- Hero: full-bleed project image + dark overlay + project name in Cinzel
- Image gallery: horizontal scrollable strip + lightbox with Framer Motion transitions
- Tabbed content: Pricing | Amenities | Floor Plans | Location — gold sliding underline indicator
- Amenities grid: Lottie animated icons
- Google Map: custom gold-tinted style
- Desktop: sticky enquiry sidebar that follows scroll
- Mobile: sticky bottom CTA bar replaces sidebar

## Route Transitions

- `AnimatePresence` wrapping routes in App.tsx
- Page exit: fade + slight slide out
- Page enter: fade + slight slide in
- Loading state: gold shimmer skeleton screens

## Accessibility & Performance

- `prefers-reduced-motion`: disable all scroll-triggered animations, parallax, horizontal scroll lock, and particle effects. Show static equivalents.
- Spline 3D: lazy-loaded, shows gold shimmer skeleton until ready. Mobile gets static fallback.
- All images: lazy-loaded with blur placeholder
- Touch targets: minimum 44x44px
- Color contrast: 4.5:1 minimum on all text
- Focus states: visible gold ring on all interactive elements
- `alt` text on all meaningful images
- `aria-label` on icon-only buttons

## Content Data

All 3 projects retained from `src/data/projects.ts`:
- SVMS Grand Residency (Madhurawada) — Under Construction
- SVMS Serenity Heights (MVP Colony) — Ready to Move
- SVMS Lakewood Villas (Rushikonda) — Upcoming

Company data, chairman info, testimonials, awards — all retained from existing components.

New data needed:
- Timeline milestones (7–10 entries from 2005 to present) — can be hardcoded
- Lottie animation JSON files for feature icons and amenity icons
