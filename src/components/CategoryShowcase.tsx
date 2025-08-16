'use client'

import { ProductShowcase } from './ProductShowcase'
import { products, getProductsByCategory, categories, getSubcategoriesByCategory } from '@/data/products'

interface CategoryShowcaseProps {
  category: 'Activewear' | 'Sports Uniforms' | 'Gym Wear'
  showCategoryFilter?: boolean
  showSubcategoryFilter?: boolean
  showViewAllButton?: boolean
  className?: string
}

export function CategoryShowcase({ 
  category, 
  showCategoryFilter = true, 
  showSubcategoryFilter = true,
  showViewAllButton = true,
  className = ""
}: CategoryShowcaseProps) {
  const categoryProducts = getProductsByCategory(category)
  const categoryData = categories.find(cat => cat.name === category)
  const subcategories = getSubcategoriesByCategory(category)

  const getCategoryTitle = () => {
    switch (category) {
      case 'Activewear':
        return 'Activewear Collection'
      case 'Sports Uniforms':
        return 'Sports Uniforms'
      case 'Gym Wear':
        return 'Gym Wear Collection'
      default:
        return category
    }
  }

  const getCategorySubtitle = () => {
    switch (category) {
      case 'Activewear':
        return 'High-performance activewear for running, training, and sports activities. Designed for athletes who demand excellence.'
      case 'Sports Uniforms':
        return 'Professional team uniforms for basketball, soccer, baseball, and volleyball. Customizable for your team needs.'
      case 'Gym Wear':
        return 'Comfortable gym wear for workouts and training sessions. Premium quality for your fitness journey.'
      default:
        return categoryData?.description || ''
    }
  }

  return (
    <div className={className}>
      {/* Subcategory Navigation */}
      {showSubcategoryFilter && (
        <section className="section-padding bg-gray-50 dark:bg-gray-900">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h3 
                className="text-2xl font-bold mb-4"
                style={{
                  color: 'var(--text-primary)'
                }}
              >
                Browse by Type
              </h3>
              <p 
                className="text-lg"
                style={{
                  color: 'var(--text-secondary)'
                }}
              >
                Explore our {category.toLowerCase()} collection by category
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {subcategories.map((subcat) => (
                <a
                  key={subcat}
                  href={`/products/${category.toLowerCase().replace(/\s+/g, '-')}/${subcat.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-red-500 transition-all duration-200 text-center"
                  style={{
                    backgroundColor: 'var(--bg-primary)'
                  }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <h4 
                    className="font-semibold mb-2 group-hover:text-red-600 transition-colors duration-200"
                    style={{
                      color: 'var(--text-primary)'
                    }}
                  >
                    {subcat}
                  </h4>
                  <p 
                    className="text-sm"
                    style={{
                      color: 'var(--text-secondary)'
                    }}
                  >
                    View Collection
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Products in Category */}
      <ProductShowcase
        title={getCategoryTitle()}
        subtitle={getCategorySubtitle()}
        products={categoryProducts}
        category={category}
        showCategoryFilter={showCategoryFilter}
        showViewAllButton={showViewAllButton}
        viewAllLink="#products"
        gridCols={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      />
    </div>
  )
}
