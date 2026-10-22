"use client"

import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import React, { useState } from 'react'

const serviceTypes = [
  { value: 'emergency', label: 'Emergency Repair (24/7)' },
  { value: 'drain', label: 'Drain Cleaning / Clogs' },
  { value: 'install', label: 'Fixture Installation' },
  { value: 'repipe', label: 'Repiping / Pipe Replacement' },
  { value: 'water-heater', label: 'Water Heater Service' },
  { value: 'inspection', label: 'Camera Inspection' },
  { value: 'maintenance', label: 'Routine Maintenance' },
  { value: 'other', label: 'Other / Not Sure' },
]

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    date: '',
    time: '',
    message: '',
    status: 'idle', // idle | submitting | success | error
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState((prev) => ({ ...prev, status: 'submitting' }))

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In production: send to your backend / Formspree / Netlify Forms / EmailJS
    console.log('Service request submitted:', formState)

    setFormState((prev) => ({ ...prev, status: 'success' }))
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        date: '',
        time: '',
        message: '',
        status: 'idle',
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 lg:py-32 bg-white dark:bg-dark-950"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 text-sm font-medium mb-4">
              Get In Touch
            </span>

            <h2
              id="contact-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark-900 dark:text-white mb-6 leading-tight"
            >
              Request Service or a Free Estimate
            </h2>

            <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-8 max-w-lg">
              Fill out the form or call us directly. We'll respond within 15 minutes during business hours.
              For emergencies, call the 24/7 line.
            </p>

            <div className="space-y-6">
              {[
                { icon: '📍', title: 'Address', content: '456 Pipe Lane, San Francisco, CA 94102' },
                { icon: '📞', title: '24/7 Emergency', content: '(415) 555-0199', link: 'tel:+14155550199' },
                { icon: '☎️', title: 'Office', content: '(415) 555-0100', link: 'tel:+14155550100' },
                { icon: '✉️', title: 'Email', content: 'hello@proflowplumbing.com', link: 'mailto:hello@proflowplumbing.com' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-medium text-dark-900 dark:text-white">{item.title}</p>
                    {item.link ? (
                      <a href={item.link} className="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-dark-600 dark:text-dark-400">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Hours */}
              <div>
                <p className="font-medium text-dark-900 dark:text-white mb-2">Business Hours</p>
                <dl className="space-y-1 text-dark-600 dark:text-dark-400 text-sm">
                  <div className="flex justify-between"><dt>Mon – Fri</dt><dd className="ml-4">7:00 AM – 7:00 PM</dd></div>
                  <div className="flex justify-between"><dt>Saturday</dt><dd className="ml-4">8:00 AM – 5:00 PM</dd></div>
                  <div className="flex justify-between"><dt>Sunday</dt><dd className="ml-4">Emergency Only</dd></div>
                  <div className="flex justify-between text-primary-600 dark:text-primary-400"><dt>Emergency Line</dt><dd className="ml-4">24/7/365</dd></div>
                </dl>
              </div>
            </div>
          </div>

          {/* Form */}
          <Card variant="elevated" padding="lg">
            <h3 className="font-display text-2xl font-semibold text-dark-900 dark:text-white mb-6">
              Request Service
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-dark-800 border border-dark-300 dark:border-dark-600 text-dark-900 dark:text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-dark-800 border border-dark-300 dark:border-dark-600 text-dark-900 dark:text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-dark-800 border border-dark-300 dark:border-dark-600 text-dark-900 dark:text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="(415) 555-0123"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    value={formState.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-dark-800 border border-dark-300 dark:border-dark-600 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none bg-no-repeat bg-right"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                  >
                    <option value="">Select a service</option>
                    {serviceTypes.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formState.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-dark-800 border border-dark-300 dark:border-dark-600 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
                    Preferred Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formState.time}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-dark-800 border border-dark-300 dark:border-dark-600 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none bg-no-repeat bg-right"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                  >
                    <option value="">Select a time</option>
                    <option value="08:00">8:00 AM</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="emergency">ASAP (Emergency)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
                  Describe the Issue *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-dark-800 border border-dark-300 dark:border-dark-600 text-dark-900 dark:text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-y"
                  placeholder="e.g., Kitchen sink leaking, water heater not working, toilet clogged..."
                  aria-required="true"
                />
              </div>

              <Button type="submit" className="w-full" size="lg" loading={formState.status === 'submitting'}>
                {formState.status === 'success' ? 'Request Sent!' : formState.status === 'submitting' ? 'Sending...' : 'Request Service'}
              </Button>

              {formState.status === 'success' && (
                <p className="text-center text-green-600 dark:text-green-400 text-sm">
                  ✓ We've received your request. You'll receive a confirmation call/email within 15 minutes.
                </p>
              )}

              {formState.status === 'error' && (
                <p className="text-center text-red-600 dark:text-red-400 text-sm">
                  Something went wrong. Please try again or call us directly at (415) 555-0199.
                </p>
              )}

              <p className="text-center text-xs text-dark-500 dark:text-dark-500">
                By submitting, you agree to our{' '}
                <a href="/privacy" className="underline hover:text-primary-600 dark:hover:text-primary-400">Privacy Policy</a>
                {' '}and{' '}
                <a href="/terms" className="underline hover:text-primary-600 dark:hover:text-primary-400">Terms of Service</a>
              </p>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  )
}