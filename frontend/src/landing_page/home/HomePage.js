import React from 'react'
import Awards from './Awards'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from '../OpenAccount'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Hero from './Hero'

export default function HomePage() {
  return (
      <>
          <Navbar />
          <Hero />
          <Awards />
          <Stats />
          <Pricing />
          <Education />
          <OpenAccount />
          <Footer />
      </>
  )
}
