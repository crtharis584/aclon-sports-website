export interface Product {
  id: number
  name: string
  category: 'Activewear' | 'Sports Uniforms' | 'Gym Wear'
  subcategory: string
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

export const products: Product[] = [
  // Activewear Products
  {
    id: 1,
    name: 'Premium Yoga Leggings',
    category: 'Activewear',
    subcategory: 'Yoga Leggings',
    price: 89.99,
    originalPrice: 119.99,
    image: '/images/products/activewear/yoga-leggings.jpg',
    description: 'High-waisted yoga leggings with four-way stretch and moisture-wicking technology for ultimate comfort during practice.',
    shortDescription: 'High-waisted with four-way stretch and moisture-wicking',
    features: [
      'High-waisted design',
      'Four-way stretch fabric',
      'Moisture-wicking technology',
      'Squat-proof material',
      'Pocket design'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Gray', 'Purple'],
    inStock: true,
    rating: 4.8,
    reviews: 1247,
    ctaText: 'View Details',
    ctaLink: '#product-1'
  },
  {
    id: 2,
    name: 'High-Impact Sports Bra',
    category: 'Activewear',
    subcategory: 'Sports Bras',
    price: 64.99,
    image: '/images/products/activewear/sports-bra.jpg',
    description: 'High-impact sports bra with adjustable straps and removable padding for maximum support during intense workouts.',
    shortDescription: 'High-impact support with adjustable straps',
    features: [
      'High-impact support',
      'Adjustable straps',
      'Removable padding',
      'Moisture-wicking',
      'Racerback design'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Pink', 'Purple'],
    inStock: true,
    rating: 4.6,
    reviews: 892,
    ctaText: 'Order Now',
    ctaLink: '#product-2'
  },
  {
    id: 3,
    name: 'Performance Running Shorts',
    category: 'Activewear',
    subcategory: 'Running Shorts',
    price: 54.99,
    originalPrice: 69.99,
    image: '/images/products/activewear/running-shorts.jpg',
    description: 'Lightweight running shorts with built-in liner and zippered pocket for essential items during your run.',
    shortDescription: 'Lightweight with built-in liner and zippered pocket',
    features: [
      'Built-in liner',
      'Zippered pocket',
      'Lightweight fabric',
      'Moisture-wicking',
      'Reflective details'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray', 'Navy', 'Red'],
    inStock: true,
    rating: 4.7,
    reviews: 1563,
    ctaText: 'View Details',
    ctaLink: '#product-3'
  },
  {
    id: 4,
    name: 'Compression Performance Top',
    category: 'Activewear',
    subcategory: 'Compression Tops',
    price: 79.99,
    image: '/images/products/activewear/compression-top.jpg',
    description: 'High-performance compression top with UV protection and anti-odor treatment for enhanced muscle support.',
    shortDescription: 'High-performance compression with UV protection',
    features: [
      'Compression fit',
      'UV protection',
      'Anti-odor treatment',
      'Moisture-wicking',
      'Four-way stretch'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Navy'],
    inStock: true,
    rating: 4.9,
    reviews: 2156,
    ctaText: 'Order Now',
    ctaLink: '#product-4'
  },
  {
    id: 5,
    name: 'Training Jacket',
    category: 'Activewear',
    subcategory: 'Training Jackets',
    price: 129.99,
    image: '/images/products/activewear/training-jacket.jpg',
    description: 'Versatile training jacket with water-resistant finish and multiple pockets for outdoor workouts.',
    shortDescription: 'Water-resistant with multiple pockets',
    features: [
      'Water-resistant finish',
      'Multiple pockets',
      'Adjustable hood',
      'Breathable fabric',
      'Reflective elements'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Gray', 'Navy', 'Charcoal'],
    inStock: true,
    rating: 4.5,
    reviews: 987,
    ctaText: 'View Details',
    ctaLink: '#product-5'
  },

  // Sports Uniforms Products
  {
    id: 6,
    name: 'Pro Basketball Jersey',
    category: 'Sports Uniforms',
    subcategory: 'Basketball Jerseys',
    price: 79.99,
    originalPrice: 99.99,
    image: '/images/products/uniforms/basketball-jersey.jpg',
    description: 'Professional-grade basketball jersey with mesh construction and ventilated design for optimal performance.',
    shortDescription: 'Mesh construction with ventilated design',
    features: [
      'Mesh construction',
      'Ventilated design',
      'Number customization',
      'Team colors available',
      'Durable stitching'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Red', 'Blue'],
    inStock: true,
    rating: 4.9,
    reviews: 2156,
    ctaText: 'Customize',
    ctaLink: '#product-6'
  },
  {
    id: 7,
    name: 'Complete Soccer Kit',
    category: 'Sports Uniforms',
    subcategory: 'Soccer Kits',
    price: 149.99,
    image: '/images/products/uniforms/soccer-kit.jpg',
    description: 'Complete soccer kit including jersey, shorts, and socks with team customization options.',
    shortDescription: 'Complete kit with jersey, shorts, and socks',
    features: [
      'Team customization',
      'Moisture-wicking fabric',
      'Ventilated design',
      'Number printing',
      'Logo embroidery'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Red', 'Blue', 'Green'],
    inStock: true,
    rating: 4.8,
    reviews: 1892,
    ctaText: 'Get Quote',
    ctaLink: '#product-7'
  },
  {
    id: 8,
    name: 'American Football Uniform',
    category: 'Sports Uniforms',
    subcategory: 'American Football Uniforms',
    price: 199.99,
    image: '/images/products/uniforms/football-uniform.jpg',
    description: 'Professional American football uniform with reinforced stitching and team color customization.',
    shortDescription: 'Professional uniform with reinforced stitching',
    features: [
      'Reinforced stitching',
      'Team customization',
      'Number printing',
      'Durable fabric',
      'Comfortable fit'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Red', 'Blue'],
    inStock: true,
    rating: 4.7,
    reviews: 1345,
    ctaText: 'Customize',
    ctaLink: '#product-8'
  },
  {
    id: 9,
    name: 'Baseball Jersey',
    category: 'Sports Uniforms',
    subcategory: 'Baseball Jerseys',
    price: 89.99,
    image: '/images/products/uniforms/baseball-jersey.jpg',
    description: 'Authentic baseball jersey with button-up design and team number customization.',
    shortDescription: 'Authentic button-up design with team customization',
    features: [
      'Button-up design',
      'Team customization',
      'Number printing',
      'Authentic styling',
      'Comfortable fit'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Gray', 'Navy', 'Red'],
    inStock: true,
    rating: 4.6,
    reviews: 1123,
    ctaText: 'View Details',
    ctaLink: '#product-9'
  },
  {
    id: 10,
    name: 'Volleyball Team Uniform',
    category: 'Sports Uniforms',
    subcategory: 'Volleyball Uniforms',
    price: 119.99,
    image: '/images/products/uniforms/volleyball-uniform.jpg',
    description: 'Lightweight volleyball uniform designed for quick movements and team customization.',
    shortDescription: 'Lightweight design for quick movements',
    features: [
      'Lightweight fabric',
      'Quick-dry technology',
      'Team customization',
      'Number printing',
      'Comfortable fit'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Red', 'Blue'],
    inStock: true,
    rating: 4.5,
    reviews: 987,
    ctaText: 'Customize',
    ctaLink: '#product-10'
  },

  // Gym Wear Products
  {
    id: 11,
    name: 'Stringer Tank Top',
    category: 'Gym Wear',
    subcategory: 'Stringer Tank Tops',
    price: 44.99,
    image: '/images/products/gym-wear/stringer-tank.jpg',
    description: 'Classic stringer tank top for maximum freedom of movement and breathability during workouts.',
    shortDescription: 'Classic design for maximum freedom of movement',
    features: [
      'Classic stringer design',
      'Breathable fabric',
      'Moisture-wicking',
      'Comfortable fit',
      'Quick-dry technology'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Gray', 'Red'],
    inStock: true,
    rating: 4.8,
    reviews: 2234,
    ctaText: 'Order Now',
    ctaLink: '#product-11'
  },
  {
    id: 12,
    name: 'Premium Sweatpants',
    category: 'Gym Wear',
    subcategory: 'Sweatpants',
    price: 94.99,
    originalPrice: 109.99,
    image: '/images/products/gym-wear/sweatpants.jpg',
    description: 'Premium sweatpants with elastic waistband and side pockets for ultimate comfort.',
    shortDescription: 'Premium fabric with elastic waistband',
    features: [
      'Elastic waistband',
      'Side pockets',
      'Premium fabric',
      'Comfortable fit',
      'Ankle cuffs'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray', 'Navy', 'Charcoal'],
    inStock: true,
    rating: 4.7,
    reviews: 1563,
    ctaText: 'View Details',
    ctaLink: '#product-12'
  },
  {
    id: 13,
    name: 'Performance Hoodie',
    category: 'Gym Wear',
    subcategory: 'Hoodies',
    price: 84.99,
    image: '/images/products/gym-wear/hoodie.jpg',
    description: 'Performance hoodie with fleece lining and kangaroo pocket for pre and post-workout comfort.',
    shortDescription: 'Fleece lining with kangaroo pocket',
    features: [
      'Fleece lining',
      'Kangaroo pocket',
      'Drawstring hood',
      'Ribbed cuffs',
      'Moisture-wicking'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Gray', 'Navy', 'Charcoal'],
    inStock: true,
    rating: 4.8,
    reviews: 2234,
    ctaText: 'View Details',
    ctaLink: '#product-13'
  },
  {
    id: 14,
    name: 'Gym Shorts',
    category: 'Gym Wear',
    subcategory: 'Gym Shorts',
    price: 59.99,
    image: '/images/products/gym-wear/gym-shorts.jpg',
    description: 'Comfortable gym shorts with built-in liner and drawstring waist for ultimate workout comfort.',
    shortDescription: 'Comfortable with built-in liner',
    features: [
      'Built-in liner',
      'Drawstring waist',
      'Side pockets',
      'Quick-dry fabric',
      'Comfortable fit'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray', 'Navy', 'Charcoal'],
    inStock: true,
    rating: 4.6,
    reviews: 1456,
    ctaText: 'Order Now',
    ctaLink: '#product-14'
  },
  {
    id: 15,
    name: 'Performance T-Shirt',
    category: 'Gym Wear',
    subcategory: 'Performance T-Shirts',
    price: 49.99,
    originalPrice: 64.99,
    image: '/images/products/gym-wear/performance-tshirt.jpg',
    description: 'High-performance t-shirt with moisture-wicking technology and comfortable fit for intense workouts.',
    shortDescription: 'Moisture-wicking technology for intense workouts',
    features: [
      'Moisture-wicking',
      'Comfortable fit',
      'Quick-dry fabric',
      'Anti-odor treatment',
      'Four-way stretch'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Gray', 'Red'],
    inStock: true,
    rating: 4.7,
    reviews: 1789,
    ctaText: 'View Details',
    ctaLink: '#product-15'
  }
]

export const categories = [
  { 
    id: 'activewear', 
    name: 'Activewear', 
    count: products.filter(p => p.category === 'Activewear').length,
    description: 'High-performance activewear for running, training, and sports activities',
    subcategories: [
      'Yoga Leggings',
      'Sports Bras', 
      'Running Shorts',
      'Compression Tops',
      'Training Jackets'
    ]
  },
  { 
    id: 'sports-uniforms', 
    name: 'Sports Uniforms', 
    count: products.filter(p => p.category === 'Sports Uniforms').length,
    description: 'Professional team uniforms for basketball, soccer, baseball, and volleyball',
    subcategories: [
      'Basketball Jerseys',
      'Soccer Kits',
      'American Football Uniforms',
      'Baseball Jerseys',
      'Volleyball Uniforms'
    ]
  },
  { 
    id: 'gym-wear', 
    name: 'Gym Wear', 
    count: products.filter(p => p.category === 'Gym Wear').length,
    description: 'Comfortable gym wear for workouts and training sessions',
    subcategories: [
      'Stringer Tank Tops',
      'Sweatpants',
      'Hoodies',
      'Gym Shorts',
      'Performance T-Shirts'
    ]
  }
]

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  )
}

export const getProductsBySubcategory = (subcategory: string): Product[] => {
  return products.filter(product => 
    product.subcategory.toLowerCase() === subcategory.toLowerCase()
  )
}

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id)
}

export const getSubcategoriesByCategory = (category: string): string[] => {
  const categoryData = categories.find(cat => cat.name.toLowerCase() === category.toLowerCase())
  return categoryData?.subcategories || []
}
