'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, Hammer, BadgeCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

const guarantees = [
  {
    icon: Shield,
    title: '25-Year Workmanship Warranty',
    description:
      'We stand behind every nail we drive. If our workmanship fails within 25 years, we fix it free of charge. No questions, no hassle.',
  },
  {
    icon: Clock,
    title: 'On-Time or $500 Off',
    description:
      'We respect your time. If we do not complete your project by the agreed date (weather permitting), we will take $500 off your final bill.',
  },
  {
    icon: Hammer,
    title: 'Clean Site Promise',
    description:
      'We treat your property like our own. Daily cleanup, magnetic nail sweeps, and full debris removal. Your yard will look better than we found it.',
  },
  {
    icon: BadgeCheck,
    title: 'Price Match Plus',
    description:
      'Found a lower written quote from a licensed contractor? We will match it and beat it by 5%. Quality roofing should not cost more with us.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export function Guarantee() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-cream-white py-20 lg:py-28">
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
            The Miller Guarantee
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-deep sm:text-4xl lg:text-5xl">
            <span className="text-balance">Our Promise to You</span>
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-gray-professional">
            A handshake still means something to us. Every Miller & Sons project comes with these
            ironclad guarantees, backed by 35 years of keeping our word.
          </p>
        </motion.div>

        {/* Guarantee Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16"
        >
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-slate-deep/10 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg lg:p-8"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-warm/10">
                <guarantee.icon className="h-7 w-7 text-orange-warm" />
              </div>

              {/* Content */}
              <h3 className="mt-5 text-xl font-bold text-slate-deep">{guarantee.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-professional">{guarantee.description}</p>

              {/* Decorative Corner */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-warm/5 transition-transform duration-500 group-hover:scale-150" />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-2xl bg-slate-deep p-8 lg:mt-16 lg:p-12"
        >
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-cream-white">Licensed. Bonded. Insured.</h3>
              <p className="mt-2 text-cream-white/70">
                Full protection for your property and our workers. Verified credentials available
                upon request.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {['Licensed Contractor', 'Fully Insured', 'Bonded', 'BBB A+ Rated'].map(
                (badge, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-full bg-cream-white/10 px-4 py-2"
                  >
                    <BadgeCheck className="h-4 w-4 text-orange-warm" />
                    <span className="text-sm font-medium text-cream-white">{badge}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center lg:mt-10">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-orange-warm px-8 text-white hover:bg-orange-hover"
            >
              Get Your Free Estimate
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
