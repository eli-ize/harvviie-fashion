import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ImageTextSection({ title, subtitle, description, buttonText, buttonLink, image, reverse = false, overlay = false }) {
  const [ref, isVisible] = useScrollReveal()

  if (overlay) {
    return (
      <section className="relative h-[500px] sm:h-[600px] bg-harvviie-sand">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="relative h-full flex items-end">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 pb-12 sm:pb-16">
            <div className="max-w-xl text-white">
              {subtitle && <p className="text-sm font-heading tracking-[0.2em] uppercase mb-4">{subtitle}</p>}
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light mb-6">{title}</h2>
              {description && <p className="text-lg mb-8">{description}</p>}
              {buttonText && (
                <a
                  href={buttonLink}
                  className="inline-flex items-center justify-center px-10 py-4 bg-white text-black font-heading text-xs tracking-[0.2em] uppercase hover:bg-harvviie-gold transition-all duration-300"
                >
                  {buttonText}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={ref} className={`py-16 sm:py-24 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <div className={reverse ? 'lg:order-2' : ''}>
            <img
              src={image}
              alt={title}
              className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
            />
          </div>
          <div className={reverse ? 'lg:order-1' : ''}>
            {subtitle && <p className="text-xs font-heading tracking-[0.25em] uppercase text-harvviie-black/60 mb-6">{subtitle}</p>}
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-harvviie-black mb-6">
              {title}
            </h2>
            {description && <p className="text-lg text-harvviie-black/60 mb-8 max-w-md">{description}</p>}
            {buttonText && (
              <a
                href={buttonLink}
                className="inline-flex items-center justify-center px-10 py-4 bg-harvviie-black text-harvviie-cream font-heading text-xs tracking-[0.2em] uppercase hover:bg-harvviie-gold hover:text-harvviie-black transition-all duration-300"
              >
                {buttonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageTextSection
