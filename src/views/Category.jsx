import {useFetch} from "../hooks/useFetch";
import {useParams} from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Category = () => {
    const params = useParams();
    console.log(params)
    const categoryName = params.id;
    const {data} = useFetch(
        `https://dummyjson.com/products/category/${params.id}`
    );

    return (
        <div className="container-fluid d-flex flex-column align-items-center">
            <h2 className="my-5"> Category: {categoryName} </h2>
            <ul className="container-fluid d-flex flex-wrap align-items-center justify-content-center">
                {data?.products.map((el) => (
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

export default Category;
