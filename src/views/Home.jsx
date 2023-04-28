import React, { useEffect, useState } from "react";
import CarouselHome from "../components/CarouselHome";
import { useFetch } from "../hooks/useFetch";


const Home = () => {

    const [offers, setOffers] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=100')
            .then((response) => response.json())
            .then((data) => sortProducts(data.products))
            function sortProducts(products) {
                products.sort((a, b) => {
                    if(a.discountPercentage < b.discountPercentage) {
                        return 1;
                    }
                    if(a.discountPercentage > b.discountPercentage) {
                        return -1;
                    }
                    return 0;
                })
                for(let i = 0; i < 10; i++) {
                    console.log(products[i])
                }
            }
    }, [])

    return (
        <div className="d-flex flex-column align-items-center">
            <CarouselHome />
            <h2>Inicio</h2>
        </div>
    );
};

export default Home;
