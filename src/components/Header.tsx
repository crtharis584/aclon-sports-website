'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import { ThemeToggle } from './ThemeToggle'
import { Logo } from './Logo'
import { navigation, NavigationItem } from '@/data/navigation'
import { cn } from '@/lib/utils'

interface HeaderProps {
  showQuoteCTA?: boolean
  className?: string
  transparent?: boolean
  sticky?: boolean
}

export function Header({ 
  showQuoteCTA = true, 
  className = '',
  transparent = false,
  sticky = true
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  // Handle scroll effect for header styling
  useEffect(() => {
    if (!sticky) return
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sticky])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Close mobile menu when pressing Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        setActiveDropdown(null)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  // Close mobile menu when clicking on a link
  const handleMobileLinkClick = () => {
    setIsOpen(false)
    setActiveDropdown(null)
  }

  // Handle navigation link clicks
  const handleNavLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsOpen(false)
    setActiveDropdown(null)
  }

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, itemName: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      if (activeDropdown === itemName) {
        setActiveDropdown(null)
      } else {
        setActiveDropdown(itemName)
      }
    } else if (event.key === 'Escape') {
      setActiveDropdown(null)
      setIsOpen(false)
    }
  }

  // Handle mobile menu toggle
  const handleMobileMenuToggle = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setActiveDropdown(null)
    }
  }

  const headerClasses = cn(
    'w-full z-50 transition-all duration-300',
    {
      'fixed top-0 left-0 right-0': sticky,
      'relative': !sticky,
      'bg-transparent border-transparent': transparent && !isScrolled,
      'bg-bg-primary/95 backdrop-blur-md border-b border-border-color': !transparent || isScrolled,
    },
    className
  )

  return (
    <header 
      className={headerClasses}
      role="banner"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <a href="/" aria-label="Aclon Sports Homepage">
              <Logo size="md" />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:flex items-center space-x-8"
            role="navigation"
            aria-label="Main menu"
          >
            {navigation.map((item, index) => (
              <div key={item.name} className="relative" ref={dropdownRef}>
                {item.children ? (
                  // Dropdown menu item
                  <div className="relative">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      onKeyDown={(e) => handleKeyDown(e, item.name)}
                      className={cn(
                        'flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium',
                        'transition-all duration-200 hover:text-primary-500',
                        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                        'focus:ring-offset-bg-primary',
                        {
                          'text-primary-500 font-semibold': activeDropdown === item.name,
                          'text-text-secondary hover:text-primary-500': activeDropdown !== item.name,
                        }
                      )}
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                      aria-label={`${item.name} menu`}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          { 'rotate-180': activeDropdown === item.name }
                        )}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 rounded-xl shadow-theme py-2 z-50"
                          style={{
                            backgroundColor: 'var(--bg-secondary)',
                            border: '1px solid var(--border-color)',
                          }}
                          role="menu"
                          aria-label={`${item.name} submenu`}
                        >
                          {item.children.map((child) => (
                            <a
                              key={child.name}
                              href={child.href}
                              className={cn(
                                'block px-4 py-3 text-sm transition-all duration-200',
                                'hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-500',
                                'text-text-secondary'
                              )}
                              onClick={() => handleNavLinkClick(child.href)}
                              role="menuitem"
                            >
                              {child.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  // Regular menu item
                  <motion.a
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                      'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                      'hover:text-primary-500 focus:outline-none focus:ring-2',
                      'focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-bg-primary',
                      'text-text-secondary hover:text-primary-500'
                    )}
                    onClick={() => handleNavLinkClick(item.href)}
                    role="menuitem"
                  >
                    {item.name}
                  </motion.a>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Quote CTA Button */}
            {showQuoteCTA && (
              <motion.a
                href="/quote"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={cn(
                  'inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg',
                  'transition-all duration-200 focus:outline-none focus:ring-2',
                  'focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-bg-primary',
                  'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Request a quote"
              >
                Request Quote
              </motion.a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={handleMobileMenuToggle}
              className={cn(
                'p-2 rounded-lg transition-colors duration-200',
                'focus:outline-none focus:ring-2 focus:ring-primary-500',
                'focus:ring-offset-2 focus:ring-offset-bg-primary',
                'text-text-secondary hover:bg-bg-secondary'
              )}
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-haspopup="true"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span 
                  className={cn(
                    'block w-5 h-0.5 transition-all duration-300',
                    'bg-current',
                    { 'rotate-45 translate-y-1': isOpen }
                  )}
                />
                <span 
                  className={cn(
                    'block w-5 h-0.5 transition-all duration-300 mt-1',
                    'bg-current',
                    { 'opacity-0': isOpen }
                  )}
                />
                <span 
                  className={cn(
                    'block w-5 h-0.5 transition-all duration-300 mt-1',
                    'bg-current',
                    { '-rotate-45 -translate-y-1': isOpen }
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={mobileMenuRef}
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-border-color"
              role="navigation"
              aria-label="Mobile menu"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      // Mobile dropdown
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className={cn(
                            'w-full text-left px-3 py-2 rounded-lg text-base font-medium',
                            'transition-colors duration-200',
                            {
                              'text-primary-500 bg-primary-50 dark:bg-primary-900/20': activeDropdown === item.name,
                              'text-text-secondary hover:text-primary-500 hover:bg-bg-secondary': activeDropdown !== item.name,
                            }
                          )}
                          aria-expanded={activeDropdown === item.name}
                          aria-haspopup="true"
                        >
                          <div className="flex items-center justify-between">
                            <span>{item.name}</span>
                            <svg
                              className={cn(
                                'w-4 h-4 transition-transform duration-200',
                                { 'rotate-180': activeDropdown === item.name }
                              )}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 mt-1 space-y-1"
                              role="menu"
                            >
                              {item.children.map((child) => (
                                <a
                                  key={child.name}
                                  href={child.href}
                                  onClick={() => handleMobileLinkClick()}
                                  className={cn(
                                    'block px-3 py-2 rounded-lg text-sm transition-colors duration-200',
                                    'text-text-muted hover:text-primary-500 hover:bg-bg-secondary'
                                  )}
                                  role="menuitem"
                                >
                                  {child.name}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      // Regular mobile menu item
                      <a
                        href={item.href}
                        onClick={() => handleMobileLinkClick()}
                        className={cn(
                          'block px-3 py-2 rounded-lg text-base font-medium',
                          'transition-colors duration-200',
                          'text-text-secondary hover:text-primary-500 hover:bg-bg-secondary'
                        )}
                        role="menuitem"
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
                
                {/* Mobile Quote CTA */}
                {showQuoteCTA && (
                  <div className="pt-2">
                    <a
                      href="/quote"
                      onClick={() => handleMobileLinkClick()}
                      className={cn(
                        'block w-full px-3 py-3 text-center text-sm font-semibold rounded-lg',
                        'transition-all duration-200 bg-primary-500 text-white',
                        'hover:bg-primary-600 active:bg-primary-700'
                      )}
                      role="menuitem"
                      aria-label="Request a quote"
                    >
                      Request Quote
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
