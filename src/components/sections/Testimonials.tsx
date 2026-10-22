"use client"

import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import React from 'react'

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Mission District',
    rating: 5,
    text: 'Pipe burst at 2 AM. ProFlow answered on the first ring, had a tech at my door in 45 minutes. Fixed it clean, explained everything, fair price. Saved my apartment.',
    service: 'Emergency Repair',
  },
  {
    name: 'James K.',
    location: 'Pacific Heights',
    rating: 5,
    text: 'Been using them for 3 years — rental properties, my own place. Always on time, clean up after themselves, never upsell. My go-to for any plumbing.',
    service: 'Maintenance',
  },
  {
    name: 'Lisa T.',
    location: 'Sunset',
    rating: 5,
    text: 'Main line clog on Thanksgiving. Other places quoted $3k+ for "excavation." ProFlow camera-inspected, hydro-jetted, done in 2 hours for 1/3 the cost. Honest pros.',
    service: 'Drain Cleaning',
  },
  {
    name: 'Mike R.',
    location: 'Noe Valley',
    rating: 5,
    text: 'Installed a tankless water heater. Walked me through options, no pressure. Installation was clean, permitted, passed inspection first try. 10/10.',
    service: 'Water Heater',
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 sm:py-28 lg:py-32 bg-dark-50 dark:bg-dark-900" aria-labelledby="reviews-heading">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 text-sm font-medium mb-4">
            Customer Reviews
          </span>
          <h2 id="reviews-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark-900 dark:text-white mb-4 leading-tight">
            Trusted by 2,000+ San Francisco Homes
          </h2>
          <p className="text-dark-600 dark:text-dark-300 text-lg">
            Real customers, real results. See why neighbors call us first.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <Card key={i} variant="bordered" padding="lg" className="flex flex-col">
              <div className="flex gap-1 mb-3" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-primary-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-4 flex-1">
                "{review.text}"
              </p>
              <div className="border-t border-dark-200 dark:border-dark-700 pt-4">
                <p className="font-medium text-dark-900 dark:text-white">{review.name}</p>
                <p className="text-sm text-dark-500 dark:text-dark-400">{review.location}</p>
                <p className="text-xs text-primary-600 dark:text-primary-400 mt-1">{review.service}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://google.com/search?q=ProFlow+Plumbing+reviews" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:underline">
            Read 200+ Reviews on Google <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </section>
  )
}