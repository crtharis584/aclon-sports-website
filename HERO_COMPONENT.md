# Hero Component Documentation

## Overview

The Hero component is a fully responsive, reusable hero section designed for high-end sportswear websites. It supports both image and video backgrounds, theme switching, and is fully accessible.

## Features

### ✅ **Core Features**
- **Full viewport height** (100vh) hero section
- **Image or video background** support with fallbacks
- **Theme-responsive** (black/red & white/red themes)
- **Fully responsive** design (mobile-first)
- **SEO-friendly** with proper semantic HTML
- **Accessible** with ARIA labels and keyboard navigation
- **Smooth animations** using Framer Motion
- **Reusable** with configurable props

### ✅ **Background Options**
- **Image backgrounds** with lazy loading
- **Video backgrounds** with autoplay, muted, and loop
- **Gradient fallbacks** when no background is provided
- **Semi-transparent overlays** for text readability

### ✅ **Content Structure**
- **Main headline** (H1) with SEO keywords
- **Subheadline** (paragraph) for description
- **Primary CTA button** in red (#FF0000)
- **Secondary CTA button** (optional) with outline style
- **Scroll indicator** for navigation

## Usage

### Basic Usage

```tsx
import { Hero } from '@/components/Hero'

export default function HomePage() {
  return (
    <Hero 
      headline="Redefining Performance Wear"
      subheadline="Premium Activewear, Gym Wear & Sports Uniforms built for athletes who demand excellence."
      primaryCTA={{
        text: "Explore Collection",
        href: "#products"
      }}
      secondaryCTA={{
        text: "Our Story",
        href: "#story"
      }}
      background={{
        type: "image",
        src: "/images/hero-bg.jpg",
        alt: "Athlete in premium sportswear"
      }}
      alignment="center"
    />
  )
}
```

### Using Pre-configured Heroes

```tsx
import { Hero } from '@/components/Hero'
import { heroConfigs } from '@/data/hero'

export default function HomePage() {
  return <Hero {...heroConfigs.home} />
}

export default function ProductsPage() {
  return <Hero {...heroConfigs.products} />
}
```

### Video Background

```tsx
<Hero 
  headline="Dynamic Performance"
  subheadline="Watch our athletes in action"
  primaryCTA={{
    text: "Watch Video",
    href: "#video"
  }}
  background={{
    type: "video",
    src: "/videos/hero-video.mp4",
    alt: "Athletes training"
  }}
/>
```

## Props Interface

```tsx
interface HeroProps {
  headline: string                    // Main headline (H1)
  subheadline: string                // Subheadline text
  primaryCTA: {                      // Primary call-to-action
    text: string
    href: string
  }
  secondaryCTA?: {                   // Secondary CTA (optional)
    text: string
    href: string
  }
  background?: {                     // Background configuration
    type: 'image' | 'video'
    src: string
    alt?: string
  }
  alignment?: 'left' | 'center'      // Text alignment
  className?: string                 // Additional CSS classes
}
```

## Pre-configured Heroes

The component comes with pre-configured hero sections for different pages:

### `heroConfigs.home`
- **Headline**: "Redefining Performance Wear"
- **Background**: Athlete in sportswear
- **CTAs**: "Explore Collection" & "Our Story"

### `heroConfigs.products`
- **Headline**: "Premium Sportswear Collection"
- **Background**: Product showcase
- **CTAs**: "Shop Now" & "Get a Quote"

### `heroConfigs.manufacturing`
- **Headline**: "Crafted with Precision"
- **Background**: Manufacturing facility
- **CTAs**: "Learn More" & "Contact Us"

### `heroConfigs.about`
- **Headline**: "Our Story"
- **Background**: Team working
- **CTAs**: "Read More"

## Accessibility Features

- **Semantic HTML**: Proper use of `<h1>`, `<section>`, `<button>`
- **ARIA labels**: Screen reader support for video backgrounds
- **Keyboard navigation**: Full keyboard accessibility
- **Focus management**: Proper focus indicators
- **Color contrast**: Meets WCAG guidelines
- **Alt text**: Descriptive alt text for images

## Performance Optimizations

- **Lazy loading**: Images load efficiently
- **Video optimization**: Autoplay with muted attribute
- **CSS-in-JS**: Minimal runtime overhead
- **Framer Motion**: Optimized animations
- **Responsive images**: Proper sizing for different devices

## Theme Support

The hero section automatically adapts to the current theme:

### Dark Theme (Black/Red)
- Black background with red accents
- White text with subtle shadows
- Dark overlay for readability

### Light Theme (White/Red)
- White background with red accents
- Black text with subtle shadows
- Light overlay for readability

## Customization

### Adding Custom Styles

```tsx
<Hero 
  {...heroConfigs.home}
  className="custom-hero-class"
/>
```

### Custom Animations

The component uses Framer Motion with predefined animations:
- **Container**: Fade-in with staggered children
- **Text**: Slide-up with fade-in
- **Buttons**: Delayed appearance for emphasis
- **Scroll indicator**: Continuous bounce animation

## Best Practices

1. **SEO**: Always include relevant keywords in headlines
2. **Performance**: Use optimized images/videos
3. **Accessibility**: Provide meaningful alt text
4. **Mobile**: Test on various screen sizes
5. **Content**: Keep headlines concise and impactful
6. **CTAs**: Use action-oriented button text

## Browser Support

- **Modern browsers**: Full support
- **Mobile browsers**: Optimized for touch
- **Screen readers**: Full accessibility support
- **JavaScript disabled**: Graceful fallbacks
