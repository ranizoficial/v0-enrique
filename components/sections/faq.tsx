'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'How do I know if I need a new roof or just repairs?',
    answer:
      'Several signs indicate you may need a full replacement: your roof is over 20 years old, you see multiple missing or curling shingles, there are visible signs of sagging, or you are experiencing frequent leaks. During our free inspection, Arthur will thoroughly assess your roof and give you an honest recommendation. We never push for a full replacement when repairs will do the job.',
  },
  {
    question: 'What is your process for insurance claims?',
    answer:
      'We have worked with every major insurance company in the area. After storm damage, we will conduct a thorough inspection, document all damage with photos and measurements, and provide you with a detailed report. We can meet with your adjuster on-site to ensure nothing is missed. Most importantly, we never ask you to sign anything that is not in your best interest.',
  },
  {
    question: 'How long does a typical roof replacement take?',
    answer:
      'Most residential roof replacements are completed in 1-3 days, depending on the size of your home and complexity of the roof. We will give you an exact timeline during your estimate. We work efficiently but never rush—quality always comes first. Our On-Time Guarantee ensures we stick to our schedule.',
  },
  {
    question: 'Do you offer financing options?',
    answer:
      'Yes, we partner with several reputable lenders to offer flexible financing options. We have plans with 0% interest for qualified buyers, and longer-term options to fit any budget. We will go over all available options during your consultation to find what works best for your situation.',
  },
  {
    question: 'What materials do you recommend?',
    answer:
      'It depends on your budget, aesthetic preferences, and long-term goals. For most homes, we recommend GAF or Owens Corning architectural shingles—they offer excellent value, durability, and come with strong manufacturer warranties. For premium projects, we work with metal roofing, slate, and cedar shakes. Arthur will discuss all options during your estimate.',
  },
  {
    question: 'What sets Miller & Sons apart from other roofers?',
    answer:
      'Three generations of family ownership means we are not going anywhere. When you call us, you talk to Arthur—not a call center. We use our own trained crews, never subcontractors. Every project comes with our ironclad guarantees. And after 35 years, our reputation in this community is everything to us. We earn your trust one roof at a time.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-slate-deep py-20 lg:py-28">
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
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-cream-white sm:text-4xl lg:text-5xl">
            <span className="text-balance">Common Questions</span>
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-cream-white/70">
            Got questions? We have got answers. If you do not find what you are looking for, give
            Arthur a call—he loves talking roofs.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 max-w-3xl lg:mt-16"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl bg-cream-white/5 transition-colors duration-300 hover:bg-cream-white/10"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="pr-4 text-lg font-semibold text-cream-white">{faq.question}</span>
                  <span className="shrink-0">
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 text-orange-warm" />
                    ) : (
                      <Plus className="h-5 w-5 text-cream-white/60" />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5">
                        <p className="leading-relaxed text-cream-white/70">{faq.answer}</p>
                        <button
                          onClick={() => {
                            const contactSection = document.getElementById('contact')
                            if (contactSection) {
                              contactSection.scrollIntoView({ behavior: 'smooth' })
                            }
                          }}
                          className="mt-4 text-sm font-medium text-orange-warm hover:text-orange-hover"
                        >
                          Ask Arthur about this during your estimate →
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
