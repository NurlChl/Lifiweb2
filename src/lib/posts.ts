export type PostBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }

export interface Post {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  tags: string[]
  content: PostBlock[]
}

export const POSTS: Post[] = [
  {
    slug: 'shipping-at-ai-speed',
    title: 'Shipping at AI Speed: How We Cut Delivery Time by 60%',
    excerpt: 'Our AI-native workflow — from spec to production — and the tools that make it possible.',
    category: 'Engineering',
    readTime: '8 min',
    date: '2025-01-15',
    tags: ['AI', 'Workflow', 'Delivery'],
    content: [
      { type: 'p', text: 'Agencies that treat AI as a chatbot are missing the point. The real win is restructuring the entire delivery pipeline so humans direct and agents execute. We did this in 2024 and cut average project delivery from 14 weeks to under 6.' },
      { type: 'h2', text: 'Where the time actually went' },
      { type: 'p', text: 'We audited every project from the past two years. The breakdown was consistent: 20% discovery, 15% design, 30% development, 25% QA and fixes, 10% deployment and handoff. The biggest leak was not development — it was context switching between phases.' },
      { type: 'p', text: 'A design handoff to a developer who has never seen the Figma file costs roughly two days of ramp-up. Multiply that across every phase boundary and the waste compounds.' },
      { type: 'h2', text: 'The AI-native pipeline we use now' },
      { type: 'ul', items: [
        'Discovery: AI-synthesized research notes, journey maps, and a living PRD generated from every call transcript',
        'Design: token-first systems where components map 1:1 to code primitives, so agents can implement without guessing',
        'Development: agents handle boilerplate, CRUD, tests, and migrations; humans review diffs and own architecture',
        'QA: autonomous agents run regression suites on every commit, with humans only triaging failures',
        'Deployment: one command ships to staging, screenshots every route, and opens a review link',
      ]},
      { type: 'h2', text: 'The 60% number, explained' },
      { type: 'p', text: 'It is not faster developers. It is fewer handoffs, zero waiting on dependencies, and no rework from miscommunication. The spec IS the source of truth, and both humans and agents read the same file.' },
      { type: 'p', text: 'The tools matter less than the workflow. But for what it is worth: Cursor for coding, Figma with token plugins, GitHub Actions for CI, and Vercel for instant previews. Everything else is discipline.' },
    ],
  },
  {
    slug: 'design-systems-that-scale',
    title: 'Design Systems That Actually Scale',
    excerpt: 'Why most design systems fail, and how we build ones that developers love to use.',
    category: 'Design',
    readTime: '6 min',
    date: '2025-01-08',
    tags: ['Design Systems', 'Tokens', 'React'],
    content: [
      { type: 'p', text: 'Most design systems are documentation projects wearing a component library costume. They start with a figma file, become a storybook nobody visits, and die when the team is too busy to update forty components for a new brand color.' },
      { type: 'h2', text: 'The failure mode' },
      { type: 'p', text: 'Design systems fail when they are owned by design, implemented by engineering, and used by neither. The designers keep designing in a vacuum. The engineers rebuild components because the documented ones do not fit. The system becomes an audit trail, not a tool.' },
      { type: 'h2', text: 'What actually works' },
      { type: 'ul', items: [
        'Tokens first: color, spacing, type, and motion live as code. Figma reads the tokens; the app reads the tokens. No drift by construction.',
        'One source of truth: the component library is the spec. Figma mirrors it, not the other way around.',
        'Designers ship code: designers on our team prototype in React, not just Figma. It removes the handoff tax entirely.',
        'Kill the unused: every quarter, delete components with zero usage in the last 90 days. Size is a feature.',
      ]},
      { type: 'h2', text: 'The payoff' },
      { type: 'p', text: 'A system that scales is boring. New pages take hours, not weeks. Brand updates are a token change. New hires are productive on day two because the primitives are small and consistent. Boring is the goal.' },
    ],
  },
  {
    slug: 'autonomous-qa-agents',
    title: 'Autonomous QA Agents: Beyond Testing',
    excerpt: 'How AI agents are transforming quality assurance from a gate to a continuous process.',
    category: 'AI',
    readTime: '10 min',
    date: '2025-01-02',
    tags: ['AI', 'QA', 'Testing'],
    content: [
      { type: 'p', text: 'Traditional QA is a gate: code freezes, testers click for two weeks, bugs come back, everyone argues about severity. Autonomous QA agents flip this into a continuous loop that runs on every commit.' },
      { type: 'h2', text: 'What agents can actually do today' },
      { type: 'ul', items: [
        'Write and maintain regression suites from user stories, not from code — they test intent, not implementation',
        'Explore edge cases humans skip: empty states, slow networks, weird locales, keyboard-only navigation',
        'Verify fixes in the deployed preview, not just the local branch',
        'Generate accessibility reports with concrete selectors and suggested fixes',
        'Track visual regressions pixel-by-pixel across breakpoints',
      ]},
      { type: 'h2', text: 'What they cannot do (yet)' },
      { type: 'p', text: 'Agents are terrible at judging product feel. Whether an empty state is charming or broken, whether a transition is snappy or sluggish — that is still human judgment. The skill is knowing which layer to trust.' },
      { type: 'h2', text: 'The workflow we ship' },
      { type: 'p', text: 'On every pull request: agents run smoke tests, visual diffs, and accessibility scans in parallel with CI. The human reviewer gets a single summary — what broke, where, and a suggested fix. Time-to-review dropped from hours to minutes, and escaped bugs dropped by 40%.' },
    ],
  },
  {
    slug: 'radical-transparency-pricing',
    title: 'Radical Transparency in Agency Pricing',
    excerpt: 'Why we publish our rates, and how it leads to better client relationships.',
    category: 'Business',
    readTime: '5 min',
    date: '2024-12-28',
    tags: ['Business', 'Pricing', 'Agency'],
    content: [
      { type: 'p', text: 'Agencies treat pricing like a state secret. Rate cards are hidden, proposals are theater, and clients discover the real cost three invoices in. We publish our starting prices on the site. It works better for everyone.' },
      { type: 'h2', text: 'What transparency buys you' },
      { type: 'ul', items: [
        'Better leads: the clients who reach out already know the budget range. No wasted discovery calls on either side.',
        'Trust: when the price on the page matches the invoice, the client stops looking for the catch.',
        'Speed: scope conversations start from a shared baseline instead of a surprise.',
      ]},
      { type: 'h2', text: 'The honest part' },
      { type: 'p', text: 'Published prices are starting points, not quotes. Scope changes pricing, and we say so plainly. The transparency is about the system, not a guarantee that every project costs the same. Clients respect that.' },
      { type: 'p', text: 'Radical transparency is a retention strategy disguised as a pricing strategy. The clients who fit are the ones who stay.' },
    ],
  },
  {
    slug: 'react-server-components-mental-model',
    title: 'React Server Components Mental Model',
    excerpt: 'When to use RSC, client components, and streaming. Mental models over rules.',
    category: 'Engineering',
    readTime: '12 min',
    date: '2024-12-20',
    tags: ['React', 'Next.js', 'Architecture'],
    content: [
      { type: 'p', text: 'Server components caused more confusion than any React feature in years, mostly because everyone reached for rules ("use client at the top" ) instead of a mental model. Here is the model: think about where the data lives, not where the code runs.' },
      { type: 'h2', text: 'The one question' },
      { type: 'p', text: 'Ask: does this component need interactivity, or does it need data? If it renders data from a database or API and does not respond to user input, it belongs on the server. If it has state, event handlers, or browser APIs, it belongs on the client.' },
      { type: 'h2', text: 'The boundary is a decision, not a file' },
      { type: 'p', text: '"use client" is not a component type. It is a cut line: everything below it in the tree becomes a client component. The skill is choosing the cut line so the client bundle stays small and the data fetching stays on the server.' },
      { type: 'ul', items: [
        'Fetch in server components; pass data down as props',
        'Keep interactive leaves small — a button, a form, a carousel',
        'Stream with Suspense so slow queries do not block the fast parts of the page',
        'Shared layout that never changes can stay server-rendered with interactive islands inside',
      ]},
      { type: 'h2', text: 'The practical test' },
      { type: 'p', text: 'Open the network tab. If your HTML carries the data and the JS bundle is tiny, you are doing it right. If the client downloads everything to render a static list, the cut line is in the wrong place.' },
    ],
  },
  {
    slug: 'saas-playbook-0-to-10k',
    title: 'From 0 to 10K MRR: Our SaaS Playbook',
    excerpt: 'Pricing, positioning, onboarding, and retention. The exact framework we use with clients.',
    category: 'Business',
    readTime: '15 min',
    date: '2024-12-12',
    tags: ['SaaS', 'Growth', 'Playbook'],
    content: [
      { type: 'p', text: 'We have helped twelve SaaS companies reach $10K MRR. The paths differ, but the framework is always the same. It fits on one page.' },
      { type: 'h2', text: 'Positioning before product' },
      { type: 'p', text: 'Every company that reached $10K MRR solved one painful problem for one specific persona. The ones that failed tried to be a platform. Narrow beats broad until you have revenue, then you expand.' },
      { type: 'h2', text: 'Pricing is a feature' },
      { type: 'ul', items: [
        'Charge for outcomes, not seats, when you can',
        'Raise prices every time you ship something meaningfully better — your best customers will not leave',
        'Annual plans with a discount convert better than monthly-only, and cash flow improves',
      ]},
      { type: 'h2', text: 'Onboarding is the product' },
      { type: 'p', text: 'The first session decides everything. Get the user to their aha moment in under five minutes. That means ruthless simplification of signup, template presets, and sample data that shows the value immediately.' },
      { type: 'h2', text: 'Retention beats acquisition' },
      { type: 'p', text: 'At $10K MRR, churn of 5% means you need $500 of new MRR every single month just to stand still. The companies that win obsess over the weekly active user, not the signup count. Fix retention first; growth follows.' },
    ],
  },
]

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug)
}
