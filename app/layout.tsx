import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Merriweather } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })
const _merriweather = Merriweather({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Miller & Sons Roofing | 35 Years of Trusted Roof Repair & Replacement',
  description:
    'Family-owned roofing experts serving your community since 1989. Professional roof replacement, leak repairs, storm damage restoration, and commercial roofing services. Licensed, bonded, and insured. Get your free estimate today.',
  keywords: [
    'roofing contractor',
    'roof replacement',
    'roof repair',
    'leak repair',
    'storm damage',
    'roof restoration',
    'commercial roofing',
    'residential roofing',
    'emergency roof repair',
    'shingle replacement',
    'metal roofing',
    'flat roof repair',
    'roof inspection',
    'licensed roofer',
    'insured roofing company',
  ],
  authors: [{ name: 'Miller & Sons Roofing' }],
  creator: 'Miller & Sons Roofing',
  publisher: 'Miller & Sons Roofing',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://millerandsonsroofing.com',
    siteName: 'Miller & Sons Roofing',
    title: 'Miller & Sons Roofing | 35 Years of Trusted Roof Repair & Replacement',
    description:
      'Family-owned roofing experts since 1989. Professional roof replacement, leak repairs, storm damage restoration. Licensed, bonded, insured. Free estimates.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Miller & Sons Roofing - Trusted Since 1989',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miller & Sons Roofing | 35 Years of Trusted Service',
    description:
      'Family-owned roofing experts. Professional roof replacement, leak repairs, storm damage restoration. Free estimates available.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://millerandsonsroofing.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a2332',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-cream-white">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RoofingContractor',
              name: 'Miller & Sons Roofing',
              description:
                'Family-owned roofing experts serving the community since 1989. Professional roof replacement, leak repairs, and storm damage restoration.',
              url: 'https://millerandsonsroofing.com',
              telephone: '+1-555-ROOF-FIX',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Main Street',
                addressLocality: 'Your City',
                addressRegion: 'State',
                postalCode: '12345',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 40.7128,
                longitude: -74.006,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '07:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '08:00',
                  closes: '14:00',
                },
              ],
              priceRange: '$$',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '247',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Roofing Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Residential Roof Replacement',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Commercial Roofing',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Emergency Leak Repair',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
