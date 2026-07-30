'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight, Code, Palette, Gear, Eye, Sparkle, RocketLaunch, Brain, TrendUp, GitPullRequest, ChartBar } from '@phosphor-icons/react/ssr'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'
import { revealVariants, staggerContainer, staggerItem, cardHoverVariants } from '@/lib/animations'

const floatingIcons = [
  { Icon: Code, color: 'text-accent', delay: 0 },
  { Icon: Palette, color: 'text-green', delay: 1 },
  { Icon: Gear, color: 'text-amber', delay: 2 },
  { Icon: Eye, color: 'text-red', delay: 3 },
  { Icon: Sparkle, color: 'text-accent', delay: 4 },
  { Icon: RocketLaunch, color: 'text-green', delay: 5 },
] as const

const stats = [
  { value: '40+', label: 'Products shipped' },
  { value: '95%', label: 'Client retention' },
  { value: '3x', label: 'Faster delivery with AI' },
  { value: '24/7', label: 'Support coverage' },
] as const

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-14 overflow-hidden" aria-labelledby="hero-heading">
      <div className="container-main px-4 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-7"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 bg-accent-subtle border border-accent/20 rounded-full px-4 py-1.5 mb-8"
            >
              <span className="text-tiny text-accent font-medium">New</span>
              <span className="text-tiny text-fg-secondary">AI Agent Workflows now available</span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={staggerItem}
              className="text-hero text-fg-primary font-medium tracking-[-0.02em] leading-[1.05] mb-6"
            >
              The digital product studio for{' '}
              <span className="relative">
                teams that ship
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-accent/30 -z-10" />
              </span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-large text-fg-tertiary max-w-[600px] mb-10 leading-[1.7]"
            >
              We design and ship digital products — web apps, mobile apps, AI integrations, and design systems.
              Purpose-built for the AI era. Purpose-built for velocity.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center gap-4 mb-16"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 text-regular font-medium text-white hover:bg-accent-hover transition-all duration-200 active:scale-[0.98] shadow-lg shadow-accent/25"
              >
                Start a project
                <ArrowRight size={18} weight="fill" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-transparent text-fg-secondary px-8 py-3 text-regular font-medium hover:bg-bg-level-1 hover:text-fg-primary transition-all duration-150"
              >
                Learn more
              </Link>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center gap-8 text-small text-fg-tertiary"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-display font-medium text-fg-primary">{stat.value}</span>
                  <span className="text-mini text-fg-quaternary">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[4/3] max-w-[600px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-green/10 rounded-2xl blur-3xl" />
              
              <motion.div
                className="relative rounded-2xl border border-line-primary bg-bg-level-1 overflow-hidden shadow-xl"
                whileHover={{ scale: 1.01, boxShadow: '0 24px 48px rgba(0,0,0,0.5)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 px-4 py-3 border-b border-line-tertiary bg-bg-level-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 text-center text-tiny text-fg-quaternary font-mono">
                    lifistudio.id/dashboard
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: 'Active Projects', value: '12', icon: RocketLaunch, color: 'text-accent' },
                      { title: 'Team Members', value: '8', icon: GitPullRequest, color: 'text-green' },
                      { title: 'Velocity', value: '3.2x', icon: TrendUp, color: 'text-amber' },
                      { title: 'AI Tasks', value: '247', icon: Brain, color: 'text-red' },
                    ].map((item, i) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="rounded-xl bg-bg-primary p-4 border border-line-tertiary hover:border-line-primary transition-colors"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <item.icon size={16} weight="light" className={cn(item.color)} />
                          <span className="text-tiny text-fg-quaternary">{item.title}</span>
                        </div>
                        <div className="text-display font-medium text-fg-primary">{item.value}</div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="space-y-3 pt-2">
                    {[
                      { name: 'Dashboard redesign', status: 'In Progress', progress: 65, color: 'accent' },
                      { name: 'Mobile app v2', status: 'Review', progress: 90, color: 'green' },
                      { name: 'AI integration', status: 'Planning', progress: 20, color: 'amber' },
                      { name: 'Design system', status: 'Done', progress: 100, color: 'accent' },
                    ].map((project, i) => (
                      <motion.div
                        key={project.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}
                        className="group"
                      >
                        <div className="flex items-center justify-between text-small mb-1.5">
                          <span className="text-fg-primary font-medium">{project.name}</span>
                          <span className="text-mini text-fg-tertiary">{project.status}</span>
                        </div>
                        <div className="h-1.5 bg-bg-primary rounded-full overflow-hidden">
                          <motion.div
                            className={cn('h-full rounded-full transition-all duration-1000 ease-out', `bg-${project.color}`)}
                            initial={{ width: 0 }}
                            animate={{ width: `${project.progress}%` }}
                            transition={{ delay: 0.8 + i * 0.08, duration: 1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 lg:-right-12 w-72 h-72 bg-accent/10 rounded-2xl blur-3xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {floatingIcons.map(({ Icon, color, delay }, i) => (
            <motion.div
              key={i}
              className={cn('size-12 sm:size-14 rounded-xl bg-bg-level-1/80 backdrop-blur-xl border border-line-tertiary flex items-center justify-center', color)}
              whileHover={{ scale: 1.15, y: -4, borderColor: 'accent' }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, delay: delay * 0.5, repeat: Infinity, ease: 'easeInOut', type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Icon size={20} weight="light" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-green/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />
      </div>
    </section>
  )
}