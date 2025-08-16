export interface ManufacturingItem {
  id: number
  title: string
  description: string
  image: string
  category: 'Fabric' | 'Machinery' | 'Sample Product'
  features?: string[]
  specifications?: Record<string, string>
  altText: string
}

export const manufacturingItems: ManufacturingItem[] = [
  // Fabric Items
  {
    id: 1,
    title: "Breathable Polyester Fabric",
    description: "Lightweight, durable fabric for high-performance activewear with superior moisture-wicking properties.",
    image: "/images/manufacturing/fabrics/breathable-polyester.jpg",
    category: "Fabric",
    features: [
      "Moisture-wicking technology",
      "UV protection",
      "Anti-odor treatment",
      "Four-way stretch",
      "Quick-dry finish"
    ],
    specifications: {
      "Weight": "150 GSM",
      "Composition": "92% Polyester, 8% Spandex",
      "Width": "150cm",
      "Finish": "DWR Coated"
    },
    altText: "High-quality breathable polyester fabric sample with moisture-wicking technology"
  },
  {
    id: 2,
    title: "Compression Spandex Blend",
    description: "Premium compression fabric designed for muscle support and enhanced performance during intense workouts.",
    image: "/images/manufacturing/fabrics/compression-spandex.jpg",
    category: "Fabric",
    features: [
      "Graduated compression",
      "Muscle support",
      "Temperature regulation",
      "Anti-chafe finish",
      "High elasticity"
    ],
    specifications: {
      "Weight": "180 GSM",
      "Composition": "85% Nylon, 15% Spandex",
      "Compression": "20-30 mmHg",
      "Recovery": "95%"
    },
    altText: "Premium compression spandex blend fabric with graduated compression technology"
  },
  {
    id: 3,
    title: "Sustainable Cotton Blend",
    description: "Eco-friendly cotton blend fabric perfect for casual sportswear with natural breathability and comfort.",
    image: "/images/manufacturing/fabrics/sustainable-cotton.jpg",
    category: "Fabric",
    features: [
      "Organic cotton",
      "Natural breathability",
      "Soft hand feel",
      "Biodegradable",
      "Fair trade certified"
    ],
    specifications: {
      "Weight": "200 GSM",
      "Composition": "70% Organic Cotton, 30% Recycled Polyester",
      "Certification": "GOTS, Fair Trade",
      "Finish": "Enzyme washed"
    },
    altText: "Sustainable cotton blend fabric with organic certification and natural breathability"
  },

  // Machinery Items
  {
    id: 4,
    title: "Automated Sewing Machine",
    description: "State-of-the-art computerized sewing machine for precise stitching and consistent quality across all products.",
    image: "/images/manufacturing/machinery/automated-sewing.jpg",
    category: "Machinery",
    features: [
      "Computerized control",
      "Auto-threading system",
      "Stitch monitoring",
      "Speed control",
      "Quality assurance"
    ],
    specifications: {
      "Speed": "5000 SPM",
      "Stitch Types": "200+",
      "Needle System": "DBx1",
      "Control": "Touchscreen"
    },
    altText: "Modern automated sewing machine with computerized control and precision stitching capabilities"
  },
  {
    id: 5,
    title: "Digital Cutting System",
    description: "Precision digital cutting system for accurate pattern cutting and minimal fabric waste in production.",
    image: "/images/manufacturing/machinery/digital-cutting.jpg",
    category: "Machinery",
    features: [
      "Laser precision cutting",
      "Pattern optimization",
      "Waste reduction",
      "Multi-layer cutting",
      "Real-time monitoring"
    ],
    specifications: {
      "Cutting Speed": "100m/min",
      "Precision": "±0.1mm",
      "Max Thickness": "50mm",
      "Table Size": "3.2m x 1.6m"
    },
    altText: "Advanced digital cutting system with laser precision for accurate pattern cutting"
  },
  {
    id: 6,
    title: "Quality Control Station",
    description: "Comprehensive quality control station ensuring every product meets our high standards before shipping.",
    image: "/images/manufacturing/machinery/quality-control.jpg",
    category: "Machinery",
    features: [
      "Automated inspection",
      "Defect detection",
      "Color matching",
      "Size verification",
      "Documentation"
    ],
    specifications: {
      "Inspection Speed": "200 pieces/hour",
      "Accuracy": "99.9%",
      "Camera Resolution": "4K",
      "AI Detection": "Enabled"
    },
    altText: "Quality control station with automated inspection and defect detection capabilities"
  },

  // Sample Products
  {
    id: 7,
    title: "Performance Running Shirt",
    description: "Sample of our premium running shirt showcasing advanced fabric technology and ergonomic design.",
    image: "/images/manufacturing/samples/running-shirt-sample.jpg",
    category: "Sample Product",
    features: [
      "Moisture-wicking fabric",
      "Ergonomic fit",
      "Reflective details",
      "Flatlock seams",
      "UPF 50+ protection"
    ],
    specifications: {
      "Fabric": "Breathable Polyester",
      "Weight": "150 GSM",
      "Fit": "Athletic",
      "Features": "Reflective, UV Protection"
    },
    altText: "Sample performance running shirt with moisture-wicking technology and ergonomic design"
  },
  {
    id: 8,
    title: "Compression Leggings",
    description: "Sample compression leggings demonstrating our advanced fabric technology and precision manufacturing.",
    image: "/images/manufacturing/samples/compression-leggings.jpg",
    category: "Sample Product",
    features: [
      "Graduated compression",
      "Seamless construction",
      "High waistband",
      "Pocket design",
      "Squat-proof material"
    ],
    specifications: {
      "Fabric": "Compression Spandex",
      "Compression": "20-30 mmHg",
      "Waist Height": "High-rise",
      "Features": "Seamless, Pocket"
    },
    altText: "Sample compression leggings with graduated compression and seamless construction"
  },
  {
    id: 9,
    title: "Team Jersey Prototype",
    description: "Prototype team jersey showcasing our customization capabilities and professional sports uniform quality.",
    image: "/images/manufacturing/samples/team-jersey.jpg",
    category: "Sample Product",
    features: [
      "Custom team colors",
      "Number printing",
      "Mesh construction",
      "Moisture management",
      "Durable stitching"
    ],
    specifications: {
      "Fabric": "Performance Mesh",
      "Printing": "Sublimation",
      "Fit": "Athletic",
      "Customization": "Full"
    },
    altText: "Team jersey prototype with custom colors, number printing, and professional sports uniform quality"
  }
]

export const getManufacturingItemsByCategory = (category: string): ManufacturingItem[] => {
  return manufacturingItems.filter(item => 
    item.category.toLowerCase() === category.toLowerCase()
  )
}

export const getManufacturingItemById = (id: number): ManufacturingItem | undefined => {
  return manufacturingItems.find(item => item.id === id)
}

export const manufacturingCategories = [
  {
    id: 'fabric',
    name: 'Fabrics',
    count: manufacturingItems.filter(item => item.category === 'Fabric').length,
    description: 'Premium fabrics for high-performance sportswear'
  },
  {
    id: 'machinery',
    name: 'Machinery',
    count: manufacturingItems.filter(item => item.category === 'Machinery').length,
    description: 'State-of-the-art manufacturing equipment'
  },
  {
    id: 'sample-product',
    name: 'Sample Products',
    count: manufacturingItems.filter(item => item.category === 'Sample Product').length,
    description: 'Finished products showcasing our capabilities'
  }
]
