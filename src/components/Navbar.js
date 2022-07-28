import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
   <header className='main-header-section'>
  <div className='header-wrapper'>
  <div className='logo'>
        NoldOnline
    </div>
    <ul>
        <Link className='header-links'  to="about">About</Link>
        <Link className='header-links'  to="contact">Contact</Link>
        <Link className='header-links'  to="fag">Faq</Link>
        <Link  className='header-links' to="cart">Cart</Link>
    </ul>
    <div>
        <button>Sign</button>
        <button>Create Account</button>
    </div>

  </div>
   </header>
  )
}
