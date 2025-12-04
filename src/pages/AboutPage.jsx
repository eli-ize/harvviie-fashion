import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

function AboutPage() {
  const [heroRef, heroVisible] = useScrollReveal()
  const [storyRef, storyVisible] = useScrollReveal()
  const [missionRef, missionVisible] = useScrollReveal()
  const [valuesRef, valuesVisible] = useScrollReveal()
  const [teamRef, teamVisible] = useScrollReveal()

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-harvviie-cream">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div 
            ref={heroRef}
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-block mb-6">
              <span className="text-xs font-heading tracking-[0.3em] uppercase text-harvviie-gold bg-harvviie-black px-4 py-2">
                About Us
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-light text-harvviie-black mb-6 leading-tight">
              Where <span className="italic font-normal">Tradition</span> Meets Tomorrow
            </h1>
            <p className="text-lg text-harvviie-black/70 leading-relaxed">
              HARVVIIE celebrates South African heritage through contemporary fashion, honoring the artisans 
              and traditions that make our culture rich while creating pieces for the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div 
              ref={storyRef}
              className={`transition-all duration-1000 ${
                storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <h2 className="font-display text-4xl sm:text-5xl font-light text-harvviie-black mb-6 leading-tight">
                Our <span className="italic font-normal">Story</span>
              </h2>
              <div className="space-y-4 text-harvviie-black/70 leading-relaxed">
                <p className="text-base">
                  Founded in Cape Town in 2020, HARVVIIE emerged from a deep desire to celebrate 
                  South African culture through fashion that honors our past while embracing our future.
                </p>
                <p className="text-base">
                  We saw a gap in the market for authentic African fashion that spoke to modern sensibilities 
                  without compromising on cultural integrity. Each piece we create tells a story, from the 
                  vibrant patterns inspired by Ndebele art to the earthy tones reminiscent of our diverse landscapes.
                </p>
                <p className="text-base">
                  Working exclusively with local artisans and sustainable materials, we ensure every garment 
                  is as ethical as it is elegant. Our name, HARVVIIE, embodies the spirit of harvest, reaping 
                  the rewards of hard work, tradition, and community.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full bg-harvviie-gold/20 -z-10 rounded-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&h=1000&fit=crop"
                alt="HARVVIIE atelier"
                className="w-full h-auto shadow-2xl rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-harvviie-cream">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div 
            ref={missionRef}
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-light text-harvviie-black mb-6">
              Our <span className="italic font-normal">Mission</span>
            </h2>
            <p className="text-lg text-harvviie-black/70 leading-relaxed mb-8">
              To create fashion that celebrates African heritage, supports local communities, and inspires 
              pride in South African craftsmanship. We believe fashion should be a bridge between past 
              and present, a celebration of identity, and a force for positive change.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="font-display text-4xl font-bold text-harvviie-terracotta mb-2">100%</div>
                <div className="text-sm text-harvviie-black/60">Locally Sourced Materials</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-harvviie-terracotta mb-2">50+</div>
                <div className="text-sm text-harvviie-black/60">Local Artisans Supported</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-harvviie-terracotta mb-2">Est. 2020</div>
                <div className="text-sm text-harvviie-black/60">Cape Town, South Africa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
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
                What We <span className="italic font-normal">Stand For</span>
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-harvviie-gold pl-6">
                  <h3 className="font-heading text-lg font-bold mb-2 tracking-wide uppercase">Heritage</h3>
                  <p className="text-harvviie-cream/70 text-base">
                    Every piece honors traditional African patterns, techniques, and the stories passed down 
                    through generations of skilled artisans.
                  </p>
                </div>
                <div className="border-l-2 border-harvviie-gold pl-6">
                  <h3 className="font-heading text-lg font-bold mb-2 tracking-wide uppercase">Sustainability</h3>
                  <p className="text-harvviie-cream/70 text-base">
                    We use organic cotton, locally sourced linen, and recycled fabrics. Our commitment extends 
                    beyond materials to our entire supply chain.
                  </p>
                </div>
                <div className="border-l-2 border-harvviie-gold pl-6">
                  <h3 className="font-heading text-lg font-bold mb-2 tracking-wide uppercase">Community</h3>
                  <p className="text-harvviie-cream/70 text-base">
                    We partner directly with South African artisans, providing fair wages and supporting 
                    their families and communities.
                  </p>
                </div>
                <div className="border-l-2 border-harvviie-gold pl-6">
                  <h3 className="font-heading text-lg font-bold mb-2 tracking-wide uppercase">Quality</h3>
                  <p className="text-harvviie-cream/70 text-base">
                    Timeless pieces crafted with meticulous attention to detail, designed to last and be 
                    cherished for years to come.
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

      {/* Team/Founder */}
      <section className="py-20 bg-harvviie-terracotta text-harvviie-cream">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div 
            ref={teamRef}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=500&fit=crop"
                alt="Our team"
                className="w-full h-64 object-cover shadow-lg rounded-2xl"
              />
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=500&fit=crop"
                alt="Artisan at work"
                className="w-full h-64 object-cover shadow-lg mt-8 rounded-2xl"
              />
            </div>
            <div>
              <h3 className="font-display text-3xl sm:text-4xl font-light mb-6">
                Celebrating <span className="italic">South African</span> Craftsmanship
              </h3>
              <p className="text-lg text-harvviie-cream/90 mb-8">
                From the bustling markets of Johannesburg to the creative studios of Cape Town, 
                every HARVVIIE piece is a testament to the skill and passion of South African makers. 
                We're proud to work with over 50 local artisans who bring their expertise and artistry 
                to every garment we create.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
