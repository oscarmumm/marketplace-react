import {createContext, useState} from "react";

export const CartContext = createContext([]);

export function CartContextProvider(props) {
    const [cart, setCart] = useState([]);
    const value = { cart, setCart };
    console.log(cart)

    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    );
}
