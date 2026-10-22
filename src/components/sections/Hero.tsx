"use client"

import Link from 'next/link'
import Container from '@/components/ui/Container'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-dark-950 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/90 via-dark-950/70 to-dark-950/90" />
      </div>

      {/* Content */}
      <Container className="relative z-10 py-20">
        <div className="max-w-3xl text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-600/20 text-primary-400 text-sm font-medium mb-6">
            24/7 Emergency Service Available
          </span>

          <h1
            id="hero-heading"
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-tight tracking-tight mb-6 text-balance"
          >
            Fast, Reliable Plumbing{' '}
            <span className="text-primary-400">When You Need It Most</span>
          </h1>

          <p className="text-lg sm:text-xl text-dark-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Licensed & insured plumbers serving San Francisco. Emergency repairs, installations, maintenance. 
            Upfront pricing, no surprises.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="tel:+14155550199"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            >
              📞 Call Now: (415) 555-0199
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Schedule Service
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-display text-3xl sm:text-4xl font-semibold text-white">60 Min</p>
              <p className="text-dark-400 text-sm mt-1">Emergency Response</p>
            </div>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-semibold text-white">2,000+</p>
              <p className="text-dark-400 text-sm mt-1">Happy Customers</p>
            </div>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-semibold text-white">15+</p>
              <p className="text-dark-400 text-sm mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-dark-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}