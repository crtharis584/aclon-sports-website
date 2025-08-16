# Product Subpages System Documentation

## Overview

The Product Subpages System provides a hierarchical structure for organizing and displaying products by category and subcategory. It supports the three main categories (Activewear, Sports Uniforms, Gym Wear) with their respective subcategories, creating a comprehensive product browsing experience.

## Product Structure

### Main Categories
1. **Activewear** - High-performance activewear for sports and fitness
2. **Sports Uniforms** - Professional team uniforms for various sports
3. **Gym Wear** - Comfortable gym wear for workouts and training

### Subcategories

#### Activewear Subcategories (USA demand-based)
- **Yoga Leggings** - High-waisted leggings with four-way stretch
- **Sports Bras** - High-impact support bras for active women
- **Running Shorts** - Lightweight shorts with built-in liners
- **Compression Tops** - High-performance compression tops
- **Training Jackets** - Versatile jackets for outdoor training

#### Sports Uniforms Subcategories
- **Basketball Jerseys** - Professional basketball jerseys
- **Soccer Kits** - Complete soccer kits with customization
- **American Football Uniforms** - Professional football uniforms
- **Baseball Jerseys** - Authentic baseball jerseys
- **Volleyball Uniforms** - Lightweight volleyball uniforms

#### Gym Wear Subcategories
- **Stringer Tank Tops** - Classic stringer tank tops
- **Sweatpants** - Premium sweatpants with elastic waistbands
- **Hoodies** - Performance hoodies with fleece lining
- **Gym Shorts** - Comfortable gym shorts with built-in liners
- **Performance T-Shirts** - High-performance t-shirts

## Components

### 1. SubcategoryShowcase Component

A specialized component for displaying products filtered by subcategory with navigation and breadcrumbs.

#### Features:
- **Breadcrumb navigation** for easy navigation
- **Subcategory filtering** with active state indicators
- **Product grid display** using ProductCard components
- **SEO-friendly structure** with proper headings
- **Theme integration** (dark/light modes)

#### Props:
```tsx
interface SubcategoryShowcaseProps {
  category: 'Activewear' | 'Sports Uniforms' | 'Gym Wear'
  subcategory: string
  showSubcategoryFilter?: boolean
  showViewAllButton?: boolean
  className?: string
}
```

#### Usage:
```tsx
import { SubcategoryShowcase } from '@/components/SubcategoryShowcase'

<SubcategoryShowcase 
  category="Activewear"
  subcategory="Yoga Leggings"
  showSubcategoryFilter={true}
  showViewAllButton={true}
/>
```

### 2. Updated CategoryShowcase Component

Enhanced category component with subcategory navigation cards.

#### Features:
- **Subcategory navigation cards** with icons
- **Hover effects** and smooth transitions
- **Responsive grid layout** for navigation cards
- **Product showcase** for all category products
- **Theme-responsive design**

#### Usage:
```tsx
import { CategoryShowcase } from '@/components/CategoryShowcase'

<CategoryShowcase 
  category="Activewear"
  showSubcategoryFilter={true}
  showViewAllButton={true}
/>
```

## Page Structure

### Category Pages
- `/products/activewear` - Activewear category page
- `/products/sports-uniforms` - Sports Uniforms category page
- `/products/gym-wear` - Gym Wear category page

### Subcategory Pages
- `/products/activewear/yoga-leggings` - Yoga Leggings subcategory
- `/products/activewear/sports-bras` - Sports Bras subcategory
- `/products/sports-uniforms/basketball-jerseys` - Basketball Jerseys subcategory
- `/products/gym-wear/stringer-tank-tops` - Stringer Tank Tops subcategory
- And more...

## File Structure

```
src/
├── app/
│   └── products/
│       ├── activewear/
│       │   ├── page.tsx
│       │   └── yoga-leggings/
│       │       └── page.tsx
│       ├── sports-uniforms/
│       │   ├── page.tsx
│       │   └── basketball-jerseys/
│       │       └── page.tsx
│       └── gym-wear/
│           ├── page.tsx
│           └── stringer-tank-tops/
│               └── page.tsx
├── components/
│   ├── SubcategoryShowcase.tsx
│   ├── CategoryShowcase.tsx
│   ├── ProductShowcase.tsx
│   └── ProductCard.tsx
└── data/
    └── products.ts
```

## Usage Examples

### 1. Category Page (Activewear)
```tsx
// src/app/products/activewear/page.tsx
import { CategoryShowcase } from '@/components/CategoryShowcase'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { heroConfigs } from '@/data/hero'

export default function ActivewearPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero {...heroConfigs.products} />
      <CategoryShowcase 
        category="Activewear"
        showSubcategoryFilter={true}
        showViewAllButton={true}
      />
      <Footer />
    </main>
  )
}
```

