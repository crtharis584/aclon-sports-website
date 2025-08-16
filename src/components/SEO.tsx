'use client'

import { useEffect } from 'react'
import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'product'
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  structuredData?: object
  noindex?: boolean
  nofollow?: boolean
  children?: React.ReactNode
}

export function SEO({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
  children
}: SEOProps) {
  const siteTitle = title ? `${title} | Aclon Sports` : 'Aclon Sports - Premium Sportswear Collection'
  const siteDescription = description || 'Discover high-performance sportswear designed for athletes. Premium quality, innovative design, and unmatched comfort for your active lifestyle.'
  const siteUrl = canonical || 'https://aclon-sports.com'
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `https://aclon-sports.com${ogImage}`

  useEffect(() => {
    // Update document title
    document.title = siteTitle

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', siteDescription)
    }

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', siteUrl)
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', siteTitle)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', siteDescription)
    }

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute('content', siteUrl)
    }

    const ogImageMeta = document.querySelector('meta[property="og:image"]')
    if (ogImageMeta) {
      ogImageMeta.setAttribute('content', fullOgImage)
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute('content', siteTitle)
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescription) {
      twitterDescription.setAttribute('content', siteDescription)
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]')
    if (twitterImage) {
      twitterImage.setAttribute('content', fullOgImage)
    }

    // Update robots meta
    const robotsMeta = document.querySelector('meta[name="robots"]')
    if (robotsMeta) {
      const robotsContent = noindex || nofollow 
        ? `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`
        : 'index, follow'
      robotsMeta.setAttribute('content', robotsContent)
    }
  }, [siteTitle, siteDescription, siteUrl, fullOgImage, noindex, nofollow])

  // Generate structured data for the page
  const generateStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: siteTitle,
      description: siteDescription,
      url: siteUrl,
      isPartOf: {
        '@type': 'WebSite',
        name: 'Aclon Sports',
        url: 'https://aclon-sports.com'
      }
    }

    return structuredData || baseData
  }

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        {keywords.length > 0 && (
          <meta name="keywords" content={keywords.join(', ')} />
        )}
        <link rel="canonical" href={siteUrl} />

        {/* Robots */}
        <meta 
          name="robots" 
          content={noindex || nofollow 
            ? `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`
            : 'index, follow'
          } 
        />

        {/* Open Graph */}
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={fullOgImage} />
        <meta property="og:site_name" content="Aclon Sports" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:site" content="@aclonsports" />
        <meta name="twitter:creator" content="@aclonsports" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={fullOgImage} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData())
          }}
        />

        {/* Additional Meta Tags */}
        <meta name="author" content="Aclon Sports" />
        <meta name="copyright" content="Aclon Sports" />
        <meta name="language" content="en" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Aclon Sports" />
        <meta name="application-name" content="Aclon Sports" />
        <meta name="msapplication-TileColor" content="#FF0000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#FF0000" />
        <meta name="color-scheme" content="light dark" />

        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/images/logo.svg" as="image" type="image/svg+xml" />
      </Head>
      {children}
    </>
  )
}

// Specialized SEO components for different page types
export function ProductSEO({
  product,
  ...props
}: SEOProps & {
  product: {
    name: string
    description: string
    price: string
    currency: string
    image: string
    category: string
    brand: string
    sku: string
    availability: 'InStock' | 'OutOfStock' | 'PreOrder'
  }
}) {
  const productStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: product.brand
    },
    category: product.category,
    sku: product.sku,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.currency,
      availability: `https://schema.org/${product.availability}`,
      seller: {
        '@type': 'Organization',
        name: 'Aclon Sports'
      }
    }
  }

  return (
    <SEO
      title={product.name}
      description={product.description}
      ogType="product"
      structuredData={productStructuredData}
      {...props}
    />
  )
}

export function ArticleSEO({
  article,
  ...props
}: SEOProps & {
  article: {
    title: string
    description: string
    content: string
    author: string
    publishedAt: string
    updatedAt?: string
    image: string
    tags: string[]
  }
}) {
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Aclon Sports',
      logo: {
        '@type': 'ImageObject',
        url: 'https://aclon-sports.com/images/logo.png'
      }
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    keywords: article.tags.join(', ')
  }

  return (
    <SEO
      title={article.title}
      description={article.description}
      keywords={article.tags}
      ogType="article"
      structuredData={articleStructuredData}
      {...props}
    />
  )
}

export function CategorySEO({
  category,
  ...props
}: SEOProps & {
  category: {
    name: string
    description: string
    image: string
    products: Array<{
      name: string
      url: string
      image: string
    }>
  }
}) {
  const categoryStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    description: category.description,
    image: category.image,
    hasPart: category.products.map(product => ({
      '@type': 'Product',
      name: product.name,
      url: product.url,
      image: product.image
    }))
  }

  return (
    <SEO
      title={category.name}
      description={category.description}
      structuredData={categoryStructuredData}
      {...props}
    />
  )
}
