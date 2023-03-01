import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <nav className='bg-[#191d29]'>
      <Navbar />
      </nav>
      <Home />
    </div>
  )
}

export default App