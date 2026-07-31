'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

interface CounterProps {
  value: string
  className?: string
  duration?: number
  delay?: number
}

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  }
  return num.toString()
}

export function Counter({ value, className, duration = 2000, delay = 0 }: CounterProps) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            animateCounter()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateCounter = () => {
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''))
    const suffix = value.replace(/[0-9.]/g, '')
    const startTime = Date.now() + delay

    const animate = () => {
      const elapsed = Date.now() - startTime
      if (elapsed < 0) {
        requestAnimationFrame(animate)
        return
      }

      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      const currentValue = Math.floor(numericValue * easedProgress)
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(numericValue)
      }
    }

    requestAnimationFrame(animate)
  }

  return (
    <motion.div
      ref={elementRef}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {value.includes('+') ? `${formatNumber(count)}+` : value.includes('%') ? `${count}%` : formatNumber(count)}
    </motion.div>
  )
}