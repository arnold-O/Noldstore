import React from 'react'

export default function Card() {
  return (
    <div className='card-section-wrapper'>

        <div className='each-card-wrapper'>
            <div className='image-wrapper'>
                <img className='image-wrapper-img' src="https://images.unsplash.com/photo-1657299156000-2cccaea36b2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <p className='product-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas assumenda consequuntur </p>
            
            <div className='price-amount-container'>
                <p>Price</p>
                <p>Amount</p>
            </div>
            <div className='call-to-action'>
            <button className='add-to-cartBtn'>Add To Cart</button>
            <button className='view-details-Btn'>Details</button>

            </div>

        </div>
      
    </div>
  )
}
