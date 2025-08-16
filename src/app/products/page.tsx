import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FeaturedProducts } from '@/components/FeaturedProducts'
import { ManufacturingShowcase } from '@/components/ManufacturingShowcase'

export const metadata: Metadata = {
  title: 'Products - Aclon Sports',
  description: 'Explore our premium collection of activewear, sports uniforms, and gym wear designed for athletes who demand excellence.',
  keywords: 'sports apparel, activewear, sports uniforms, gym wear, athletic clothing, performance wear',
  openGraph: {
    title: 'Products - Aclon Sports',
    description: 'Explore our premium collection of sports apparel and activewear.',
    type: 'website',
  },
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-white dark:from-red-900/20 dark:to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Premium Sportswear Collection
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Discover our range of high-performance activewear, sports uniforms, and gym wear designed for serious athletes.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Manufacturing Showcase */}
      <ManufacturingShowcase 
        title="Crafted with Precision"
        subtitle="Every piece in our collection is manufactured using state-of-the-art technology and premium materials to ensure the highest quality and performance."
        showCategoryFilter={true}
        showViewAllButton={false}
        gridCols={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      />

      {/* Product Categories Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Explore Our Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From professional sports uniforms to everyday activewear, we have everything you need to perform at your best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Activewear Category */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 flex items-center justify-center">
                <div className="text-6xl">🏃‍♂️</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Activewear</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  High-performance clothing designed for running, training, and everyday athletic activities.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Moisture-wicking technology</li>
                  <li>• Breathable fabrics</li>
                  <li>• Comfortable fit</li>
                  <li>• Durability guaranteed</li>
                </ul>
              </div>
            </div>

            {/* Sports Uniforms Category */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center">
                <div className="text-6xl">⚽</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Sports Uniforms</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Professional team uniforms for all sports with custom branding and team colors.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Custom team branding</li>
                  <li>• Professional quality</li>
                  <li>• Bulk order discounts</li>
                  <li>• Quick turnaround</li>
                </ul>
              </div>
            </div>

            {/* Gym Wear Category */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 flex items-center justify-center">
                <div className="text-6xl">💪</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Gym Wear</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Comfortable and stylish gym clothing for strength training and fitness workouts.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Flexible materials</li>
                  <li>• Supportive design</li>
                  <li>• Modern styling</li>
                  <li>• Performance focused</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Performance?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Get a custom quote for your team uniforms or bulk orders. We'll provide competitive pricing and fast delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Request Quote
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
