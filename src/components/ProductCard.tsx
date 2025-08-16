'use client'

import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
  className?: string
  showCTA?: boolean
  showRating?: boolean
  showPrice?: boolean
}

export function ProductCard({ 
  product, 
  className = '', 
  showCTA = true, 
  showRating = true, 
  showPrice = true 
}: ProductCardProps) {
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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(price)
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="halfStar">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path fill="url(#halfStar)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }

    return stars
  }

  return (
    <motion.div
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
        {/* Product Image */}
        <div className="relative h-64 overflow-hidden">
          <motion.div
            variants={imageVariants}
            className="w-full h-full"
          >
            {/* Image Placeholder with Product Icon */}
            <div 
              className="w-full h-full flex items-center justify-center"
              style={{
                background: theme === 'dark' 
                  ? 'linear-gradient(135deg, #222222 0%, #333333 100%)'
                  : 'linear-gradient(135deg, #F8F8F8 0%, #E5E5E5 100%)'
              }}
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">A</span>
              </div>
            </div>
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {product.subcategory || product.category}
            </div>

            {/* Sale Badge */}
            {product.originalPrice && (
              <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                SALE
              </div>
            )}
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          {/* Product Title */}
          <h3 
            className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-red-600 transition-colors duration-200"
            style={{
              color: theme === 'dark' ? '#FFFFFF' : '#000000'
            }}
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p 
            className="text-sm mb-4 line-clamp-2"
            style={{
              color: theme === 'dark' ? '#CCCCCC' : '#666666'
            }}
          >
            {product.shortDescription}
          </p>

          {/* Rating */}
          {showRating && (
            <div className="flex items-center mb-3">
              <div className="flex items-center mr-2">
                {renderStars(product.rating)}
              </div>
              <span 
                className="text-xs"
                style={{
                  color: theme === 'dark' ? '#CCCCCC' : '#666666'
                }}
              >
                ({product.reviews.toLocaleString()})
              </span>
            </div>
          )}

          {/* Price */}
          {showPrice && (
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span 
                  className="text-xl font-bold"
                  style={{ color: '#FF0000' }}
                >
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span 
                    className="text-sm line-through"
                    style={{
                      color: theme === 'dark' ? '#999999' : '#999999'
                    }}
                  >
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* CTA Button */}
          {showCTA && product.ctaText && (
            <motion.a
              href={product.ctaLink || '#'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 min-h-[44px]"
              style={{
                backgroundColor: '#FF0000',
                color: '#FFFFFF'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#CC0000'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FF0000'
              }}
            >
              {product.ctaText}
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
