'use client'

import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ExclusiveBanner() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 p-8 lg:p-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold text-foreground">Acesso VIP</span>
            </div>

            <h3 className="text-3xl md:text-5xl font-serif font-bold text-balance mb-6">
              Junte-se à Castelo <span className="text-primary">Círculo Interno</span>
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Obtenha acesso as novas coleções, vendas privadas, consultorias personalizadas. A adesão é gratuita para membros exigentes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:w-80 px-6 py-4 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                Acesso VIP
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              Ao se inscrever você concorda em receber ofertas exclusivas. Cancele a qualquer momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
