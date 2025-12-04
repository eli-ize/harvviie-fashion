import React, { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [heroRef, heroVisible] = useScrollReveal()
  const [formRef, formVisible] = useScrollReveal()
  const [faqRef, faqVisible] = useScrollReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission (would connect to backend/email service)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const faqs = [
    {
      question: 'Do you ship internationally?',
      answer: 'Currently, we ship within South Africa. International shipping is coming soon!'
    },
    {
      question: 'What is your return policy?',
      answer: 'We accept returns within 30 days of purchase. Items must be unworn with tags attached.'
    },
    {
      question: 'How long does delivery take?',
      answer: 'Standard delivery takes 3-5 business days within South Africa. Express shipping (1-2 days) is available.'
    },
    {
      question: 'Are your products sustainable?',
      answer: 'Yes! We use organic cotton, recycled fabrics, and work with local artisans using traditional, sustainable methods.'
    },
    {
      question: 'Do you offer custom sizing?',
      answer: 'Yes, we offer custom sizing for select pieces. Contact us for more information.'
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-harvviie-cream">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div 
            ref={heroRef}
            className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-block mb-6">
              <span className="text-xs font-heading tracking-[0.3em] uppercase text-harvviie-gold bg-harvviie-black px-4 py-2">
                Get in Touch
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-light text-harvviie-black mb-6 leading-tight">
              We'd Love to <span className="italic font-normal">Hear</span> From You
            </h1>
            <p className="text-lg text-harvviie-black/70 leading-relaxed">
              Have a question about our products, custom orders, or collaborations? Reach out and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div 
              ref={formRef}
              className={`transition-all duration-1000 ${
                formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-light text-harvviie-black mb-8">
                Send Us a <span className="italic font-normal">Message</span>
              </h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-harvviie-gold/10 border border-harvviie-gold rounded-2xl">
                  <p className="text-sm text-harvviie-black">Thank you! We'll be in touch soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-heading text-sm tracking-wide uppercase text-harvviie-black mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-harvviie-cream border border-harvviie-cream text-harvviie-black placeholder-harvviie-black/40 focus:outline-none focus:border-harvviie-gold transition-colors rounded-full"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-heading text-sm tracking-wide uppercase text-harvviie-black mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-harvviie-cream border border-harvviie-cream text-harvviie-black placeholder-harvviie-black/40 focus:outline-none focus:border-harvviie-gold transition-colors rounded-full"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-heading text-sm tracking-wide uppercase text-harvviie-black mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-harvviie-cream border border-harvviie-cream text-harvviie-black placeholder-harvviie-black/40 focus:outline-none focus:border-harvviie-gold transition-colors rounded-full"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-heading text-sm tracking-wide uppercase text-harvviie-black mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-6 py-4 bg-harvviie-cream border border-harvviie-cream text-harvviie-black placeholder-harvviie-black/40 focus:outline-none focus:border-harvviie-gold transition-colors resize-none rounded-3xl"
                    placeholder="Tell us more..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-harvviie-black text-harvviie-cream font-heading text-sm tracking-widest uppercase hover:bg-harvviie-gold hover:text-harvviie-black transition-all duration-300 rounded-full"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-harvviie-black mb-8">
                Contact <span className="italic font-normal">Information</span>
              </h2>

              <div className="space-y-6 mb-12">
                <div>
                  <h3 className="font-heading text-sm tracking-wide uppercase text-harvviie-black/60 mb-2">Email</h3>
                  <a href="mailto:hello@harvviie.co.za" className="text-lg text-harvviie-black hover:text-harvviie-gold transition-colors">
                    hello@harvviie.co.za
                  </a>
                </div>

                <div>
                  <h3 className="font-heading text-sm tracking-wide uppercase text-harvviie-black/60 mb-2">Phone</h3>
                  <a href="tel:+27123456789" className="text-lg text-harvviie-black hover:text-harvviie-gold transition-colors">
                    +27 12 345 6789
                  </a>
                </div>

                <div>
                  <h3 className="font-heading text-sm tracking-wide uppercase text-harvviie-black/60 mb-2">Location</h3>
                  <p className="text-lg text-harvviie-black">
                    Cape Town, South Africa
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-sm tracking-wide uppercase text-harvviie-black/60 mb-2">Hours</h3>
                  <p className="text-base text-harvviie-black">Monday - Friday: 9:00 AM - 5:00 PM SAST</p>
                  <p className="text-base text-harvviie-black">Saturday: 10:00 AM - 2:00 PM SAST</p>
                  <p className="text-base text-harvviie-black">Sunday: Closed</p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-heading text-sm tracking-wide uppercase text-harvviie-black/60 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-harvviie-black text-harvviie-cream rounded-full flex items-center justify-center hover:bg-harvviie-gold hover:text-harvviie-black transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-harvviie-black text-harvviie-cream rounded-full flex items-center justify-center hover:bg-harvviie-gold hover:text-harvviie-black transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-harvviie-black text-harvviie-cream rounded-full flex items-center justify-center hover:bg-harvviie-gold hover:text-harvviie-black transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-harvviie-cream">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div 
            ref={faqRef}
            className={`max-w-3xl mx-auto transition-all duration-1000 ${
              faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-light text-harvviie-black mb-12 text-center">
              Frequently Asked <span className="italic font-normal">Questions</span>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="bg-white rounded-2xl overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer font-heading text-base tracking-wide text-harvviie-black hover:text-harvviie-gold transition-colors flex justify-between items-center">
                    {faq.question}
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-4 text-base text-harvviie-black/70">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
