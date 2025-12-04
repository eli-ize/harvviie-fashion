import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const products = [
  {
    id: 1,
    name: 'Ubuntu Collection',
    category: 'Women',
    description: 'Contemporary designs inspired by traditional African textiles',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop',
  },
  {
    id: 2,
    name: 'Savanna Series',
    category: 'Men',
    description: 'Earthy tones and natural fabrics for the modern gentleman',
    price: 999,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
  },
  {
    id: 3,
    name: 'Heritage Blazers',
    category: 'Tailoring',
    description: 'Precision-cut blazers with African-inspired details',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=800&fit=crop',
  },
  {
    id: 4,
    name: 'Kalahari Dresses',
    category: 'Women',
    description: 'Flowing silhouettes in desert-inspired hues',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&h=800&fit=crop',
  },
  {
    id: 5,
    name: 'Cape Coast Casuals',
    category: 'Unisex',
    description: 'Relaxed fits for coastal living',
    price: 799,
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop',
  },
  {
    id: 6,
    name: 'Ndebele Accessories',
    category: 'Accessories',
    description: 'Handcrafted jewelry and bags celebrating geometric patterns',
    price: 499,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=800&fit=crop',
  },
  {
    id: 7,
    name: 'Zulu Warrior Jacket',
    category: 'Men',
    description: 'Bold statement piece with traditional beadwork details',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1594938384816-be37cb4b34c6?w=600&h=800&fit=crop',
  },
  {
    id: 8,
    name: 'Sunset Maxi Dress',
    category: 'Women',
    description: 'Elegant evening wear with African print accents',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&h=800&fit=crop',
  },
  {
    id: 9,
    name: 'Artisan Leather Belt',
    category: 'Accessories',
    description: 'Hand-tooled leather with brass hardware',
    price: 599,
    image: 'https://images.unsplash.com/photo-1624687943971-e86af76d57de?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=600&h=800&fit=crop',
  },
]

function CollectionPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const filters = ['All', 'Women', 'Men', 'Unisex', 'Accessories', 'Tailoring']
  const [headingRef, headingVisible] = useScrollReveal()
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 })

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(item => item.category === activeFilter)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'name') return a.name.localeCompare(b.name)
    return 0
  })

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div 
          ref={headingRef}
          className={`text-center mb-12 transition-all duration-1000 ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="font-display text-5xl sm:text-6xl font-light text-harvviie-black mb-4">
            Our <span className="italic font-normal">Collection</span>
          </h1>
          <p className="text-base text-harvviie-black/60 max-w-2xl mx-auto px-4">
            Explore our full range of pieces that celebrate South African heritage through contemporary design
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 font-heading text-sm tracking-widest uppercase transition-all duration-300 rounded-full ${
                  activeFilter === filter
                    ? 'bg-harvviie-black text-harvviie-cream'
                    : 'bg-harvviie-sand text-harvviie-black hover:bg-harvviie-black hover:text-harvviie-cream'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-heading tracking-wide uppercase text-harvviie-black/60">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-harvviie-sand border border-harvviie-sand text-harvviie-black font-heading text-sm tracking-wide uppercase rounded-full focus:outline-none focus:border-harvviie-gold transition-colors cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-200 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {sortedProducts.map((product) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-harvviie-sand mb-4 rounded-2xl">
                {/* Main Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                {/* Hover Image */}
                <img
                  src={product.hoverImage}
                  alt={`${product.name} alternate view`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-harvviie-gold text-harvviie-black text-xs font-heading font-bold px-3 py-1 tracking-wider uppercase rounded-full">
                  {product.category}
                </div>

                {/* Quick View Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-12 h-12 bg-harvviie-black text-harvviie-cream rounded-full flex items-center justify-center hover:bg-harvviie-gold hover:text-harvviie-black transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="font-heading text-lg font-semibold text-harvviie-black mb-2 group-hover:text-harvviie-gold transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-harvviie-black/60 mb-2">{product.description}</p>
                <p className="font-heading text-base font-bold text-harvviie-black">R {product.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mt-12 text-sm text-harvviie-black/60">
          Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
        </div>
      </div>
    </section>
  )
}

export default CollectionPage
