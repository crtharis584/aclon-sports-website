import { SubcategoryShowcase } from '@/components/SubcategoryShowcase'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function BasketballJerseysPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SubcategoryShowcase 
        category="Sports Uniforms"
        subcategory="Basketball Jerseys"
        showSubcategoryFilter={true}
        showViewAllButton={true}
      />
      <Footer />
    </main>
  )
}
