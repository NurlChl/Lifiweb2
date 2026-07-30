'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight, Sparkle, Code, Palette, Gear, Eye } from '@phosphor-icons/react'

const floatingIcons = [
  { Icon: Code, x: '15%', y: '20%', delay: 0, size: 20 },
  { Icon: Palette, x: '80%', y: '30%', delay: 0.3, size: 18 },
  { Icon: Gear, x: '20%', y: '70%', delay: 0.6, size: 16 },
  { Icon: Eye, x: '75%', y: '75%', delay: 0.9, size: 22 },
]

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-28 sm:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/8 via-transparent to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, x, y, delay, size }) => (
        <motion.div
          key={x}
          className="absolute hidden lg:block text-accent/15"
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
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-line-tertiary bg-bg-level-1 px-4 py-1.5 text-mini text-fg-tertiary mb-8 hover:border-accent/30 hover:text-accent transition-colors duration-300"
            >
              <Sparkle size={14} weight="fill" className="text-accent" />
              Digital Solutions Agency
            </motion.div>

            <h1 className="text-hero text-fg-primary text-balance">
              Build products that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">
                stand out.
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-large text-fg-secondary max-w-[480px] leading-relaxed"
            >
              From concept to launch — we design and develop premium digital experiences
              that drive real business growth.
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
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-regular font-medium text-white hover:bg-accent-hover transition-colors duration-200"
                >
                  Start a Project
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.span>
              </Link>
              <Link href="/services">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full border border-line-primary px-6 py-3 text-regular font-medium text-fg-secondary hover:text-fg-primary hover:bg-bg-level-2 transition-all duration-200"
                >
                  View Services
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="aspect-[4/3] rounded-2xl border border-line-tertiary bg-bg-level-1/80 overflow-hidden backdrop-blur-sm"
            >
              <div className="h-full p-4 sm:p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 pb-3 border-b border-line-tertiary">
                  <div className="size-2.5 rounded-full bg-red-500/50" />
                  <div className="size-2.5 rounded-full bg-yellow-500/50" />
                  <div className="size-2.5 rounded-full bg-green-500/50" />
                  <div className="ml-4 flex-1 h-7 rounded-md bg-bg-level-2 flex items-center px-3">
                    <span className="text-tiny text-fg-quaternary">lifistudio.id</span>
                  </div>
                </div>
                <div className="flex-1 grid grid-cols-5 gap-3">
                  <div className="col-span-2 space-y-3">
                    <div className="h-4 w-3/4 rounded bg-bg-level-2 skeleton-shimmer" />
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      className="h-10 w-full rounded-lg bg-accent/10 border border-accent/20 flex items-center px-3"
                    >
                      <span className="text-tiny text-accent font-medium">Project Alpha</span>
                    </motion.div>
                    <div className="h-10 w-full rounded-lg bg-bg-level-2 skeleton-shimmer" />
                    <div className="h-10 w-full rounded-lg bg-bg-level-2 skeleton-shimmer" />
                  </div>
                  <div className="col-span-3 space-y-3">
                    <div className="h-4 w-1/2 rounded bg-bg-level-2 skeleton-shimmer" />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                      className="h-24 rounded-lg bg-bg-level-2 p-4 space-y-2"
                    >
                      <div className="h-3 w-3/4 rounded bg-bg-level-3" />
                      <div className="h-3 w-1/2 rounded bg-bg-level-3" />
                      <div className="h-3 w-2/3 rounded bg-bg-level-3" />
                    </motion.div>
                    <div className="flex gap-2">
                      <div className="h-7 w-16 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-tiny text-accent">UI</span>
                      </div>
                      <div className="h-7 w-20 rounded-full bg-bg-level-2 flex items-center justify-center">
                        <span className="text-tiny text-fg-quaternary">Next.js</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Glow */}
            <div className="absolute -inset-x-8 -inset-y-4 -z-10 bg-accent/5 rounded-[32px] blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
