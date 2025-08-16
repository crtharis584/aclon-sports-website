'use client'

import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import { Logo } from './Logo'
import { navigation, footerNavigation } from '@/data/navigation'
import { cn } from '@/lib/utils'

interface FooterProps {
  showNewsletter?: boolean
  className?: string
  showSocialLinks?: boolean
  showCompanyInfo?: boolean
}

export function Footer({ 
  showNewsletter = true, 
  className = '',
  showSocialLinks = true,
  showCompanyInfo = true
}: FooterProps) {
  const { theme } = useTheme()
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://facebook.com/aclonsports', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/aclonsports', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/aclonsports', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/aclonsports', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ]

  const companyInfo = {
    name: 'Aclon Sports',
    description: 'Empowering athletes worldwide with premium sportswear that delivers exceptional performance, comfort, and style.',
    address: '123 Sports Avenue, Athletic District, NY 10001',
    phone: '+1 (555) 123-4567',
    email: 'contact@aclonsports.com',
    founded: '2020'
  }

  return (
    <footer 
      className={cn(
        'py-16 px-4 sm:px-6 lg:px-8 bg-bg-primary border-t border-border-color',
        className
      )}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <a href="/" aria-label="Aclon Sports Homepage">
                <Logo size="md" />
              </a>
            </div>
            <p className="mb-6 leading-relaxed text-sm text-text-secondary">
              {companyInfo.description}
            </p>
            {showSocialLinks && (
              <div className="flex space-x-3" role="list" aria-label="Social media links">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={cn(
                      'w-10 h-10 rounded-lg flex items-center justify-center',
                      'transition-all duration-200 focus:outline-none focus:ring-2',
                      'focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-bg-primary',
                      'bg-bg-secondary text-text-secondary hover:bg-primary-500 hover:text-white'
                    )}
                    aria-label={`Follow us on ${social.name}`}
                    role="listitem"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            )}
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-text-primary">
              Company
            </h3>
            <ul className="space-y-3" role="list">
              {footerNavigation.company.map((link) => (
                <li key={link.name} role="listitem">
                  <a
                    href={link.href}
                    className={cn(
                      'text-sm transition-colors duration-200',
                      'focus:outline-none focus:ring-2 focus:ring-primary-500',
                      'focus:ring-offset-2 focus:ring-offset-bg-primary rounded',
                      'text-text-secondary hover:text-primary-500'
                    )}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-text-primary">
              Products
            </h3>
            <ul className="space-y-3" role="list">
              {footerNavigation.products.map((link) => (
                <li key={link.name} role="listitem">
                  <a
                    href={link.href}
                    className={cn(
                      'text-sm transition-colors duration-200',
                      'focus:outline-none focus:ring-2 focus:ring-primary-500',
                      'focus:ring-offset-2 focus:ring-offset-bg-primary rounded',
                      'text-text-secondary hover:text-primary-500'
                    )}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-text-primary">
              Support
            </h3>
            <ul className="space-y-3" role="list">
              {footerNavigation.support.map((link) => (
                <li key={link.name} role="listitem">
                  <a
                    href={link.href}
                    className={cn(
                      'text-sm transition-colors duration-200',
                      'focus:outline-none focus:ring-2 focus:ring-primary-500',
                      'focus:ring-offset-2 focus:ring-offset-bg-primary rounded',
                      'text-text-secondary hover:text-primary-500'
                    )}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Company Information Section */}
        {showCompanyInfo && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-border-color pt-8 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-3 text-text-primary">Contact Info</h4>
                <div className="space-y-2 text-sm text-text-secondary">
                  <p>{companyInfo.address}</p>
                  <p>
                    <a 
                      href={`tel:${companyInfo.phone}`}
                      className="hover:text-primary-500 transition-colors"
                    >
                      {companyInfo.phone}
                    </a>
                  </p>
                  <p>
                    <a 
                      href={`mailto:${companyInfo.email}`}
                      className="hover:text-primary-500 transition-colors"
                    >
                      {companyInfo.email}
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-text-primary">Business Hours</h4>
                <div className="space-y-2 text-sm text-text-secondary">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-text-primary">Quick Links</h4>
                <div className="space-y-2 text-sm text-text-secondary">
                  <p>
                    <a href="/quote" className="hover:text-primary-500 transition-colors">
                      Request Quote
                    </a>
                  </p>
                  <p>
                    <a href="/contact" className="hover:text-primary-500 transition-colors">
                      Contact Us
                    </a>
                  </p>
                  <p>
                    <a href="/about" className="hover:text-primary-500 transition-colors">
                      About Us
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Newsletter Section */}
        {showNewsletter && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-border-color pt-8 mb-8"
          >
            <div className="max-w-md">
              <h3 className="text-lg font-semibold mb-4 text-text-primary">
                Stay Updated
              </h3>
              <p className="mb-4 text-sm text-text-secondary">
                Subscribe to our newsletter for the latest products and exclusive offers.
              </p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={cn(
                    'flex-1 px-4 py-3 text-sm rounded-l-lg focus:outline-none',
                    'focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                    'focus:ring-offset-bg-primary transition-all duration-200',
                    'bg-bg-secondary text-text-primary border border-border-color'
                  )}
                  aria-label="Email address for newsletter"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    'px-6 py-3 text-sm font-semibold rounded-r-lg',
                    'transition-all duration-200 focus:outline-none',
                    'focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                    'focus:ring-offset-bg-primary bg-primary-500 text-white',
                    'hover:bg-primary-600 active:bg-primary-700'
                  )}
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border-color pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-text-secondary">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
            <span className="text-sm text-text-secondary">
              Made with ❤️ for athletes
            </span>
            <div className="flex space-x-4 text-sm text-text-secondary">
              <a href="/privacy" className="hover:text-primary-500 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-primary-500 transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="hover:text-primary-500 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
