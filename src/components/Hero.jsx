import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Hero() {
  const [textRef, textVisible] = useScrollReveal()
  const [imageRef, imageVisible] = useScrollReveal({ threshold: 0.2 })

  return (
    <section className="relative min-h-screen flex items-center bg-harvviie-cream">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A0A0A_1px,transparent_1px),linear-gradient(to_bottom,#0A0A0A_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-slide-up">
            <div className="inline-block mb-6">
              <span className="text-xs font-heading tracking-[0.3em] uppercase text-harvviie-gold bg-harvviie-black px-4 py-2">
                Spring/Summer 2025
              </span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-harvviie-black mb-6 leading-[0.95] sm:leading-[0.9]">
              Where <span className="italic font-normal">African</span> Heritage Meets Modern <span className="font-bold">Elegance</span>
            </h1>
            
            <p className="text-base sm:text-lg text-harvviie-black/70 mb-8 max-w-xl leading-relaxed">
              Discover our latest collection inspired by the vibrant landscapes and rich cultural tapestry of South Africa. Each piece tells a story of craftsmanship, tradition, and contemporary design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#collection"
                className="inline-flex items-center justify-center px-8 py-4 bg-harvviie-black text-harvviie-cream font-heading text-sm tracking-widest uppercase hover:bg-harvviie-gold hover:text-harvviie-black transition-all duration-300 group rounded-full"
              >
                Explore Collection
                <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#lookbook"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-harvviie-black text-harvviie-black font-heading text-sm tracking-widest uppercase hover:bg-harvviie-black hover:text-harvviie-cream transition-all duration-300 rounded-full"
              >
                View Lookbook
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-harvviie-black/10">
              <div>
                <div className="font-display text-3xl font-bold text-harvviie-gold">100%</div>
                <div className="text-xs font-heading tracking-wide uppercase text-harvviie-black/60 mt-1">Locally Made</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-harvviie-gold">Est. 2020</div>
                <div className="text-xs font-heading tracking-wide uppercase text-harvviie-black/60 mt-1">Cape Town</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-harvviie-gold">500+</div>
                <div className="text-xs font-heading tracking-wide uppercase text-harvviie-black/60 mt-1">Pieces Crafted</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div 
            ref={imageRef}
            className={`relative h-[500px] sm:h-[600px] lg:h-[700px] transition-all duration-1000 delay-300 ${
              imageVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-harvviie-gold/20 to-harvviie-terracotta/20 -z-10 transform rotate-2 sm:rotate-3"></div>
            <div className="relative h-full">
              <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1000&fit=crop"
                alt="HARVVIIE Fashion Model"
                className="w-full h-full object-cover shadow-2xl"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 bg-harvviie-cream p-4 sm:p-6 shadow-xl">
                <div className="text-center">
                  <div className="font-display text-xl sm:text-2xl font-bold text-harvviie-black mb-1">25% OFF</div>
                  <div className="text-[10px] sm:text-xs font-heading tracking-widest uppercase text-harvviie-black/60">First Purchase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-harvviie-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
