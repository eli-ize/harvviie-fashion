import React from 'react'

function HeroBanner() {
  return (
    <section className="relative bg-harvviie-sand">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left - Text Content */}
        <div className="flex items-center justify-center py-20 px-6 sm:px-12 lg:px-16">
          <div className="max-w-lg">
            <h2 className="text-xs sm:text-sm font-heading tracking-[0.25em] uppercase text-harvviie-black/70 mb-6">
              CURATED RITUALS, MINDFUL SAVINGS
            </h2>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-harvviie-black mb-8 leading-tight">
              Save up to 15% on our rituals & sets
            </h1>
            <a
              href="/collection"
              className="inline-flex items-center justify-center px-10 py-4 bg-harvviie-black text-harvviie-cream font-heading text-xs tracking-[0.2em] uppercase hover:bg-harvviie-gold hover:text-harvviie-black transition-all duration-300"
            >
              SHOP NOW
            </a>
          </div>
        </div>
        
        {/* Right - Hero Image */}
        <div className="relative h-[400px] lg:h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=1200&h=1200&fit=crop"
            alt="HARVVIIE Collection"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
