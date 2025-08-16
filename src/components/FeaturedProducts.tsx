'use client'

import { ProductShowcase } from './ProductShowcase'
import { products } from '@/data/products'

export function FeaturedProducts() {
  // Get featured products (first 8 products for showcase)
  const featuredProducts = products.slice(0, 8)

  return (
    <ProductShowcase
      title="Featured Products"
      subtitle="Discover our premium collection of high-performance sportswear designed for athletes who demand excellence."
      products={featuredProducts}
      showCategoryFilter={false}
      showViewAllButton={true}
      viewAllLink="#products"
      gridCols={{ sm: 1, md: 2, lg: 3, xl: 4 }}
    />
  )
}
