import React from 'react'
import '../styles/ProductInCart.css'

const ProductInCart = (props) => {
  return (
    <div className='product-in-cart'>
      <img className='product-in-cart-thumbnail' src={props.thumbnail} alt="" />
      <span className='product-in-card-title'>{props.title}</span>
      <span className='product-in-card-price'>${props.price}</span>
    </div>
  )
}

export default ProductInCart