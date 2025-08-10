import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Mentorship from './Components/Mentorship/Mentorship'
import Events from './Components/Events/Events'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Mentorship/>
      <Events/>
    </div>
  )
}

export default App