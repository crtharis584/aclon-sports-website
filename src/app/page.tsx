import { Hero } from '@/components/Hero'
import { Header } from '@/components/Header'
import { FeaturedProducts } from '@/components/FeaturedProducts'
import { ManufacturingShowcase } from '@/components/ManufacturingShowcase'
import { ContactSection } from '@/components/ContactSection'
import { AboutSection } from '@/components/AboutSection'
import { QuoteSection } from '@/components/QuoteSection'
import { Footer } from '@/components/Footer'
import { SEO } from '@/components/SEO'
import { LazyComponent } from '@/components/PerformanceOptimizer'
import { heroConfigs } from '@/data/hero'

export default function Home() {
  return (
    <>
      <SEO
        title="Premium Sportswear Collection"
        description="Discover high-performance sportswear designed for athletes. Shop premium activewear, sports uniforms, and gym wear with exceptional quality, innovative design, and unmatched comfort."
        keywords={[
          'sportswear',
          'athletic wear',
          'sports clothing',
          'activewear',
          'sports uniforms',
          'gym wear',
          'fitness apparel',
          'performance wear',
          'athletic clothing',
          'sports gear'
        ]}
        canonical="https://aclon-sports.com"
        ogImage="/images/home-og-image.jpg"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Aclon Sports - Premium Sportswear Collection',
          description: 'Discover high-performance sportswear designed for athletes. Shop premium activewear, sports uniforms, and gym wear.',
          url: 'https://aclon-sports.com',
          isPartOf: {
            '@type': 'WebSite',
            name: 'Aclon Sports',
            url: 'https://aclon-sports.com'
          },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://aclon-sports.com'
              }
            ]
          }
        }}
      />
      
      <main className="min-h-screen pt-16">
        {/* Header with enhanced accessibility */}
        <Header 
          showQuoteCTA={true}
          transparent={false}
          sticky={true}
        />
        
        {/* Hero Section - Critical above the fold */}
        <section aria-label="Hero banner">
          <Hero {...heroConfigs.home} />
        </section>
        
        {/* Featured Products - Lazy loaded for performance */}
        <LazyComponent
          fallback={
            <section className="py-16 bg-bg-secondary">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-text-primary mb-4">
                    Featured Products
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="bg-bg-primary rounded-lg p-6 animate-pulse">
                        <div className="bg-bg-tertiary h-48 rounded-lg mb-4"></div>
                        <div className="h-4 bg-bg-tertiary rounded mb-2"></div>
                        <div className="h-3 bg-bg-tertiary rounded w-2/3"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          }
        >
          <section aria-label="Featured products">
            <FeaturedProducts />
          </section>
        </LazyComponent>
        
        {/* Manufacturing Showcase - Lazy loaded */}
        <LazyComponent
          fallback={
            <section className="py-16 bg-bg-primary">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-text-primary mb-4">
                    Manufacturing Excellence
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="bg-bg-secondary rounded-lg p-6 animate-pulse">
                        <div className="bg-bg-tertiary h-32 rounded-lg mb-4"></div>
                        <div className="h-4 bg-bg-tertiary rounded mb-2"></div>
                        <div className="h-3 bg-bg-tertiary rounded w-3/4"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          }
        >
          <section aria-label="Manufacturing capabilities">
            <ManufacturingShowcase 
              title="Manufacturing Excellence"
              subtitle="Discover our state-of-the-art manufacturing capabilities and premium materials that ensure the highest quality in every product."
              showCategoryFilter={true}
              showViewAllButton={true}
              gridCols={{ sm: 1, md: 2, lg: 3, xl: 3 }}
            />
          </section>
        </LazyComponent>
        
        {/* Quote Section - Lazy loaded */}
        <LazyComponent
          fallback={
            <section className="py-16 bg-primary-500">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-white">
                  <h2 className="text-3xl font-bold mb-4">Request a Quote</h2>
                  <div className="bg-white/10 rounded-lg p-8 animate-pulse">
                    <div className="h-4 bg-white/20 rounded mb-4"></div>
                    <div className="h-4 bg-white/20 rounded mb-4 w-3/4 mx-auto"></div>
                    <div className="h-12 bg-white/20 rounded w-48 mx-auto"></div>
                  </div>
                </div>
              </div>
            </section>
          }
        >
          <section aria-label="Request a quote">
            <QuoteSection 
              title="Request a Quote"
              subtitle="Get competitive pricing for your sports apparel and team uniform needs. Fill out the form below and we'll provide you with a custom quote within 24 hours."
              submitEmail="quotes@aclonsports.com"
            />
          </section>
        </LazyComponent>
        
        {/* Contact Section - Lazy loaded */}
        <LazyComponent
          fallback={
            <section className="py-16 bg-bg-secondary">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-text-primary mb-4">Contact Us</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                    <div className="bg-bg-primary rounded-lg p-6 animate-pulse">
                      <div className="h-4 bg-bg-tertiary rounded mb-4"></div>
                      <div className="h-4 bg-bg-tertiary rounded mb-4 w-3/4"></div>
                      <div className="h-12 bg-bg-tertiary rounded w-32"></div>
                    </div>
                    <div className="bg-bg-primary rounded-lg p-6 animate-pulse">
                      <div className="h-4 bg-bg-tertiary rounded mb-4"></div>
                      <div className="h-4 bg-bg-tertiary rounded mb-4 w-2/3"></div>
                      <div className="h-4 bg-bg-tertiary rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          }
        >
          <section aria-label="Contact information">
            <ContactSection 
              title="Contact Us"
              subtitle="We're here to help. Reach out with questions, requests, or feedback about our premium sportswear solutions."
              contactInfo={{
                email: "contact@aclonsports.com",
                phone: "+1 (555) 123-4567",
                address: "123 Sports Avenue, Athletic District, NY 10001",
                socialMedia: {
                  facebook: "https://facebook.com/aclonsports",
                  twitter: "https://twitter.com/aclonsports",
                  instagram: "https://instagram.com/aclonsports",
                  linkedin: "https://linkedin.com/company/aclonsports"
                }
              }}
            />
          </section>
        </LazyComponent>
        
        {/* About Section - Lazy loaded */}
        <LazyComponent
          fallback={
            <section className="py-16 bg-bg-primary">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-text-primary mb-4">About Us</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                    <div className="bg-bg-secondary rounded-lg p-6 animate-pulse">
                      <div className="bg-bg-tertiary h-64 rounded-lg mb-4"></div>
                      <div className="h-4 bg-bg-tertiary rounded mb-2"></div>
                      <div className="h-3 bg-bg-tertiary rounded mb-2"></div>
                      <div className="h-3 bg-bg-tertiary rounded w-3/4"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-4 bg-bg-secondary rounded"></div>
                      <div className="h-4 bg-bg-secondary rounded w-5/6"></div>
                      <div className="h-4 bg-bg-secondary rounded w-4/5"></div>
                      <div className="h-4 bg-bg-secondary rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          }
        >
          <section aria-label="About our company">
            <AboutSection />
          </section>
        </LazyComponent>
        
        {/* Footer */}
        <Footer 
          showNewsletter={true}
          showSocialLinks={true}
          showCompanyInfo={true}
        />
      </main>
    </>
  )
}
