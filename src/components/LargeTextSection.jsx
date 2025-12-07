import React from 'react'

function LargeTextSection() {
  return (
    <section className="py-20 sm:py-32 bg-harvviie-cream">
      <div className="mx-auto max-w-[1000px] px-6 sm:px-8">
        <div className="text-center">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-harvviie-black mb-6">
            A simplified routine for
            <br />
            <span className="italic">maximum results.</span>
          </h2>
          <p className="text-lg sm:text-xl text-harvviie-black/60 mb-10 max-w-2xl mx-auto">
            Uniquely focusing on preventative results without compromise.
          </p>
          <a
            href="/collection"
            className="inline-flex items-center justify-center px-10 py-4 bg-harvviie-black text-harvviie-cream font-heading text-xs tracking-[0.2em] uppercase hover:bg-harvviie-gold hover:text-harvviie-black transition-all duration-300"
          >
            SHOP NOW
          </a>
        </div>
      </div>
    </section>
  )
}

export default LargeTextSection
