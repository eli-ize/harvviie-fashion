import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AnnouncementBar from './AnnouncementBar'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <AnnouncementBar />
      {/* Main Navigation */}
      <header className="sticky top-0 bg-harvviie-cream/95 backdrop-blur-lg z-50 border-b border-harvviie-black/10">
        <nav className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="flex h-24 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="group">
                <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-tighter text-harvviie-black group-hover:text-harvviie-gold transition-colors">
                  HARVVIIE
                </h1>
                <p className="text-xs tracking-widest text-harvviie-black/60 uppercase">South African Fashion</p>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-10">
              <Link to="/collection" className="text-sm font-heading font-medium tracking-wide uppercase hover:text-harvviie-gold transition-colors">
                Collection
              </Link>
              <Link to="/#lookbook" className="text-sm font-heading font-medium tracking-wide uppercase hover:text-harvviie-gold transition-colors">
                Lookbook
              </Link>
              <Link to="/about" className="text-sm font-heading font-medium tracking-wide uppercase hover:text-harvviie-gold transition-colors">
                Our Story
              </Link>
              <Link to="/contact" className="text-sm font-heading font-medium tracking-wide uppercase hover:text-harvviie-gold transition-colors">
                Contact
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-6">
              <button className="hidden md:block text-sm font-heading font-medium tracking-wide uppercase hover:text-harvviie-gold transition-colors">
                Search
              </button>
              <button className="relative text-sm font-heading font-medium tracking-wide uppercase hover:text-harvviie-gold transition-colors">
                Bag
                <span className="absolute -top-1 -right-3 bg-harvviie-gold text-harvviie-black text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                  0
                </span>
              </button>
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-6 animate-fade-in">
              <div className="flex flex-col space-y-4">
                <a href="#collection" className="text-sm font-heading font-medium tracking-wide uppercase hover:text-harvviie-gold transition-colors">
                  Collection
                </a>
                <a href="#lookbook" className="text-sm font-heading font-medium tracking-wide uppercase hover:text-harvviie-gold transition-colors">
                  Lookbook
                </a>
                <a href="#story" className="text-sm font-heading font-medium tracking-wide uppercase hover:text-harvviie-gold transition-colors">
                  Our Story
                </a>
                <a href="#contact" className="text-sm font-heading font-medium tracking-wide uppercase hover:text-harvviie-gold transition-colors">
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}

export default Header
