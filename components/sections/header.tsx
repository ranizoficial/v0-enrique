'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#timeline', label: 'Our Story' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#gallery', label: 'Our Work' },
  { href: '#faq', label: 'FAQ' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-deep/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-warm">
              <span className="text-lg font-bold text-white">M</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-bold text-cream-white">Miller & Sons</p>
              <p className="-mt-1 text-xs text-cream-white/70">Roofing Since 1989</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-cream-white/90 transition-colors hover:text-orange-warm"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:+15557663349"
              className="flex items-center gap-2 text-sm font-medium text-cream-white/90 transition-colors hover:text-orange-warm"
            >
              <Phone className="h-4 w-4" />
              <span>(555) 766-3349</span>
            </a>
            <Button
              onClick={scrollToContact}
              className="bg-orange-warm text-white hover:bg-orange-hover"
            >
              Free Estimate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-cream-white/10 lg:hidden"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-cream-white" />
            ) : (
              <Menu className="h-5 w-5 text-cream-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-slate-deep lg:hidden"
          >
            <nav className="flex flex-col gap-2 px-4 py-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="rounded-lg px-4 py-3 text-left text-sm font-medium text-cream-white/90 transition-colors hover:bg-cream-white/10 hover:text-orange-warm"
                >
                  {link.label}
                </button>
              ))}
              <div className="my-2 border-t border-cream-white/10" />
              <a
                href="tel:+15557663349"
                className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-cream-white/90 transition-colors hover:bg-cream-white/10"
              >
                <Phone className="h-4 w-4" />
                <span>(555) 766-3349</span>
              </a>
              <Button
                onClick={scrollToContact}
                className="mt-2 w-full bg-orange-warm text-white hover:bg-orange-hover"
              >
                Get Free Estimate
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
