import { Header } from '@/components/sections/header'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Timeline } from '@/components/sections/timeline'
import { Testimonials } from '@/components/sections/testimonials'
import { Gallery } from '@/components/sections/gallery'
import { Guarantee } from '@/components/sections/guarantee'
import { FAQ } from '@/components/sections/faq'
import { Footer } from '@/components/sections/footer'

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Timeline />
      <Testimonials />
      <Gallery />
      <Guarantee />
      <FAQ />
      <Footer />
    </main>
  )
}
