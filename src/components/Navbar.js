import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
   <header className='main-header-section'>
  <div className='header-wrapper'>
  <div >
       <Link className='logo' to="/">NoldStore</Link>
    </div>
    <ul>
        <Link className='header-links'  to="about">About</Link>
        <Link className='header-links'  to="contact">Contact</Link>
        <Link className='header-links'  to="faq">Faq</Link>
        <Link  className='header-links' to="cart">Cart</Link>
    </ul>
    <div>
        <button>Sign</button>
        <button className='create-account-btn'>Create Account</button>
    </div>

  </div>
   </header>
  )
}
