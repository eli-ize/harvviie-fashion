import React from 'react'

function HeroBanner() {
  return (
    <section className="relative bg-harvviie-cream py-12 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="text-center">
          <h2 className="text-xs sm:text-sm font-heading tracking-[0.25em] uppercase text-harvviie-black/70 mb-4">
            CURATED RITUALS, MINDFUL SAVINGS
          </h2>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-harvviie-black mb-8">
            Save up to 15% on our rituals & sets
          </h1>
          <a
            href="/collection"
            className="inline-flex items-center justify-center px-8 py-3 bg-harvviie-black text-harvviie-cream font-heading text-xs tracking-[0.2em] uppercase hover:bg-harvviie-gold hover:text-harvviie-black transition-all duration-300"
          >
            SHOP NOW
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
