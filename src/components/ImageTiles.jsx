import React from 'react'

const imageTiles = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1000&fit=crop',
    text: 'Made for all HUE-mans.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&h=1000&fit=crop',
    text: 'African botanicals, powered by modern science.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=1000&fit=crop',
    text: 'Experts in Hyperpigmentation.',
  },
]

function ImageTiles() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {imageTiles.map((tile) => (
            <div key={tile.id} className="relative aspect-[3/4] overflow-hidden group cursor-pointer">
              <img
                src={tile.image}
                alt={tile.text}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white text-lg sm:text-xl font-light">
                  {tile.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageTiles
