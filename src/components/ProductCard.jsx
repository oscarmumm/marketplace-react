import React from 'react'
import '../styles/ProductCard.css'
import { useState } from 'react'
import CartContext from '../contexts/CartContext'
import { useContext } from 'react'

const ProductCard = (props) => {

  const cart = useContext(CartContext)

  const handleClick = (e) => {
    // console.log('id del producto:' + props.id)
    cart.push(props)
    // console.dir('carrito:')
    // console.log(cart)
  }

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
        <button className='product-card-addbtn btn btn-primary' onClick={handleClick}>ADD TO CART</button>
      </div>
    </div>
  )
}

export default ProductCard