import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import CircleLoader from "../components/CircleLoader";
import "../styles/ProductPage.css";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductPage = (props) => {
    const params = useParams();
    const { data } = useFetch(`https://dummyjson.com/products/${params.id}`);
    const { cart, setCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1)

    const incrementQantity = () => {
        setQuantity(quantity +1);
        console.log(quantity)
    }
    
    const decrementQantity = () => {
        quantity >= 2 ? setQuantity(quantity -1) : setQuantity(1)
        console.log(quantity)
    }

    const addToCart = () => {
        data.quantity = quantity;
        data.totalPrice = quantity * data.price;
        setCart([...cart, data]);
        toast.success("Product added to cart!")
    };

    return (
        <div className="product-page">
            {!data ? (
                <CircleLoader />
            ) : (
                <>
                    <h2>{data.title}</h2>
                    <div className="py-2 d-flex overflow-auto">
                        <img className="px-1" src={data.images[0]} alt="" />
                        <img className="px-1" src={data.images[1]} alt="" />
                        <img className="px-1" src={data.images[2]} alt="" />
                        <img className="px-1" src={data.images[3]} alt="" />
                    </div>
                    <h4>{data.brand}</h4>
                    <p>{data.description}</p>
                    <h3 className="text-decoration-line-through text-secondary">
                        $
                        {Math.round(
                            data.price / (1 - data.discountPercentage / 100)
                        )}
                    </h3>
                    <h4 className="text-success fw-bold">
                        {Math.round(data.discountPercentage)}% OFF
                    </h4>
                    <h3>${data.price}</h3>
                    <p>{data.rating}⭐</p>
                    <div className="py-3">
                        <button className="btn btn-secondary text-white fw-bold fs-4 px-3" onClick={incrementQantity}>+</button>
                        <span className="btn btn-outline-secondary mx-2 fs-4">{quantity}</span>
                        <button className="btn btn-secondary text-white fw-bold fs-4 px-3" onClick={decrementQantity}>-</button>
                    </div>
                    <button className="btn btn-primary" onClick={addToCart}>
                        ADD TO CART
                    </button>
                    <ToastContainer />
                </>
            )}
        </div>
    );
};

export default ProductPage;
