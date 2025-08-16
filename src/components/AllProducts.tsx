'use client'

import { useState, useMemo } from 'react'
import { ProductShowcase } from './ProductShowcase'
import { products, categories } from '@/data/products'

export function AllProducts() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = useMemo(() => {
    let filtered = products

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        (product.subcategory && product.subcategory.toLowerCase().includes(query))
      )
    }

    return filtered
  }, [selectedCategory, searchQuery])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Search and Filter Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-3 pl-12 rounded-lg border-2 border-gray-200 dark:border-gray-700 focus:border-red-500 focus:outline-none transition-colors duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                  selectedCategory === 'all'
                    ? 'bg-red-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                All Products ({products.length})
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.name)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                    selectedCategory === category.name
                      ? 'bg-red-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center mt-6">
              <p className="text-gray-600 dark:text-gray-400">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Display */}
      <ProductShowcase
        title={selectedCategory === 'all' ? 'All Products' : `${selectedCategory} Collection`}
        subtitle={
          selectedCategory === 'all' 
            ? 'Browse our complete collection of premium sportswear'
            : `Discover our ${selectedCategory.toLowerCase()} designed for peak performance`
        }
        products={filteredProducts}
        showCategoryFilter={false}
        showViewAllButton={false}
        gridCols={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      />
    </div>
  )
}
