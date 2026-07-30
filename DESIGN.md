# LifiWeb2 — Design System v1.0

> Inspired by **Linear.app** design language. Premium dark-mode company profile & services website for **Lifi Studio**.
>
> **Design Read:** SaaS company profile for B2B/service buyers, Linear-style minimalist language, leaning toward Inter + restrained motion + dark-tech elegance.

---

## 1. Design Tokens

### 1.1 Color Palette

| Token | HEX | Usage |
|-------|-----|-------|
| `--bg-primary` | `#08090A` | Main page background |
| `--bg-level-1` | `#0D0E10` | Card/section background |
| `--bg-level-2` | `#191A1B` | Elevated surface (dropdowns, modals) |
| `--bg-level-3` | `#282828` | Hover states, active inputs |
| `--fg-primary` | `#F7F8F8` | Primary text, headings |
| `--fg-secondary` | `#D0D6E0` | Secondary text, navigation links |
| `--fg-tertiary` | `#8A8F98` | Tertiary text, muted labels |
| `--fg-quaternary` | `#62666D` | Placeholder, disabled |
| `--accent` | `#7170FF` | Primary accent (buttons, links, highlights) |
| `--accent-hover` | `#8786FF` | Accent hover state |
| `--accent-subtle` | `#7170FF1A` | Accent background (10% opacity) |
| `--line-primary` | `#37393A` | Default borders |
| `--line-secondary` | `#202122` | Subtle dividers |
| `--line-tertiary` | `#18191A` | Very subtle separators |
| `--border-translucent` | `rgba(255,255,255,0.05)` | Glass borders |
| `--white` | `#FFFFFF` | Pure white (CTAs, overlays) |

### 1.2 Typography

| Property | Value | Usage |
|----------|-------|-------|
| Font Family | `'Inter Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` | Body + headings |
| Mono | `'JetBrains Mono', 'Fira Code', monospace` | Code |
| H1 (Hero) | `64px / 64px, weight 510, letter-spacing -1.408px` | Page hero |
| H2 (Display) | `48px / 52px, weight 500, letter-spacing -0.96px` | Section headings |
| H3 (Title) | `32px / 38px, weight 500, letter-spacing -0.64px` | Sub-section headings |
| Large | `1.0625rem / 1.6` | Featured body |
| Regular | `0.9375rem / 1.5, letter-spacing -0.011em` | Default body |
| Small | `0.875rem / 1.5` | Nav, secondary |
| Mini | `0.8125rem / 1.5, letter-spacing -0.01em` | Labels, metadata |
| Micro | `0.75rem / 1.4` | Captions, footnotes |
| Tiny | `0.625rem / 1.5, letter-spacing -0.015em` | Badges, tags |

### 1.3 Spacing

Based on 4px increments. Section spacing: `py-24` (96px) minimum.

| Token | Value |
|-------|-------|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-4` | 16px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-20` | 80px |
| `--space-24` | 96px |
| `--space-32` | 128px |

### 1.4 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Badges, tags |
| `--radius-md` | 8px | Inputs, buttons |
| `--radius-lg` | 12px | Cards, modals |
| `--radius-xl` | 16px | Large containers |
| `--radius-full` | 9999px | Pills, avatars |

---

## 2. Components

### 2.1 Navigation

- **Style:** Fixed floating island, detached from viewport
- **Position:** `mt-4` from top, centered
- **Background:** `rgba(8,9,10,0.8)` with `backdrop-blur-xl`
- **Border:** `rgba(255,255,255,0.05)` hairline
- **Radius:** 16px (`--radius-xl`)
- **Logo:** Left, white wordmark
- **Links:** Center, `--fg-secondary`, hover → `--fg-primary`
- **CTA:** Right, `--accent` pill button
- **Mobile:** Hamburger → overlay

### 2.2 Buttons

**Primary:** Accent bg, white text, pill shape, hover lift(-1px), active scale(0.98)
**Ghost:** Transparent, `--fg-secondary`, 1px `--line-primary` border
**Button-in-Button:** Full pill, arrow icon in circular wrapper, diagonal translate on hover

### 2.3 Cards

`--bg-level-1` background, `--line-tertiary` border, 12px radius. Hover → `--bg-level-2` + `--line-primary` border. No shadows — depth via elevation only.

### 2.4 Inputs

`--bg-level-1`, `--line-primary` border, 8px radius. Focus: accent border + glow ring.

---

## 3. Layout Patterns

- **Page shell:** `max-w-[1400px] mx-auto px-6 md:px-10`
- **Hero:** Asymmetric 50/50 split (text left, mockup right)
- **Sections:** Alternating split, bento grid, staggered. BANNED: 3-equal-card rows.
- **Grid:** 12-column CSS Grid, `gap-6`

---

## 4. Motion

- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (default)
- **Scroll reveal:** opacity 0 → 1, translateY 24px → 0, blur 2px → 0, 800ms
- **Animate only** `transform` & `opacity`
- **Respect** `prefers-reduced-motion`

---

## 5. Assets

| Type | Source |
|------|--------|
| Icons | `@phosphor-icons/react` (Light weight, stroke 1.5) |
| Font | Inter Variable (`next/font`) |
| Images | Product mockups + `picsum.photos/seed/{context}` |
| No stock photos | Dark, moody, high-contrast only |

---

## 6. Dark Mode

Dark-only. No toggle. All tokens optimized for dark. WCAG AA compliant.
