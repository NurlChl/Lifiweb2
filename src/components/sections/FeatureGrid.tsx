'use client'

import { motion } from 'motion/react'
import { FEATURES } from '@/lib/constants'
import { revealVariants, staggerContainer, staggerItem } from '@/lib/animations'
import { cn } from '@/lib/utils'
import { Robot, Compass, ArrowRight, TrendUp, GitPullRequest, Brain } from '@phosphor-icons/react/ssr'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'

const getIcon = (name: string) => {
  switch (name) {
    case 'Robot': return <Robot size={24} weight="light" />
    case 'Compass': return <Compass size={24} weight="light" />
    case 'ArrowRight': return <ArrowRight size={24} weight="light" />
    case 'TrendUp': return <TrendUp size={24} weight="light" />
    case 'GitPullRequest': return <GitPullRequest size={24} weight="light" />
    case 'Brain': return <Brain size={24} weight="light" />
    default: return <Robot size={24} weight="light" />
  }
}

export function FeatureGrid() {
  return (
    <section className="section" aria-labelledby="features-heading">
      <div className="container-main">
        <motion.div
          className="mx-auto max-w-3xl text-center mb-20"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Badge variant="accent" className="mb-6 inline-block" size="md">
            A new species of digital studio
          </Badge>
          <h2 id="features-heading" className="text-display font-medium text-fg-primary mb-6">
            Purpose-built for designing and shipping digital products. Designed for the AI era.
          </h2>
          <p className="text-large text-fg-secondary max-w-2xl mx-auto leading-relaxed">
            We don&apos;t just build software. We build the systems, workflows, and culture that let teams ship at AI speed.
          </p>
        </motion.div>

        <motion.div
          className="grid-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {FEATURES.map((feature, i) => (
            <motion.article
              key={feature.id}
              variants={staggerItem}
              className="group"
            >
              <Card
                variant="default"
                padding="lg"
                hover
                className="h-full flex flex-col"
              >
                <div className={cn('mb-6 inline-flex size-12 items-center justify-center rounded-lg', `bg-${feature.accent}-subtle text-${feature.accent}`)}>
                  {getIcon(feature.icon)}
                </div>
                <h3 className="text-h3 font-medium text-fg-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-regular text-fg-tertiary mb-6 flex-1">
                  {feature.description}
                </p>
              </Card>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}