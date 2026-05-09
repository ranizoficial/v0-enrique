'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface FormData {
  name: string
  email: string
  phone: string
  address: string
  service: string
  message: string
}

const services = [
  'Roof Replacement',
  'Roof Repair',
  'Storm Damage',
  'Commercial Roofing',
  'Emergency Repair',
  'Inspection',
  'Other',
]

export function Footer() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    try {
      // Placeholder for make.com integration
      console.log('Form submitted:', data)
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      setSubmitStatus('success')
      reset()
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <footer id="contact" className="bg-cream-white">
      {/* Contact Form Section */}
      <div className="border-b border-slate-deep/10 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-orange-warm">
                Get In Touch
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-deep sm:text-4xl">
                <span className="text-balance">Ready for Your Free Estimate?</span>
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-gray-professional">
                Fill out the form and Arthur will personally call you within 24 hours to schedule
                your free, no-obligation roof inspection.
              </p>

              {/* Contact Details */}
              <div className="mt-8 space-y-4">
                <a
                  href="tel:+15557663349"
                  className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-slate-deep/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-warm/10">
                    <Phone className="h-5 w-5 text-orange-warm" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-professional">Call Arthur Directly</p>
                    <p className="font-semibold text-slate-deep">(555) 766-3349</p>
                  </div>
                </a>

                <a
                  href="mailto:arthur@millerandsons.com"
                  className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-slate-deep/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-warm/10">
                    <Mail className="h-5 w-5 text-orange-warm" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-professional">Email Us</p>
                    <p className="font-semibold text-slate-deep">arthur@millerandsons.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-lg p-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-warm/10">
                    <MapPin className="h-5 w-5 text-orange-warm" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-professional">Service Area</p>
                    <p className="font-semibold text-slate-deep">Greater Metro Area & 50mi Radius</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-lg p-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-warm/10">
                    <Clock className="h-5 w-5 text-orange-warm" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-professional">Business Hours</p>
                    <p className="font-semibold text-slate-deep">Mon-Fri 7am-6pm | Sat 8am-2pm</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rounded-2xl bg-white p-6 shadow-xl lg:p-8">
                {submitStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-slate-deep">Thank You!</h3>
                    <p className="mt-2 text-gray-professional">
                      Arthur will call you within 24 hours to schedule your free inspection.
                    </p>
                  </div>
                ) : submitStatus === 'error' ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                      <AlertCircle className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-slate-deep">Something went wrong</h3>
                    <p className="mt-2 text-gray-professional">
                      Please try again or call us directly at (555) 766-3349.
                    </p>
                    <Button
                      onClick={() => setSubmitStatus('idle')}
                      className="mt-4 bg-orange-warm text-white hover:bg-orange-hover"
                    >
                      Try Again
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-deep">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        {...register('name', { required: 'Name is required' })}
                        placeholder="John Smith"
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email & Phone */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-deep">
                          Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: 'Invalid email address',
                            },
                          })}
                          placeholder="john@email.com"
                          className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-deep">
                          Phone *
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register('phone', { required: 'Phone is required' })}
                          placeholder="(555) 123-4567"
                          className={errors.phone ? 'border-red-500' : ''}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Address */}
                    <div>
                      <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-slate-deep">
                        Property Address
                      </label>
                      <Input
                        id="address"
                        {...register('address')}
                        placeholder="123 Main St, City, State"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-slate-deep">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        {...register('service')}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select a service...</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-deep">
                        Additional Details
                      </label>
                      <textarea
                        id="message"
                        {...register('message')}
                        rows={3}
                        placeholder="Tell us about your roofing needs..."
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-warm py-6 text-base font-semibold text-white hover:bg-orange-hover"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Request Free Estimate
                        </>
                      )}
                    </Button>

                    <p className="text-center text-xs text-gray-professional">
                      By submitting, you agree to receive calls and texts about your inquiry.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-slate-deep py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-warm">
                <span className="text-sm font-bold text-white">M</span>
              </div>
              <span className="font-semibold text-cream-white">Miller & Sons Roofing</span>
            </div>

            {/* Copyright */}
            <p className="text-sm text-cream-white/60">
              &copy; {new Date().getFullYear()} Miller & Sons Roofing. All rights reserved.
            </p>

            {/* Links */}
            <div className="flex gap-6">
              <a href="#" className="text-sm text-cream-white/60 hover:text-orange-warm">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-cream-white/60 hover:text-orange-warm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
