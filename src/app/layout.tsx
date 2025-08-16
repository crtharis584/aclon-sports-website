import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import ServiceWorkerRegistration from './sw-register'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://aclon-sports.com'),
  title: {
    default: 'Aclon Sports - Premium Sportswear Collection',
    template: '%s | Aclon Sports'
  },
  description: 'Discover high-performance sportswear designed for athletes. Premium quality, innovative design, and unmatched comfort for your active lifestyle. Shop activewear, sports uniforms, and gym wear.',
  keywords: [
    'sportswear',
    'athletic wear', 
    'sports clothing',
    'performance wear',
    'fitness apparel',
    'activewear',
    'sports uniforms',
    'gym wear',
    'athletic clothing',
    'sports gear',
    'fitness clothing',
    'workout clothes',
    'running gear',
    'basketball uniforms',
    'soccer kits',
    'volleyball uniforms',
    'baseball jerseys',
    'football uniforms'
  ],
  authors: [{ name: 'Aclon Sports', url: 'https://aclon-sports.com' }],
  creator: 'Aclon Sports',
  publisher: 'Aclon Sports',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://aclon-sports.com',
    languages: {
      'en-US': 'https://aclon-sports.com',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aclon-sports.com',
    siteName: 'Aclon Sports',
    title: 'Aclon Sports - Premium Sportswear Collection',
    description: 'Discover high-performance sportswear designed for athletes. Premium quality, innovative design, and unmatched comfort for your active lifestyle.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aclon Sports - Premium Sportswear Collection',
      },
      {
        url: '/images/og-image-square.jpg',
        width: 600,
        height: 600,
        alt: 'Aclon Sports Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aclonsports',
    creator: '@aclonsports',
    title: 'Aclon Sports - Premium Sportswear Collection',
    description: 'Discover high-performance sportswear designed for athletes. Premium quality, innovative design, and unmatched comfort for your active lifestyle.',
    images: ['/images/twitter-image.jpg'],
  },
  other: {
    'theme-color': '#FF0000',
    'color-scheme': 'light dark',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Aclon Sports',
    'application-name': 'Aclon Sports',
    'msapplication-TileColor': '#FF0000',
    'msapplication-config': '/browserconfig.xml',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FF0000' },
    { media: '(prefers-color-scheme: dark)', color: '#FF0000' },
  ],
}

// JSON-LD structured data for the organization
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aclon Sports',
  url: 'https://aclon-sports.com',
  logo: 'https://aclon-sports.com/images/logo.png',
  description: 'Premium sportswear designed for athletes who demand excellence',
  foundingDate: '2020',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Sports Avenue, Athletic District',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10001',
    addressCountry: 'US'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'customer service',
    email: 'contact@aclonsports.com',
    availableLanguage: 'English'
  },
  sameAs: [
    'https://facebook.com/aclonsports',
    'https://twitter.com/aclonsports',
    'https://instagram.com/aclonsports',
    'https://linkedin.com/company/aclonsports'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Sportswear Collection',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Activewear Collection',
          url: 'https://aclon-sports.com/products/activewear'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Sports Uniforms',
          url: 'https://aclon-sports.com/products/sports-uniforms'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Gym Wear',
          url: 'https://aclon-sports.com/products/gym-wear'
        }
      }
    ]
  }
}

// JSON-LD structured data for the website
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Aclon Sports',
  url: 'https://aclon-sports.com',
  description: 'Premium sportswear designed for athletes who demand excellence',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://aclon-sports.com/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Performance optimizations */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="date=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <ServiceWorkerRegistration />
      </body>
    </html>
  )
}
