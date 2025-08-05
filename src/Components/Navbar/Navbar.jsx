import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <div className='logo'>
            <img src={logo} alt="" />
            <div>
                <h1>Eleathom</h1>
                <small>Legal Excellence</small>
            </div>
        </div>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Mentorship Program</li>
            <li>Events & Media</li>
            <li>Contact Us</li>
        </ul>
    </nav>
  )
}

export default Navbar