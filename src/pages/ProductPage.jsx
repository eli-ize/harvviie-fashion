import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const productsData = [
  {
    id: 1,
    name: 'Ubuntu Collection',
    category: 'Women',
    description: 'Contemporary designs inspired by traditional African textiles',
    fullDescription: 'The Ubuntu Collection embodies the spirit of togetherness and community. Each piece is carefully crafted using traditional Ndebele patterns reimagined for the modern woman. Made from 100% organic cotton sourced from South African farms, these pieces celebrate our rich heritage while ensuring comfort and sustainability.',
    price: 1299,
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&h=1000&fit=crop',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    materials: '100% Organic Cotton',
    care: 'Machine wash cold, hang dry, iron on low heat',
    madeIn: 'Cape Town, South Africa',
  },
  {
    id: 2,
    name: 'Savanna Series',
    category: 'Men',
    description: 'Earthy tones and natural fabrics for the modern gentleman',
    fullDescription: 'Inspired by the vast landscapes of the African savanna, this series combines natural linen with contemporary tailoring. Each garment is designed to move with you, offering both style and comfort for the modern man who values quality craftsmanship.',
    price: 999,
    images: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&h=1000&fit=crop',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    materials: '70% Linen, 30% Cotton blend',
    care: 'Dry clean recommended, or hand wash cold',
    madeIn: 'Johannesburg, South Africa',
  },
]

function ProductPage() {
  const { id } = useParams()
  const product = productsData.find(p => p.id === parseInt(id)) || productsData[0]
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [imageRef, imageVisible] = useScrollReveal()
  const [detailsRef, detailsVisible] = useScrollReveal()

  const relatedProducts = productsData.filter(p => p.id !== product.id).slice(0, 3)

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 py-8">
        <div className="flex items-center gap-2 text-sm text-harvviie-black/60">
          <Link to="/" className="hover:text-harvviie-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-harvviie-gold transition-colors">Collection</Link>
          <span>/</span>
          <span className="text-harvviie-black">{product.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Images */}
          <div 
            ref={imageRef}
            className={`transition-all duration-1000 ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Main Image */}
            <div className="relative aspect-[3/4] overflow-hidden bg-harvviie-sand mb-4 rounded-2xl">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-[3/4] overflow-hidden bg-harvviie-sand rounded-xl transition-all duration-300 ${
                    selectedImage === index 
                      ? 'ring-2 ring-harvviie-gold' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div 
            ref={detailsRef}
            className={`transition-all duration-1000 delay-300 ${
              detailsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Category Badge */}
            <div className="inline-block mb-4">
              <span className="text-xs font-heading tracking-[0.3em] uppercase text-harvviie-gold border border-harvviie-gold px-4 py-2 rounded-full">
                {product.category}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-light text-harvviie-black mb-4">
              {product.name}
            </h1>

            <p className="font-heading text-2xl font-bold text-harvviie-black mb-6">
              R {product.price.toLocaleString()}
            </p>

            <p className="text-base text-harvviie-black/70 leading-relaxed mb-8">
              {product.fullDescription}
            </p>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="block font-heading text-sm tracking-wide uppercase text-harvviie-black mb-3">
                Select Size
              </label>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-16 h-12 font-heading text-sm tracking-wide uppercase transition-all duration-300 rounded-lg ${
                      selectedSize === size
                        ? 'bg-harvviie-black text-harvviie-cream'
                        : 'bg-harvviie-sand text-harvviie-black hover:bg-harvviie-black hover:text-harvviie-cream'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block font-heading text-sm tracking-wide uppercase text-harvviie-black mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 bg-harvviie-sand text-harvviie-black font-heading hover:bg-harvviie-black hover:text-harvviie-cream transition-all duration-300 rounded-lg"
                >
                  -
                </button>
                <span className="w-16 text-center font-heading text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 bg-harvviie-sand text-harvviie-black font-heading hover:bg-harvviie-black hover:text-harvviie-cream transition-all duration-300 rounded-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full px-8 py-4 bg-harvviie-black text-harvviie-cream font-heading text-sm tracking-widest uppercase hover:bg-harvviie-gold hover:text-harvviie-black transition-all duration-300 rounded-full mb-8">
              Add to Cart
            </button>

            {/* Product Info */}
            <div className="border-t border-harvviie-black/10 pt-6 space-y-4">
              <div className="flex justify-between">
                <span className="font-heading text-sm tracking-wide uppercase text-harvviie-black/60">Materials</span>
                <span className="text-sm text-harvviie-black">{product.materials}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-heading text-sm tracking-wide uppercase text-harvviie-black/60">Care</span>
                <span className="text-sm text-harvviie-black text-right max-w-xs">{product.care}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-heading text-sm tracking-wide uppercase text-harvviie-black/60">Made In</span>
                <span className="text-sm text-harvviie-black">{product.madeIn}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="font-display text-3xl sm:text-4xl font-light text-harvviie-black mb-8 text-center">
            You Might Also <span className="italic font-normal">Like</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <Link 
                key={item.id} 
                to={`/product/${item.id}`}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-harvviie-sand mb-4 rounded-2xl">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold text-harvviie-black mb-2 group-hover:text-harvviie-gold transition-colors">
                  {item.name}
                </h3>
                <p className="font-heading text-base font-bold text-harvviie-black">R {item.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
