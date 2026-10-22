import Link from 'next/link'
import Container from '@/components/ui/Container'
import React from 'react'

const footerLinks = {
  services: [
    { href: '#services', label: 'Emergency Repairs' },
    { href: '#services', label: 'Drain Cleaning' },
    { href: '#services', label: 'Fixture Installation' },
    { href: '#services', label: 'Repiping' },
    { href: '#services', label: 'Water Heaters' },
    { href: '#services', label: 'Camera Inspection' },
  ],
  company: [
    { href: '#about', label: 'About Us' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
    { href: '/careers', label: 'Careers' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/licensing', label: 'License Info' },
  ],
  social: [
    { href: 'https://google.com/search?q=ProFlow+Plumbing+reviews', label: 'Google Reviews', ariaLabel: 'Read Google Reviews' },
    { href: 'https://facebook.com', label: 'Facebook', ariaLabel: 'Follow us on Facebook' },
    { href: 'https://yelp.com', label: 'Yelp', ariaLabel: 'Read Yelp Reviews' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-950 text-dark-100" role="contentinfo">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-2xl font-semibold tracking-tight">
              ProFlow Plumbing
            </Link>
            <p className="mt-4 text-dark-400 text-sm leading-relaxed max-w-xs">
              Licensed, insured, and background-checked plumbers serving San Francisco since 2009. 
              24/7 emergency service with no overtime fees.
            </p>
            <p className="mt-4 text-primary-400 text-sm font-medium">
              CA License #1234567 • Fully Insured • Bonded
            </p>
            <div className="mt-6 flex gap-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-dark-400 hover:text-primary-400 transition-colors"
                  aria-label={social.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    {social.label === 'Google Reviews' && (
                      <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.327,0-6.033-2.706-6.033-6.033s2.706-6.032,6.033-6.032c1.595,0,3.017,0.643,4.043,1.634l2.814-2.814C17.241,1.15,14.965,0,12.545,0C7.067,0,2.585,4.482,2.585,9.96s4.482,9.96,9.96,9.96c5.126,0,7.84-3.503,8.646-7.345H12.545z" />
                    )}
                    {social.label === 'Facebook' && (
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    )}
                    {social.label === 'Yelp' && (
                      <path d="M23.586 0H.414C.185 0 0 .185 0 .414v23.172c0 .23.185.415.414.415h11.689v-9.145H9.17V11.24h2.831V8.15c0-2.805 1.694-4.349 4.171-4.349 1.194 0 2.217.092 2.51.13v2.756h-1.743c-1.358 0-1.621.629-1.621 1.543v2.04h3.197l-.415 3.218h-2.782V24h6.301c.23 0 .415-.185.415-.415V.414C24 .185 23.815 0 23.586 0z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white">Contact</h3>
            <address className="mt-4 not-italic text-dark-400 text-sm space-y-2">
              <p>456 Pipe Lane</p>
              <p>San Francisco, CA 94102</p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+14155550199" className="hover:text-primary-400 transition-colors">(415) 555-0199</a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@proflowplumbing.com" className="hover:text-primary-400 transition-colors">hello@proflowplumbing.com</a>
              </p>
            </address>
            <div className="mt-4 space-y-1 text-dark-500 text-sm">
              <p>Mon–Fri: 7:00 AM – 7:00 PM</p>
              <p>Sat: 8:00 AM – 5:00 PM</p>
              <p className="text-primary-400">Sun: Emergency Only</p>
              <p className="text-primary-400">24/7 Emergency Line</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-500 text-sm">
            © {currentYear} ProFlow Plumbing. Built by <span className="font-medium text-white">Your Name</span>. All rights reserved.
          </p>
          <nav aria-label="Legal">
            <ul className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-500 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  )
}