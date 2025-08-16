import { CategoryShowcase } from '@/components/CategoryShowcase'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { heroConfigs } from '@/data/hero'

export default function GymWearPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero {...heroConfigs.products} />
      <CategoryShowcase 
        category="Gym Wear"
        showCategoryFilter={true}
        showViewAllButton={true}
      />
      <Footer />
    </main>
  )
}
