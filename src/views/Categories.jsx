import React, {useEffect} from "react";
import {useFetch} from "../hooks/useFetch";
import {NavLink} from "react-router-dom";
import '../styles/Categories.css'
import '../styles/ColorPallete.css'

const Categories = () => {
    const {data} = useFetch("https://dummyjson.com/products/categories");

    return (
        <ul className="container-fluid">
            {data?.map((el, index) => (
                <li className="card my-3" key={index}>
                    <div className="card-body category-name-card light">
                        <NavLink to={`/category/${el}`} className="card-link category-name">
                            {el.toUpperCase()}
                        </NavLink>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Categories;
