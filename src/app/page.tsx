import { Hero } from '@/components/sections/Hero'
import { SocialProof } from '@/components/sections/SocialProof'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import { FeatureSplit } from '@/components/sections/FeatureSplit'
import { Changelog } from '@/components/sections/Changelog'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <FeatureGrid />
      <FeatureSplit />
      <Changelog />
      <Testimonials />
      <CTA />
    </>
  )
}