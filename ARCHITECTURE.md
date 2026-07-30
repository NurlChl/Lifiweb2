# Lifi Studio — Architecture (Linear.app exact match)

> Next.js 16 App Router, React 19, TypeScript, Tailwind v4, motion/react. Dark-only, server-first, minimal deps.

---

## 1. Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Next.js (App Router) | 16.x (Turbopack) |
| Runtime | React | 19.x (RC) |
| Language | TypeScript | 5.x strict |
| Styling | Tailwind CSS | 4.x (Oxide) |
| Animation | motion/react | 12.x |
| Icons | @phosphor-icons/react | 2.x (Light weight) |
| Font | Inter Variable | next/font/google |
| DB | MongoDB (Mongoose) | 8.x |
| Auth | NextAuth.js | 5.x (beta) |
| Images | Cloudinary | 2.x |
| Validation | Zod | 3.x |
| Package Mgr | pnpm | 9.x |

---

## 2. Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, providers
│   ├── page.tsx            # Homepage (Linear hero + sections)
│   ├── globals.css         # Design tokens + Tailwind v4 @theme
│   ├── services/
│   │   └── page.tsx        # Services (Linear pricing-style)
│   ├── about/
│   │   └── page.tsx        # About (Linear values-style)
│   ├── contact/
│   │   ├── page.tsx        # Contact page
│   │   └── ContactForm.tsx # Client form component
│   ├── blog/
│   │   ├── page.tsx        # Blog index (Linear changelog-style)
│   │   └── [slug]/
│   │       └── page.tsx    # Blog detail
│   ├── updates/
│   │   └── page.tsx        # Updates / changelog
│   ├── admin/
│   │   ├── layout.tsx      # Admin layout + auth guard
│   │   ├── login/page.tsx  # Login page
│   │   ├── dashboard/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   ├── new/page.tsx
│   │   │   └── [id]/page.tsx
│   │   └── services/
│   │       ├── page.tsx
│   │       ├── new/page.tsx
│   │       └── [id]/page.tsx
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts
│   │   ├── blog/route.ts
│   │   ├── blog/[id]/route.ts
│   │   ├── services/route.ts
│   │   ├── services/[id]/route.ts
│   │   ├── contact/route.ts
│   │   ├── upload/route.ts
│   │   └── subscribe/route.ts
│   ├── not-found.tsx
│   ├── error.tsx
│   └── loading.tsx
├── components/
│   ├── ui/                 # Primitive components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   ├── Label.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Separator.tsx
│   │   ├── Accordion.tsx
│   │   ├── Avatar.tsx
│   │   └── index.ts
│   ├── layout/
│   │   ├── Header.tsx      # Floating nav island
│   │   ├── Footer.tsx      # Linear-style footer
│   │   ├── PageContainer.tsx
│   │   └── Section.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── SocialProof.tsx
│   │   ├── FeatureGrid.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── FeatureSplit.tsx
│   │   ├── Changelog.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   └── StatsBar.tsx
│   ├── blog/
│   │   ├── BlogCard.tsx
│   │   ├── BlogGrid.tsx
│   │   └── BlogHero.tsx
│   └── admin/
│       ├── AdminLayout.tsx
│       ├── AdminSidebar.tsx
│       ├── BlogEditor.tsx
│       ├── ServiceEditor.tsx
│       └── UploadZone.tsx
├── lib/
│   ├── constants.ts        # NAV_LINKS, SITE config
│   ├── utils.ts            # cn(), formatDate(), slugify()
│   ├── mongodb.ts          # Mongoose connection singleton
│   ├── auth.ts             # NextAuth config
│   ├── cloudinary.ts       # Upload helper
│   └── animations.ts       # motion variants, transitions
├── models/
│   ├── BlogPost.ts
│   ├── Service.ts
│   ├── User.ts
│   └── Subscriber.ts
├── hooks/
│   ├── useScrollReveal.ts
│   ├── useReducedMotion.ts
│   └── useMobile.ts
├── types/
│   └── index.ts
└── middleware.ts           # Auth protection for /admin
```

---

## 3. Data Models

### BlogPost
```typescript
{
  title: string
  slug: string (unique, index)
  excerpt: string
  content: string (HTML/markdown)
  coverImage: string (Cloudinary URL)
  tags: string[]
  author: string
  published: boolean
  publishedAt: Date
  seoTitle: string
  seoDescription: string
  createdAt: Date
  updatedAt: Date
}
```

### Service
```typescript
{
  name: string
  slug: string (unique)
  shortDescription: string
  fullDescription: string
  icon: string (Phosphor icon name)
  features: string[]
  price: string (e.g., "Starting at $5,000")
  popular: boolean
  order: number
  createdAt: Date
  updatedAt: Date
}
```

### User (Admin)
```typescript
{
  name: string
  email: string (unique)
  password: string (hashed)
  role: 'admin' | 'editor'
  image: string
  createdAt: Date
}
```

### Subscriber
```typescript
{
  email: string (unique, index)
  source: 'hero' | 'footer' | 'blog' | 'contact'
  verified: boolean
  createdAt: Date
}
```

---

## 4. Key Patterns

### 4.1 Server Components First
```tsx
// app/page.tsx — Server Component
export default async function HomePage() {
  const [services, testimonials, updates] = await Promise.all([
    getServices({ popular: true }),
    getTestimonials({ limit: 3 }),
    getUpdates({ limit: 4 }),
  ])
  
  return (
    <main>
      <Hero />
      <SocialProof />
      <FeatureGrid features={features} />
      <FeatureSplit {...} />
      <Changelog updates={updates} />
      <Testimonials items={testimonials} />
      <CTA />
    </main>
  )
}
```

### 4.2 Client Components Only for Interactivity
```tsx
// components/layout/Header.tsx — 'use client'
'use client'
export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  // ... motion, dropdown, mobile menu
}
```

### 4.3 Motion Variants (Centralized)
```tsx
// lib/animations.ts
export const reveal = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: { 
    opacity: 1, y: 0, filter: 'blur(0)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}

export const stagger = { visible: { transition: { staggerChildren: 0.08 } } }

export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: { y: -8, scale: 1.01, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }
}
```

### 4.4 Reduced Motion
```tsx
// hooks/useReducedMotion.ts
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}
```

---

## 5. API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/blog` | List published posts (paginated) |
| GET | `/api/blog/:id` | Get single post |
| POST | `/api/blog` | Create post (admin) |
| PATCH | `/api/blog/:id` | Update post (admin) |
| DELETE | `/api/blog/:id` | Delete post (admin) |
| GET | `/api/services` | List services |
| POST | `/api/services` | Create service (admin) |
| POST | `/api/contact` | Submit contact form |
| POST | `/api/upload` | Upload image (Cloudinary) |
| POST | `/api/subscribe` | Newsletter subscribe |
| POST | `/api/auth/[...nextauth]` | NextAuth handler |

