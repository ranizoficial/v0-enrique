'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'Oak Ridge Estates',
    rating: 5,
    text: 'After the hailstorm damaged our roof, we were overwhelmed. Arthur came out the same day, walked us through the insurance process, and had our new roof installed within two weeks. The crew was professional, cleaned up everything, and the roof looks beautiful. Cannot recommend them enough!',
    image: '/images/testimonial-1.jpg',
    project: 'Storm Damage Replacement',
  },
  {
    name: 'Michael & Jennifer Torres',
    location: 'Riverside Heights',
    rating: 5,
    text: 'We got three quotes for our roof replacement. Miller & Sons was not the cheapest, but Arthur took the time to explain the difference in materials and workmanship. Five years later, our neighbors who went with cheaper options are already having problems. Best decision we made.',
    image: '/images/testimonial-2.jpg',
    project: 'Complete Roof Replacement',
  },
  {
    name: 'Robert Chen',
    location: 'Downtown Commercial District',
    rating: 5,
    text: 'Managing a 50-unit apartment complex means I need contractors I can rely on. Miller & Sons has handled all our roofing needs for the past eight years. They are responsive, their pricing is fair, and their work is impeccable. They treat our property like it is their own.',
    image: '/images/testimonial-3.jpg',
    project: 'Commercial Maintenance',
  },
  {
    name: 'Patricia Williams',
    location: 'Sunset Valley',
    rating: 5,
    text: 'I am a widow on a fixed income, and I was worried about being taken advantage of. Arthur was so patient, explained everything clearly, and even helped me find financing options. The crew treated my home and garden with such respect. A truly honest company.',
    image: '/images/testimonial-4.jpg',
    project: 'Roof Repair & Maintenance',
  },
  {
    name: 'David & Lisa Kowalski',
    location: 'Hillcrest Neighborhood',
    rating: 5,
    text: 'When we noticed a leak in our ceiling, we panicked. Called Miller & Sons at 7 PM and they had someone at our house within an hour. They did a temporary fix that night and came back for the full repair the next day. That is the kind of service that earns customers for life.',
    image: '/images/testimonial-5.jpg',
    project: 'Emergency Leak Repair',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000)
    return () => clearInterval(timer)
  }, [nextTestimonial])

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextTestimonial()
    }
    if (touchStart - touchEnd < -75) {
      prevTestimonial()
    }
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="bg-cream-white py-20 lg:py-28">
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
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-deep sm:text-4xl lg:text-5xl">
            <span className="text-balance">What Our Neighbors Say</span>
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-gray-professional">
            We have helped over 5,000 families protect their homes. Here is what they have to say
            about working with Miller & Sons.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="mt-12 lg:mt-16">
          <div
            className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl lg:p-12"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Quote Icon */}
            <div className="absolute right-6 top-6 lg:right-12 lg:top-12">
              <Quote className="h-12 w-12 text-orange-warm/20 lg:h-16 lg:w-16" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12"
              >
                {/* Avatar */}
                <div className="shrink-0">
                  <div className="mx-auto h-20 w-20 overflow-hidden rounded-full bg-slate-deep/10 lg:mx-0 lg:h-28 lg:w-28">
                    <div
                      className="h-full w-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${currentTestimonial.image})`,
                        backgroundColor: '#e5e7eb',
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Stars */}
                  <div className="flex justify-center gap-1 lg:justify-start">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-orange-warm text-orange-warm" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mt-4 text-center text-lg leading-relaxed text-slate-deep lg:text-left lg:text-xl">
                    &quot;{currentTestimonial.text}&quot;
                  </blockquote>

                  {/* Author */}
                  <div className="mt-6 text-center lg:text-left">
                    <p className="font-bold text-slate-deep">{currentTestimonial.name}</p>
                    <p className="text-sm text-gray-professional">
                      {currentTestimonial.location} | {currentTestimonial.project}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between lg:mt-0 lg:absolute lg:bottom-12 lg:left-12 lg:right-12">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-orange-warm'
                        : 'w-2.5 bg-slate-deep/20 hover:bg-slate-deep/40'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-deep/20 text-slate-deep transition-colors hover:bg-slate-deep hover:text-cream-white"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-deep/20 text-slate-deep transition-colors hover:bg-slate-deep hover:text-cream-white"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {[
            { value: '5,000+', label: 'Roofs Completed' },
            { value: '4.9', label: 'Average Rating' },
            { value: '35', label: 'Years Experience' },
            { value: '247', label: 'Reviews' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold text-orange-warm lg:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-professional">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
