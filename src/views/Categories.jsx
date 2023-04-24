import React, {useEffect} from "react";
import {useFetch} from "../hooks/useFetch";
import {NavLink} from "react-router-dom";

const Categories = () => {
    const {data} = useFetch("https://dummyjson.com/products/categories");

    return (
        <ul className="container-fluid">
            {data?.map((el, index) => (
                <li className="card my-3" key={index}>
                    <div className="card-body">
                        <NavLink to={`/category/${el}`} className="card-link">
                            {el.toUpperCase()}
                        </NavLink>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Categories;
