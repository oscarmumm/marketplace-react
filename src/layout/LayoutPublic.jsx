import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContextProvider } from "../contexts/CartContext";

const LayoutPublic = () => {

    return (
        <CartContextProvider>
            <div>
                <Navbar />
                <main
                    className="container-fluid bg-light"
                    style={{minHeight: "100vh"}}>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </CartContextProvider>
    );
};

export default LayoutPublic;