### 2. Subcategory Page (Yoga Leggings)
```tsx
// src/app/products/activewear/yoga-leggings/page.tsx
import { SubcategoryShowcase } from '@/components/SubcategoryShowcase'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function YogaLeggingsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SubcategoryShowcase 
        category="Activewear"
        subcategory="Yoga Leggings"
        showSubcategoryFilter={true}
        showViewAllButton={true}
      />
      <Footer />
    </main>
  )
}
```

### 3. Custom Subcategory Implementation
```tsx
import { SubcategoryShowcase } from '@/components/SubcategoryShowcase'
import { getProductsBySubcategory } from '@/data/products'

export default function CustomSubcategoryPage() {
  const products = getProductsBySubcategory('Yoga Leggings')
  
  return (
    <SubcategoryShowcase 
      category="Activewear"
      subcategory="Yoga Leggings"
      showSubcategoryFilter={false}
      showViewAllButton={false}
    />
  )
}
```

## Navigation Features

### Breadcrumb Navigation
- **Home** → **Category** → **Subcategory**
- Clickable links for easy navigation
- Current page highlighted
- Theme-responsive styling

### Subcategory Filtering
- **Active state** for current subcategory
- **Hover effects** for better UX
- **Responsive design** for all screen sizes
- **Smooth transitions** between states

### Category Navigation Cards
- **Icon representation** for each subcategory
- **Hover animations** with scale effects
- **Grid layout** that adapts to screen size
- **Consistent styling** across all categories

## SEO Features

### URL Structure
- **SEO-friendly URLs** with hyphens
- **Hierarchical structure** for better indexing
- **Descriptive page names** for user understanding

### Meta Information
- **Category-specific titles** and descriptions
- **Subcategory-specific content** for targeted SEO
- **Proper heading hierarchy** (H1, H2, H3)
- **Structured data** for search engines

### Content Optimization
- **Product-specific descriptions** for each subcategory
- **Keyword-rich content** naturally integrated
- **Internal linking** between related categories
- **Alt text** for all images and icons

## Responsive Design

### Mobile-First Approach
- **Single column layout** on mobile devices
- **Touch-friendly navigation** with proper spacing
- **Optimized images** for fast loading
- **Readable typography** at all sizes

### Tablet Optimization
- **Two-column grid** for better space utilization
- **Larger touch targets** for better usability
- **Balanced spacing** between elements
- **Optimized navigation** for touch interaction

### Desktop Experience
- **Multi-column layouts** for product grids
- **Hover effects** for enhanced interactivity
- **Efficient use of screen real estate**
- **Professional appearance** for high-end feel

## Performance Optimizations

### Code Splitting
- **Page-based splitting** for faster initial loads
- **Component lazy loading** for better performance
- **Optimized imports** to reduce bundle size

### Image Optimization
- **Lazy loading** for product images
- **Responsive images** for different screen sizes
- **Placeholder gradients** while images load
- **Optimized file formats** for web delivery

### Caching Strategy
- **Static generation** for category pages
- **Incremental static regeneration** for dynamic content
- **Efficient data fetching** with proper caching
- **Minimal re-renders** with optimized state management

## Accessibility Features

### Navigation
- **Keyboard navigation** support
- **Focus indicators** for all interactive elements
- **ARIA labels** for screen readers
- **Semantic HTML** structure

### Content
- **Proper heading hierarchy** for screen readers
- **Alt text** for all images and icons
- **Color contrast** meeting WCAG guidelines
- **Screen reader friendly** content structure

### Interactive Elements
- **Touch-friendly** button sizes (minimum 44px)
- **Clear focus states** for keyboard users
- **Descriptive link text** for better understanding
- **Error handling** with helpful messages

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
- Use static generation for category pages
- Implement proper image optimization
- Minimize JavaScript bundle size
- Use efficient filtering algorithms

### 2. SEO
- Create unique titles for each subcategory
- Use descriptive URLs with keywords
- Implement proper meta descriptions
- Structure content with semantic HTML

### 3. User Experience
- Provide clear navigation paths
- Use consistent styling across pages
- Implement smooth transitions
- Ensure fast loading times

### 4. Accessibility
- Test with screen readers
- Ensure keyboard navigation works
- Maintain proper color contrast
- Use semantic HTML elements

## Future Enhancements

### Planned Features
- **Advanced filtering** (price, size, color, brand)
- **Product comparison** functionality
- **Wishlist** feature
- **Quick view** modal for products
- **Product reviews** and ratings system
- **Stock status** indicators
- **Related products** suggestions
- **Personalized recommendations**

### Technical Improvements
- **Server-side rendering** for better SEO
- **Progressive Web App** features
- **Offline functionality** with service workers
- **Advanced caching** strategies
- **Real-time inventory** updates
- **Analytics integration** for better insights
