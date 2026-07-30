# Lifi Studio — Design System (Linear.app exact match)

> Pixel-perfect recreation of **Linear.app** design language. Dark-mode company profile & services website for **Lifi Studio**.

---

## 1. Design Tokens (Exact Linear Values)

### 1.1 Color Palette

| Token | HEX | Usage |
|-------|-----|-------|
| `--bg-primary` | `#050505` | Main page background (Linear: true black) |
| `--bg-level-1` | `#0D0D0D` | Card/section background |
| `--bg-level-2` | `#141414` | Elevated surface (dropdowns, modals) |
| `--bg-level-3` | `#1E1E1E` | Hover states, active inputs |
| `--fg-primary` | `#FFFFFF` | Primary text, headings (pure white) |
| `--fg-secondary` | `#A0A0A0` | Secondary text, navigation links |
| `--fg-tertiary` | `#6A6A6A` | Tertiary text, muted labels |
| `--fg-quaternary` | `#4A4A4A` | Placeholder, disabled |
| `--accent` | `#5E6AD2` | Primary accent (Linear purple) |
| `--accent-hover` | `#7A84D9` | Accent hover state |
| `--accent-subtle` | `#5E6AD226` | Accent background (15% opacity) |
| `--line-primary` | `#2A2A2A` | Default borders |
| `--line-secondary` | `#1A1A1A` | Subtle dividers |
| `--line-tertiary` | `#141414` | Very subtle separators |
| `--border-translucent` | `rgba(255,255,255,0.06)` | Glass borders |
| `--white` | `#FFFFFF` | Pure white (CTAs, overlays) |
| `--green` | `#00D47E` | Success states |
| `--red` | `#FF4444` | Error states |
| `--amber` | `#FFAA00` | Warning states |

### 1.2 Typography (Linear uses Inter with specific weights)

| Property | Value | Usage |
|----------|-------|-------|
| Font Family | `'Inter Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` | Body + headings |
| Mono | `'JetBrains Mono', 'Fira Code', monospace` | Code |
| H1 (Hero) | `clamp(48px, 6vw, 72px) / 1.05, weight 500, letter-spacing -0.02em` | Page hero |
| H2 (Display) | `clamp(36px, 4vw, 48px) / 1.1, weight 500, letter-spacing -0.02em` | Section headings |
| H3 (Title) | `24px / 1.3, weight 500, letter-spacing -0.01em` | Sub-section headings |
| Large | `18px / 1.6, weight 400` | Featured body |
| Regular | `15px / 1.6, weight 400, letter-spacing -0.005em` | Default body |
| Small | `13px / 1.5, weight 400` | Nav, secondary |
| Mini | `12px / 1.5, weight 500, letter-spacing 0.02em, text-transform: uppercase` | Labels, metadata |
| Micro | `11px / 1.4, weight 400` | Captions, footnotes |

### 1.3 Spacing (4px base, Linear uses generous spacing)

