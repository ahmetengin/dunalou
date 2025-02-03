import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ProductsSection from '@/components/sections/ProductsSection'
import CollectionGallerySection from '@/components/sections/CollectionGallerySection'
import CategoryShowcase from '@/components/sections/CategoryShowcase'

export const metadata: Metadata = {
  title: 'Ana Sayfa | DINA LOU',
  description: 'İtalyan modasının en seçkin parçaları, modern tasarımlar ve özel koleksiyonlar.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="flex flex-col">
        <section id="hero">
          <HeroSection />
        </section>

        <section id="products" className="py-20">
          <ProductsSection />
        </section>

        <section>
          <CategoryShowcase />
        </section>

        <section>
          <CollectionGallerySection />
        </section>
      </div>
    </main>
  )
}
