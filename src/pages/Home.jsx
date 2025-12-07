import React from 'react'
import HeroBanner from '../components/HeroBanner'
import MarqueeText from '../components/MarqueeText'
import ProductCarousel from '../components/ProductCarousel'
import LargeTextSection from '../components/LargeTextSection'
import ImageTiles from '../components/ImageTiles'
import ImageTextSection from '../components/ImageTextSection'
import Collection from '../components/Collection'
import Story from '../components/Story'

function Home() {
  return (
    <>
      <HeroBanner />
      <MarqueeText />
      <ProductCarousel />
      <LargeTextSection />
      <ImageTiles />
      
      {/* Split section - Consciously developed */}
      <ImageTextSection
        title="Consciously developed and responsibly sourced."
        description="Our fashion collection of efficacious, intentional essentials incorporating the most powerful African heritage — developed to celebrate contemporary design."
        buttonText="SHOP THE COLLECTION"
        buttonLink="/collection"
        image="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1000&fit=crop"
        reverse={false}
      />

      <Collection />

      {/* Final CTA section */}
      <ImageTextSection
        subtitle="INTRODUCING A-BEAUTY"
        title="Made for all HUE-mans."
        description="Award-winning inclusive fashion celebrating African heritage with modern design."
        buttonText="DISCOVER"
        buttonLink="/about"
        image="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1000&fit=crop"
        reverse={true}
      />

      <Story />
    </>
  )
}

export default Home
