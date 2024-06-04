import React from 'react'
import '../Componentstyle/Navbar.css'
import uifry_logo from '../Images/uifry-logo.webp'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='main-bar'>
        <img className='uifry-logo' src={uifry_logo} alt="logo"/>
        <h1>Uifry</h1>
        <div className='navigation-div' >
            <div className='navigation-text'>
            <span>Home</span>
            <span>About us</span>
            <span>Pricing</span>
            <span>Features</span>

            </div>
            
      <button className='download-btn'>Download</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
