import React, { useState } from 'react'

function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
    setEmail('')
    alert('Thank you for subscribing to HARVVIIE!')
  }

  return (
    <footer className="bg-harvviie-black text-harvviie-cream">
      {/* Newsletter Section */}
      <div className="border-b border-harvviie-cream/10">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-3xl font-light mb-4">
                Join the <span className="italic">HARVVIIE</span> Community
              </h3>
              <p className="text-harvviie-cream/60">
                Be the first to know about new collections, exclusive offers, and South African fashion stories.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-harvviie-cream/5 border border-harvviie-cream/20 text-harvviie-cream placeholder-harvviie-cream/40 focus:outline-none focus:border-harvviie-gold transition-colors font-heading text-sm rounded-full"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-harvviie-gold text-harvviie-black font-heading text-sm tracking-widest uppercase hover:bg-harvviie-cream transition-all duration-300 whitespace-nowrap rounded-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h2 className="font-heading text-3xl font-bold tracking-tighter mb-4">HARVVIIE</h2>
            <p className="text-sm text-harvviie-cream/60 mb-6">
              South African fashion celebrating heritage, craftsmanship, and contemporary design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-harvviie-cream/60 hover:text-harvviie-gold transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-harvviie-cream/60 hover:text-harvviie-gold transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </a>
              <a href="#" className="text-harvviie-cream/60 hover:text-harvviie-gold transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-harvviie-cream/60 hover:text-harvviie-gold transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-widest uppercase mb-6">Shop</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-harvviie-cream/60 hover:text-harvviie-gold transition-colors">
                  Women's Collection
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-harvviie-cream/60 hover:text-harvviie-gold transition-colors">
                  Men's Collection
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-harvviie-cream/60 hover:text-harvviie-gold transition-colors">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-harvviie-cream/60 hover:text-harvviie-gold transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-harvviie-cream/60 hover:text-harvviie-gold transition-colors">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-widest uppercase mb-6">About</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-harvviie-cream/60 hover:text-harvviie-gold transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-harvviie-cream/60 hover:text-harvviie-gold transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-harvviie-cream/60 hover:text-harvviie-gold transition-colors">
                  Artisan Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-harvviie-cream/60 hover:text-harvviie-gold transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-harvviie-cream/60 hover:text-harvviie-gold transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service Links */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-widest uppercase mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li>
                <a href="#contact" className="text-sm text-harvviie-cream/60 hover:text-harvviie-gold transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-harvviie-cream/60 hover:text-harvviie-gold transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-harvviie-cream/60 hover:text-harvviie-gold transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-harvviie-cream/60 hover:text-harvviie-gold transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-harvviie-cream/60 hover:text-harvviie-gold transition-colors">
                  Track Order
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-harvviie-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-harvviie-cream/40">
            © 2025 HARVVIIE. Proudly crafted in South Africa.
          </p>
          <div className="flex gap-6 text-sm text-harvviie-cream/40">
            <a href="#" className="hover:text-harvviie-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-harvviie-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-harvviie-gold transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
