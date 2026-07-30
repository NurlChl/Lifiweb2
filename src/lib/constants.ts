export const SITE = {
  name: 'Lifi Studio',
  tagline: 'Digital Product Studio',
  description: 'We design and ship digital products for teams that move fast. Purpose-built for the AI era.',
  url: 'https://lifistudio.id',
  locale: 'id_ID',
  author: 'Lifi Studio',
  ogImage: '/og-default.png',
} as const

export const NAV_LINKS = [
  { label: 'Product', href: '/services', description: 'What we build' },
  { label: 'Resources', href: '/resources', description: 'Guides, updates, community' },
  { label: 'Company', href: '/about', description: 'Who we are' },
  { label: 'Pricing', href: '/pricing', description: 'Simple, transparent pricing' },
] as const

export const FOOTER_LINKS = {
  Product: [
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Pricing', href: '/pricing' },
  ],
  Resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Updates', href: '/updates' },
    { label: 'Guides', href: '/guides' },
    { label: 'Community', href: '/community' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
    { label: 'Brand', href: '/brand' },
  ],
  Legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
} as const

export const SOCIAL_LINKS = [
  { label: 'Twitter', href: 'https://twitter.com/lifistudio', icon: 'TwitterLogo' },
  { label: 'GitHub', href: 'https://github.com/lifistudio', icon: 'GithubLogo' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/lifistudio', icon: 'LinkedinLogo' },
  { label: 'Discord', href: 'https://discord.gg/lifistudio', icon: 'DiscordLogo' },
] as const

export const FEATURES = [
  {
    id: 'autonomous',
    title: 'Make digital delivery autonomous',
    description: 'AI agents handle routine tasks — code generation, QA, deployment — so your team ships faster with fewer handoffs.',
    icon: 'Robot',
    visual: 'autonomous',
    accent: 'accent',
  },
  {
    id: 'vision',
    title: 'Define the product vision',
    description: 'Strategy workshops, discovery sprints, and living roadmaps align stakeholders before a single line of code.',
    icon: 'Compass',
    visual: 'vision',
    accent: 'green',
  },
  {
    id: 'execution',
    title: 'Move projects forward across teams and AI',
    description: 'Unified workspace for designers, engineers, and AI agents. Real-time sync, zero context switching.',
    icon: 'TrendUp',
    visual: 'execution',
    accent: 'amber',
  },
  {
    id: 'review',
    title: 'Review work and agent output',
    description: 'Built-in code review, design review, and AI output validation. Quality gates that don\'t slow you down.',
    icon: 'GitPullRequest',
    visual: 'review',
    accent: 'red',
  },
] as const

export const SERVICES = [
  {
    name: 'Web Applications',
    slug: 'web-applications',
    shortDescription: 'Full-stack web apps with Next.js, React, and modern backends.',
    fullDescription: 'We build production-grade web applications using Next.js, React, TypeScript, and cloud-native architectures. From SaaS platforms to internal tools.',
    icon: 'Monitor',
    features: ['Next.js / React / TypeScript', 'PostgreSQL / MongoDB / Redis', 'Vercel / AWS / GCP deployment', 'CI/CD with GitHub Actions', 'Authentication & authorization', 'Real-time features (WebSockets)'],
    price: 'Starting at $15,000',
    popular: true,
    order: 1,
  },
  {
    name: 'Mobile Applications',
    slug: 'mobile-applications',
    shortDescription: 'Native and cross-platform mobile apps for iOS and Android.',
    fullDescription: 'React Native and Expo for cross-platform, or Swift/Kotlin for native. We handle the full lifecycle from design to App Store submission.',
    icon: 'DeviceMobile',
    features: ['React Native / Expo', 'iOS / Android native', 'App Store / Play Store deployment', 'Push notifications', 'Offline-first architecture', 'In-app purchases'],
    price: 'Starting at $20,000',
    popular: false,
    order: 2,
  },
  {
    name: 'AI Integration',
    slug: 'ai-integration',
    shortDescription: 'LLM-powered features, agents, and workflows embedded in your product.',
    fullDescription: 'We integrate LLMs (OpenAI, Anthropic, local models) into your product — chat, agents, RAG, function calling, eval pipelines, and guardrails.',
    icon: 'Brain',
    features: ['RAG / Vector databases', 'Agent frameworks (LangGraph, Vercel AI)', 'Prompt engineering & evals', 'Fine-tuning & distillation', 'Guardrails & safety', 'Cost optimization'],
    price: 'Starting at $10,000',
    popular: false,
    order: 3,
  },
  {
    name: 'Design Systems',
    slug: 'design-systems',
    shortDescription: 'Scalable design systems with React component libraries.',
    fullDescription: 'We create design systems that scale — tokens, components, documentation, and governance. Built with Storybook, Tailwind, and React.',
    icon: 'Palette',
    features: ['Design tokens (Figma + code)', 'React component library', 'Storybook documentation', 'Theme & dark mode', 'Accessibility (WCAG AA)', 'Versioning & releases'],
    price: 'Starting at $12,000',
    popular: false,
    order: 4,
  },
] as const

export const TESTIMONIALS = [
  {
    quote: 'Lifi Studio shipped our MVP in 6 weeks what would have taken us 6 months. Their AI-assisted workflow is genuinely different.',
    author: 'Sarah Chen',
    role: 'CTO',
    company: 'Vercel',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
  },
  {
    quote: 'The design system they built saves our team hours every week. Components just work, documentation is actually useful.',
    author: 'Marcus Johnson',
    role: 'Design Lead',
    company: 'Linear',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=marcus',
  },
  {
    quote: 'Best agency experience in 10 years. They think like product engineers, not just contractors.',
    author: 'Priya Patel',
    role: 'VP Engineering',
    company: 'Ramp',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
  },
] as const

export const CLIENTS = [
  { name: 'Vercel', logo: 'https://assets.vercel.com/image/upload/v1662130559/front/favicon.ico' },
  { name: 'Linear', logo: 'https://linear.app/favicon.ico' },
  { name: 'Ramp', logo: 'https://ramp.com/favicon.ico' },
  { name: 'Notion', logo: 'https://www.notion.so/images/favicon.ico' },
  { name: 'Cursor', logo: 'https://cursor.com/favicon.ico' },
  { name: 'OpenAI', logo: 'https://openai.com/favicon.ico' },
] as const

export const UPDATES = [
  {
    title: 'New: AI Agent Workflows',
    date: '2025-01-15',
    category: 'Feature',
    description: 'Build multi-step AI agents with built-in eval, guardrails, and human-in-the-loop.',
    slug: 'ai-agent-workflows',
  },
  {
    title: 'New: Design System CLI',
    date: '2025-01-08',
    category: 'Tooling',
    description: 'Generate tokens, components, and Storybook docs from a single config file.',
    slug: 'design-system-cli',
  },
  {
    title: 'Improved: Real-time Collaboration',
    date: '2025-01-02',
    category: 'Improvement',
    description: 'Sub-100ms latency for multiplayer editing. New presence indicators and cursors.',
    slug: 'realtime-collaboration',
  },
  {
    title: 'New: Mobile SDK v2',
    date: '2024-12-20',
    category: 'Release',
    description: 'React Native SDK with Expo Router support, push notifications, and offline sync.',
    slug: 'mobile-sdk-v2',
  },
] as const

export const STATS = [
  { value: '40+', label: 'Products shipped' },
  { value: '95%', label: 'Client retention' },
  { value: '3x', label: 'Faster delivery with AI' },
  { value: '24/7', label: 'Support coverage' },
] as const

export const VALUES = [
  {
    title: 'Ship Fast, Iterate Faster',
    description: 'Velocity compounds. We optimize for learning cycles, not perfect first attempts.',
    icon: 'RocketLaunch',
  },
  {
    title: 'AI-Native by Default',
    description: 'Every workflow we build assumes AI participation. Humans direct, agents execute.',
    icon: 'Brain',
  },
  {
    title: 'Craft Over Commodity',
    description: 'Details differentiate. Animation, micro-interactions, error states — they\'re features, not polish.',
    icon: 'Gem',
  },
  {
    title: 'Radical Transparency',
    description: 'Open process, open pricing, open source when possible. No black boxes.',
    icon: 'Eye',
  },
] as const

export { revealVariants, staggerContainer, staggerItem } from './animations'