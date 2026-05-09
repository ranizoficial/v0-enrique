'use client'

import { motion } from 'framer-motion'

const milestones = [
  {
    year: '1989',
    title: 'The Beginning',
    description:
      'Arthur Miller Sr. starts Miller Roofing with a single truck and a commitment to honest work. His philosophy: treat every roof like it protects your own family.',
  },
  {
    year: '1998',
    title: 'Growing Reputation',
    description:
      'After nearly a decade of building trust in the community, Miller Roofing expands to a team of 8 skilled craftsmen. Word of mouth becomes our strongest marketing.',
  },
  {
    year: '2007',
    title: 'Second Generation',
    description:
      'Arthur Miller Jr. joins the business full-time, bringing modern techniques while preserving the values his father established. The company becomes Miller & Sons.',
  },
  {
    year: '2015',
    title: 'Commercial Expansion',
    description:
      'We launch our commercial roofing division, bringing the same attention to detail and customer care to businesses across the region.',
  },
  {
    year: '2024',
    title: '35 Years Strong',
    description:
      'Today, Miller & Sons has completed over 5,000 roofing projects. Three generations of the Miller family continue the tradition of excellence.',
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export function Timeline() {
  return (
    <section id="timeline" className="bg-slate-deep py-20 lg:py-28">
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
            Our Story
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-cream-white sm:text-4xl lg:text-5xl">
            <span className="text-balance">35 Years of Protecting Families</span>
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-cream-white/70">
            What started as one man with a truck and a dream has grown into the most trusted
            roofing company in the region. Here is our journey.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16"
        >
          {/* Desktop Timeline (horizontal) */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 right-0 top-6 h-0.5 bg-cream-white/20" />

              {/* Milestones */}
              <div className="grid grid-cols-5 gap-4">
                {milestones.map((milestone, index) => (
                  <motion.div key={index} variants={itemVariants} className="relative">
                    {/* Dot */}
                    <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border-4 border-slate-deep bg-orange-warm">
                      <span className="text-xs font-bold text-white">{milestone.year}</span>
                    </div>

                    {/* Content */}
                    <div className="mt-6 text-center">
                      <h3 className="text-lg font-bold text-cream-white">{milestone.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream-white/60">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Timeline (vertical) */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute bottom-0 left-6 top-0 w-0.5 bg-cream-white/20" />

              {/* Milestones */}
              <div className="flex flex-col gap-8">
                {milestones.map((milestone, index) => (
                  <motion.div key={index} variants={itemVariants} className="relative flex gap-6">
                    {/* Dot */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-slate-deep bg-orange-warm">
                      <span className="text-xs font-bold text-white">{milestone.year}</span>
                    </div>

                    {/* Content */}
                    <div className="pb-2">
                      <h3 className="text-lg font-bold text-cream-white">{milestone.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream-white/60">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Arthur Miller Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 rounded-2xl bg-cream-white/5 p-8 lg:p-12"
        >
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-12">
            {/* Photo Placeholder */}
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full bg-cream-white/10 lg:h-32 lg:w-32">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/arthur-miller.jpg)',
                  backgroundColor: '#374151',
                }}
              />
            </div>

            <div>
              <blockquote className="text-lg italic leading-relaxed text-cream-white/90 lg:text-xl">
                &quot;Every roof we install carries our family name. That is why we never cut corners
                and always stand behind our work. When you hire Miller & Sons, you are getting
                three generations of expertise and a lifetime of commitment.&quot;
              </blockquote>
              <div className="mt-4">
                <p className="font-bold text-orange-warm">Arthur Miller Jr.</p>
                <p className="text-sm text-cream-white/60">Owner & Lead Estimator</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
