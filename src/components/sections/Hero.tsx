'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight, Code, Palette, Gear, Eye, Sparkle } from '@phosphor-icons/react'

const floatingIcons = [
  { Icon: Code, x: '12%', y: '18%', delay: 0, size: 18 },
  { Icon: Palette, x: '82%', y: '25%', delay: 0.3, size: 16 },
  { Icon: Gear, x: '18%', y: '72%', delay: 0.6, size: 14 },
  { Icon: Eye, x: '78%', y: '78%', delay: 0.9, size: 20 },
]

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-28 sm:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/6 via-transparent to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, x, y, delay, size }) => (
        <motion.div
          key={x}
          className="absolute hidden lg:block text-accent/10"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { delay, duration: 1, ease: [0.16, 1, 0.3, 1] },
            scale: { delay, duration: 1, ease: [0.16, 1, 0.3, 1] },
            y: { delay, duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <Icon size={size} weight="duotone" />
        </motion.div>
      ))}

      <div className="page-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column — Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-line-tertiary bg-bg-level-1 px-3 py-1 text-mini text-fg-tertiary mb-6 hover:border-accent/30 hover:text-accent transition-colors duration-300"
            >
              <Sparkle size={12} weight="fill" className="text-accent" />
              Full-service digital agency
            </motion.div>

            <h1 className="text-hero text-fg-primary text-balance">
              Build digital products that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#a78bfa]">
                stand out.
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-large text-fg-tertiary max-w-[480px] leading-relaxed"
            >
              From concept to launch — we design and develop premium digital experiences
              that drive real business growth. One team, no middlemen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-regular font-medium text-white hover:bg-accent-hover transition-colors duration-200"
                >
                  Start a Project
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.span>
              </Link>
              <Link href="/services">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full border border-line-primary px-6 py-3 text-regular font-medium text-fg-secondary hover:text-fg-primary hover:bg-bg-level-2 transition-all duration-200"
                >
                  View Services
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column — Product Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="aspect-[4/3] rounded-2xl border border-line-tertiary bg-bg-level-1/80 overflow-hidden backdrop-blur-sm"
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-line-tertiary">
                <div className="flex gap-1.5">
                  <div className="size-2.5 rounded-full bg-red-500/60" />
                  <div className="size-2.5 rounded-full bg-yellow-500/60" />
                  <div className="size-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="ml-3 flex-1 h-7 rounded-md bg-bg-level-2 flex items-center px-3 border border-line-tertiary">
                  <span className="text-tiny text-fg-quaternary">lifistudio.id</span>
                </div>
              </div>

              {/* Mockup content */}
              <div className="flex h-[calc(100%-44px)]">
                {/* Sidebar */}
                <div className="w-[35%] border-r border-line-tertiary p-3 space-y-2">
                  <div className="h-6 w-full rounded bg-bg-level-2 skeleton-shimmer" />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center px-3"
                  >
                    <span className="text-tiny text-accent font-medium">Dashboard</span>
                  </motion.div>
                  <div className="h-8 rounded-lg bg-bg-level-2 flex items-center px-3">
                    <span className="text-tiny text-fg-quaternary">Projects</span>
                  </div>
                  <div className="h-8 rounded-lg bg-bg-level-2 flex items-center px-3">
                    <span className="text-tiny text-fg-quaternary">Blog</span>
                  </div>
                  <div className="h-8 rounded-lg bg-bg-level-2 flex items-center px-3">
                    <span className="text-tiny text-fg-quaternary">Analytics</span>
                  </div>
                </div>

                {/* Main panel */}
                <div className="flex-1 p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-5 w-28 rounded bg-bg-level-2 skeleton-shimmer" />
                    <div className="h-7 w-20 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-tiny text-accent font-medium">+ New</span>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                    className="rounded-lg border border-line-tertiary bg-bg-level-2 p-3 space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <div className="size-2 rounded-full bg-emerald-500" />
                      <span className="text-small text-fg-secondary">Lifi Studio Redesign</span>
                    </div>
                    <p className="text-tiny text-fg-quaternary pl-4">
                      Complete brand overhaul with new design system
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0, duration: 0.4 }}
                    className="rounded-lg border border-line-tertiary bg-bg-level-2 p-3 space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <div className="size-2 rounded-full bg-blue-500" />
                      <span className="text-small text-fg-secondary">E-Commerce Platform</span>
                    </div>
                    <p className="text-tiny text-fg-quaternary pl-4">
                      Next.js storefront with headless CMS
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.4 }}
                    className="rounded-lg border border-line-tertiary bg-bg-level-2 p-3 space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <div className="size-2 rounded-full bg-amber-500" />
                      <span className="text-small text-fg-secondary">AI Automation Suite</span>
                    </div>
                    <p className="text-tiny text-fg-quaternary pl-4">
                      n8n workflows with AI agent integration
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Glow behind mockup */}
            <div className="absolute -inset-x-8 -inset-y-4 -z-10 bg-accent/5 rounded-[32px] blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
