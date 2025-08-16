'use client'

import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import { QuoteForm } from './QuoteForm'

interface QuoteSectionProps {
  title?: string
  subtitle?: string
  submitEmail?: string
  className?: string
}

export function QuoteSection({
  title = 'Request a Quote',
  subtitle = 'Fill out the form and select your products to get a custom price.',
  submitEmail = 'quotes@aclonsports.com',
  className = ''
}: QuoteSectionProps) {
  const { theme } = useTheme()

  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Pricing',
      description: 'Get the best rates for bulk orders and custom requirements'
    },
    {
      icon: '⚡',
      title: 'Fast Response',
      description: 'Receive your custom quote within 24 hours'
    },
    {
      icon: '🎯',
      title: 'Custom Solutions',
      description: 'Tailored products to meet your specific needs'
    },
    {
      icon: '📦',
      title: 'Bulk Orders',
      description: 'Special pricing for team uniforms and large quantities'
    }
  ]

  return (
    <section
      className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}
      style={{
        backgroundColor: theme === 'dark' ? '#000000' : '#FFFFFF'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              color: theme === 'dark' ? '#FFFFFF' : '#000000'
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="text-lg sm:text-xl max-w-3xl mx-auto"
              style={{
                color: theme === 'dark' ? '#CCCCCC' : '#666666'
              }}
            >
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Benefits */}
            <div className="space-y-6">
              <h3
                className="text-2xl font-semibold"
                style={{
                  color: theme === 'dark' ? '#FFFFFF' : '#000000'
                }}
              >
                Why Choose Aclon Sports?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="text-2xl">{benefit.icon}</div>
                    <div>
                      <h4
                        className="font-semibold text-lg mb-1"
                        style={{
                          color: theme === 'dark' ? '#FFFFFF' : '#000000'
                        }}
                      >
                        {benefit.title}
                      </h4>
                      <p
                        className="text-sm"
                        style={{
                          color: theme === 'dark' ? '#CCCCCC' : '#666666'
                        }}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Process Steps */}
            <div className="space-y-6">
              <h3
                className="text-2xl font-semibold"
                style={{
                  color: theme === 'dark' ? '#FFFFFF' : '#000000'
                }}
              >
                How It Works
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'Submit Your Request',
                    description: 'Fill out the form with your product requirements and quantity'
                  },
                  {
                    step: '2',
                    title: 'Get Your Quote',
                    description: 'Receive a detailed quote within 24 hours'
                  },
                  {
                    step: '3',
                    title: 'Review & Approve',
                    description: 'Review the quote and approve to proceed with your order'
                  },
                  {
                    step: '4',
                    title: 'Production & Delivery',
                    description: 'We manufacture and deliver your custom products'
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        backgroundColor: '#FF0000',
                        color: '#FFFFFF'
                      }}
                    >
                      {step.step}
                    </div>
                    <div>
                      <h4
                        className="font-semibold text-lg mb-1"
                        style={{
                          color: theme === 'dark' ? '#FFFFFF' : '#000000'
                        }}
                      >
                        {step.title}
                      </h4>
                      <p
                        className="text-sm"
                        style={{
                          color: theme === 'dark' ? '#CCCCCC' : '#666666'
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3
                className="text-2xl font-semibold"
                style={{
                  color: theme === 'dark' ? '#FFFFFF' : '#000000'
                }}
              >
                Need Immediate Assistance?
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5" style={{ color: '#FF0000' }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span
                    style={{
                      color: theme === 'dark' ? '#CCCCCC' : '#666666'
                    }}
                  >
                    quotes@aclonsports.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5" style={{ color: '#FF0000' }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span
                    style={{
                      color: theme === 'dark' ? '#CCCCCC' : '#666666'
                    }}
                  >
                    +1 (555) 123-4567
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Quote Form */}
          <motion.div
            className="lg:pl-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div
              className="p-6 sm:p-8 rounded-2xl border-2"
              style={{
                backgroundColor: theme === 'dark' ? '#111111' : '#F8F9FA',
                borderColor: theme === 'dark' ? '#333333' : '#E5E7EB'
              }}
            >
              <QuoteForm
                submitEmail={submitEmail}
                placeholders={{
                  name: 'Your Full Name',
                  email: 'Your Email Address',
                  phone: 'Your Phone Number (Optional)',
                  quantity: 'Quantity Needed',
                  message: 'Additional Requirements or Special Instructions'
                }}
                buttonText="Request Quote"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
