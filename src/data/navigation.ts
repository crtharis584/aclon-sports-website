export interface NavigationItem {
  name: string
  href: string
  description?: string
  children?: NavigationItem[]
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export const navigation: NavigationItem[] = [
  {
    name: 'Home',
    href: '/',
    description: 'Welcome to Aclon Sports'
  },
  {
    name: 'About',
    href: '/about',
    description: 'Learn about our journey and mission'
  },
  {
    name: 'Products',
    href: '/products',
    description: 'Browse our premium sportswear collection',
    children: [
      { name: 'Activewear', href: '/products/activewear' },
      { name: 'Sports Uniforms', href: '/products/sports-uniforms' },
      { name: 'Gym Wear', href: '/products/gym-wear' }
    ]
  },
  {
    name: 'Manufacturing',
    href: '/manufacturing',
    description: 'Discover our manufacturing process and quality standards'
  },
  {
    name: 'Contact',
    href: '/contact',
    description: 'Get in touch with our team'
  },
  {
    name: 'Quote',
    href: '/quote',
    description: 'Request a custom quote for your needs'
  }
]

export const siteConfig: SiteConfig = {
  name: 'Aclon Sports',
  description: 'Premium sportswear designed for athletes who demand excellence',
  url: 'https://aclon-sports.com',
  ogImage: '/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/aclonsports',
    github: 'https://github.com/aclonsports'
  }
}

export const footerNavigation = {
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Story', href: '#story' },
    { name: 'Careers', href: '#careers' },
    { name: 'Press', href: '#press' }
  ],
  products: [
    { name: 'Activewear', href: '/products/activewear' },
    { name: 'Sports Uniforms', href: '/products/sports-uniforms' },
    { name: 'Gym Wear', href: '/products/gym-wear' },
    { name: 'Custom Orders', href: '/quote' }
  ],
  support: [
    { name: 'Contact Us', href: '#contact' },
    { name: 'Request Quote', href: '/quote' },
    { name: 'Help Center', href: '#help' },
    { name: 'Size Guide', href: '#size-guide' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'Shipping Info', href: '#shipping' }
  ]
}
