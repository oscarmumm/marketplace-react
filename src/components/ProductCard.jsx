import React from 'react'

const ProductCard = (props) => {
  return (
    <div className='card my-3 mx-auto' style={{width: '15rem'}}>
      <img className='card-img-top' src={props.thumbnail} alt="" />
      <div className='card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <p className='card-text'>${props.price}</p>
        <p className='card-title'>{props.rating}⭐</p>
        <a className='btn btn-primary' href="#">ADD TO CART</a>
      </div>
    </div>
  )
}

export default ProductCard