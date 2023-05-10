import React from "react";
import {useParams} from "react-router-dom";
import ProductCard from "../components/ProductCard";
import {useFetch} from "../hooks/useFetch";

const Search = () => {
    const params = useParams();
    const busqueda = params.product;

    const {data} = useFetch(
        `https://dummyjson.com/products/search?q=${params.product}`
    );

    console.log(data);
    return (
        <>
            {data?.products.length >= 1 ? (
                <ul className="container-fluid d-flex flex-wrap">
                    {data.products.map((el) => (
                        <ProductCard
                            key={el.id}
                            title={el.title}
                            price={el.price}
                            thumbnail={el.thumbnail}
                            rating={el.rating}
                            discountPercentage={el.discountPercentage}
                            id={el.id}
                        />
                    ))}
                </ul>
            ) : (
                <h2>Your search "{busqueda}" has not yielded any results</h2>
            )}
        </>
    );
};

export default Search;
