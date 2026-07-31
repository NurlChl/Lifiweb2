'use client'

import { motion, useInView } from 'motion/react'
import { useRef, useState, useEffect } from 'react'
import { revealVariants, staggerContainer, staggerItem } from '@/lib/animations'
import { STATS } from '@/lib/constants'

function Counter({ value: endValue, duration = 2 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    const numericValue = parseFloat(endValue.replace(/[^0-9.]/g, ''))
    const hasPlus = endValue.includes('+')
    const hasPercent = endValue.includes('%')
    const hasX = endValue.includes('x')
    const hasSlash = endValue.includes('/')

    let start = 0
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(start + (numericValue - start) * eased)

      if (hasSlash) {
        setCount(current)
      } else {
        let display = current.toLocaleString()
        if (hasPlus) display += '+'
        if (hasPercent) display += '%'
        if (hasX) display = current + 'x'
        if (hasSlash) display = current + '/7'
        setCount(current)
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [isInView, endValue, duration])

  const numericValue = parseFloat(endValue.replace(/[^0-9.]/g, ''))
  const hasPlus = endValue.includes('+')
  const hasPercent = endValue.includes('%')
  const hasX = endValue.includes('x')
  const hasSlash = endValue.includes('/')

  let displayValue = count.toLocaleString()
  if (hasPlus && !hasSlash) displayValue += '+'
  if (hasPercent) displayValue += '%'
  if (hasX) displayValue = count + 'x'
  if (hasSlash) displayValue = '24/7'

  return (
    <motion.div
      ref={ref}
      className="text-hero font-medium text-fg-primary mb-2"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {displayValue}
    </motion.div>
  )
}

export function StatsBar() {
  return (
    <section className="section-lg border-y border-line-tertiary" aria-label="Statistics">
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
              <Counter value={stat.value} duration={2} />
              <div className="text-small text-fg-tertiary">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}