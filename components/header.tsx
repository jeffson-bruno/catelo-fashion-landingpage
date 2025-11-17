'use client'

import { useState } from 'react'
import { ShoppingBag, Menu, X, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl lg:text-3xl font-serif font-bold tracking-tight">
              <span className="text-foreground">CASTELO</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#new" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Novidades
            </a>
            <a href="#collections" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Coleções
            </a>
            <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Sobre
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Contato
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">Pesquisar</span>
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary rounded-full text-[10px] font-bold flex items-center justify-center text-primary-foreground">
                0
              </span>
              <span className="sr-only">Sacola de compras</span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col gap-4">
              <a href="#new" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2">
                Novidades
              </a>
              <a href="#collections" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2">
                Coleções
              </a>
              <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2">
                Sobre
              </a>
              <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2">
                Contato
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
