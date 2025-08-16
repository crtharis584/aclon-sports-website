import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AboutSection } from '@/components/AboutSection'
import { ContactSection } from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'About Us - Aclon Sports',
  description: 'Learn about Aclon Sports journey from humble beginnings to becoming a leading manufacturer of premium sportswear for athletes worldwide.',
  keywords: 'about Aclon Sports, company history, sportswear manufacturer, athletic clothing, team uniforms',
  openGraph: {
    title: 'About Us - Aclon Sports',
    description: 'Learn about our journey and mission to provide premium sportswear.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-white dark:from-red-900/20 dark:to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            From humble beginnings to industry leaders, discover the passion that drives us to create exceptional sportswear.
          </p>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Mission & Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're driven by a simple mission: to empower athletes with the highest quality sportswear that enhances their performance and confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Quality First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every product we create meets the highest standards of quality, durability, and performance. We never compromise on excellence.
              </p>
            </div>

            {/* Innovation */}
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We continuously research and develop new materials and technologies to provide athletes with cutting-edge performance wear.
              </p>
            </div>

            {/* Customer Focus */}
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Customer Focus</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our customers are at the heart of everything we do. We listen, adapt, and deliver solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A timeline of key milestones that shaped Aclon Sports into the company it is today.
            </p>
          </div>

          <div className="space-y-12">
            {/* 2015 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 text-center md:text-right">
                <div className="text-4xl font-bold text-red-600 mb-2">2015</div>
                <h3 className="text-2xl font-bold mb-2">The Beginning</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Founded with a vision to create premium sportswear that combines performance, comfort, and style.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              </div>
              <div className="md:w-1/3"></div>
            </div>

            {/* 2017 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3"></div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              </div>
              <div className="md:w-1/3 text-center md:text-left">
                <div className="text-4xl font-bold text-red-600 mb-2">2017</div>
                <h3 className="text-2xl font-bold mb-2">First Major Contract</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Secured our first professional sports team contract, marking the beginning of our uniform business.
                </p>
              </div>
            </div>

            {/* 2019 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 text-center md:text-right">
                <div className="text-4xl font-bold text-red-600 mb-2">2019</div>
                <h3 className="text-2xl font-bold mb-2">Expansion</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Expanded manufacturing facilities and launched our activewear line for individual athletes.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              </div>
              <div className="md:w-1/3"></div>
            </div>

            {/* 2021 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3"></div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              </div>
              <div className="md:w-1/3 text-center md:text-left">
                <div className="text-4xl font-bold text-red-600 mb-2">2021</div>
                <h3 className="text-2xl font-bold mb-2">Technology Integration</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Invested in advanced manufacturing technology and sustainable materials for better performance.
                </p>
              </div>
            </div>

            {/* 2023 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 text-center md:text-right">
                <div className="text-4xl font-bold text-red-600 mb-2">2023</div>
                <h3 className="text-2xl font-bold mb-2">Global Reach</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Expanded to serve athletes worldwide with our premium sportswear and team uniform solutions.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              </div>
              <div className="md:w-1/3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our dedicated team of professionals is committed to delivering excellence in every product we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Alex Johnson</h3>
              <p className="text-red-600 font-semibold mb-2">Founder & CEO</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Former professional athlete with 15+ years of experience in sportswear manufacturing.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">👩‍💼</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sarah Chen</h3>
              <p className="text-red-600 font-semibold mb-2">Head of Design</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Award-winning designer with expertise in performance wear and sustainable materials.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">👨‍🔬</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Mike Rodriguez</h3>
              <p className="text-red-600 font-semibold mb-2">Production Manager</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Expert in manufacturing processes and quality control with 20+ years of experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection 
        title="Get in Touch"
        subtitle="Ready to work with us? Let's discuss how we can help elevate your team's performance with our premium sportswear solutions."
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

      <Footer />
    </main>
  )
}
