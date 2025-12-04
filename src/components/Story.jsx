import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Story() {
  const [storyHeadingRef, storyHeadingVisible] = useScrollReveal()
  const [storyP1Ref, storyP1Visible] = useScrollReveal()
  const [storyP2Ref, storyP2Visible] = useScrollReveal()
  const [storyP3Ref, storyP3Visible] = useScrollReveal()
  const [storyStatsRef, storyStatsVisible] = useScrollReveal()
  const [storyImageRef, storyImageVisible] = useScrollReveal()
  const [valuesRef, valuesVisible] = useScrollReveal()

  return (
    <>
      {/* Brand Story Section */}
      <section id="story" className="py-20 bg-harvviie-cream">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
              <div className="inline-block mb-6">
                <span className="text-xs font-heading tracking-[0.3em] uppercase text-harvviie-gold border border-harvviie-gold px-4 py-2">
                  Our Story
                </span>
              </div>
              
              <h2 
                ref={storyHeadingRef}
                className={`font-display text-4xl sm:text-5xl font-light text-harvviie-black mb-6 leading-tight transition-all duration-700 ${
                  storyHeadingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Rooted in <span className="italic font-normal">African</span> Excellence
              </h2>
              
              <div className="space-y-4 text-harvviie-black/70 leading-relaxed">
                <p 
                  ref={storyP1Ref}
                  className={`text-base transition-all duration-700 delay-100 ${
                    storyP1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  HARVVIIE was born from a vision to celebrate South African culture through contemporary fashion. 
                  Founded in Cape Town in 2020, we craft pieces that honor our rich heritage while embracing modern aesthetics.
                </p>
                <p 
                  ref={storyP2Ref}
                  className={`text-base transition-all duration-700 delay-200 ${
                    storyP2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Each garment tells a story, from the vibrant patterns inspired by Ndebele art to the earthy tones 
                  reminiscent of our diverse landscapes. We work exclusively with local artisans and sustainable 
                  materials, ensuring every piece is as ethical as it is elegant.
                </p>
                <p 
                  ref={storyP3Ref}
                  className={`text-base transition-all duration-700 delay-300 ${
                    storyP3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Our name, HARVVIIE, embodies the spirit of harvest. Reaping the rewards of hard work, tradition, 
                  and community. We believe fashion should be a celebration of identity, a bridge between past and present.
                </p>
              </div>

              <div 
                ref={storyStatsRef}
                className={`mt-8 pt-8 border-t border-harvviie-black/10 transition-all duration-700 delay-400 ${
                  storyStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="font-display text-4xl font-bold text-harvviie-terracotta mb-2">100%</div>
                    <div className="text-sm text-harvviie-black/60">Locally Sourced Materials</div>
                  </div>
                  <div>
                    <div className="font-display text-4xl font-bold text-harvviie-terracotta mb-2">50+</div>
                    <div className="text-sm text-harvviie-black/60">Local Artisans Supported</div>
                  </div>
                </div>
              </div>
            </div>

            <div 
            ref={storyImageRef}
            className={`order-1 lg:order-2 transition-all duration-1000 delay-200 ${
              storyImageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-full h-full bg-harvviie-gold/20 -z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&h=1000&fit=crop"
                  alt="South African fashion"
                  className="w-full h-auto shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-harvviie-black text-harvviie-cream">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div 
            ref={valuesRef}
            className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
              valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div>
              <h2 className="font-display text-4xl sm:text-5xl font-light mb-8 leading-tight">
                Fashion That <span className="italic font-normal">Honors</span> Our Roots
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-harvviie-gold pl-6">
                  <h3 className="font-heading text-lg font-bold mb-2 tracking-wide uppercase">Crafted by Hand</h3>
                  <p className="text-harvviie-cream/70 text-base">
                    Every stitch carries the skill of South African artisans who have perfected their craft over generations.
                  </p>
                </div>
                <div className="border-l-2 border-harvviie-gold pl-6">
                  <h3 className="font-heading text-lg font-bold mb-2 tracking-wide uppercase">Sustainable Materials</h3>
                  <p className="text-harvviie-cream/70 text-base">
                    Organic cotton, locally sourced linen, and recycled fabrics form the foundation of our collections.
                  </p>
                </div>
                <div className="border-l-2 border-harvviie-gold pl-6">
                  <h3 className="font-heading text-lg font-bold mb-2 tracking-wide uppercase">Cultural Heritage</h3>
                  <p className="text-harvviie-cream/70 text-base">
                    Traditional patterns and techniques reimagined for contemporary living, celebrating African design excellence.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea53f7e8?w=800&h=1000&fit=crop"
                alt="Artisan craftsmanship"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Removed old template section */}
      <section className="hidden">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl sm:text-5xl font-light mb-4">
              Our <span className="italic font-normal">Commitment</span>
            </h2>
            <p className="text-lg text-harvviie-cream/60 max-w-2xl mx-auto">
              Fashion with purpose, crafted with care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-harvviie-gold/20 flex items-center justify-center group-hover:bg-harvviie-gold transition-colors duration-300">
                  <svg className="w-10 h-10 text-harvviie-gold group-hover:text-harvviie-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 tracking-wide uppercase">Sustainability</h3>
              <p className="text-harvviie-cream/70">
                We use eco-friendly fabrics and minimize waste in every step of our production process.
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-harvviie-gold/20 flex items-center justify-center group-hover:bg-harvviie-gold transition-colors duration-300">
                  <svg className="w-10 h-10 text-harvviie-gold group-hover:text-harvviie-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 tracking-wide uppercase">Community</h3>
              <p className="text-harvviie-cream/70">
                Supporting local artisans and creating jobs within South African communities.
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-harvviie-gold/20 flex items-center justify-center group-hover:bg-harvviie-gold transition-colors duration-300">
                  <svg className="w-10 h-10 text-harvviie-gold group-hover:text-harvviie-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 tracking-wide uppercase">Quality</h3>
              <p className="text-harvviie-cream/70">
                Timeless pieces crafted with meticulous attention to detail and superior materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Banner */}
      <section className="py-16 bg-harvviie-terracotta text-harvviie-cream">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl font-light mb-6">
                Celebrating <span className="italic">South African</span> Craftsmanship
              </h3>
              <p className="text-lg text-harvviie-cream/90 mb-8">
                From the bustling markets of Johannesburg to the creative studios of Cape Town, 
                every HARVVIIE piece is a testament to the skill and passion of South African makers.
              </p>
              <a
                href="#collection"
                className="inline-flex items-center px-8 py-4 bg-harvviie-cream text-harvviie-terracotta font-heading text-sm tracking-widest uppercase hover:bg-harvviie-gold hover:text-harvviie-black transition-all duration-300 rounded-full"
              >
                Shop Now
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=500&fit=crop"
                alt="South African fashion detail"
                className="w-full h-64 object-cover shadow-lg rounded-2xl"
              />
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=500&fit=crop"
                alt="Traditional patterns"
                className="w-full h-64 object-cover shadow-lg mt-8 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Story
