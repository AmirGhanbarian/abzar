import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { CategoryStrip } from './components/CategoryStrip'
import { ProductGrid } from './components/ProductGrid'
import { FeaturedBanner } from './components/FeaturedBanner'
import { ValueProps } from './components/ValueProps'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'
import { CartDrawer } from './components/CartDrawer'
import { QuickViewModal } from './components/QuickViewModal'
import type { CategoryId, Product } from './types'

export default function App() {
  const [active, setActive] = useState<CategoryId | 'all'>('all')
  const [quickView, setQuickView] = useState<Product | null>(null)

  const handleSelectCategory = (id: CategoryId | 'all') => {
    setActive(id)
    document
      .getElementById('shop')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-ink-950">
      <Header />
      <main>
        <Hero />
        <CategoryStrip active={active} onSelect={handleSelectCategory} />
        <ProductGrid
          active={active}
          onSelect={setActive}
          onQuickView={setQuickView}
        />
        <FeaturedBanner />
        <ValueProps />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer />
      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </div>
  )
}
