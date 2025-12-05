import React, { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const collections = [
  {
    id: 1,
    name: 'Ubuntu Collection',
    category: 'Women',
    description: 'Contemporary designs inspired by traditional African textiles',
    price: 'From R 1,299',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop',
  },
  {
    id: 2,
    name: 'Savanna Series',
    category: 'Men',
    description: 'Earthy tones and natural fabrics for the modern gentleman',
    price: 'From R 999',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
  },
  {
    id: 3,
    name: 'Heritage Blazers',
    category: 'Tailoring',
    description: 'Precision-cut blazers with African-inspired details',
    price: 'From R 2,499',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=800&fit=crop',
  },
  {
    id: 4,
    name: 'Kalahari Dresses',
    category: 'Women',
    description: 'Flowing silhouettes in desert-inspired hues',
    price: 'From R 1,599',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&h=800&fit=crop',
  },
  {
    id: 5,
    name: 'Cape Coast Casuals',
    category: 'Unisex',
    description: 'Relaxed fits for coastal living',
    price: 'From R 799',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop',
  },
  {
    id: 6,
    name: 'Ndebele Accessories',
    category: 'Accessories',
    description: 'Handcrafted jewelry and bags celebrating geometric patterns',
    price: 'From R 499',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=800&fit=crop',
  },
]

const lookbookImages = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop',
    title: 'Spring Vibes',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1000&fit=crop',
    title: 'Urban Elegance',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=1600&h=1000&fit=crop',
    title: 'Desert Dreams',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=800&h=1000&fit=crop',
    title: 'Contemporary Classic',
  },
]

function Collection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Women', 'Men', 'Unisex', 'Accessories']
  const [headingRef, headingVisible] = useScrollReveal()
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 })

  const filteredCollections = activeFilter === 'All' 
    ? collections 
    : collections.filter(item => item.category === activeFilter)

  return (
    <>
      {/* Collection Section */}
      <section id="collection" className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div 
            ref={headingRef}
            className={`mb-20 transition-all duration-1000 ${
              headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-light text-harvviie-black mb-6">
              A simplified routine
              <br />
              <span className="italic">for maximum results.</span>
            </h2>
            <p className="text-lg text-harvviie-black/50 max-w-xl">
              Discover pieces that blend South African heritage with contemporary design.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 font-heading text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-harvviie-black text-harvviie-cream'
                    : 'bg-transparent text-harvviie-black border border-harvviie-black/20 hover:border-harvviie-black'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Collection Grid */}
          <div 
            ref={gridRef}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 transition-all duration-1000 delay-200 ${
              gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {filteredCollections.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden bg-harvviie-sand mb-4">
                  {/* Main Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  {/* Hover Image */}
                  <img
                    src={item.hoverImage}
                    alt={`${item.name} alternate view`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  {/* Quick Buy Button - 3 states: hidden → circle on card hover → pill on button hover */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="relative">
                      <button className="peer group/button w-12 h-12 bg-harvviie-black flex items-center justify-center hover:w-auto hover:px-6 transition-all duration-300 ease-out overflow-hidden">
                        <svg className="w-6 h-6 text-harvviie-cream flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <span className="text-harvviie-cream text-sm font-heading font-medium tracking-wide uppercase ml-2 whitespace-nowrap hidden group-hover/button:inline-block">
                          Quick buy
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading text-base text-harvviie-black group-hover:text-harvviie-gold transition-colors">
                    {item.name}
                  </h3>
                  <p className="font-heading text-sm text-harvviie-black/60">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook Section */}
      <section id="lookbook" className="py-20 bg-harvviie-sand">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl sm:text-5xl font-light text-harvviie-black mb-4">
              Spring/Summer <span className="italic font-normal">Lookbook</span>
            </h2>
            <p className="text-lg text-harvviie-black/60 max-w-2xl mx-auto">
              Style inspiration from the streets of Cape Town to the plains of the Karoo
            </p>
          </div>

          {/* Lookbook Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lookbookImages.map((item, index) => (
              <div 
                key={item.id} 
                className={`group cursor-pointer ${
                  index === 2 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="relative overflow-hidden bg-harvviie-cream rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-harvviie-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="font-display text-3xl text-harvviie-cream">{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 border-2 border-harvviie-black text-harvviie-black font-heading text-sm tracking-widest uppercase hover:bg-harvviie-black hover:text-harvviie-cream transition-all duration-300 rounded-full"
            >
              View Full Lookbook
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Collection
