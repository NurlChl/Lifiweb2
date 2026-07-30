import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Lifi Studio — our mission, values, and approach to digital craftsmanship.',
}

export default function AboutPage() {
  return (
    <div className="page-container pt-36 pb-24">
      <h1 className="text-hero text-fg-primary mb-6">About Us</h1>
      <div className="max-w-[65ch] space-y-6 text-regular text-fg-secondary leading-relaxed">
        <p>
          Lifi Studio is a digital agency specializing in web development, UI/UX design, and automation.
          We help businesses build modern, performant digital products that drive growth.
        </p>
        <p>
          Our approach combines technical excellence with thoughtful design — every project
          is crafted with attention to detail, performance, and user experience.
        </p>
      </div>
    </div>
  )
}
