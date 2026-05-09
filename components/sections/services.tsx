'use client'

import { motion } from 'framer-motion'
import { Home, Building2, AlertTriangle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description:
      'Complete roof replacements, repairs, and maintenance for homes of all sizes. We specialize in asphalt shingles, metal roofing, and tile installations with manufacturer-backed warranties.',
    features: ['Full Roof Replacement', 'Shingle Repair', 'Gutter Installation', 'Attic Ventilation'],
    image: '/images/service-residential.jpg',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description:
      'Professional roofing solutions for businesses, warehouses, and multi-unit properties. Our team handles flat roofs, TPO, EPDM, and metal commercial systems with minimal disruption to your operations.',
    features: ['Flat Roof Systems', 'TPO & EPDM', 'Metal Roofing', 'Preventive Maintenance'],
    image: '/images/service-commercial.jpg',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Repairs',
    description:
      'Storm damage, leaks, or sudden failures demand immediate attention. Our rapid response team is available 24/7 to protect your property with temporary repairs and permanent solutions.',
    features: ['24/7 Response', 'Storm Damage', 'Leak Detection', 'Insurance Claims'],
    image: '/images/service-emergency.jpg',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function Services() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="bg-cream-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-warm">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-deep sm:text-4xl lg:text-5xl">
            <span className="text-balance">Comprehensive Roofing Solutions</span>
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-gray-professional">
            From routine maintenance to complete replacements, we handle every roofing challenge
            with the same dedication to quality that has defined our family business for 35 years.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 overflow-hidden bg-slate-deep/10">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundColor: '#e5e7eb',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-deep/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-warm">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-deep">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-professional">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-4 grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-slate-deep"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-warm" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  onClick={scrollToContact}
                  variant="ghost"
                  className="mt-6 w-full justify-between text-orange-warm hover:bg-orange-warm/10 hover:text-orange-hover"
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
