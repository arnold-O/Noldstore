import React from 'react'
import { useGlobalContext } from '../context'

export default function Card() {
  const {product} = useGlobalContext()
 

  return (
    <div className='card-section-wrapper'>

      {
        product.map((item)=>{
          const {name, img, id, price } = item
      
       return <div key={id} className='each-card-wrapper'>
            <div className='image-wrapper'>
                <img className='image-wrapper-img' src={img} alt="" />
            </div>
            <p className='product-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas assumenda consequuntur </p>
            
            <div className='price-amount-container'>
                <p>Price</p>
                <p>{price}</p>
            </div>
            <div className='call-to-action'>
            <button className='add-to-cartBtn'>Add To Cart</button>
            <button className='view-details-Btn'>Details</button>

            </div>

        </div>
          })
        }
  
      
    </div>
  )
}
