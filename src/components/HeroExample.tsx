'use client'

import { Hero } from './Hero'
import { heroConfigs } from '@/data/hero'

// Example of how to use the Hero component for different pages
export function HeroExample() {
  return (
    <div>
      {/* Home Page Hero */}
      <Hero {...heroConfigs.home} />
      
      {/* Products Page Hero */}
      <Hero {...heroConfigs.products} />
      
      {/* Manufacturing Page Hero */}
      <Hero {...heroConfigs.manufacturing} />
      
      {/* About Page Hero */}
      <Hero {...heroConfigs.about} />
      
      {/* Custom Hero Example */}
      <Hero 
        headline="Custom Hero Section"
        subheadline="This demonstrates how flexible and reusable the Hero component is."
        primaryCTA={{
          text: "Get Started",
          href: "#contact"
        }}
        secondaryCTA={{
          text: "Learn More",
          href: "#about"
        }}
        alignment="left"
      />
    </div>
  )
}
