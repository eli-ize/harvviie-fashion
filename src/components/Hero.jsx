import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Hero() {
  const [textRef, textVisible] = useScrollReveal()
  const [imageRef, imageVisible] = useScrollReveal({ threshold: 0.2 })

  return (
    <section className="relative min-h-screen flex items-center bg-harvviie-cream">
      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-slide-up space-y-8">
            <div>
              <span className="text-xs font-heading tracking-[0.25em] uppercase text-harvviie-black/60 block mb-6">
                Spring/Summer 2025
              </span>
              
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-harvviie-black leading-[0.95]">
                African heritage,
                <br />
                <span className="italic">powered by</span>
                <br />
                modern design.
              </h1>
            </div>
            
            <p className="text-lg text-harvviie-black/60 max-w-md leading-relaxed">
              Made for all HUE-mans.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#collection"
                className="inline-flex items-center justify-center px-10 py-4 bg-harvviie-black text-harvviie-cream font-heading text-xs tracking-[0.2em] uppercase hover:bg-harvviie-gold hover:text-harvviie-black transition-all duration-300"
              >
                Shop Now
              </a>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div 
            ref={imageRef}
            className={`relative h-[600px] sm:h-[700px] lg:h-[800px] transition-all duration-1000 delay-300 ${
              imageVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative h-full">
              <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1000&fit=crop"
                alt="HARVVIIE Fashion Model"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
