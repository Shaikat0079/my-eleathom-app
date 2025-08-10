import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Mentorship from './Components/Mentorship/Mentorship'
import Events from './Components/Events/Events'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <section id="hero">
  <Hero />
</section>
      <section id='about'>
        <About/>
      </section>
      <section id="mentorship">
  <Mentorship />
</section>
      <section id="events">
  <Events />
</section>
      <section id="contact">
  <Contact />
</section>
<Footer/>
    </div>
  )
}

export default App