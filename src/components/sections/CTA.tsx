"use client"

import Container from '@/components/ui/Container'
import Link from 'next/link'
import React from 'react'

export default function CTA() {
  return (
    <section className="py-20 sm:py-28 bg-primary-600" aria-labelledby="cta-heading">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
            Plumbing Emergency? We're <span className="text-primary-100">60 Minutes Away</span>
          </h2>
          <p className="text-primary-100 text-lg mb-10 max-w-xl mx-auto">
            24/7 emergency service. No overtime fees. Licensed, insured, background-checked technicians.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="tel:+14155550199"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-primary-600 bg-white rounded-lg hover:bg-primary-50 transition-colors"
            >
              📞 Call Now: (415) 555-0199
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white border-2 border-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Request a Callback
            </Link>
          </div>
          <p className="mt-6 text-primary-200 text-sm">
            Licensed CA Contractor #1234567 • Fully Insured • Bonded
          </p>
        </div>
      </Container>
    </section>
  )
}