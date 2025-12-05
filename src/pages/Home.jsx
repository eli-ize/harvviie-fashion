import React from 'react'
import Hero from '../components/Hero'
import MarqueeText from '../components/MarqueeText'
import FeaturedProducts from '../components/FeaturedProducts'
import ImageTextSection from '../components/ImageTextSection'
import Collection from '../components/Collection'
import Story from '../components/Story'

function Home() {
  return (
    <>
      <Hero />
      <MarqueeText />
      <FeaturedProducts />
      
      {/* Image with overlay text */}
      <ImageTextSection
        title="A simplified routine for maximum results."
        description="Uniquely focusing on preventative results without compromise."
        buttonText="Shop Now"
        buttonLink="#collection"
        image="https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=1600&h=900&fit=crop"
        overlay={true}
      />

      {/* Split section */}
      <ImageTextSection
        subtitle="HERITAGE COLLECTION"
        title="Consciously developed and responsibly sourced."
        description="Our fashion collection of efficacious, intentional essentials incorporating the most powerful African heritage — developed to celebrate contemporary design."
        buttonText="Shop the Collection"
        buttonLink="/collection"
        image="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1000&fit=crop"
        reverse={false}
      />

      <Collection />
      
      {/* Another split section */}
      <ImageTextSection
        subtitle="INTRODUCING A-BEAUTY"
        title="Made for all HUE-mans."
        description="Award-winning inclusive fashion celebrating African heritage with modern design."
        buttonText="Discover"
        buttonLink="/about"
        image="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1000&fit=crop"
        reverse={true}
      />

      <Story />
    </>
  )
}

export default Home
