import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ContactSection } from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Contact Us - Aclon Sports',
  description: 'Get in touch with Aclon Sports. We\'re here to help with your sportswear needs, custom orders, and any questions you may have.',
  keywords: 'contact Aclon Sports, sportswear contact, custom orders, team uniforms, customer service',
  openGraph: {
    title: 'Contact Us - Aclon Sports',
    description: 'Get in touch with us for your sportswear needs.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-white dark:from-red-900/20 dark:to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Ready to elevate your sportswear game? We're here to help you find the perfect solution for your needs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Additional Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Whether you need a quote, have questions about our products, or want to discuss a custom order, we're here to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sales Inquiries */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Sales Inquiries</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Get pricing information, request quotes, or discuss bulk orders for your team or organization.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Email:</strong> sales@aclonsports.com
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Hours:</strong> Mon-Fri 9AM-6PM EST
                </p>
              </div>
            </div>

            {/* Customer Support */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Customer Support</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Need help with an existing order, sizing questions, or product information? Our support team is ready to help.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Email:</strong> support@aclonsports.com
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Phone:</strong> +1 (555) 123-4568
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Hours:</strong> Mon-Fri 8AM-8PM EST
                </p>
              </div>
            </div>

            {/* Custom Orders */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Custom Orders</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Looking for custom designs, team uniforms, or special requirements? Let's discuss your unique needs.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Email:</strong> custom@aclonsports.com
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Phone:</strong> +1 (555) 123-4569
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Hours:</strong> Mon-Fri 9AM-5PM EST
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Find quick answers to common questions about our products and services.
            </p>
          </div>

          <div className="space-y-8">
            {/* FAQ Item 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">How long does it take to receive a custom quote?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We typically respond to quote requests within 24 hours during business days. For complex custom orders, we may need up to 48 hours to provide a detailed quote.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">What is your minimum order quantity for team uniforms?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our minimum order quantity varies by product type. For team uniforms, we typically require a minimum of 12 pieces per style. Contact us for specific requirements.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Do you offer international shipping?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. Contact us for specific international shipping information.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Can you accommodate rush orders?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we offer rush order services for urgent needs. Rush order availability and additional costs depend on the order size and complexity. Contact us to discuss your timeline.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">What is your return policy?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We offer a 30-day return policy for standard orders in original condition. Custom orders and team uniforms may have different return terms. Please contact us for specific details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Don't see what you're looking for? Contact us directly and we'll be happy to help with your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Request Quote
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
