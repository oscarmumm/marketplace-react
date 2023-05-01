import React from "react";
import {useParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch";
import CircleLoader from "../components/CircleLoader";
import '../styles/ProductPage.css'
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

const ProductPage = (props) => {
    const params = useParams();
    const {data} = useFetch(`https://dummyjson.com/products/${params.id}`);
    const {cart, setCart} = useContext(CartContext)

    const addToCart = () => {
      setCart([...cart, data])
    }

    return (
        <div className="product-page">
            {!data ? (
                <CircleLoader />
            ) : (
                <>
                    <h2>{data.title}</h2>
                    <h4>{data.brand}</h4>
                    <h3>${data.price}</h3>
                    <h4>{Math.round(data.discountPercentage)}% OFF</h4>
                    <p>{data.description}</p>
                    <p>{data.rating}⭐</p>
                    <button className="btn btn-primary" onClick={addToCart}>ADD TO CART</button>
                    <div>
                        <img src={data.images[0]} alt="" />
                        <img src={data.images[1]} alt="" />
                        <img src={data.images[2]} alt="" />
                        <img src={data.images[3]} alt="" />
                        <img src={data.images[4]} alt="" />
                    </div>
                    {/* brand
                    category
                    description
                    price
                    discountPercentage
                    rating
                    images [] */}
                </>
            )}
        </div>
    );
};

export default ProductPage;
