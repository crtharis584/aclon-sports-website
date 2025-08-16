import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ManufacturingShowcase } from '@/components/ManufacturingShowcase'
import { ContactSection } from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Manufacturing - Aclon Sports',
  description: 'Discover our state-of-the-art manufacturing capabilities and quality standards that set us apart in the sportswear industry.',
  keywords: 'sportswear manufacturing, quality control, production facilities, custom manufacturing, athletic wear production',
  openGraph: {
    title: 'Manufacturing - Aclon Sports',
    description: 'Discover our manufacturing excellence and quality standards.',
    type: 'website',
  },
}

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-white dark:from-red-900/20 dark:to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Manufacturing Excellence
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Discover our state-of-the-art manufacturing capabilities and premium materials that ensure the highest quality in every product.
          </p>
        </div>
      </section>

      {/* Manufacturing Showcase */}
      <ManufacturingShowcase 
        title="Crafted with Precision"
        subtitle="Every piece in our collection is manufactured using state-of-the-art technology and premium materials to ensure the highest quality and performance."
        showCategoryFilter={true}
        showViewAllButton={false}
        gridCols={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      />

      {/* Manufacturing Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Manufacturing Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From design to delivery, every step of our manufacturing process is carefully controlled to ensure the highest quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Design & Planning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our design team creates detailed specifications and production plans for each product, ensuring optimal performance and fit.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Material Selection</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We carefully select premium materials that meet our strict quality standards for durability, comfort, and performance.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Production</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our skilled craftsmen use advanced manufacturing techniques to create each product with precision and attention to detail.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Control</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every product undergoes rigorous quality testing to ensure it meets our high standards before being shipped to customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Quality Standards
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We maintain the highest quality standards throughout our manufacturing process to ensure every product exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Material Quality */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🧵</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Materials</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We use only the highest quality fabrics and materials that are tested for durability, comfort, and performance.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Moisture-wicking technology</li>
                <li>• UV protection</li>
                <li>• Anti-bacterial properties</li>
                <li>• Sustainable materials</li>
              </ul>
            </div>

            {/* Craftsmanship */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Expert Craftsmanship</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our skilled team of craftsmen brings years of experience and attention to detail to every product we create.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Precision stitching</li>
                <li>• Reinforced seams</li>
                <li>• Quality finishes</li>
                <li>• Attention to detail</li>
              </ul>
            </div>

            {/* Testing */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Rigorous Testing</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Every product undergoes comprehensive testing to ensure it meets our quality standards and performance requirements.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Durability testing</li>
                <li>• Colorfastness tests</li>
                <li>• Fit and comfort checks</li>
                <li>• Performance validation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technology & Innovation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We invest in the latest manufacturing technology and innovative processes to deliver superior products efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Technology Content */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Automated Production</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our state-of-the-art automated production lines ensure consistent quality and efficient manufacturing processes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quality Monitoring</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Advanced quality monitoring systems track every step of production to ensure consistent standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🌱</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sustainable Practices</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We implement eco-friendly manufacturing practices and use sustainable materials whenever possible.
                  </p>
                </div>
              </div>
            </div>

            {/* Technology Image */}
            <div className="bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 rounded-2xl p-12 text-center">
              <div className="text-8xl mb-6">🏭</div>
              <h3 className="text-2xl font-bold mb-4">State-of-the-Art Facility</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our modern manufacturing facility is equipped with the latest technology and staffed by experienced professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our commitment to quality is recognized through various industry certifications and standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* ISO Certification */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-2">ISO 9001:2015</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Quality Management System certification ensuring consistent quality standards.
              </p>
            </div>

            {/* OEKO-TEX */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold mb-2">OEKO-TEX® Standard 100</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Certification for textiles tested for harmful substances and safe for human use.
              </p>
            </div>

            {/* Fair Trade */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Fair Trade Certified</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Commitment to fair labor practices and ethical manufacturing standards.
              </p>
            </div>

            {/* GOTS */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">GOTS Certified</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Global Organic Textile Standard for organic fiber processing and manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection 
        title="Ready to Work with Us?"
        subtitle="Let's discuss your manufacturing needs and how we can help bring your vision to life with our premium manufacturing capabilities."
        contactInfo={{
          email: "manufacturing@aclonsports.com",
          phone: "+1 (555) 123-4570",
          address: "123 Sports Avenue, Athletic District, NY 10001",
          socialMedia: {
            facebook: "https://facebook.com/aclonsports",
            twitter: "https://twitter.com/aclonsports",
            instagram: "https://instagram.com/aclonsports",
            linkedin: "https://linkedin.com/company/aclonsports"
          }
        }}
      />

      <Footer />
    </main>
  )
}
