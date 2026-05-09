'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Shield, Clock, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGradientMesh } from '@/components/ui/animated-gradient-mesh'

const trustBadges = [
  { icon: Shield, label: 'Licensed & Insured' },
  { icon: Clock, label: '35 Years Experience' },
  { icon: Award, label: '5-Star Rated' },
]

// Roofline silhouettes overlay
function RooflineSilhouettes() {
  const { scrollY } = useScroll()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const y1 = useTransform(scrollY, [0, 500], [0, 80])
  const y2 = useTransform(scrollY, [0, 500], [0, 40])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  if (!isMounted) return null

  return (
    <motion.div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ opacity }}>
      {/* Middle layer - suburban houses with rooflines */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-x-0 bottom-0 h-[40%]"
      >
        <svg
          viewBox="0 0 1440 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="xMidYMax slice"
        >
          <path
            d="M0 300V220L40 220L60 180L80 220L140 220L170 160L200 220L260 220L280 190L300 220L360 220V180L400 180L430 140L460 180L500 180V220L560 220L600 170L640 220L700 220L730 150L760 220L820 220L850 180L880 220L940 220L980 160L1020 220L1080 220L1110 190L1140 220L1200 220L1240 150L1280 220L1340 220L1370 170L1400 220L1440 220V300H0Z"
            fill="#1a2332"
            fillOpacity="0.6"
          />
        </svg>
      </motion.div>

      {/* Foreground layer - detailed rooflines */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-x-0 bottom-0 h-[25%]"
      >
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="xMidYMax slice"
        >
          <path
            d="M0 200V140L80 140L120 80L160 140L240 140L300 60L360 140L440 140L500 100L560 140L640 140L720 50L800 140L880 140L940 90L1000 140L1080 140L1160 70L1240 140L1320 140L1380 100L1440 140V200H0Z"
            fill="#1a2332"
            fillOpacity="0.85"
          />
        </svg>
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-deep">
      {/* Animated Gradient Mesh Background */}
      <AnimatedGradientMesh />
      
      {/* Roofline Silhouettes Overlay */}
      <RooflineSilhouettes />

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-warm/20 px-4 py-1.5 text-sm font-medium text-orange-warm">
              <span className="h-2 w-2 rounded-full bg-orange-warm" />
              Family-Owned Since 1989
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight text-cream-white sm:text-5xl md:text-6xl"
          >
            <span className="text-balance">
              Your Roof Protects Your Family.{' '}
              <span className="text-orange-warm">We Protect Your Roof.</span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-cream-white/80"
          >
            For 35 years, Miller & Sons has been the name local homeowners trust for quality roof
            repairs, replacements, and emergency services. Licensed, bonded, and backed by our
            ironclad guarantee.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-orange-warm px-8 py-6 text-base font-semibold text-white hover:bg-orange-hover"
            >
              Get Your Free Estimate
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-cream-white/30 bg-transparent px-8 py-6 text-base font-semibold text-cream-white hover:bg-cream-white/10"
              asChild
            >
              <a href="tel:+15557663349">Call Arthur: (555) 766-3349</a>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-white/10">
                  <badge.icon className="h-5 w-5 text-orange-warm" />
                </div>
                <span className="text-sm font-medium text-cream-white/90">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-cream-white/50">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-10 w-6 rounded-full border-2 border-cream-white/30 p-1"
            >
              <div className="h-2 w-full rounded-full bg-orange-warm" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
