import React from 'react'

function AnnouncementBar() {
  return (
    <div className="bg-harvviie-black text-harvviie-cream overflow-hidden py-2">
      <div className="animate-marquee whitespace-nowrap">
        <div className="inline-block text-xs font-heading tracking-widest uppercase">
          <span className="px-8">New customers save 10% with code WELCOME10</span>
          <span className="px-8">Free Shipping on all US orders for a limited time</span>
          <span className="px-8">New customers save 10% with code WELCOME10</span>
          <span className="px-8">Free Shipping on all US orders for a limited time</span>
          <span className="px-8">New customers save 10% with code WELCOME10</span>
          <span className="px-8">Free Shipping on all US orders for a limited time</span>
        </div>
      </div>
    </div>
  )
}

export default AnnouncementBar