---

## 6. Middleware

```typescript
// middleware.ts
export { auth as middleware } from '@/lib/auth'

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*']
}
```

---

## 7. Environment Variables

```env
# Database
MONGODB_URI=mongodb+srv://...

# Auth
AUTH_SECRET=...
AUTH_GITHUB_ID=...
AUTH_GITHUB_SECRET=...
AUTH_GOOGLE_ID=...
AUTH_GOOGLE_SECRET=...

# Cloudinary
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

# Email (Resend)
RESEND_API_KEY=...
CONTACT_EMAIL=hello@lifistudio.id

# App
NEXT_PUBLIC_SITE_URL=https://lifistudio.id
```

---

## 8. Build & Deploy

```bash
# Dev
pnpm dev

# Build
pnpm build

# Lint
pnpm lint

# Type check
pnpm tsc --noEmit

# Deploy (Vercel)
vercel --prod
```

---

## 9. Performance Targets (Linear parity)

| Metric | Target |
|--------|--------|
| LCP | < 1.5s |
| CLS | < 0.05 |
| INP | < 100ms |
| Bundle (JS) | < 120KB gzipped |
| Lighthouse | 95+ all categories |

---

## 10. Ponytail Rules Applied

| Decision | Rung | Reason |
|----------|------|--------|
| No UI lib (Radix, shadcn) | 5 | Phosphor + motion + Tailwind = 0 deps needed |
| Server Components default | 3 | Native Next.js feature |
| CSS variables for tokens | 4 | Native CSS, no JS config |
| Inter Variable via next/font | 3 | Native platform feature |
| motion/react only for animation | 5 | Already installed, no GSAP/Framer needed |
| Zod for validation | 5 | Already installed |
| Mongoose for MongoDB | 5 | Already installed |
| NextAuth for auth | 5 | Already installed |
| Cloudinary for images | 5 | Already installed |
| Single repo, no monorepo | 1 | YAGNI |

---

## 11. File Conventions

| Pattern | Convention |
|---------|------------|
| Component files | PascalCase.tsx |
| Utility files | camelCase.ts |
| Page files | page.tsx (lowercase folders) |
| API routes | route.ts |
| Types | types/index.ts + inline for local |
| Constants | SCREAMING_SNAKE_CASE in constants.ts |
| CSS classes | Tailwind only, no CSS modules |

---

## 12. Not Included (YAGNI)

- ❌ Theme toggle (dark-only)
- ❌ Internationalization (en/ID later)
- ❌ Search (Algolia later)
- ❌ Comments (Discord/Giscus later)
- ❌ Analytics (Vercel Analytics auto)
- ❌ Sitemap generation (next-sitemap later)
- ❌ RSS feed (later)
- ❌ Webhooks (later)
- ❌ Multi-language content (later)