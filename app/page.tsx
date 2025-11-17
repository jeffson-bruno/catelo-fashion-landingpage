import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { FeaturedProducts } from '@/components/featured-products'
import { CollectionShowcase } from '@/components/collection-showcase'
import { ExclusiveBanner } from '@/components/exclusive-banner'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <CollectionShowcase />
      <ExclusiveBanner />
      <Footer />
    </main>
  )
}
