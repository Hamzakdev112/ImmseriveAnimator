import React from 'react'
import About from '../components/About'
import Clients from '../components/Clients'
import Hero from '../components/Hero'
import Services from '../components/Services'

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Clients />
    </div>
  )
}

export default Home