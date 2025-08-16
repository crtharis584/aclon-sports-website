'use client'

import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import { ProductShowcase } from './ProductShowcase'
import { getProductsBySubcategory, getSubcategoriesByCategory, categories } from '@/data/products'

interface SubcategoryShowcaseProps {
  category: 'Activewear' | 'Sports Uniforms' | 'Gym Wear'
  subcategory: string
  showSubcategoryFilter?: boolean
  showViewAllButton?: boolean
  className?: string
}

export function SubcategoryShowcase({ 
  category, 
  subcategory, 
  showSubcategoryFilter = true, 
  showViewAllButton = true,
  className = ""
}: SubcategoryShowcaseProps) {
  const { theme } = useTheme()
  const subcategoryProducts = getProductsBySubcategory(subcategory)
  const categorySubcategories = getSubcategoriesByCategory(category)
  const categoryData = categories.find(cat => cat.name === category)

  const getSubcategoryTitle = () => {
    return `${subcategory} Collection`
  }

  const getSubcategorySubtitle = () => {
    const subtitles: Record<string, string> = {
      // Activewear
      'Yoga Leggings': 'High-waisted leggings with four-way stretch for ultimate comfort during yoga practice.',
      'Sports Bras': 'High-impact support bras designed for active women during intense workouts.',
      'Running Shorts': 'Lightweight shorts with built-in liners for comfortable and unrestricted running.',
      'Compression Tops': 'High-performance compression tops for enhanced muscle support and recovery.',
      'Training Jackets': 'Versatile jackets with water-resistant finish for outdoor training sessions.',
      
      // Sports Uniforms
      'Basketball Jerseys': 'Professional basketball jerseys with mesh construction for optimal performance.',
      'Soccer Kits': 'Complete soccer kits including jersey, shorts, and socks with team customization.',
      'American Football Uniforms': 'Professional football uniforms with reinforced stitching for durability.',
      'Baseball Jerseys': 'Authentic baseball jerseys with button-up design and team customization.',
      'Volleyball Uniforms': 'Lightweight volleyball uniforms designed for quick movements and comfort.',
      
      // Gym Wear
      'Stringer Tank Tops': 'Classic stringer tank tops for maximum freedom of movement during workouts.',
      'Sweatpants': 'Premium sweatpants with elastic waistbands for ultimate comfort.',
      'Hoodies': 'Performance hoodies with fleece lining for pre and post-workout comfort.',
      'Gym Shorts': 'Comfortable gym shorts with built-in liners for unrestricted movement.',
      'Performance T-Shirts': 'High-performance t-shirts with moisture-wicking technology for intense workouts.'
    }
    
    return subtitles[subcategory] || `Premium ${subcategory.toLowerCase()} designed for peak performance.`
  }

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

  return (
    <div className={`min-h-screen pt-16 ${className}`}>
      {/* Breadcrumb Navigation */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="section-padding bg-gray-50 dark:bg-gray-900"
        style={{
          backgroundColor: theme === 'dark' ? '#111111' : '#F8F8F8'
        }}
      >
        <div className="container-custom">
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-2 text-sm mb-4"
          >
            <a 
              href="/"
              className="hover:text-red-600 transition-colors duration-200"
              style={{
                color: theme === 'dark' ? '#CCCCCC' : '#666666'
              }}
            >
              Home
            </a>
            <span style={{ color: theme === 'dark' ? '#666666' : '#999999' }}>/</span>
            <a 
              href={`/products/${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:text-red-600 transition-colors duration-200"
              style={{
                color: theme === 'dark' ? '#CCCCCC' : '#666666'
              }}
            >
              {category}
            </a>
            <span style={{ color: theme === 'dark' ? '#666666' : '#999999' }}>/</span>
            <span 
              className="font-semibold"
              style={{
                color: theme === 'dark' ? '#FFFFFF' : '#000000'
              }}
            >
              {subcategory}
            </span>
          </motion.div>
        </div>
      </motion.section>

      {/* Subcategory Filter */}
      {showSubcategoryFilter && (
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="section-padding bg-white dark:bg-black"
          style={{
            backgroundColor: theme === 'dark' ? '#000000' : '#FFFFFF'
          }}
        >
          <div className="container-custom">
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4"
            >
              {categorySubcategories.map((subcat) => (
                <a
                  key={subcat}
                  href={`/products/${category.toLowerCase().replace(/\s+/g, '-')}/${subcat.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                    subcategory === subcat
                      ? 'bg-red-600 text-white'
                      : theme === 'dark'
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {subcat}
                </a>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Products Display */}
      <ProductShowcase
        title={getSubcategoryTitle()}
        subtitle={getSubcategorySubtitle()}
        products={subcategoryProducts}
        category={subcategory}
        showCategoryFilter={false}
        showViewAllButton={showViewAllButton}
        viewAllLink={`/products/${category.toLowerCase().replace(/\s+/g, '-')}`}
        gridCols={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      />
    </div>
  )
}
