'use client'

import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import { ManufacturingItem } from '@/data/manufacturing'

interface ManufacturingCardProps {
  item: ManufacturingItem
  className?: string
  showCategory?: boolean
}

export function ManufacturingCard({ 
  item, 
  className = '',
  showCategory = true
}: ManufacturingCardProps) {
  const { theme } = useTheme()

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Fabric':
        return '#10B981' // Green
      case 'Machinery':
        return '#3B82F6' // Blue
      case 'Sample Product':
        return '#F59E0B' // Amber
      default:
        return '#FF0000' // Red
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Fabric':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        )
      case 'Machinery':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-3-3a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        )
      case 'Sample Product':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      default:
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        )
    }
  }

  return (
    <motion.article
      className={`group cursor-pointer ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      layout
    >
      <div
        className="card overflow-hidden transition-all duration-300"
        style={{
          backgroundColor: theme === 'dark' ? '#111111' : '#FFFFFF',
          borderColor: theme === 'dark' ? '#333333' : '#E5E5E5'
        }}
      >
        {/* Item Image */}
        <div className="relative h-64 overflow-hidden">
          <motion.div
            variants={imageVariants}
            className="w-full h-full"
          >
            {/* Image Placeholder with Category Icon */}
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(135deg, #222222 0%, #333333 100%)'
                  : 'linear-gradient(135deg, #F8F8F8 0%, #E5E5E5 100%)'
              }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: getCategoryColor(item.category) }}
              >
                {getCategoryIcon(item.category)}
              </div>
            </div>

            {/* Category Badge */}
            {showCategory && (
              <div 
                className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg"
                style={{ backgroundColor: getCategoryColor(item.category) }}
              >
                {item.category}
              </div>
            )}

            {/* Quality Badge */}
            <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
              PREMIUM
            </div>
          </motion.div>
        </div>

        {/* Item Info */}
        <div className="p-6">
          {/* Item Title */}
          <h3
            className="text-lg font-semibold mb-3 group-hover:text-red-600 transition-colors duration-200 line-clamp-2"
            style={{
              color: theme === 'dark' ? '#FFFFFF' : '#000000'
            }}
          >
            {item.title}
          </h3>

          {/* Description */}
          <p
            className="text-sm mb-4 line-clamp-2"
            style={{
              color: theme === 'dark' ? '#CCCCCC' : '#666666'
            }}
          >
            {item.description}
          </p>

          {/* Features Preview */}
          {item.features && item.features.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {item.features.slice(0, 3).map((feature, index) => (
                  <span
                    key={index}
                    className="inline-block px-2 py-1 text-xs rounded-md font-medium"
                    style={{
                      backgroundColor: theme === 'dark' ? '#333333' : '#F3F4F6',
                      color: theme === 'dark' ? '#CCCCCC' : '#374151'
                    }}
                  >
                    {feature}
                  </span>
                ))}
                {item.features.length > 3 && (
                  <span
                    className="inline-block px-2 py-1 text-xs rounded-md font-medium"
                    style={{
                      backgroundColor: '#FF0000',
                      color: '#FFFFFF'
                    }}
                  >
                    +{item.features.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Specifications Preview */}
          {item.specifications && Object.keys(item.specifications).length > 0 && (
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-2 text-xs">
                {Object.entries(item.specifications).slice(0, 2).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span
                      style={{
                        color: theme === 'dark' ? '#999999' : '#666666'
                      }}
                    >
                      {key}:
                    </span>
                    <span
                      className="font-medium"
                      style={{
                        color: theme === 'dark' ? '#CCCCCC' : '#000000'
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Learn More Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 min-h-[44px]"
            style={{
              backgroundColor: 'transparent',
              border: '2px solid #FF0000',
              color: '#FF0000'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FF0000'
              e.currentTarget.style.color = '#FFFFFF'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#FF0000'
            }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}
