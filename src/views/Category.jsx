import React, {useState} from "react";
import {useFetch} from "../hooks/useFetch";
import {useParams} from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Category = () => {
    const params = useParams();
    const {data} = useFetch(
        `https://dummyjson.com/products/category/${params.id}`
    );

    return (
        <ul className="container-fluid d-flex flex-wrap">
            {data?.products.map((el) => (
                <ProductCard
                    key={el.id}
                    title={el.title}
                    price={el.price}
                    thumbnail={el.thumbnail}
                    rating={el.rating}
                    discountPercentage={el.discountPercentage}
                />
            ))}
        </ul>
    );
};

export default Category;
