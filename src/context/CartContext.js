import React, { createContext, useState } from "react";
export const CartContext = createContext();

export const CartContextProvider = (props) => {
    const dummyData = []
    const [cartItems,setCartItems] = useState(dummyData);

    return(
        <CartContext.Provider value={{cartItems,setCartItems}} >
            {props.children}
        </CartContext.Provider>
        
    )
}
