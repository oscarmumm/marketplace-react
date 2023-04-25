import React from 'react'
import '../styles/ProductCard.css'

const ProductCard = (props) => {
  return (
    <div className='product-card'>
      <div className='product-card-uppersection'>
        <img className='product-card-img' src={props.thumbnail} alt="" />
      </div>
      <div className='product-card-lowersection'>
        <h5 className='product-card-title'>{props.title.length > 18 ? `${props.title.slice(0, 18)}...` : props.title}</h5>
        <p className='product-card-price'>${props.price}</p>
        <p className='product-card-rating'>{props.rating}⭐</p>
        <a className='product-card-addbtn' href="#">ADD TO CART</a>
      </div>
    </div>
  )
}

export default ProductCard