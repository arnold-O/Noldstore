import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Footer from "./Footer";

export default function Cart() {
  return (
    <>
    <div className="main-container-wrapper">
      <div className="cart-section-wrapper">
        <div className="cart-item-section">
          <div>
            <p className="cart-item-header"><MdOutlineAddShoppingCart/><sup>3</sup></p>
          </div>
          <div className="product-item-cart-wrapper">
          <div className="horizontal-cart" ></div>
          <div className="each-cart-item">
            <div className="cart-image-wrapper">
              <img src="https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/64/629476/1.jpg?5803" alt="" />
            </div>
            <div className="each-item-details">
              <div>

              <p>Trendyol Collection Gray Men's Oversize Crew Neck Short Sleeve </p>
              <div className="size-of-item">
              <p>size:</p> 
              <p>EU 41</p>
              </div>
              </div>

              <div className="price-discount-wrapper">
              <div className='price-wrapper-dicount-cart'>
          <p><TbCurrencyNaira className='product-price-icon-discount'/></p><p className='product-current-price-cart'>5000</p>
          </div>
                <div className="oldprice-percent-wrapper">
                  <p><TbCurrencyNaira className='product-price-icon-discount'/></p>
                <p className="product-oldprice-cart">6500</p>
                
                </div>
              </div>
            </div>
            
          </div>
          <div className="counter-item-cart">

              <p className="delete">Remove</p>
              <div className="couter-item">
              <AiOutlineMinus className="counter-minus"/>
              <p>0</p>
              <AiOutlinePlus className="counter-plus"/>
              </div>

        
             
              
            </div>
            </div>
            {/* new item */}
            <div>
          <div className="horizontal-cart" ></div>
          <div className="each-cart-item">
            <div className="cart-image-wrapper">
              <img src="https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/64/629476/1.jpg?5803" alt="" />
            </div>
            <div className="each-item-details">
              <div>

              <p>Trendyol Collection Gray Men's Oversize Crew Neck Short Sleeve </p>
              <div className="size-of-item">
              <p>size:</p> 
              <p>EU 41</p>
              </div>
              </div>

              <div className="price-discount-wrapper">
              <div className='price-wrapper-dicount-cart'>
          <p><TbCurrencyNaira className='product-price-icon-discount'/></p><p className='product-current-price-cart'>5000</p>
          </div>
                <div className="oldprice-percent-wrapper">
                  <p><TbCurrencyNaira className='product-price-icon-discount'/></p>
                <p className="product-oldprice-cart">6500</p>
                
                </div>
              </div>
            </div>
            
          </div>
          <div className="counter-item-cart">

              <p className="delete">Remove</p>
              <div className="couter-item">
              <AiOutlineMinus className="counter-minus"/>
              <p>0</p>
              <AiOutlinePlus className="counter-plus"/>
              </div>

        
             
              
            </div>
            </div>
            
            {/* new item */}
        </div>
        <div className="cart-item-sumary">
          <div className="cart-total-value">
            <h3 >Summary</h3>
            <div className="horizontal-cart" ></div>

            <div className="subtotal-cart-amount">
              <p>Subtotal</p>
              <p>Amount</p>
            </div>

           <div className="cart-button-wrapper">
           <button className="checkout-cart-Btn">CheckOut</button>

           </div>


          </div>
        </div>
      </div>
    </div>
      <Footer/>
      </>
  );
}
