# Product Showcase System Documentation

## Overview

The Product Showcase System is a modular, reusable component library designed for displaying products in a clean, minimal, high-end style. It supports the three main categories: Activewear, Sports Uniforms, and Gym Wear, with full responsiveness, accessibility, and SEO optimization.

## Components

### 1. ProductCard Component

A reusable product card component that displays individual products with consistent styling.

#### Features:
- **Responsive design** with proper image handling
- **Theme support** (dark/light modes)
- **Hover animations** with smooth transitions
- **Rating display** with star system
- **Price formatting** with sale indicators
- **CTA buttons** with customizable text and links
- **Accessibility** with proper ARIA labels and keyboard navigation

#### Props:
```tsx
interface ProductCardProps {
  product: Product              // Product data object
  className?: string           // Additional CSS classes
  showCTA?: boolean           // Show/hide CTA button
  showRating?: boolean        // Show/hide rating stars
  showPrice?: boolean         // Show/hide price
}
```

#### Usage:
```tsx
import { ProductCard } from '@/components/ProductCard'
import { products } from '@/data/products'

<ProductCard 
  product={products[0]}
  showCTA={true}
  showRating={true}
  showPrice={true}
/>
```

### 2. ProductShowcase Component

A container component that displays multiple products in a responsive grid layout.

#### Features:
- **Responsive grid** (1-4 columns based on screen size)
- **Section headers** with customizable title and subtitle
- **Optional category filtering**
- **View all button** with customizable link
- **Empty state** handling
- **Smooth animations** with Framer Motion

#### Props:
```tsx
interface ProductShowcaseProps {
  title?: string              // Section title
  subtitle?: string           // Section subtitle
  products: Product[]         // Array of products
  category?: string          // Category name for ID
  showCategoryFilter?: boolean // Show category filter buttons
  showViewAllButton?: boolean  // Show view all button
  viewAllLink?: string        // Link for view all button
  className?: string          // Additional CSS classes
  gridCols?: {               // Grid column configuration
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
}
```

#### Usage:
```tsx
import { ProductShowcase } from '@/components/ProductShowcase'
import { products } from '@/data/products'

<ProductShowcase
  title="Featured Products"
  subtitle="Discover our premium collection"
  products={products.slice(0, 8)}
  showCategoryFilter={false}
  showViewAllButton={true}
  gridCols={{ sm: 1, md: 2, lg: 3, xl: 4 }}
/>
```

### 3. CategoryShowcase Component

A specialized component for displaying products by category.

#### Features:
- **Category-specific** titles and descriptions
- **Automatic filtering** by category
- **Consistent styling** across categories
- **SEO-friendly** structure

#### Props:
```tsx
interface CategoryShowcaseProps {
  category: 'Activewear' | 'Sports Uniforms' | 'Gym Wear'
  showCategoryFilter?: boolean
  showViewAllButton?: boolean
  className?: string
}
```

#### Usage:
```tsx
import { CategoryShowcase } from '@/components/CategoryShowcase'

<CategoryShowcase 
  category="Activewear"
  showCategoryFilter={true}
  showViewAllButton={true}
/>
```

### 4. AllProducts Component

A comprehensive component for browsing all products with search and filtering.

#### Features:
- **Search functionality** across product names and descriptions
- **Category filtering** with button interface
- **Results counter** showing filtered count
- **Responsive design** for all screen sizes

#### Usage:
```tsx
import { AllProducts } from '@/components/AllProducts'

<AllProducts />
```

## Product Data Structure

### Product Interface
```tsx
interface Product {
  id: number
  name: string
  category: 'Activewear' | 'Sports Uniforms' | 'Gym Wear'
  subcategory?: string
  price: number
  originalPrice?: number
  image: string
  description: string
  shortDescription: string
  features: string[]
  sizes: string[]
  colors: string[]
  inStock: boolean
  rating: number
  reviews: number
  ctaText?: string
  ctaLink?: string
}
```

### Categories
- **Activewear**: Running, Training, Women's activewear
- **Sports Uniforms**: Basketball, Soccer, Baseball, Volleyball
- **Gym Wear**: Tops, Bottoms, Hoodies, Tank tops

## Usage Examples

### 1. Featured Products Section
```tsx
import { FeaturedProducts } from '@/components/FeaturedProducts'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <AboutSection />
    </main>
  )
}
```

