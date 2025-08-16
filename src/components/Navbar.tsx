'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import { ThemeToggle } from './ThemeToggle'
import { Logo } from './Logo'
import { navigation, NavigationItem } from '@/data/navigation'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

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

  // Close mobile menu when clicking on a link
  const handleMobileLinkClick = () => {
    setIsOpen(false)
    setActiveDropdown(null)
  }

  // Handle smooth scrolling for navigation links
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
    }
  }

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300"
      style={{
        backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        borderColor: theme === 'dark' ? '#333333' : '#E5E5E5'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <div key={item.name} className="relative" ref={dropdownRef}>
                {item.children ? (
                  // Dropdown menu item
                  <div className="relative">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      onKeyDown={(e) => handleKeyDown(e, item.name)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                        activeDropdown === item.name 
                          ? 'text-red-600 font-semibold' 
                          : theme === 'dark' ? 'text-gray-300 hover:text-red-600' : 'text-gray-700 hover:text-red-600'
                      }`}
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
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
                          className="absolute top-full left-0 mt-2 w-56 rounded-md shadow-lg py-1 z-50"
                          style={{
                            backgroundColor: theme === 'dark' ? '#111111' : '#FFFFFF',
                            border: `1px solid ${theme === 'dark' ? '#333333' : '#E5E5E5'}`
                          }}
                        >
                                                     {item.children.map((child) => (
                             <a
                               key={child.name}
                               href={child.href}
                               className={`block px-4 py-2 text-sm transition-colors duration-200 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 ${
                                 theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                               }`}
                               onClick={() => handleNavLinkClick(child.href)}
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
                     className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                       theme === 'dark' ? 'text-gray-300 hover:text-red-600' : 'text-gray-700 hover:text-red-600'
                     }`}
                     onClick={() => handleNavLinkClick(item.href)}
                   >
                     {item.name}
                   </motion.a>
                 )}
              </div>
            ))}
            
            {/* Theme Toggle */}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
              }`}
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span 
                  className={`block w-5 h-0.5 transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-1' : ''
                  }`}
                  style={{ backgroundColor: theme === 'dark' ? '#FFFFFF' : '#000000' }}
                />
                <span 
                  className={`block w-5 h-0.5 transition-all duration-300 mt-1 ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                  style={{ backgroundColor: theme === 'dark' ? '#FFFFFF' : '#000000' }}
                />
                <span 
                  className={`block w-5 h-0.5 transition-all duration-300 mt-1 ${
                    isOpen ? '-rotate-45 -translate-y-1' : ''
                  }`}
                  style={{ backgroundColor: theme === 'dark' ? '#FFFFFF' : '#000000' }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t"
              style={{ borderColor: theme === 'dark' ? '#333333' : '#E5E5E5' }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      // Mobile dropdown
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                            activeDropdown === item.name 
                              ? 'text-red-600 bg-red-50 dark:bg-red-900/20' 
                              : theme === 'dark' ? 'text-gray-300 hover:text-red-600 hover:bg-gray-800' : 'text-gray-700 hover:text-red-600 hover:bg-gray-100'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{item.name}</span>
                            <svg
                              className={`w-4 h-4 transition-transform duration-200 ${
                                activeDropdown === item.name ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
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
                            >
                              {item.children.map((child) => (
                                                                 <a
                                   key={child.name}
                                   href={child.href}
                                   onClick={() => handleNavLinkClick(child.href)}
                                   className={`block px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                                     theme === 'dark' ? 'text-gray-400 hover:text-red-600 hover:bg-gray-800' : 'text-gray-600 hover:text-red-600 hover:bg-gray-100'
                                   }`}
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
                         onClick={() => handleNavLinkClick(item.href)}
                         className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                           theme === 'dark' ? 'text-gray-300 hover:text-red-600 hover:bg-gray-800' : 'text-gray-700 hover:text-red-600 hover:bg-gray-100'
                         }`}
                       >
                         {item.name}
                       </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
