import React from 'react'
import About from '../components/About'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Services from '../components/Services'

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Clients />
      <Contact />
    </div>
  )
}

export default Home