### 2. Category-Specific Page
```tsx
import { CategoryShowcase } from '@/components/CategoryShowcase'

export default function ActivewearPage() {
  return (
    <div>
      <Hero {...heroConfigs.products} />
      <CategoryShowcase category="Activewear" />
    </div>
  )
}
```

### 3. All Products Page
```tsx
import { AllProducts } from '@/components/AllProducts'

export default function ProductsPage() {
  return (
    <div>
      <Navbar />
      <AllProducts />
      <Footer />
    </div>
  )
}
```

### 4. Custom Product Grid
```tsx
import { ProductShowcase } from '@/components/ProductShowcase'
import { getProductsByCategory } from '@/data/products'

export default function CustomPage() {
  const activewearProducts = getProductsByCategory('Activewear')
  
  return (
    <ProductShowcase
      title="Activewear Collection"
      subtitle="High-performance gear for athletes"
      products={activewearProducts}
      gridCols={{ sm: 1, md: 2, lg: 2, xl: 3 }}
      showViewAllButton={false}
    />
  )
}
```

## Responsive Design

### Grid Layouts
- **Mobile (sm)**: 1 column
- **Tablet (md)**: 2 columns
- **Desktop (lg)**: 3 columns
- **Large Desktop (xl)**: 4 columns

### Breakpoints
- `sm`: 640px and up
- `md`: 768px and up
- `lg`: 1024px and up
- `xl`: 1280px and up

## Accessibility Features

### ProductCard
- **Semantic HTML** with proper heading structure
- **ARIA labels** for interactive elements
- **Keyboard navigation** support
- **Focus indicators** for all interactive elements
- **Alt text** for product images
- **Screen reader** friendly content

### ProductShowcase
- **Section landmarks** with proper IDs
- **Heading hierarchy** (H2 for section titles)
- **Button accessibility** with proper roles
- **Color contrast** meeting WCAG guidelines

## Performance Optimizations

### Image Handling
- **Lazy loading** for product images
- **Placeholder gradients** while images load
- **Optimized image sizes** for different screen sizes
- **Fallback handling** for missing images

### Animation Performance
- **Framer Motion** for smooth animations
- **Hardware acceleration** for transform animations
- **Reduced motion** support for accessibility
- **Optimized re-renders** with React.memo

### Code Splitting
- **Component-based** architecture for lazy loading
- **Tree shaking** friendly imports
- **Minimal bundle size** with efficient code structure

## SEO Features

### Semantic Structure
- **Proper heading hierarchy** (H1, H2, H3)
- **Structured data** for products
- **Meta descriptions** from product data
- **URL-friendly** category names

### Content Optimization
- **Product keywords** in titles and descriptions
- **Category-specific** content
- **Rich snippets** support
- **Internal linking** between categories

## Theme Integration

### Color Scheme
- **Primary Red**: #FF0000 for CTAs and accents
- **Dark Theme**: Black backgrounds with white text
- **Light Theme**: White backgrounds with black text
- **Consistent spacing** and typography

### CSS Custom Properties
```css
:root {
  --bg-primary: #FFFFFF;
  --text-primary: #000000;
  --accent-primary: #FF0000;
}

.dark {
  --bg-primary: #000000;
  --text-primary: #FFFFFF;
  --accent-primary: #FF0000;
}
```

## Best Practices

### 1. Performance
- Use `React.memo` for expensive components
- Implement proper loading states
- Optimize images for web delivery
- Use efficient filtering algorithms

### 2. Accessibility
- Provide meaningful alt text for images
- Ensure keyboard navigation works
- Test with screen readers
- Maintain proper color contrast

### 3. SEO
- Use descriptive product names
- Include relevant keywords naturally
- Structure content with proper headings
- Optimize for local search

### 4. User Experience
- Keep CTAs clear and prominent
- Provide clear product information
- Use consistent styling across components
- Implement smooth transitions

## Browser Support

- **Modern browsers**: Full support
- **Mobile browsers**: Optimized for touch
- **Screen readers**: Full accessibility support
- **JavaScript disabled**: Graceful fallbacks

## Future Enhancements

### Planned Features
- **Advanced filtering** (price, size, color)
- **Product comparison** functionality
- **Wishlist** feature
- **Quick view** modal
- **Product reviews** system
- **Stock status** indicators
- **Related products** suggestions
