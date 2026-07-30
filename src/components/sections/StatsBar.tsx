'use client'

import { motion } from 'motion/react'
import { revealVariants, staggerContainer, staggerItem } from '@/lib/animations'
import { STATS } from '@/lib/constants'

export function StatsBar() {
  return (
    <section className="section border-y border-line-tertiary" aria-label="Statistics">
      <div className="container-main">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center"
            >
              <motion.div
                className="text-hero font-medium text-fg-primary mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {stat.value}
              </motion.div>
              <div className="text-small text-fg-tertiary">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}