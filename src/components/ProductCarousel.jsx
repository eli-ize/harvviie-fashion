import React from 'react'
import { Link } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: 'Heritage Bomber Jacket',
    price: 'R 2,499',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop',
  },
  {
    id: 2,
    name: 'Savanna Silk Dress',
    price: 'R 1,899',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop',
  },
  {
    id: 3,
    name: 'Ubuntu Collection Set',
    price: 'From R 1,299',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop',
  },
]

function ProductCarousel() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex overflow-x-auto gap-6 px-6 sm:px-8 lg:px-12 pb-4 scrollbar-hide snap-x snap-mandatory">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="flex-shrink-0 w-[280px] sm:w-[340px] group snap-start"
            >
              <div className="relative aspect-[3/4] bg-gray-100 mb-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="text-center">
                <h3 className="font-heading text-sm text-harvviie-black mb-2 group-hover:text-harvviie-gold transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-harvviie-black/60">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCarousel
