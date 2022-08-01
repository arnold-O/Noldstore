import React from 'react'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import Footer from './Footer'



export default function SinglePage() {
  const {product} = useGlobalContext()
  const {productId} = useParams()

  const productItem = product.find((item)=> item.id == productId)

  const {name, img, id, price } = productItem
  console.log(productItem)
  return (
    <>
    < div className='main-container-wrapper '> 
    <div className='single-product-wrapper'>
      <div className='each-item-wrapper'>
        <div className='single-img-wrapper'>
          <img src={img} alt="" />

        </div>
        <div className='product-details-wrapper'>
          <h2>{name}</h2>

          <div className='price-wrapper'>
          <span><TbCurrencyNaira className='product-price-icon'/></span><p className='product-price'>{price}</p>
          </div>
          <div className='price-wrapper-dicount'>
          <p><TbCurrencyNaira className='product-price-icon-discount'/></p><p className='product-price-discount'>{price*1.2}</p>
          </div>

            <button className='singlepage-cart-btn'>
            <MdOutlineAddShoppingCart className='cart-icon'/>
              <p>Add to Cart</p>
              <p></p>
            </button>
         

        </div>

      </div>

      <div className='recently-added-product'>

        <div className=''>

        </div>
        

      </div>

    </div>


    

    </div>
    <Footer/>
   </>
  )
}
