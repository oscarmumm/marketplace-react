import React, { useState } from "react";
import {useContext} from "react";
import CartContext from "../contexts/CartContext";
import ProductInCart from "../components/ProductInCart";
import '../styles/ShoppingCart.css'

const ShoppingCart = () => {

    const cart = useContext(CartContext);

    let total = cart.reduce((prev, curr) => prev + curr.price, 0);

    const clearCart = () => {
      cart.length = 0;
    }


    return (
        <div className="cart">
          <h2>Shopping Cart: </h2>
            <div className="cart-products-container">
                {cart.map((el, index) => (
                    <ProductInCart 
                      key={index}
                      thumbnail={el.thumbnail}
                      title={el.title} 
                      price={el.price} />
                ))}
            </div>
              <span className="cart-total">Total: ${total}</span>
              <button className="clear-cart-btn btn btn-danger" onClick={clearCart}>Clear cart</button>
        </div>
    );
};

export default ShoppingCart;
