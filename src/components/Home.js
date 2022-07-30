import React from 'react'
import { GiBowTieRibbon, GiConverseShoe } from "react-icons/gi";
import { MdRadio } from "react-icons/md";
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className='main-container-wrapper'>

      <div className="headerWrapper">
      <div className="headerWrapper-first">
      <div className='category-section-left'>
        <div className='category-filter-section'>
         <GiBowTieRibbon className='header-icon'/>
        <Link className="links"  to="fashion">Fashion</Link>
        </div>
        <div className='category-filter-section'>
       < GiConverseShoe className='header-icon'/>
        <Link className="links"  to="shoes">Shoes</Link>
        </div>
        <div className='category-filter-section'>
        <GiBowTieRibbon className='header-icon'/>
        <p style={{color:"#000"}}>product</p>
        </div>
        <div className='category-filter-section'>
      <FaHeadphonesAlt className='header-icon'/>
        <Link className="links" to="headphones">Head Phones</Link>
        </div>
        <div className='category-filter-section'>
        <MdRadio className='header-icon'/>
        <Link className="links"  to="electronics">Electronics</Link>
        </div>
        <div className='category-filter-section'>
        <GiConverseShoe className='header-icon'/>
        <Link className="links"  to="gaming">Gaming</Link>
        </div>
      </div>
      </div>
      <div>

      <div className='header-image-container'>
        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGVjb21tZXJjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
      </div>
      



      </div>
      <div className="headerWrapper-first">
        
      </div>
      </div>

     
      <h1 className='latest-product-title'>Latest Product</h1>
      <div class="latest-product-display">
          <div class="latest-products">
            <div class="latest-product-box">
              <img
                src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/257805/1.jpg?2972"
                alt=""
                class="latest-product-img"
              />
            </div>
            <div class="latest-product-container">
              <p class="latest-product-name">The Techie mouse</p>
              <p class="latest-product-des">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div class="latest-product-rev-price">
                <p>reviews(💎💎💎💎)</p>
                <p class="latest-product-price">$45.5</p>
              </div>
              <div class="latest-product-btn">
                <p class="btn-p">Add To Cart</p>
              </div>
            </div>
          </div>
          </div>
    
     
    </div>
  )
}
