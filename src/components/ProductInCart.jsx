import React, {useContext} from "react";
import "../styles/ProductInCart.css";
import { CartContext } from "../contexts/CartContext";

const ProductInCart = (props) => {

    const {cart, setCart} = useContext(CartContext);

    const deleteItem = () => {
        console.log('delete item')
        console.log('id del producto',props.id)
        //console.log(cart.find((el) => el.id === props.id))
        console.log('carrito' ,cart)
        console.log('props' ,props)
        console.log('indice', cart.findIndex((el) => el.id === props.id))
        // a partir del indice eliminar el elemento <-- <-- <-- <--
    }



    return (
        <div className="p-3 fs-5 product-in-cart">
            <div className="product-in-cart-left-side">
                <img
                    className="product-in-cart-thumbnail"
                    src={props.thumbnail}
                    alt=""
                />
            </div>
            <div className="product-in-cart-right-side d-flex flex-column align-items-center justify-content-between">
                <p className="p-1 product-in-card-title">{props.title}</p>
                <p className="p-1 product-in-card-price">${(props.price)*(props.quantity)}</p>
                <p className="p-1 product-in-card-price">Precio por unidad: ${props.price}</p>
                <p>Cantidad: {props.quantity}</p>
                <button
                    className="delete-icon-btn btn btn-danger"
                    onClick={deleteItem}>
                    <i className="bi bi-trash3 fw-bold"></i>
                </button>
            </div>
        </div>
    );
};

export default ProductInCart;
