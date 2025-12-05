import React from 'react'

function MarqueeText() {
  const messages = [
    "African botanicals, powered by modern science.",
    "Made for all HUE-mans.",
    "African botanicals, powered by modern science.",
    "Made for all HUE-mans.",
    "African botanicals, powered by modern science.",
    "Made for all HUE-mans.",
  ]

  return (
    <div className="bg-harvviie-black text-harvviie-cream overflow-hidden py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {messages.map((message, index) => (
          <span key={index} className="text-sm sm:text-base font-heading tracking-wide mx-12">
            {message}
          </span>
        ))}
      </div>
    </div>
  )
}

export default MarqueeText
