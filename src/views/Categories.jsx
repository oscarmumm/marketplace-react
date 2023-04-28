import React, {useEffect} from "react";
import {useFetch} from "../hooks/useFetch";
import {NavLink} from "react-router-dom";
import '../styles/Categories.css'

const Categories = () => {
    const {data} = useFetch("https://dummyjson.com/products/categories");

    return (
        <ul className="container-fluid row mx-auto">
            {data?.map((el, index) => (
                <li className="category-card my-3 mx-auto col-lg-5" key={index}>
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
