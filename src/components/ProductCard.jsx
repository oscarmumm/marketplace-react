import React from 'react'
import '../styles/ProductCard.css'
import { NavLink } from 'react-router-dom'

const ProductCard = (props) => {

  return (
    <NavLink to={`/product/${props.id}`} className='product-card my-2 mx-3 p-3 text-black'>
      <div className='product-card-uppersection'>
        <img className='product-card-img' src={props.thumbnail} alt="" />
      </div>
      <div className='product-card-lowersection'>
        <span className='fs-5'>{props.title.length > 18 ? `${props.title.slice(0, 16)}...` : props.title}</span>
        <span className='my-1 fs-3 text-success fw-bold'>{Math.round(props.discountPercentage)}% OFF</span>
        <span className='my-1 fs-1'>${props.price}</span>
        <span className='fs-4'>{props.rating}⭐</span>
      </div>
    </NavLink>
  )
}

export default ProductCard