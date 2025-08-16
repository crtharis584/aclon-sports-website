import { SubcategoryShowcase } from '@/components/SubcategoryShowcase'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function PerformanceTShirtsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SubcategoryShowcase 
        category="Gym Wear"
        subcategory="Performance T-Shirts"
        showSubcategoryFilter={true}
        showViewAllButton={true}
      />
      <Footer />
    </main>
  )
}
