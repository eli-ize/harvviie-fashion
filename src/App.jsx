import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Collection from './components/Collection'
import Story from './components/Story'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Collection />
        <Story />
      </main>
      <Footer />
    </div>
  )
}

export default App
