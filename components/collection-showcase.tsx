'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const collections = [
  {
    title: 'Spring Essentials',
    description: 'Light fabrics meet bold statements',
    image: '/spring-fashion-collection-elegant-dress.jpg',
    items: '24 pieces',
  },
  {
    title: 'Executive Power',
    description: 'Commanding presence, refined style',
    image: '/business-professional-women-fashion-suit.jpg',
    items: '18 pieces',
  },
  {
    title: 'Evening Grace',
    description: 'Unforgettable moments deserve unforgettable style',
    image: '/elegant-evening-gown-luxury-fashion.jpg',
    items: '16 pieces',
  },
]

export function CollectionShowcase() {
  return (
    <section id="collections" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-balance mb-4">
            Signature <span className="text-primary">Collections</span>
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Thoughtfully designed collections for every moment that matters. From boardroom to ballroom, find your perfect ensemble.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <div
              key={collection.title}
              className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Collection Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90" />
                
                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                  <div className="text-xs text-primary font-semibold mb-2 uppercase tracking-wider">
                    {collection.items}
                  </div>
                  <h4 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-3 text-pretty">
                    {collection.title}
                  </h4>
                  <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
                    {collection.description}
                  </p>
                  <Button
                    variant="outline"
                    className="border-foreground/20 hover:border-primary hover:bg-primary hover:text-primary-foreground group/btn"
                  >
                    Explore Collection
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
