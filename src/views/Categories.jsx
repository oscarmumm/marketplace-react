import React, {useState} from "react";
import {useFetch} from "../hooks/useFetch";
import {NavLink} from "react-router-dom";
import '../styles/Categories.css'
import CircleLoader from "../components/CircleLoader";

const Categories = () => {

    const [loading, setLoading] = useState(true)
    const {data} = useFetch("https://dummyjson.com/products/categories");

    return (
        <ul className="container-fluid py-5 mx-auto d-flex flex-wrap">
            {!data ? <CircleLoader /> : data?.map((el, index) => (
                <li className="category-card my-3 mx-auto text-center col-12 col-md-5" key={index}>
                    <div>
                        <NavLink to={`/category/${el}`} className="category-card-link">
                            {el.toUpperCase()}
                        </NavLink>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Categories;
