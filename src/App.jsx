import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import OurApproach from './components/OurApproach'
import Eyes from './components/Eyes'
import Feature from './components/Feature'
import Cards from './components/Cards'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-[#F1F1F1] text-[#212121]'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <OurApproach />
      <Eyes />
      <Feature />
      <Cards />
    </div>
  )
}

export default App