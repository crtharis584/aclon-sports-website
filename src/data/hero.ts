export interface HeroConfig {
  headline: string
  subheadline: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  background?: {
    type: 'image' | 'video'
    src: string
    alt?: string
  }
  alignment?: 'left' | 'center'
}

export const heroConfigs: Record<string, HeroConfig> = {
  home: {
    headline: "Redefining Performance Wear",
    subheadline: "Premium Activewear, Gym Wear & Sports Uniforms built for athletes who demand excellence. Experience unmatched comfort, style, and performance.",
    primaryCTA: {
      text: "Explore Collection",
      href: "#products"
    },
    secondaryCTA: {
      text: "Get Quote",
      href: "/quote"
    },
    background: {
      type: "image",
      src: "/images/hero-bg.jpg",
      alt: "Athlete in premium sportswear"
    },
    alignment: "center"
  },
  products: {
    headline: "Premium Sportswear Collection",
    subheadline: "Discover our range of high-performance activewear, sports uniforms, and gym wear designed for serious athletes.",
    primaryCTA: {
      text: "Shop Now",
      href: "#products"
    },
    secondaryCTA: {
      text: "Get a Quote",
      href: "#quote"
    },
    background: {
      type: "image",
      src: "/images/products-hero.jpg",
      alt: "Premium sportswear collection"
    },
    alignment: "center"
  },
  manufacturing: {
    headline: "Crafted with Precision",
    subheadline: "Discover our state-of-the-art manufacturing process and quality standards that set us apart in the industry.",
    primaryCTA: {
      text: "Learn More",
      href: "#manufacturing"
    },
    secondaryCTA: {
      text: "Contact Us",
      href: "#contact"
    },
    background: {
      type: "image",
      src: "/images/manufacturing-hero.jpg",
      alt: "Manufacturing facility"
    },
    alignment: "left"
  },
  contact: {
    headline: "Get in Touch",
    subheadline: "Ready to elevate your sportswear game? We're here to help you find the perfect solution for your needs.",
    primaryCTA: {
      text: "Send Message",
      href: "#contact-form"
    },
    secondaryCTA: {
      text: "Call Us",
      href: "tel:+15551234567"
    },
    background: {
      type: "image",
      src: "/images/contact-hero.jpg",
      alt: "Customer service team"
    },
    alignment: "center"
  },
  about: {
    headline: "Our Story",
    subheadline: "From humble beginnings to industry leaders, learn about our journey and the passion that drives us to create exceptional sportswear.",
    primaryCTA: {
      text: "Read More",
      href: "#story"
    },
    background: {
      type: "image",
      src: "/images/about-hero.jpg",
      alt: "Team working on sportswear"
    },
    alignment: "center"
  }
}
