'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import { ManufacturingCard } from './ManufacturingCard'
import { manufacturingItems, manufacturingCategories } from '@/data/manufacturing'

interface ManufacturingShowcaseProps {
  title?: string
  subtitle?: string
  items?: typeof manufacturingItems
  showCategoryFilter?: boolean
  showViewAllButton?: boolean
  className?: string
  gridCols?: {
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
}

export function ManufacturingShowcase({
  title = "Manufacturing & Materials",
  subtitle = "Explore our latest fabrics, machinery, and premium manufacturing capabilities.",
  items = manufacturingItems,
  showCategoryFilter = true,
  showViewAllButton = true,
  className = "",
  gridCols = { sm: 1, md: 2, lg: 3, xl: 4 }
}: ManufacturingShowcaseProps) {
  const { theme } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return items
    }
    return items.filter(item => 
      item.category.toLowerCase() === selectedCategory.toLowerCase()
    )
  }, [items, selectedCategory])

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

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <section
      id="manufacturing"
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

        {/* Category Filter */}
        {showCategoryFilter && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                selectedCategory === 'all'
                  ? 'bg-red-600 text-white'
                  : theme === 'dark'
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              All Items ({items.length})
            </button>
            {manufacturingCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.name)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                  selectedCategory === category.name
                    ? 'bg-red-600 text-white'
                    : theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </motion.div>
        )}

        {/* Items Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={generateGridClasses()}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              custom={index}
            >
              <ManufacturingCard
                item={item}
                showCategory={true}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{
                color: theme === 'dark' ? '#FFFFFF' : '#000000'
              }}
            >
              No Items Found
            </h3>
            <p
              style={{
                color: theme === 'dark' ? '#CCCCCC' : '#666666'
              }}
            >
              We're working on adding more manufacturing items to this category.
            </p>
          </motion.div>
        )}

        {/* View All Button */}
        {showViewAllButton && filteredItems.length > 0 && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
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
              View All Manufacturing
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