| Token | Value |
|-------|-------|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-20` | 80px |
| `--space-24` | 96px |
| `--space-32` | 128px |

Section vertical padding: `py-24` (96px) minimum, `py-32` (128px) for major sections.

### 1.4 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 6px | Badges, tags, small inputs |
| `--radius-md` | 8px | Buttons, inputs, cards |
| `--radius-lg` | 12px | Large cards, modals |
| `--radius-xl` | 16px | Major containers, nav |
| `--radius-full` | 9999px | Pills, avatars |

### 1.5 Shadows (Linear uses subtle, layered shadows)

| Token | Value |
|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.3)` |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.4)` |
| `--shadow-lg` | `0 8px 32px rgba(0,0,0,0.5)` |
| `--shadow-xl` | `0 16px 48px rgba(0,0,0,0.6)` |

---

## 2. Components (Linear-exact)

### 2.1 Navigation
- **Style:** Fixed floating island, detached from viewport edges
- **Position:** `top-4` from top, centered horizontally, `max-w-[1400px]`
- **Height:** 56px (desktop), 52px (mobile)
- **Background:** `rgba(5,5,5,0.9)` with `backdrop-blur-xl` (saturate 180%)
- **Border:** `rgba(255,255,255,0.06)` hairline (1px)
- **Radius:** 16px (`--radius-xl`)
- **Logo:** Left, wordmark "Lifi Studio" — "Lifi" weight 600, "Studio" weight 400, color white
- **Links:** Center, `--fg-secondary` (13px), hover → `--fg-primary`, transition 150ms
- **Active link:** `--fg-primary` with subtle underline indicator
- **CTA (right):** Primary pill button, `--accent` bg, white text, 13px, weight 500
- **Mobile:** Hamburger (32px hit area) → full-screen overlay with staggered links

### 2.2 Buttons
- **Primary:** `--accent` bg, white text, pill (radius-full), 13px/500, padding `12px 24px`, hover → `--accent-hover` + `translateY(-1px)`, active → `scale(0.98)`, focus ring `--accent` 3px
- **Secondary (Ghost):** Transparent, `--fg-secondary` text, 1px `--line-primary` border, hover → `--bg-level-1` + `--fg-primary`
- **Text button:** `--fg-secondary` text, hover → `--fg-primary` + underline, 13px
- **Icon button:** 32x32 or 40x40, `--fg-tertiary` icon, hover → `--fg-primary` + `--bg-level-1` bg

### 2.3 Cards
- **Background:** `--bg-level-1`
- **Border:** 1px `--line-primary`
- **Radius:** 12px (`--radius-lg`)
- **Hover:** `--bg-level-2` + `--accent-subtle` border (2px) + `translateY(-4px)` + shadow-lg
- **Transition:** 300ms cubic-bezier(0.16, 1, 0.3, 1)
- **No shadows at rest** — depth via elevation only on hover

### 2.4 Inputs
- **Background:** `--bg-level-1`
- **Border:** 1px `--line-primary`
- **Radius:** 8px (`--radius-md`)
- **Padding:** `14px 16px`
- **Text:** `--fg-primary` 15px
- **Placeholder:** `--fg-quaternary`
- **Focus:** 2px `--accent` border + `--accent-subtle` ring (4px) + `--bg-level-2` bg
- **Error:** `--red` border + `--red` ring
- **Label:** `--fg-secondary` 13px, margin-bottom 6px

### 2.5 Badges
- **Background:** `--accent-subtle` (or semantic color subtle)
- **Text:** `--accent` (or semantic color)
- **Radius:** `--radius-sm` (6px)
- **Padding:** `4px 10px`
- **Font:** Mini (12px, 500, uppercase, tracking-wide)

---

## 3. Layout Patterns

- **Container:** `max-w-[1400px] mx-auto px-6 lg:px-10`
- **Hero:** Asymmetric split — text left (55%), visual right (45%)
- **Sections:** Alternating layouts — split, bento grid, single column
- **Grid:** CSS Grid, 12-column, `gap-6` (24px) default, `gap-8` (32px) for bento
- **Section spacing:** `py-24` (96px) default, `py-32` (128px) for hero/major
- **Content width:** Prose max `720px`, headings max `900px`

---

## 4. Motion (Linear-exact)

- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` — Linear's signature "springy" ease
- **Duration:** 
  - Micro: 150ms (hover, tap)
  - Standard: 300ms (card hover, dropdown)
  - Reveal: 800ms (scroll entrance)
  - Page: 600ms (page transition)
- **Scroll reveal:** 
  - Initial: `opacity: 0, translateY: 24px, filter: blur(4px)`
  - Final: `opacity: 1, translateY: 0, filter: blur(0)`
  - Stagger: 80ms per item
  - Trigger: `top 85%` viewport
- **Animate only:** `transform`, `opacity`, `filter` (no layout thrash)
- **Respect:** `prefers-reduced-motion: reduce` → instant, no blur
- **Layout animations:** `layoutId` for nav active indicator, shared element transitions

