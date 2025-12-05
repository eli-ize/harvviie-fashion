import React from 'react'
import { Link } from 'react-router-dom'

const featuredProducts = [
  {
    id: 1,
    name: 'Heritage Blazer',
    price: 'From R 2,499',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop',
  },
  {
    id: 2,
    name: 'Savanna Dress',
    price: 'From R 1,599',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop',
  },
  {
    id: 3,
    name: 'Ubuntu Set',
    price: 'From R 1,299',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop',
  },
]

function FeaturedProducts() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="flex-shrink-0 w-[280px] sm:w-[320px] group"
            >
              <div className="relative aspect-[3/4] bg-gray-100 mb-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute bottom-4 right-4 w-12 h-12 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </div>
              <div className="space-y-1">
                <h3 className="font-heading text-base text-harvviie-black">{product.name}</h3>
                <p className="text-sm text-harvviie-black/60">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
