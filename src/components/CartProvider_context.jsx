import React, { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProviderWrapper({ children }) {
    let [cartProducts, setCartProducts] = useState([]);

    const addProduct = (product) => {
        let sameId = cartProducts.find((p) => p.id === product.id)
        if (!sameId) {
            setCartProducts((prev) => [...prev, product])
            return true
        }
        else {
            return false
        }
    };
    const removeProduct = (productID) => {
        setCartProducts((prev) => prev.filter((p) => p.id != productID));
    };
    return (
        <CartContext.Provider
            value={{ cartProducts, addProduct, removeProduct }}
        >
            {children}
        </CartContext.Provider>
    );
}
