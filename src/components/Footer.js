import React from 'react'
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <div className='footer-section-wrapper'>
      <div className='footer-items-wrapper'>
      
          <h1 className='footer-title'>NoldStore</h1>
        
        <div className='news-section'>
          <h2>New to NoldStore</h2>
          <p>Subscribe to get latest update</p>
          <div className='newsletter-section-wrapper'>
            <input type="text" placeholder='Enter your Email' className='input-text' />
            <button>Send</button>
          </div>
        </div>
        <div className='social-section-wrapper'>
          <h2>JOIN US ON</h2>
          <div className='icon-wrapper'>
            <BsWhatsapp className='react-icons'/>
            <BsInstagram className='react-icons'/>
          </div>

          
        </div>


      </div>
      
      
    </div>
  )
}