---

## 5. Assets

| Type | Source |
|------|--------|
| Icons | `@phosphor-icons/react` — **Light weight**, stroke 1.5, 20px default |
| Font | Inter Variable via `next/font/google` (weight 400, 500, 600) |
| Images | Product mockups (dark, high contrast), `picsum.photos/seed/{context}` for placeholders |
| No stock photos | Dark, moody, high-contrast only |

---

## 6. Dark Mode

**Dark-only.** No toggle. All tokens optimized for dark. WCAG AA compliant (4.5:1 text, 3:1 UI).

---

## 7. Page Structure (Linear homepage mapping)

| Linear Section | Lifi Studio Equivalent |
|----------------|------------------------|
| Hero: "The product development system..." | Hero: "The digital product studio for teams that ship" |
| Social Proof: Logos (Vercel, OpenAI, etc.) | Social Proof: Client logos |
| "A new species of product tool" | "A new species of digital studio" |
| "Make product operations self-driving" | "Make digital delivery autonomous" |
| "Define the product direction" | "Define the product vision" |
| "Move work forward" | "Move projects forward" |
| "Review PRs and agent output" | "Review work & agent output" |
| "Understand progress at scale" | "Understand delivery at scale" |
| Changelog | Updates / Blog |
| Testimonials | Client testimonials |
| CTA: "Built for the future" | CTA: "Built for the future" |
| Footer | Footer |

---

## 8. Content Mapping (Linear → Lifi Studio)

| Linear | Lifi Studio |
|--------|-------------|
| "Linear" | "Lifi Studio" |
| "The product development system for teams and agents" | "The digital product studio for teams that ship" |
| "Purpose-built for planning and building products. Designed for the AI era." | "Purpose-built for designing and shipping digital products. Designed for the AI era." |
| "A new species of product tool" | "A new species of digital studio" |
| "Make product operations self-driving" | "Make digital delivery autonomous" |
| "Define the product direction" | "Define the product vision" |
| "Move work forward across teams and agents" | "Move projects forward across teams and AI" |
| "Review PRs and agent output" | "Review work and agent output" |
| "Understand progress at scale" | "Understand delivery at scale" |
| "Changelog" | "Updates" |
| "Built for the future. Available today." | "Built for the future. Available today." |
| "Get started" | "Start a project" |
| "Contact sales" | "Contact us" |

---

## 9. Iconography Mapping (Phosphor Icons)

| Linear Feature | Phosphor Icon |
|----------------|---------------|
| Graph/Real-time | `ChartLine` / `ChartNetwork` |
| Performance | `Gauge` / `RocketLaunch` |
| Source of truth | `Database` / `Cylinder` |
| AI/Agents | `Robot` / `Sparkle` / `Brain` |
| Direction/Vision | `Compass` / `Target` / `ArrowRight` |
| Move forward | `ArrowRight` / `FastForward` / `TrendingUp` |
| Review/PR | `GitPullRequest` / `Code` / `Diff` |
| Progress/Scale | `BarChart` / `ChartBar` / `Gauge` |
| Changelog | `Clock` / `History` / `GitCommit` |
| Testimonials | `ChatTeardrop` / `Quote` |

---

## 10. Implementation Rules (Ponytail)

1. **Reuse existing** — check `src/components/ui` first
2. **Tailwind v4 `@theme`** — all tokens in CSS, not JS config
3. **Server Components by default** — only `'use client'` for interactivity
4. **motion/react** for animations — `whileInView`, `layoutId`, `AnimatePresence`
5. **Phosphor Light weight** — `weight="light"` default, `fill` for active states
6. **No custom CSS** — Tailwind utilities only, `@layer utilities` for patterns
7. **Inter Variable** — `next/font` with `variable: '--font-inter'`
8. **Semantic HTML** — `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`
9. **Accessibility** — ARIA labels, focus-visible, reduced-motion, color contrast
10. **Delete over add** — remove unused files, consolidate duplicates