'use client'

import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import { ProductCard } from './ProductCard'
import { Product, categories } from '@/data/products'

interface ProductShowcaseProps {
  title?: string
  subtitle?: string
  products: Product[]
  category?: string
  showCategoryFilter?: boolean
  showViewAllButton?: boolean
  viewAllLink?: string
  className?: string
  gridCols?: {
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
}

export function ProductShowcase({
  title = "Our Products",
  subtitle = "Premium Activewear, Gym Wear & Sports Uniforms designed for peak performance",
  products,
  category,
  showCategoryFilter = false,
  showViewAllButton = true,
  viewAllLink = "#products",
  className = "",
  gridCols = { sm: 1, md: 2, lg: 3, xl: 4 }
}: ProductShowcaseProps) {
  const { theme } = useTheme()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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

  const generateGridClasses = () => {
    const classes = ['grid gap-6']
    
    if (gridCols.sm) classes.push(`grid-cols-${gridCols.sm}`)
    if (gridCols.md) classes.push(`md:grid-cols-${gridCols.md}`)
    if (gridCols.lg) classes.push(`lg:grid-cols-${gridCols.lg}`)
    if (gridCols.xl) classes.push(`xl:grid-cols-${gridCols.xl}`)
    
    return classes.join(' ')
  }

  return (
    <section 
      id={category ? `products-${category.toLowerCase().replace(/\s+/g, '-')}` : "products"}
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
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{
              color: theme === 'dark' ? '#CCCCCC' : '#666666'
            }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Category Filter (Optional) */}
        {showCategoryFilter && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                  category === cat.name
                    ? 'bg-red-600 text-white'
                    : theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </motion.div>
        )}

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={generateGridClasses()}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              custom={index}
            >
              <ProductCard 
                product={product}
                showCTA={true}
                showRating={true}
                showPrice={true}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        {showViewAllButton && products.length > 0 && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              href={viewAllLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              style={{
                borderColor: '#FF0000',
                color: '#FF0000',
                backgroundColor: 'transparent'
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
              View All Products
            </motion.a>
          </motion.div>
        )}

        {/* Empty State */}
        {products.length === 0 && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <div 
              className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: theme === 'dark' ? '#333333' : '#F8F8F8'
              }}
            >
              <svg 
                className="w-12 h-12"
                style={{
                  color: theme === 'dark' ? '#666666' : '#CCCCCC'
                }}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 
              className="text-xl font-semibold mb-2"
              style={{
                color: theme === 'dark' ? '#FFFFFF' : '#000000'
              }}
            >
              No Products Found
            </h3>
            <p 
              className="text-gray-600 dark:text-gray-400"
              style={{
                color: theme === 'dark' ? '#CCCCCC' : '#666666'
              }}
            >
              We're working on adding more products to this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
