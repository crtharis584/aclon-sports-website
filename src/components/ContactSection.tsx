'use client'

import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import { ContactForm } from './ContactForm'

interface ContactSectionProps {
  title?: string
  subtitle?: string
  contactInfo?: {
    email?: string
    phone?: string
    address?: string
    socialMedia?: {
      facebook?: string
      twitter?: string
      instagram?: string
      linkedin?: string
    }
  }
  className?: string
}

export function ContactSection({
  title = "Contact Us",
  subtitle = "We're here to help. Reach out with questions, requests, or feedback.",
  contactInfo = {
    email: "contact@aclonsports.com",
    phone: "+1 (555) 123-4567",
    address: "123 Sports Avenue, Athletic District, NY 10001",
    socialMedia: {
      facebook: "https://facebook.com/aclonsports",
      twitter: "https://twitter.com/aclonsports",
      instagram: "https://instagram.com/aclonsports",
      linkedin: "https://linkedin.com/company/aclonsports"
    }
  },
  className = ""
}: ContactSectionProps) {
  const { theme } = useTheme()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const handleFormSubmit = (data: any) => {
    // Custom form submission logic can be added here
    console.log('Form submitted:', data)
  }

  return (
    <section
      id="contact"
      className={`section-padding ${className}`}
      style={{
        backgroundColor: theme === 'dark' ? '#000000' : '#FFFFFF'
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            style={{
              color: theme === 'dark' ? '#FFFFFF' : '#000000'
            }}
          >
            {title}
          </h2>
          <p
            className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{
              color: theme === 'dark' ? '#CCCCCC' : '#666666'
            }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div>
              <h3
                className="text-2xl font-bold mb-6"
                style={{
                  color: theme === 'dark' ? '#FFFFFF' : '#000000'
                }}
              >
                Get in Touch
              </h3>
              <p
                className="text-lg mb-8"
                style={{
                  color: theme === 'dark' ? '#CCCCCC' : '#666666'
                }}
              >
                Ready to elevate your sportswear game? We're here to help you find the perfect solution for your needs.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Email */}
              <motion.a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: '#FF0000' }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p
                    className="font-semibold"
                    style={{
                      color: theme === 'dark' ? '#FFFFFF' : '#000000'
                    }}
                  >
                    Email
                  </p>
                  <p
                    className="group-hover:text-red-600 transition-colors duration-200"
                    style={{
                      color: theme === 'dark' ? '#CCCCCC' : '#666666'
                    }}
                  >
                    {contactInfo.email}
                  </p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: '#FF0000' }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p
                    className="font-semibold"
                    style={{
                      color: theme === 'dark' ? '#FFFFFF' : '#000000'
                    }}
                  >
                    Phone
                  </p>
                  <p
                    className="group-hover:text-red-600 transition-colors duration-200"
                    style={{
                      color: theme === 'dark' ? '#CCCCCC' : '#666666'
                    }}
                  >
                    {contactInfo.phone}
                  </p>
                </div>
              </motion.a>

              {/* Address */}
              <motion.div
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: '#FF0000' }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p
                    className="font-semibold"
                    style={{
                      color: theme === 'dark' ? '#FFFFFF' : '#000000'
                    }}
                  >
                    Address
                  </p>
                  <p
                    style={{
                      color: theme === 'dark' ? '#CCCCCC' : '#666666'
                    }}
                  >
                    {contactInfo.address}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Media */}
            {contactInfo.socialMedia && (
              <div className="pt-6">
                <h4
                  className="text-lg font-semibold mb-4"
                  style={{
                    color: theme === 'dark' ? '#FFFFFF' : '#000000'
                  }}
                >
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  {contactInfo.socialMedia.facebook && (
                    <motion.a
                      href={contactInfo.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: '#FF0000' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </motion.a>
                  )}
                  {contactInfo.socialMedia.twitter && (
                    <motion.a
                      href={contactInfo.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: '#FF0000' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </motion.a>
                  )}
                  {contactInfo.socialMedia.instagram && (
                    <motion.a
                      href={contactInfo.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: '#FF0000' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244z"/>
                      </svg>
                    </motion.a>
                  )}
                  {contactInfo.socialMedia.linkedin && (
                    <motion.a
                      href={contactInfo.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: '#FF0000' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </motion.a>
                  )}
                </div>
              </div>
            )}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="lg:pl-8"
          >
            <div
              className="p-8 rounded-2xl shadow-xl"
              style={{
                backgroundColor: theme === 'dark' ? '#111111' : '#F8F8F8',
                border: `1px solid ${theme === 'dark' ? '#333333' : '#E5E5E5'}`
              }}
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{
                  color: theme === 'dark' ? '#FFFFFF' : '#000000'
                }}
              >
                Send us a Message
              </h3>
              <ContactForm
                onSubmit={handleFormSubmit}
                submitEmail={contactInfo.email}
                placeholders={{
                  name: 'Your Name',
                  email: 'Your Email',
                  subject: 'Subject (Optional)',
                  message: 'Tell us about your project or inquiry...'
                }}
                buttonText="Send Message"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
