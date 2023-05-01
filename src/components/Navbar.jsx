import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const [searchValue, setSearchValue] = useState()


    function handleChange(e) {
        setSearchValue(e.target.value)
    }


    return (
        <nav className="navbar navbar-expand-xl" style={{backgroundColor: '#FFF159'}}>
            <div className="container-fluid">
                <NavLink className="navbar-brand text-black fw-bold" to="/">
                    <i className="bi bi-bag-check" style={{fontSize: "2rem"}} />{" "}
                    Marketplace
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-sm-3 ">
                            <NavLink
                                className="nav-link text-black"
                                aria-current="page"
                                to="/">
                                <i className="bi bi-house" /> - Home
                            </NavLink>
                        </li>
                        <li className="nav-item mx-sm-3">
                            <NavLink
                                className="nav-link text-black"
                                to="/login">
                                <i className="bi bi-box-arrow-in-right" /> - Login
                                / Sign Up
                            </NavLink>
                        </li>
                        <li className="nav-item mx-sm-3">
                            <NavLink
                                className="nav-link text-black"
                                to="/categories">
                                <i className="bi bi-card-list" /> - Categories
                            </NavLink>
                        </li>
                        <li className="nav-item mx-sm-3">
                            <NavLink className="nav-link text-black" to="/cart">
                                <i className="bi bi-cart" /> - Cart
                            </NavLink>
                        </li>
                    </ul>
                    <form
                        className="d-flex"
                        role="search"
                    >
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search products"
                            aria-label="Search"
                            onChange={handleChange}
                        />
                        <NavLink to={`/search/${searchValue}`} className="btn btn-primary">
                            Search
                        </NavLink>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
