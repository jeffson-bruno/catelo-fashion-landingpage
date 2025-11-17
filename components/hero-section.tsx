'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-medium text-foreground/90">Nova Coleção 2025</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-balance leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Elegância <span className="text-primary">Refino</span> e o que há de moderno no universo feminino
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Descubra peças selecionadas que personificam a sofisticação, criadas para quem aprecia o melhor da moda. Coleções limitadas, estilo atemporal.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-[200px] group">
              Explorar Coleção
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="min-w-[200px] border-border hover:bg-secondary">
              Ver Lookbook
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Peças Exclusivas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Taxa de satisfação</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Suport VIP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
