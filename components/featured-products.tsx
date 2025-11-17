'use client'

import { ShoppingCart, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const products = [
  {
    id: 1,
    name: 'Velvet Evening Dress',
    category: 'Dresses',
    price: 289,
    image: '/elegant-black-velvet-evening-dress-on-model.jpg',
    badge: 'New',
  },
  {
    id: 2,
    name: 'Silk Blazer',
    category: 'Outerwear',
    price: 349,
    image: '/sophisticated-silk-blazer-fashion-photography.jpg',
    badge: 'Trending',
  },
  {
    id: 3,
    name: 'Cashmere Sweater',
    category: 'Knitwear',
    price: 199,
    image: '/luxury-cashmere-sweater-minimal-style.jpg',
    badge: null,
  },
  {
    id: 4,
    name: 'Tailored Trousers',
    category: 'Bottoms',
    price: 159,
    image: '/elegant-tailored-trousers-women-fashion.jpg',
    badge: 'Limited',
  },
]

export function FeaturedProducts() {
  return (
    <section id="new" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-balance mb-4">
            Selecionado para <span className="text-primary">Excelência</span>
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada peça é cuidadosamente selecionada para lhe proporcionar qualidade incomparável e elegância atemporal. Descubra o seu próximo estilo único.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group relative overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    {product.badge}
                  </div>
                )}

                {/* Wishlist Button */}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Adicionar à lista de desejos</span>
                </Button>

                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Adição rápida
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                  {product.category}
                </div>
                <h4 className="font-semibold text-foreground mb-3 text-pretty">
                  {product.name}
                </h4>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-foreground">
                    ${product.price}
                  </span>
                  <span className="text-sm text-muted-foreground">Free Shipping</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
            Ver todos os produtos
          </Button>
        </div>
      </div>
    </section>
  )
}
