import React, {useContext} from "react";
import ProductInCart from "../components/ProductInCart";
import "../styles/ShoppingCart.css";
import {CartContext} from "../contexts/CartContext";

const ShoppingCart = () => {
    const {cart, setCart} = useContext(CartContext);

    let total = cart.reduce((prev, curr) => prev + curr.totalPrice, 0);

    const clearCart = () => {
        setCart([]);
    };

    return (
        <div className="cart">
            {cart.length >= 1 ? (
                <>
                    <h2>Shopping Cart: </h2>
                    <div className="cart-products-container">
                        {cart.map((el) => (
                            <ProductInCart
                                key={el.id}
                                thumbnail={el.thumbnail}
                                title={el.title}
                                price={el.price}
                                quantity={el.quantity}
                                totalPrice={el.totalPrice}
                                id={el.id}
                            />
                        ))}
                    </div>
                    <p className="py-3 fs-1">Total: ${total}</p>
                    <div className="w-100 d-flex justify-content-evenly">
                        <button
                            className="clear-cart-btn btn btn-danger"
                            onClick={clearCart}>
                            Clear cart
                        </button>
                        <button
                            className="btn btn-primary"
                        >
                            Buy
                        </button>
                    </div>
                </>
            ) : (
                <h2>Shopping cart is empty</h2>
            )}
        </div>
    );
};

export default ShoppingCart;
