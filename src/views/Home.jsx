import React, {useEffect, useState} from "react";
import CarouselHome from "../components/CarouselHome";
import ProductCard from "../components/ProductCard";
import CircleLoader from "../components/CircleLoader";
import Banner from "../components/Banner";

const Home = () => {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=100")
            .then((response) => response.json())
            .then((data) => sortProducts(data.products));
        // funcion ordenadora
        function sortProducts(products) {
            products.sort((a, b) => {
                if (a.discountPercentage < b.discountPercentage) {
                    return 1;
                }
                if (a.discountPercentage > b.discountPercentage) {
                    return -1;
                }
                return 0;
            });
            setOffers(products.slice(0, 10))
            setLoading(false)
        }
    }, []);

    return (
        <div className="d-flex flex-column align-items-center">
            <Banner />
            <h2 className="my-5 fw-bold"> Today's deals!!</h2>
            <ul className="container-fluid d-flex flex-wrap">
                {loading ? <CircleLoader /> : offers.map((el) => (
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
        </div>
    );
};

export default Home;
