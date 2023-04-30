import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useState} from "react";
import CartContext from "../contexts/CartContext";

const LayoutPublic = () => {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={cart}>
            <div>
                <Navbar />
                <main
                    className="container-fluid bg-light"
                    style={{minHeight: "100vh"}}>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </CartContext.Provider>
    );
};

export default LayoutPublic;
