'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'Colonial Revival in Oak Ridge',
    category: 'Full Replacement',
    beforeImage: '/images/gallery/before-1.jpg',
    afterImage: '/images/gallery/after-1.jpg',
    description: 'Complete tear-off and installation of architectural shingles with new ventilation system.',
  },
  {
    title: 'Storm Damage in Riverside',
    category: 'Emergency Repair',
    beforeImage: '/images/gallery/before-2.jpg',
    afterImage: '/images/gallery/after-2.jpg',
    description: 'Hail damage repair with insurance coordination and matching of existing materials.',
  },
  {
    title: 'Commercial Warehouse',
    category: 'Commercial',
    beforeImage: '/images/gallery/before-3.jpg',
    afterImage: '/images/gallery/after-3.jpg',
    description: 'TPO membrane installation on 25,000 sq ft flat roof with minimal business disruption.',
  },
  {
    title: 'Victorian Restoration',
    category: 'Specialty',
    beforeImage: '/images/gallery/before-4.jpg',
    afterImage: '/images/gallery/after-4.jpg',
    description: 'Historic home roof restoration using period-appropriate cedar shakes.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function Gallery() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="gallery" className="bg-slate-deep py-20 lg:py-28">
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
            Our Work
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-cream-white sm:text-4xl lg:text-5xl">
            <span className="text-balance">Before & After Transformations</span>
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-cream-white/70">
            See the difference quality craftsmanship makes. Every project showcases our commitment
            to excellence and attention to detail.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group overflow-hidden rounded-2xl bg-cream-white/5"
            >
              {/* Before/After Images */}
              <div className="grid grid-cols-2">
                {/* Before */}
                <div className="relative">
                  <div
                    className="h-48 bg-cover bg-center lg:h-56"
                    style={{
                      backgroundImage: `url(${project.beforeImage})`,
                      backgroundColor: '#374151',
                    }}
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-full bg-slate-deep/80 px-3 py-1 text-xs font-medium text-cream-white">
                      Before
                    </span>
                  </div>
                </div>

                {/* After */}
                <div className="relative">
                  <div
                    className="h-48 bg-cover bg-center lg:h-56"
                    style={{
                      backgroundImage: `url(${project.afterImage})`,
                      backgroundColor: '#374151',
                    }}
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-full bg-orange-warm px-3 py-1 text-xs font-medium text-white">
                      After
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-orange-warm/20 px-3 py-1 text-xs font-medium text-orange-warm">
                    {project.category}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-cream-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-white/60">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-cream-white/70">
            Ready to transform your roof? Join our gallery of satisfied customers.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="mt-4 bg-orange-warm px-8 text-white hover:bg-orange-hover"
          >
            Get Your Free Estimate
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
