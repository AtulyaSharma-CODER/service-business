"use client"

import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import React from 'react'

const services = [
  {
    icon: '🚰',
    title: 'Emergency Repairs',
    desc: 'Burst pipes, leaks, flooding — we\'re there in 60 minutes or less, 24/7.',
    featured: true,
  },
  {
    icon: '🛁',
    title: 'Drain Cleaning',
    desc: 'Hydro-jetting, snaking, camera inspection for clogged sinks, toilets, main lines.',
  },
  {
    icon: '🔧',
    title: 'Fixture Installation',
    desc: 'Faucets, toilets, water heaters, garbage disposals — professional install with warranty.',
  },
  {
    icon: '🏠',
    title: 'Repiping & Replacement',
    desc: 'Whole-house repiping, copper/PEX, slab leaks, old pipe replacement.',
  },
  {
    icon: '💧',
    title: 'Water Heater Service',
    desc: 'Tank & tankless repair, replacement, maintenance. Gas & electric models.',
  },
  {
    icon: '📹',
    title: 'Camera Inspection',
    desc: 'Video pipe inspection for accurate diagnosis — no guesswork, no unnecessary digging.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 lg:py-32 bg-white dark:bg-dark-950" aria-labelledby="services-heading">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 id="services-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark-900 dark:text-white mb-4 leading-tight">
            Complete Plumbing Solutions
          </h2>
          <p className="text-dark-600 dark:text-dark-300 text-lg">
            Licensed, insured, and equipped for any job — from a dripping faucet to a full repipe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Card
              key={i}
              variant={service.featured ? 'elevated' : 'bordered'}
              padding="lg"
              className={service.featured ? 'ring-2 ring-primary-500/50' : ''}
            >
              <span className="text-3xl mb-4 block">{service.icon}</span>
              <h3 className="font-semibold text-dark-900 dark:text-white mb-2 text-lg">
                {service.title}
              </h3>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                {service.desc}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-dark-600 dark:text-dark-400 mb-4">
            Don't see your issue? We handle it all.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:underline">
            View All Services <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </section>
  )
}