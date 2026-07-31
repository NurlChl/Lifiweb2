'use client'

import { motion } from 'motion/react'
import { PageContainer } from '@/components/layout/PageContainer'
import { Section } from '@/components/layout/Section'
import { revealVariants } from '@/lib/animations'

export default function CookiesPage() {
  return (
    <PageContainer>
      <Section size="xl" background="level-1">
        <div className="container-main max-w-3xl">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
            <h1 className="text-display font-medium text-fg-primary mb-4">Cookie Policy</h1>
            <p className="text-small text-fg-quaternary mb-12">Last updated: January 1, 2025</p>

            <div className="prose-invert">
              <h2>1. What Are Cookies</h2>
              <p>Small text files stored by your browser. We use only essential cookies required for the site to function.</p>

              <h2>2. Cookies We Use</h2>
              <p><strong>Session cookie:</strong> keeps you logged in during a visit (expires on browser close).<br />
              <strong>CSRF token:</strong> prevents cross-site request forgery (expires on browser close).<br />
              <strong>Rate limiter:</strong> prevents abuse (expires after 1 hour).</p>

              <h2>3. No Tracking</h2>
              <p>We do not use analytics cookies, advertising cookies, or third-party tracking scripts.</p>

              <h2>4. Managing Cookies</h2>
              <p>Disable cookies in your browser settings. The site may not function properly without essential cookies.</p>

              <h2>5. Updates</h2>
              <p>This policy may be updated. Check this page for the latest version.</p>
            </div>
          </motion.div>
        </div>
      </Section>
    </PageContainer>
  )
}