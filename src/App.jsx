import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Mentorship from './Components/Mentorship/Mentorship'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Mentorship/>
    </div>
  )
}

export default App