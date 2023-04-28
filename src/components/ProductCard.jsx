import React from 'react'
import '../styles/ProductCard.css'

const ProductCard = (props) => {
  return (
    <div className='product-card'>
      <div className='product-card-uppersection'>
        <img className='product-card-img' src={props.thumbnail} alt="" />
      </div>
      <div className='product-card-lowersection'>
        <span className='product-card-title'>{props.title.length > 18 ? `${props.title.slice(0, 18)}...` : props.title}</span>
        <span className='product-card-discount-percentage'>{Math.round(props.discountPercentage)}% OFF</span>
        <span className='product-card-price'>${props.price}</span>
        <span className='product-card-rating'>{props.rating} ⭐</span>
        <a className='product-card-addbtn btn btn-primary' href="#">ADD TO CART</a>
      </div>
    </div>
  )
}

export default ProductCard